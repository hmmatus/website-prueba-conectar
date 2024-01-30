'use client'
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: Props) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  if (!isLoggedIn) {
    // Redirect to the login page if the user is not authenticated
    redirect("/login");
  }

  return <>{children}</>;
};

export default ProtectedRoute;
