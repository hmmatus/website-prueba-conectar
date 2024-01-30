"use client";
import UserCard from "@/components/elements/cards/UserCard/UserCard";
import { UserI } from "@/model/auth/user.model";
import { userService } from "@/service/user/userService";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import ErrorLayout from "../error/Error";
import LoadingLayout from "../loading/Loading";

const HomeLayout = () => {
  const router = useRouter();
  const getAllFetch = async () => {
    const results = await userService.getAllUsers();
    return results;
  };

  const moveToDetails = (item: UserI) => {
    const params = new URLSearchParams();
    params.set("details", JSON.stringify(item));
    router.push(`/details?${params.toString()}`);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["getAll"],
    queryFn: () => getAllFetch(),
  });

  if (isPending) {
    return <LoadingLayout />;
  }

  if (error) {
    return <ErrorLayout errorMessage={error.message} />;
  }
  return (
    <div>
      <div className="my-6 mx-6 grid grid-cols-1 gap-x-6 gap-y-10 md:justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((item: UserI) => (
          <UserCard
            key={item._id}
            item={item}
            onClick={() => moveToDetails(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
