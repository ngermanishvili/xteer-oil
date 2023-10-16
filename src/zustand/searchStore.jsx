import { create } from "zustand";
import { tabStore } from "./fitlerStore";

export const searchStore = create((set, get) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  regexQuery: "",
  setRegexQuery: (regquery) =>
    set({ regexQuery: regquery.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }),
  regexPattern: "",
  setRegexPattern: () =>
    set({
      regexPattern: new RegExp(get().regexQuery.split("").join(".*"), "i"),
    }),
  filteredData: [],
  setFilteredData: () => {
    const data = tabStore.getState().displayedProducts();
    const pattern = new RegExp(get().searchQuery.split("").join(".*"), "i");
    const filtered = data.filter((product) =>
      pattern.test(product.productName)
    );

    set({
      filteredData: filtered,
      currentPage: 1,
    });
  },

  itemsPerPage: 10,
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page }),
  startIndex: () => (get().currentPage - 1) * get().itemsPerPage,
  endIndex: () => get().startIndex() + get().itemsPerPage,
  currentFilteredData: () => {
    const sliceStart = get().startIndex();
    const sliceEnd = get().endIndex();
    return get().filteredData.slice(sliceStart, sliceEnd);
  },
}));