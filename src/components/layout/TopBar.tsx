import { PanelRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/useAppStore";

const TopBar = () => {
  const setIsMobilePanelOpen = useAppStore(
    (state) => state.setIsMobilePanelOpen,
  );
  
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobilePanelOpen(true)}
        >
          <PanelRight className="size-4" />
          <span className="sr-only">Open panel</span>
        </Button>

        <h1 className="truncate text-sm font-semibold text-white">
          ReactFlow Canvas
        </h1>
      </div>

      <div className="hidden gap-2 lg:flex">
        <button className="rounded-md border px-3 py-1 text-sm text-white border-zinc-700 ">
          Action
        </button>

        <button className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-white">
          Fit
        </button>
      </div>
    </header>
  );
};

export default TopBar;
