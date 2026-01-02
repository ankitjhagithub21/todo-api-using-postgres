import { apiUrl } from "@/constant";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// ✅ User type
interface User {
  id: string;
  name: string;
  role: "ADMIN" | "USER";
  email: string;
}

// ✅ Context value type
interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// ✅ Properly typed context
const UserContext = createContext<UserContextType | undefined>(undefined);

// ✅ Correct props typing
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/users/current`, {
          withCredentials: true,
        });

        setUser(res.data); // ✅ store user
      } catch (error) {
        setUser(null);
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// ✅ Correct hook (FIXED)
export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
};
