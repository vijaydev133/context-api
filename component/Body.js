import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.fname}</h1>
    </div>
  );
};

export default Body;
