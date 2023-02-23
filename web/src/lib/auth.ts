import { writable } from 'svelte/store'

interface AuthStore {
  isAuthenticated: boolean
  accessToken: string
}

export const store = writable<AuthStore>({
  isAuthenticated: false,
  accessToken: ""
})

export const saveSession = (token: string) => {
  store.set({
    isAuthenticated: true,
    accessToken: token
  })

  localStorage.setItem('access_token', token)
}
