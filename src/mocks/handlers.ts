import { http, HttpResponse } from "msw";
import { apps, graphs } from "./data";

const shouldFail = false;

export const handlers = [
  http.get("/apps", async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    if (shouldFail) {
      return HttpResponse.json(
        { message: "Server Error" },
        { status: 500 },
      );
    }

    return HttpResponse.json(apps);
  }),

  http.get("/apps/:appId/graph", async ({ params }) => {
    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    if (shouldFail) {
      return HttpResponse.json(
        { message: "Server Error" },
        { status: 500 },
      );
    }

    const appId = params.appId as keyof typeof graphs;

    return HttpResponse.json(
      graphs[appId]
    );
  }),
];
