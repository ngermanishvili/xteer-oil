// store.jsx
import { create } from "zustand";
import axios from "axios";

export const dataStore = create((set) => ({
  data: sessionStorage.getItem("productData")
    ? JSON.parse(sessionStorage.getItem("productData"))
    : [],
  error: null,
  loading: true,
  fetchData: async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/oils");

      // Store the data in localStorage to persist it
      sessionStorage.setItem("productData", JSON.stringify(data));

      set({ data: data, error: null, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ error, loading: false });
    }
  },
}));
