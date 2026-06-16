import { useApps } from "@/hooks/useApps";
import { useAppStore } from "@/store/useAppStore";
import NodeInspector from "./NodeInspector";
export default function AppsList() {
  const { data, isLoading, error } = useApps();

  const selectedAppId = useAppStore((state) => state.selectedAppId);

  const setSelectedAppId = useAppStore((state) => state.setSelectedAppId);

  if (isLoading) {
    return <div className="p-4">Loading apps...</div>;
  }

  if (error) {
    return <div className="p-4">Failed to load apps</div>;
  }
  console.log(selectedAppId);

  return (
    <div>
      <div className="p-4">
        <h2 className="mb-4 text-sm font-medium">Applications</h2>

        <div className="flex flex-col gap-2">
          {data?.map((app) => (
            <button
              key={app.id}
              onClick={() => setSelectedAppId(app.id)}
              className={`rounded border px-3 py-2 text-left text-sm ${
                selectedAppId === app.id ? "border-zinc-400" : "border-zinc-800"
              }`}
            >
              {app.name}
            </button>
          ))}
        </div>
      </div>

      <NodeInspector />
    </div>
  );
}
