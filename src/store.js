import create from 'zustand'

const useStore = create(set => ({
    chatID: "",
    setChatID: (chatID) => set({ chatID: chatID }),
}))

export default useStore