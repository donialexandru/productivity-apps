import { createContext, useContext } from "react";

export const UserContext = createContext({
  name: "",
});

export function useUserContext() {
  return useContext(UserContext);
}
