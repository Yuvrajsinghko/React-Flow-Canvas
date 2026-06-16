import { create } from "zustand";

type AppStore = {
  selectedNodeId: string | null;
  setSelectedNodeId: (nodeId: string | null) => void;
  selectedAppId: string | null;
  setSelectedAppId: (appId: string) => void;
  activeInspectorTab: string;
  setActiveInspectorTab: (tab: string) => void;
  isMobilePanelOpen: boolean;
  setIsMobilePanelOpen: (open: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  selectedNodeId: null,

  setSelectedNodeId: (nodeId) =>
    set({
      selectedNodeId: nodeId,
    }),

  selectedAppId: "payments",

  setSelectedAppId: (appId) =>
    set({
      selectedAppId: appId,
    }),
  activeInspectorTab: "config",

  setActiveInspectorTab: (tab) =>
    set({
      activeInspectorTab: tab,
    }),
  isMobilePanelOpen: false,

  setIsMobilePanelOpen: (open) =>
    set({
      isMobilePanelOpen: open,
    }),
}));
