import { http, HttpResponse } from "msw";
import { apps, graphs } from "./data";

export const handlers = [
  http.get("/apps", async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    return HttpResponse.json(apps);
  }),

  http.get("/apps/:appId/graph", async ({ params }) => {
    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    const appId = params.appId as keyof typeof graphs;

    return HttpResponse.json(
      graphs[appId]
    );
  }),
];