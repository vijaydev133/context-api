import { createContext } from "react";

const UserContext = createContext({
  user: {
    fname: "vj",
    age: 25,
  },
});

export default UserContext;
