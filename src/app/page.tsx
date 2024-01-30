"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";

export default function Page() {
  const router = useRouter();
  const {isLoggedIn} = useAppSelector(state => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, [isLoggedIn, router]);
  return (
    <main>

    </main>
  );
}
