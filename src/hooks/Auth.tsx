import React,{ createContext, useState, useEffect, useCallback, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


interface AuhtContextProps {
  user: User,
  signOut(): void;
  updateUser(userUpdated: User): void;
}

interface User {
  name: string;
  password: string;
  email: string;
  phone: string;
}

interface FormDataProps {
  email: string
  password: string
}

const AuthContext = createContext<AuhtContextProps>({} as AuhtContextProps);
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    async function loadUsers() {
      const storagedUsers = await AsyncStorage.getItem('@Commis:SignUp');
      if(storagedUsers) {
        setUser(JSON.parse(storagedUsers));
      };
    };
    loadUsers();    
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Commis:SignUp');
    setUser({} as User);
  }, []);
  // const SignIn = useCallback((formDataProps: FormDataProps) => {
  //   const findUser = users.find(user => user.email === form.email);
  //   if(findUser) {
  //     return findUser;
  //   } else 
  //   setUser(form)
  //   localStorage.removeItem('@Commis:SignUp');
  //   setUser({} as User);
  // }, []);

  const updateUser = useCallback((userUpdated: User) => {
    localStorage.setItem('@Commis:SignUp', JSON.stringify(userUpdated));
    setUser(user)
  }, [setUser]);
  
  return (
    <AuthContext.Provider value={{ signOut, updateUser, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth within Provider')
  }
  
  return context;
}