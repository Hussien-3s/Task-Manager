"use server";

import { prisma } from '@/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export async function addTaskAction(formData: FormData) {
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