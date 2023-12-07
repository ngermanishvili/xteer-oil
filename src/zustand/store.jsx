// store.jsx
import { create } from "zustand";
import axios from "axios";

export const dataStore = create((set) => ({
  data: [],
  error: null,
  loading: true,
  fetchData: async () => {
    try {
      const { data } = await axios.get(
        "https://gento-deploy-7625b1fb9d5c.herokuapp.com/oils"
      );
      set({ data: data, error: null, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ error, loading: false });
      set({ error, loading: false });
    }
  },
}));
