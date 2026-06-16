import GraphCanvas from "./GraphCanvas";
import type { OnEdgesChange, OnNodesChange, Edge } from "@xyflow/react";
import type { AppNode } from "../layout/DashboardLayout";

type CanvasProps = {
  nodes: AppNode[];
  edges: Edge[];
  setNodes: React.Dispatch<React.SetStateAction<AppNode[]>>;
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  isLoading: boolean;
  error: unknown;
};

const Canvas = ({
  nodes,
  edges,
  setNodes,
  setEdges,
  onNodesChange,
  onEdgesChange,
  isLoading,
  error,
}: CanvasProps) => {
  return (
    <div className="h-full">
      <GraphCanvas
        nodes={nodes}
        edges={edges}
        setNodes={setNodes}
        setEdges={setEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        isLoading={isLoading}
        error={error}
      />
    </div>
  )
}

export default Canvas
