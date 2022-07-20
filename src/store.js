import create from 'zustand'
// import { auth } from './firebase.js'
// import { useAuthState } from 'react-firebase-hooks/auth'

const useStore = create(set => ({
    chatID: "",
    setChatID: (chatID) => set({ chatID: chatID }),
    messageID: 0,
    increMessageID: (messageID) => set({ messageID: messageID + 1})
}))

export default useStore