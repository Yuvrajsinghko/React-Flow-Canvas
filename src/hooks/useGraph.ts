import { useQuery } from "@tanstack/react-query";

type GraphResponse = {
  nodes: unknown[];
  edges: unknown[];
};

async function fetchGraph(appId: string): Promise<GraphResponse> {
  const response = await fetch(`/apps/${appId}/graph`);

  if (!response.ok) {
    throw new Error("Failed to fetch graph");
  }

  return response.json();
}

export function useGraph(appId: string | null) {
  return useQuery({
    queryKey: ["graph", appId],
    queryFn: () => fetchGraph(appId!),
    enabled: Boolean(appId),
  });
}
