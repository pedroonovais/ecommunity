"use client";
import { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/UserContext";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export const useVerifyLogin = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user || user.id === 0 || user.email === "" || user.nome === "") {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

      if (token) {
        try {
          const decodedToken: any = jwtDecode(token);
          setUser({
            id: decodedToken.sub,
            nome: decodedToken.nome,
            email: decodedToken.email,
          });
        } catch (error) {
          console.error("Erro ao decodificar o token:", error);
          router.push("/login");
        }
      } else {
        router.push("/login");
      }
    }
  }, [user, setUser, router]);
};
