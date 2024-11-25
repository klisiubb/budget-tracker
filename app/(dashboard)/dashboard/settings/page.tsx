import { prisma } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser) {
    redirect("/api/auth/login");
  }

  const dbUser = await prisma.user.findFirst({
    where: {
      id: kindeUser.id,
    },
  });

  return <div>{dbUser?.plan}</div>;
};

export default Page;
