import { create } from "zustand";

type Store = {
  vaildate: boolean;
  set_vaildate: (arg: boolean) => void;
  refresher: boolean;
  set_refresher: () => void;
  sidebar: boolean;
  set_sidebar: (arg: boolean) => void;
};

const useStore = create<Store>()((set) => ({
  vaildate: false,
  set_vaildate: (arg: boolean) => set(() => ({ vaildate: arg })),
  refresher: false,
  set_refresher: () => set((state) => ({ refresher: !state.refresher })),
  sidebar: false,
  set_sidebar: (arg: boolean) => set(() => ({ sidebar: arg })),
}));

export default useStore;
