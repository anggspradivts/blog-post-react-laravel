import { useQuery } from "@tanstack/react-query";
import { useState } from "react"

interface User {
  id: string;
  email: string;
  // other user properties
}
export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true)

  const { data: user, error, refetch } = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.get('/api/auth/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      return response.data.user as User;
    },
    retry: false,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: true
  });
}