import React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
interface TanstackProviderProps {
  children: React.ReactNode
}
const TanstackProvider = ({ children }: TanstackProviderProps) => {
  return ( 
    <QueryClientProvider client={queryClient} >
      {children}
    </QueryClientProvider>
   );
}
 
export default TanstackProvider;