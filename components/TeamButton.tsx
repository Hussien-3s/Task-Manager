"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { BadgePlus } from 'lucide-react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { sendTeamRequest } from '@/app/actions/team-req-actions';
import { useState } from 'react';
import dynamic from "next/dynamic"

const Alert = dynamic(() => import("@/components/Alert").then((mod) => mod.AlertDemo), {
  ssr: false,
});

export function TeamButton() {
  const [email, setEmail] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleReq = async () => {
    if (!email) return Error("Please enter an email");

    try {
      await sendTeamRequest(email);
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000);
      setEmail("");
    } catch (err) {
      console.error(err);
    }
  }

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  return (
    <Card className="mx-auto w-full flex flex-row max-w-5xl p-0 items-center">
      <CardContent className="space-y-4 text-left p-5 flex-1">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-lg font-semibold">add team member</Label>
          <Input
            value={email}
            onChange={handleValue}
            required
            type="email"
            id="title"
            placeholder="member email"
            className="w-full"
          />
        </div>
      </CardContent>

      <CardFooter className="p-5 bg-#737373 border-0">
        <Button
          type="button"
          onClick={handleReq}
          className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700"
        >
          <BadgePlus className="h-6 w-6" />
        </Button>
        {isAlertVisible && <Alert />}
      </CardFooter>
    </Card>
  )
}