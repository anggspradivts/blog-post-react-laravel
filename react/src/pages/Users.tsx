import { useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data } = useQuery({
    queryKey: ["TEST"],
    queryFn: () => fetchData({
      method: "GET",
      urlParams: "/"
    })
  })
  console.log(data)
  return ( 
    <div>
      
    </div>
   );
}
 
export default Users;