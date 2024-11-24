import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { icons } from "lucide-react";
import { Icon } from "@/components/misc/icon";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Wallet",
    title: "Track Your Finances",
    description:
      "Easily log and manage your incomes and expenses in one place. Stay on top of your financial activity effortlessly.",
  },
  {
    icon: "ChartNoAxesColumnIncreasing",
    title: "Visualize Your Financial Data",
    description:
      "View detailed charts and statistics to better understand your income and expenses. Make data-driven decisions to improve your financial health.",
  },
  {
    icon: "DollarSign",
    title: "Set Budgets",
    description:
      "Create and manage budgets for different categories (e.g., groceries, entertainment). Keep your spending under control and save more effectively.",
  },
  {
    icon: "Banknote",
    title: "Track Expenses",
    description:
      "Log all your expenses and categorize them. Gain insights into where your money goes and identify areas to save.",
  },
  {
    icon: "NotepadText",
    title: "Custom Categories",
    description:
      "Organize your finances with customizable categories. Tailor the app to your personal budgeting needs and track your progress.",
  },
  {
    icon: "Target",
    title: "Financial Overview",
    description:
      "Get a clear overview of your finances with charts that display your total income, expenses, and savings in a comprehensive dashboard.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-bold">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes
        <span className="text-transparent px-2 bg-gradient-to-r from-secondary to-primary bg-clip-text">
          Budgetify
        </span>
        Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Budgetify empowers you to take control of your finances with precision.
        Seamlessly log your incomes and expenses, and gain valuable insights
        through our intuitive, easy-to-understand financial charts.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="font-medium tracking-wide border-b pb-2 shadow-sm ">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
