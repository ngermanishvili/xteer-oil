import { create } from "zustand";
import { dataStore } from "./store";

export const tabStore = create((set, get) => ({
  currentTab: "all",
  setTab: (tab) => set({ currentTab: tab }),
  itemsPerPage: 10,
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
  startIndex: () => (get().currentPage - 1) * get().itemsPerPage,
  endIndex: () => get().startIndex() + get().itemsPerPage,
  displayedProducts: () => {
    const currentTab = get().currentTab;
    const data = dataStore.getState().data;
    if (currentTab === "all") {
      return data;
    } else {
      return data.filter((product) => product.category === currentTab);
    }
  },
  currentData: () => {
    const displayedProductsValue = get().displayedProducts();
    const sliceStart = get().startIndex();
    const sliceEnd = get().endIndex();
    if (Array.isArray(displayedProductsValue)) {
      return displayedProductsValue.slice(sliceStart, sliceEnd);
    }
  },
}));
