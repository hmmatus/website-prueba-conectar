"use client";
import UserCard from "@/components/elements/cards/UserCard/UserCard";
import { userService } from "@/service/user/userService";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const HomeLayout = () => {
  const getAllFetch = async () => {
    const results = await userService.getAllUsers();
    return results;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["asd"],
    queryFn: () => getAllFetch(),
  });

  if (isPending) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:justify-items-center sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-8">
        {data.map((item) => (
          <UserCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
