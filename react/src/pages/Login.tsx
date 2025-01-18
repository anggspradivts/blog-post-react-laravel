import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/fetchData";

const Login = () => {
  const { data } = useQuery({
    queryKey: ["TEST"],
    queryFn: () => fetchData({
      method: "GET",
      urlParams: ""
    })
  })
  console.log(data)
  return ( 
    <div>
      Login page
    </div>
   );
}
 
export default Login;