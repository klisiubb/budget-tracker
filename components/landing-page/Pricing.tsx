import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}
const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Our basic plan, designed to get you started at no cost, forever.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Track up to 100 transactions per month",
      "Access basic financial statistics",
      "Create up to 5 custom categories",
      "Community support included",
      "Support for 1 currency",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 5,
    description:
      "Our premium plan, tailored for comprehensive budget management.",
    buttonText: "Get Started",
    benefitList: [
      "Unlimited transaction tracking",
      "Comprehensive financial statistics",
      "Unlimited custom categories",
      "Priority customer support",
      "Multi-currency support with no limits",
    ],
  },
  {
    title: "Family",
    popular: 0,
    price: 20,
    description: "Our family plan, offering the best value for households.",
    buttonText: "Coming Soon",
    benefitList: [
      "Full Premium access for up to 5 family members",
      "SMS and email alerts for spending over budget",
      "Add additional members for just $4 each",
      "24/7 dedicated customer support",
      "Test new features for free before everyone else.",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-bold">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimitted access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Enchance your
        <span className="font-bold text-transparent px-2 bg-gradient-to-r from-secondary to-primary bg-clip-text">
          Budgetify
        </span>
        functionality with additional, paid features.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2 font-bold tracking-wider text-xl">
                  {title}
                </CardTitle>

                <CardDescription className="pb-4 text-muted-foreground">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold text-primary">
                    ${price}
                  </span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3 className="italic">{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
