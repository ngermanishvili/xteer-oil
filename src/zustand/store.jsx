// store.jsx
import { create } from "zustand";
import axios from "axios";

export const dataStore = create((set) => ({
  data: [],
  error: null,
  loading: true,
  fetchData: async () => {
    try {
      const { data } = await axios.get("http://3.87.31.172:8000/oils");
      console.log(data);
      set({ data: data, error: null, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ error, loading: false });
      set({ error, loading: false });
    }
  },
}));
