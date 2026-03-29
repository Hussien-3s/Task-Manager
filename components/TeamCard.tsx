"use client";

import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";

export function TeamCard({ teamEmail }: { teamEmail: string }) {

    const router = useRouter();

    const handleReq = async () => {
        router.push(`/tasks/${teamEmail}`);
    }

    return (
        <Card className="mx-auto w-full mb-5 flex flex-row max-w-5xl p-0 items-center">
            <CardContent className="space-y-4 text-left p-5 w-10 flex-1">
                <div className="space-y-2">
                    <Label htmlFor="title" className="text-lg font-semibold">{teamEmail}</Label>
                </div>
            </CardContent>

            <CardFooter className="p-5 bg-#737373 border-0">
                <Button
                    type="button"
                    onClick={handleReq}
                    className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700"
                >
                    <BookOpen className="h-6 w-6" />
                </Button>
            </CardFooter>
        </Card>
    )
}
