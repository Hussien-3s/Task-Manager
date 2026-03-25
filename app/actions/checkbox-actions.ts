"use server";

import { prisma } from '@/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function checkboxAction(id: string, completed: boolean) {
    const user = await currentUser();
    if (!user) throw new Error("Unauthorized");

    const check = await prisma.task.update({
        where: {
            id: id,
        },
        data: {
            completed: !completed,
        }
    });

    return check
}