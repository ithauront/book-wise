import { createContext, ReactNode, useContext, useState } from 'react'
import { User } from '../pages/types'

interface UserContextProps {
  user: User | null
  setUser: (user: User | null) => void
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
