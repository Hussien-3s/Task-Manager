"use server";

import { prisma } from '@/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export async function addTask(formData: FormData) {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const content = formData.get("content") as string;

    await prisma.user.update({
        where: {
            clerkId: user.id,
        },
        data: {
            tasks: {
                create: {
                    title,
                    description,
                    content,
                }
            }
        }
    });

    revalidatePath("/tasks");
}

export async function updateTaskStatus(id: string, completed: boolean) {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    await prisma.task.update({
        where: { id },
        data: { completed: !completed }
    });

    revalidatePath("/tasks");
}

export async function deleteTask(id: string) {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    await prisma.task.delete({
        where: { id }
    });

    revalidatePath("/tasks");
}