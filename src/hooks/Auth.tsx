import React,{ createContext, useState, useEffect, useCallback, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


interface AuhtContextProps {
  user: User,
  payments: PaymentsProps[];
  signOut(): void;
  updateUser(userUpdated: User): void;
  generateCard(formData: User): void;
  setAvatar(link: string): void;
}

export interface User {
  name: string;
  password: string;
  email: string;
  phone: string;
  avatarLink: string;
}

interface FormDataProps {
  email: string
  password: string
}

interface PaymentsProps {
  name: string;
  email: string;
  phone: string;
  card: {
    number: string,
    cvc: string,
    expiry: string;
  }
}

const AuthContext = createContext<AuhtContextProps>({} as AuhtContextProps);
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const {avatarLink,email,name,password,phone} = user;
  const [payments, setPayments] = useState<PaymentsProps[]>([]);
  const randomNumberCard = [
    '4556240880637204',
    '4556850084690856',
    '4539677091168804',
  ];
  const randomcvcCard = [
    '711',
    '798',
    '957',
  ];
  const randomexpiryCard = [
    '9/2025',
    '1/2023',
    '8/2023',
  ];

  useEffect(() => {
    async function loadUsers() {
      const storagedUsers = await AsyncStorage.getItem('@Commis:SignUp');
      if(storagedUsers) {
        setUser(JSON.parse(storagedUsers));
      };
    };
    loadUsers();    
  }, []);



  const setAvatar = useCallback((link: string) => {
    return setUser({ email, name, password, phone, avatarLink: link });
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

  const generateCard = useCallback((formData: User) => {
    const randomIndex = Math.floor(Math.random() * 3);


    const newPpayments = {
      name: user.name || formData.name,
      phone: user.phone || formData.phone,
      email: user.email || formData.email,
      card: {
        number: randomNumberCard[randomIndex],
        expiry: randomexpiryCard[randomIndex],
        cvc: randomcvcCard[randomIndex],
      }
    };

    setPayments([...payments, newPpayments]);

  }, [setPayments, user]);

  const updateUser = useCallback((userUpdated: User) => {
    setUser({
      email: userUpdated.email ? userUpdated.email : user.email, 
      name: userUpdated.name ? userUpdated.name : user.name, 
      password: userUpdated.password ? userUpdated.password : user.password, 
      phone: userUpdated.phone ? userUpdated.phone : user.phone,
      avatarLink: user.avatarLink,
    });

  }, [user]);


  useEffect(() => {
    async function updated() {
      await AsyncStorage.setItem('@Commis:SignUp', JSON.stringify(user));
    };
    updated(); 
  }, [user]);
  
  return (
    <AuthContext.Provider value={{ signOut, updateUser, user, generateCard, payments , setAvatar}}>
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