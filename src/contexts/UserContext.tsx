import { createContext, useState, ReactNode } from "react";

interface User {
    id: number;
    nome: string;
    email: string;
}

interface UserContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

interface UserProviderProps {
    children: ReactNode;
}

const defaultUser: User = {
    id: 0,
    nome: "",
    email: "",
};

const defaultContextValue: UserContextProps = {
    user: defaultUser,
    setUser: () => {},
};

export const UserContext = createContext<UserContextProps>(defaultContextValue);

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(defaultUser);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};