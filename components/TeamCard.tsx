"use client";

import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function CardSmall({ teamEmail }: { teamEmail: string }) {

    const router = useRouter();

    const handleReq = async () => {
        router.push(`/tasks/${teamEmail}`);
    }

    return (
        <Card size="sm" className="mx-auto mb-5 w-full max-w-5xl flex flex-row">
            <CardHeader>
                <CardTitle className="flex items-center justify-between gap-5">
                    <div>
                        <div className="text-lg font-semibold">
                            {teamEmail}
                        </div>
                        <div className="text-sm text-muted-foreground">
                            admin
                        </div>
                    </div>
                    <div>
                        <Button
                            type="button"
                            onClick={handleReq}
                            className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700"
                        >
                            <BookOpen className="h-6 w-6" />
                        </Button>
                    </div>
                </CardTitle>
            </CardHeader>
        </Card>
    )
}
