// stores/authStore.js
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        role: null,
        permissions: [],
        setAuth: ({ user, role, permissions }) =>
          set({ user, role, permissions }),
        clearAuth: () => set({ user: null, role: null, permissions: [] }),
      }),
      {
        name: "auth-storage", // Key untuk localStorage
        partialize: (state) => ({
          user: state.user,
          role: state.role,
          permissions: state.permissions,
        }),
      }
    ),
    { name: "AuthStore" } // Nama di Redux DevTools
  )
);

export default useAuthStore;
