import create from 'zustand'
// import { auth } from './firebase.js'
// import { useAuthState } from 'react-firebase-hooks/auth'

const useStore = create(set => ({
    chatID: "",
    setChatID: (chatID) => set({ chatID: chatID }),
}))

export default useStore