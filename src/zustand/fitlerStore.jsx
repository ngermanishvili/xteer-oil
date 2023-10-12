import {create} from 'zustand'

export const tabStore = create ((set)=>({
  currentTab:"all",
  setTab : (tab)=>set({ currentTab: tab })
  
}))