import React from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
        <p className="text-lg mb-6">Start building your amazing application here.</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline">Get Started</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to begin your journey!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Index;