import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useAppStore } from "@/store/useAppStore";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import type { AppNode, AppNodeData } from "../layout/DashboardLayout";

type NodeInspectorProps = {
  nodes: AppNode[];
  setNodes: React.Dispatch<React.SetStateAction<AppNode[]>>;
};

const defaultNodeData: Required<AppNodeData> = {
  label: "",
  weight: 50,
  status: "Healthy",
};

export default function NodeInspector({ nodes, setNodes }: NodeInspectorProps) {
  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

  const activeInspectorTab = useAppStore((state) => state.activeInspectorTab);

  const setActiveInspectorTab = useAppStore(
    (state) => state.setActiveInspectorTab,
  );
  const selectedNode = nodes.find((node) => node.id === selectedNodeId);
  const nodeData = {
    ...defaultNodeData,
    ...selectedNode?.data,
  };

  const updateSelectedNodeData = (data: Partial<AppNodeData>) => {
    if (!selectedNodeId) return;

    setNodes((currentNodes) =>
      currentNodes.map((node) =>
        node.id === selectedNodeId
          ? {
              ...node,
              data: {
                ...node.data,
                ...data,
              },
            }
          : node,
      ),
    );
  };

  return (
    <div className="border-t p-4">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium">Node Inspector</h2>

        <Badge className="shrink-0">{nodeData.status}</Badge>
      </div>

      {!selectedNode ? (
        <div className="text-sm text-zinc-500">No node selected</div>
      ) : (
        <Tabs
          value={activeInspectorTab}
          onValueChange={setActiveInspectorTab}
          className="w-full"
        >
          <TabsList className="w-full">
            <TabsTrigger value="config" className="flex-1">
              Config
            </TabsTrigger>

            <TabsTrigger value="runtime" className="flex-1">
              Runtime
            </TabsTrigger>
          </TabsList>

          <TabsContent value="config" className="w-full">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs text-zinc-500">
                  Node Name
                </label>

                <Input
                  className="w-full"
                  value={nodeData.label}
                  onChange={(event) =>
                    updateSelectedNodeData({ label: event.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs text-zinc-500">
                  Traffic Weight
                </label>

                <Slider
                  className="w-full"
                  value={[nodeData.weight]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) =>
                    updateSelectedNodeData({ weight: value[0] })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs text-zinc-500">
                  Weight Value
                </label>

                <Input
                  className="w-full"
                  type="number"
                  min={0}
                  max={100}
                  value={nodeData.weight}
                  onChange={(event) => {
                    const value = Number(event.target.value);

                    updateSelectedNodeData({
                      weight: Math.min(100, Math.max(0, value)),
                    });
                  }}
                />
              </div>

              <div className="text-xs text-zinc-500">
                Node ID: {selectedNodeId}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="runtime" className="w-full">
            <div className="text-sm">Runtime information placeholder</div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
