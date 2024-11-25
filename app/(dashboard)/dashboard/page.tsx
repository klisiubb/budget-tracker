import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Minus, Plus } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <Card className="w-full py-8 px-8">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <h1 className="text-2xl font-semibold mb-4 lg:mb-0">
            Hello, {user.given_name}! 👋
          </h1>

          <div className="flex gap-4">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:font-bold"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add new income
            </Button>
            <Button variant="destructive" size="lg" className="hover:font-bold">
              <Minus className="mr-2 h-4 w-4" />
              Add new expense
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Page;
