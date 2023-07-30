import { create } from "zustand"

interface useProModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onJuan: () => void;
};

export const useProModal = create<useProModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
    onJuan: () => (console.log("juampitorrico"))
}));