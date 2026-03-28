"use client"

import { Button } from "./ui/button";
import { useState } from "react";
import dynamic from 'next/dynamic';
import { LoadingSpinner } from './LoadingSpinner';

const AddTask = dynamic(() => import('./AddTask').then((mod) => mod.AddTask), {
  loading: () => <LoadingSpinner />,
});

export default function TaskButton() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  return (
    <div className='flex justify-center flex-col pt-10 items-center'>
      {isButtonVisible && <Button className='w-40 h-10 mb-5 bg-muted/50 text-foreground display-none' onClick={() => { setIsCardOpen(true); setIsButtonVisible(false) }}>Add Task</Button>}
      {isCardOpen && <AddTask setOpenButton={setIsButtonVisible} setOpenCard={setIsCardOpen} />}
    </div>
  )
}