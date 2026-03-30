"use client";

import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Check, X } from "lucide-react"
import { acceptTeamInvitation } from "@/app/actions/add-team-actions";
import { rejectTeamInvitation } from "@/app/actions/delete-team-actions";

export function NoticeCardPage({ notice }: { notice: string }) {
    const handleAccept = () => {
        acceptTeamInvitation(notice);
    }

    const handleReject = () => {
        rejectTeamInvitation(notice);
    }

    return (
        <Card className="mx-auto mb-5 w-full flex flex-row max-w-5xl p-0">
            <CardContent className="space-y-4 text-left p-5 flex-1">
                <div className="space-y-2">
                    <Label htmlFor="title" className="text-lg font-semibold">{notice}</Label>
                </div>
            </CardContent>

            <CardFooter className="flex flex-row justify-center p-0 border-0">
                <Button onClick={handleAccept} type="submit" className="w-full bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-700">
                    <Check className="h-5 w-5" />
                </Button>
                <Button onClick={handleReject} type="submit" className="w-full bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700">
                    <X className="h-5 w-5" />
                </Button>
            </CardFooter>
        </Card>
    )
}
