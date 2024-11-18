import { UserContext } from "@/contexts/UserContext";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export const useVerifyLogin = () => {
    const router = useRouter();
    const { user, setUser } = useContext(UserContext);
    
    if (user?.id === 0 || user?.email === "" || user?.nome === "") {
        
        const token = localStorage.getItem("token");

        if (token) {
            const decodedToken: any = jwtDecode(token);
            setUser({
                id: decodedToken.sub,
                nome: decodedToken.nome,
                email: decodedToken.email,
            });
        } else {
            router.push("/login");
        }
    }
};