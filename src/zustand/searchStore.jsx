import {create} from "zustand";
import {dataStore} from "./store";
import {tabStore} from "./fitlerStore";
export const searchStore = create((set, get) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({searchQuery: query}),
  regexQuery: "",
  setRegexQuery: (regquery) =>
    set({regexQuery: regquery.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}),
  regexPattern: "",
  setRegexPattern: () =>
    set({regexPattern: new RegExp(get().regexQuery.split("").join(".*"), "i")}),
  filteredData: [],
  setFilteredData: () => {
    const data = tabStore.getState().displayedProducts();
    const pattern = new RegExp(get().searchQuery.split("").join(".*"), "i");
    const filtered = data.filter((product) =>
      pattern.test(product.productName)
    );
    set({filteredData: filtered});
  },
}));
