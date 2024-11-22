import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="flex py-16 px-16 justify-center">
      <h1 className="text-6xl font-bold text-primary">
        Hello, {user.given_name}! 👋
      </h1>
    </div>
  );
};

export default Page;
