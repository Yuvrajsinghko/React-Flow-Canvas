export const apps = [
  {
    id: "payments",
    name: "Payments Service",
  },
  {
    id: "analytics",
    name: "Analytics Service",
  },
];

export const graphs = {
  payments: {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 100 },
        data: {
          label: "API Service",
          weight: 50,
          status: "Healthy",
        },
      },
      {
        id: "2",
        position: { x: 450, y: 100 },
        data: {
          label: "Postgres",
          weight: 50,
          status: "Healthy",
        },
      },
      {
        id: "3",
        position: { x: 275, y: 280 },
        data: {
          label: "Redis",
          weight: 50,
          status: "Healthy",
        },
      },
    ],

    edges: [
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
    ],
  },

  analytics: {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 100 },
        data: {
          label: "Collector",
          weight: 50,
          status: "Healthy",
        },
      },
      {
        id: "2",
        position: { x: 400, y: 200 },
        data: {
          label: "Warehouse",
          weight: 50,
          status: "Healthy",
        },
      },
    ],

    edges: [
      {
        id: "a1",
        source: "1",
        target: "2",
      },
    ],
  },
};
