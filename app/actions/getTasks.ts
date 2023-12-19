import prisma from "@/app/lib/db";
import getCurrentUser from "./getUser";
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchTasks() { 
    noStore();

    try {
        const currentUser = await getCurrentUser();

        if (!currentUser?.id || !currentUser?.email) {
            throw new Error('User not authenticated'); // Throw an error instead of returning null
        }

        const tasks = await prisma.task.findMany({
            where: {
                userId: currentUser?.id,
            },
        });

        return tasks;

    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error; // Re-throw the error to be handled by the calling code
    }
}
