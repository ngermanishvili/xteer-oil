// categorizeDataStore.jsx
import {create} from "zustand";
import {fetchDataStore} from "./store";

export const categorizeDataStore = create((set) => ({
  categorizedData: {},
  categorizeData: () => {
    const data = fetchDataStore.getState().data;

    const categorizedData = data.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});

    set({categorizedData});
  },
  getProductsByCategory: (category) => {
    return categorizeDataStore.getState().categorizedData[category] || [];
  },
}));
