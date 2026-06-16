import {
  Background,
  BackgroundVariant,
  ReactFlow,
  type Edge,
  type OnEdgesChange,
  type OnNodesChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useAppStore } from "@/store/useAppStore";
import { useEffect } from "react";
import type { AppNode } from "../layout/DashboardLayout";

type GraphCanvasProps = {
  nodes: AppNode[];
  edges: Edge[];
  setNodes: React.Dispatch<React.SetStateAction<AppNode[]>>;
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  isLoading: boolean;
  error: unknown;
};

const GraphCanvas = ({
  nodes,
  edges,
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
  isLoading,
  error,
}: GraphCanvasProps) => {
  const setSelectedNodeId = useAppStore((state) => state.setSelectedNodeId);

  const selectedNodeId = useAppStore((state) => state.selectedNodeId);

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
