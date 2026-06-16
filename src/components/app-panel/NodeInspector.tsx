import { useAppStore } from "@/store/useAppStore";

export default function NodeInspector() {
  const selectedNodeId = useAppStore(
    (state) => state.selectedNodeId
  );

  return (
    <div className="border-t p-4">
      <h2 className="mb-3 text-sm font-medium">
        Node Inspector
      </h2>

      {selectedNodeId ? (
        <div className="text-sm">
          Selected Node: {selectedNodeId}
        </div>
      ) : (
        <div className="text-sm text-zinc-500">
          No node selected
        </div>
      )}
    </div>
  );
}