import create from 'zustand'

const useStore = create(set => ({
    chatID: "",
    setChatID: (chatID) => set({ chatID: chatID }),
    status: false,
    setStatus: (status) => set({ status: status })
}))

export default useStore