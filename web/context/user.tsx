import { createContext, useContext, useState } from "react";

const contextDefaultValues: IUserConxt = {
  user: null,
  setUser: () => { }
};

export const UserContext = createContext<IUserConxt>(
  contextDefaultValues
);

export const useUser = () => {
  return useContext(UserContext)
}

const UserProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(contextDefaultValues.user);

  const setUser = (user: IUser) => setCurrentUser(user);


  const value = {
    user: currentUser,
    setUser
  }


  return (
    <UserContext.Provider
      value={
        value
      }
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;