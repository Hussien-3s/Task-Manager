"use client"

import { Button } from "./ui/button";
import { CardSmall } from "./add-task";
import { useState } from "react";

export default function TaskButton() {
  const [openCard, setOpenCard] = useState(false);
  const [openButton, setOpenButton] = useState(true);
  return (
    <div className='flex justify-center flex-col pt-10 items-center'>
      {openButton && <Button className='w-40 h-10 mb-5 bg-muted/50 text-foreground display-none' onClick={() => { setOpenCard(true); setOpenButton(false) }}>Add Task</Button>}
      {openCard && <CardSmall setOpenButton={setOpenButton} setOpenCard={setOpenCard} />}
    </div>
  )
}