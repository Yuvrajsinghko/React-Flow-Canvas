import AppsList from "./AppList";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useAppStore } from "@/store/useAppStore";
import type { AppNode } from "../layout/DashboardLayout";

type MobilePanelProps = {
  nodes: AppNode[];
  setNodes: React.Dispatch<React.SetStateAction<AppNode[]>>;
};

export default function MobilePanel({ nodes, setNodes }: MobilePanelProps) {
  const isMobilePanelOpen = useAppStore((state) => state.isMobilePanelOpen);
  const setIsMobilePanelOpen = useAppStore(
    (state) => state.setIsMobilePanelOpen,
  );

  return (
    <Sheet open={isMobilePanelOpen} onOpenChange={setIsMobilePanelOpen}>
      <SheetContent side="right" className="lg:hidden">
        <SheetHeader>
          <SheetTitle>Panel</SheetTitle>
        </SheetHeader>

        <div className="overflow-y-auto">
          <AppsList nodes={nodes} setNodes={setNodes} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
