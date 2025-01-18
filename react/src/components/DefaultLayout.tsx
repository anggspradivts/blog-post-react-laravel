import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/fetchData";

const DefaultLayout = () => {
  const { user, token, setToken } = useStateContext();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  const { data } = useQuery({
    queryKey: ["TEST"],
    queryFn: () => fetchData({
      method: "GET",
      urlParams: "api/test"
    })
  });

  console.log(data)

  return (
    <div className="flex space-x-10">
      <aside className="flex flex-col">
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/users"}>Users</Link>
      </aside>
      <div className="flex flex-col">
        <div>
          <header>Nav</header>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
