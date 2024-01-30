'use client'
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: Props) => {
  const router = useRouter();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  if (!isLoggedIn) {
    // Redirect to the login page if the user is not authenticated
    router.push("/login");
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
