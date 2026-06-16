import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useAppStore } from "@/store/useAppStore";

export default function NodeInspector() {
  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  const activeInspectorTab = useAppStore((state) => state.activeInspectorTab);

  const setActiveInspectorTab = useAppStore(
    (state) => state.setActiveInspectorTab,
  );

  return (
    <div className="border-t p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-medium">Node Inspector</h2>

        <Badge>Healthy</Badge>
      </div>

      {!selectedNodeId ? (
        <div className="text-sm text-zinc-500">No node selected</div>
      ) : (
        <Tabs value={activeInspectorTab} onValueChange={setActiveInspectorTab}>
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="config">Config</TabsTrigger>

            <TabsTrigger value="runtime">Runtime</TabsTrigger>
          </TabsList>

          <TabsContent value="config">
            <div className="text-sm">Selected Node: {selectedNodeId}</div>
          </TabsContent>

          <TabsContent value="runtime">
            <div className="text-sm">Runtime information placeholder</div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
