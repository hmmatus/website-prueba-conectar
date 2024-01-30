import ProtectedRoute from "@/components/elements/protected/ProtectedRoute/ProtectedRoute";
import HomeLayout from "@/components/layouts/home/Home";

export default function Home() {
  return (
    <ProtectedRoute>
      <HomeLayout />
    </ProtectedRoute>
  );
}
