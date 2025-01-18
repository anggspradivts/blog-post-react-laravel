import { createContext, SetStateAction, useContext, useState } from "react"

interface StateContextTypes {
  user: any;
  token: string | null;
  setUser: React.Dispatch<SetStateAction<string | null>>
  setToken: (token: string | null) => void
}
const StateContext = createContext<StateContextTypes>({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {}
})
interface ContextProviderProps {
  children: React.ReactNode
}
export const ContextProvider = ({children}: ContextProviderProps) => {
  const [user, setUser] = useState<string | null>("")
  // const [token, _setToken] = useState<string | null>("asdasdasd");
  const [token, _setToken] = useState<string | null>(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token: string | null) => {
    _setToken(token);

    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token)
    } else {
      localStorage.removeItem("ACCESS_TOKEN")
    }
  }

  return (
    <StateContext.Provider value={{user, token, setToken, setUser}}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)