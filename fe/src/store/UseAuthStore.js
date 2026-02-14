import { create } from "zustand";

const useAuthStore = create((set, get) => ({
    user: null,
    isLoggedIn: false,
    cartCount: 0,

    // 🔐 Login
    login: (userData, token) => {
        localStorage.setItem("userToken", token);
        localStorage.setItem("user", JSON.stringify(userData));

        set({
            user: userData,
            isLoggedIn: true,
        });
    },

    // ➕ Increase cart count
    incrementCart: (count) => {
        const currentCount = get().cartCount;
        set({ cartCount: currentCount + count });
    },

    setCartCount: (count) => {
        set({ cartCount: count });
    },

    // 🚪 Logout
    logout: () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");

        if (confirmLogout) {
            localStorage.clear();
            set({
                user: null,
                isLoggedIn: false,
                cartCount: 0,
            });
        }
    },


    // 🔄 Restore login after refresh
    initializeAuth: () => {
        const token = localStorage.getItem("userToken");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
            set({
                isLoggedIn: true,
                user: JSON.parse(storedUser),
            });
        }
    },
}));

export default useAuthStore;