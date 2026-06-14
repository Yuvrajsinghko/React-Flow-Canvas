import {
  Background,
  BackgroundVariant,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

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
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      className="text-zinc-950"
      onNodeClick={(_, node) => console.log("node selected", node.id)}
      onNodeDragStart={(_, node) => console.debug("node drag start", node)}
      onNodeDrag={(_, node) => console.debug("node dragging", node.position)}
      onNodeDragStop={(_, node) => console.debug("node drag stop", node.position)}
    >
      <Background variant={BackgroundVariant.Dots} />
    </ReactFlow>
  );
};

export default GraphCanvas;
