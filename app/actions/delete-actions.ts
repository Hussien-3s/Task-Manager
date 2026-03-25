"use server";

import { prisma } from '@/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteAction(id: string) {
    await prisma.task.delete({
        where: {
            id: id,
        },
    });

    revalidatePath('/tasks');
}