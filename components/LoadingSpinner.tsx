"use client";

import { Loader2 } from "lucide-react";

export function LoadingSpinner() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      <span className="ml-2 text-sm text-muted-foreground">Loading...</span>
    </div>
  );
}
