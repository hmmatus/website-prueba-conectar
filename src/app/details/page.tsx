"use client";
import ProtectedRoute from "@/components/elements/protected/ProtectedRoute/ProtectedRoute";
import DetailsLayout from "@/components/layouts/details/Details";
import { useSearchParams } from "next/navigation";

export default function Details() {
  const searchParams = useSearchParams();
  const user = JSON.parse(searchParams.get("details") || "");

  return (
    <ProtectedRoute>
      <DetailsLayout details={user} />
    </ProtectedRoute>
  );
}
