import AppsList from "../app-panel/AppList";
import Canvas from "../canvas/Canvas";
import LeftRail from "./LeftRail";
import TopBar from "./TopBar";
import { useEffect } from "react";
import { useEdgesState, useNodesState, type Edge, type Node } from "@xyflow/react";
import { useGraph } from "@/hooks/useGraph";
import { useAppStore } from "@/store/useAppStore";

export type AppNodeData = {
  label: string;
  weight?: number;
  status?: string;
};

export type AppNode = Node<AppNodeData>;

const initialNodes: AppNode[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "API Service", weight: 50, status: "Healthy" },
  },
  {
    id: "2",
    position: { x: 450, y: 100 },
    data: { label: "Postgres", weight: 50, status: "Healthy" },
  },
  {
    id: "3",
    position: { x: 275, y: 280 },
    data: { label: "Redis", weight: 50, status: "Healthy" },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
  },
];

const DashboardLayout = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const selectedAppId = useAppStore((state) => state.selectedAppId);
  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);

  const { data, isLoading, error } = useGraph(selectedAppId);

  useEffect(() => {
    if (!data) return;

    setNodes(data.nodes as AppNode[]);
    setEdges(data.edges as Edge[]);
    setSelectedNodeId(null);
  }, [data, setNodes, setEdges, setSelectedNodeId]);

  return (
    <div className="h-screen bg-black text-white">
  <TopBar />

  <div className="flex h-[calc(100vh-64px)]">
    <LeftRail />

    <main className="flex-1 overflow-hidden">
      <Canvas
        nodes={nodes}
        edges={edges}
        setNodes={setNodes}
        setEdges={setEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        isLoading={isLoading}
        error={error}
      />
    </main>

    <aside className="hidden w-80 border-l lg:block">
      <AppsList nodes={nodes} setNodes={setNodes} />
    </aside>
  </div>
</div>
  )
}

export default DashboardLayout
