import {
  Background,
  BackgroundVariant,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
} from "@xyflow/react";
import { useGraph } from "@/hooks/useGraph";
import "@xyflow/react/dist/style.css";
import { useAppStore } from "@/store/useAppStore";
import { useEffect } from "react";

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "API Service" },
  },
  {
    id: "2",
    position: { x: 450, y: 100 },
    data: { label: "Postgres" },
  },
  {
    id: "3",
    position: { x: 275, y: 280 },
    data: { label: "Redis" },
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

const GraphCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);

  const selectedNodeId = useAppStore((state) => state.selectedNodeId);
  const selectedAppId = useAppStore((state) => state.selectedAppId);

  const { data, isLoading, error } = useGraph(selectedAppId);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.key === "Delete" || event.key === "Backspace") &&
        selectedNodeId
      ) {
        setNodes((currentNodes) =>
          currentNodes.filter((node) => node.id !== selectedNodeId),
        );

        setEdges((currentEdges) =>
          currentEdges.filter(
            (edge) =>
              edge.source !== selectedNodeId && edge.target !== selectedNodeId,
          ),
        );

        setSelectedNodeId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedNodeId, setNodes, setEdges, setSelectedNodeId]);
  useEffect(() => {
    if (!data) return;

    setNodes(data.nodes as Node[]);
    setEdges(data.edges as Edge[]);
  }, [data, setNodes, setEdges]);
  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        Loading graph...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        Failed to load graph
      </div>
    );
  }
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      className="text-zinc-950"
      onNodeClick={(_, node) => setSelectedNodeId(node.id)}
      onNodeDragStart={(_, node) => console.debug("node drag start", node)}
      onNodeDrag={(_, node) => console.debug("node dragging", node.position)}
      onNodeDragStop={(_, node) =>
        console.debug("node drag stop", node.position)
      }
    >
      <Background variant={BackgroundVariant.Dots} />
    </ReactFlow>
  );
};

export default GraphCanvas;
