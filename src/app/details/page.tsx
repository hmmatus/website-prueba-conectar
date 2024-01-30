"use client";
import ProtectedRoute from "@/components/elements/protected/ProtectedRoute/ProtectedRoute";
import DetailsLayout from "@/components/layouts/details/Details";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Details() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProtectedRoute>
        <DetailsContent />
      </ProtectedRoute>
    </Suspense>
  );
}

function DetailsContent() {
  const searchParams = useSearchParams();
  const user = JSON.parse(searchParams.get("details") || "");

  return <DetailsLayout details={user} />;
}
