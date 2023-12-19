'use server'

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getUser";
import prisma from "@/app/lib/db";

// Define a Zod schema for task creation form
const FormSchema = z.object({
    id: z.string(),
    userId: z.string(),
    title: z.string({
        invalid_type_error: 'Please select a customer.',
    }),
    description: z.string({
        invalid_type_error: 'Please select a customer.',
    }),
});

const CreateTask = FormSchema.omit({ id: true, userId: true })

export type State = {
    errors?: {
        title?: string[];
        description?: string[];
    };
    message?: string | null;
  };
// Function to create a task
export async function createTask(prevState: State, formData: FormData) {
    // Validate form using Zod
    const validatedFields = CreateTask.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Task.',
        };
    }

    // Prepare data for insertion into the database
    const { title, description } = validatedFields.data;

    // Get the current user
    const currentUser = await getCurrentUser();

    // If user is not authenticated, return an error
    if (!currentUser?.id || !currentUser?.email) {
        return {
            message: 'Unauthorized. Failed to Create Task.',
        };
    }

    // Insert data into the database using Prisma
    try {
        await prisma.task.create({
            data: {
                title,
                description,
                userId: currentUser.id,
                completed: false,
            },
        });
    } catch (error) {
        console.error('Database Error:', error);
        return {
            message: 'Database Error: Failed to Create Task.',
        };
    }

    // Revalidate the cache for the tasks page and redirect the user.
    revalidatePath('/dashboard');
    redirect('/dashboard');

}