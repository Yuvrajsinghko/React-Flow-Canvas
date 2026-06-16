import { useQuery } from "@tanstack/react-query";

type AppItem = {
  id: string;
  name: string;
};

async function fetchApps(): Promise<AppItem[]> {
  const response =
    await fetch("/apps");

  if (!response.ok) {
    throw new Error(
      "Failed to fetch apps"
    );
  }

  return response.json();
}
export function useApps() {
  return useQuery({
    queryKey: ["apps"],
    queryFn: fetchApps,
  });
}