import { createContext, useContext, useEffect, useState } from "react";

type TUserCtx = {
  username: string;
};

const UserCtx = createContext<TUserCtx>({
  username: "",
});

export function UserCtxProvider({ children }: { children: React.ReactNode }) {
  const [username, setUserName] = useState("");
  // get user from the backend

  useEffect(() => {
    setUserName("Ram");
  }, []);

  return (
    <UserCtx.Provider
      value={{
        username,
      }}
    >
      {children}
    </UserCtx.Provider>
  );
}

// hook to use the store

export function useUserCtx() {
  const userCtxResult = useContext(UserCtx);
  return userCtxResult;
}
