import { getCurrentUser } from "@/app/lib/sessions";
import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(
    request: Request,
) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();

        const { title, description } = body;

        const task = await prisma.task.create({
            data: {
                title,
                description,
                completed: false,
            },
        });

        return new NextResponse(JSON.stringify(task), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        })

    } catch (error) {
        console.log(error, 'ERROR_MESSAGES')
        return new NextResponse('Error', { status: 500 });
    }
}
//
// Path: app/api/tasks/route.ts
