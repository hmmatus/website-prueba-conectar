'use client'
import DetailsLayout from "@/components/layouts/details/Details";
import { useSearchParams } from "next/navigation";

export default function Details() {
  const searchParams = useSearchParams();
  const user = JSON.parse(searchParams.get("details") || "");

  return <DetailsLayout details={user} />;
}
