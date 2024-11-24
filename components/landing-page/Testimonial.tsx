"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarHalf } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface ReviewProps {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://avatar.iran.liara.run/public/boy",
    name: "Michael Green",
    role: "Software Engineer",
    comment:
      "Budgetify made tracking my expenses and budgeting incredibly easy.",
    rating: 8,
  },
  {
    image: "https://avatar.iran.liara.run/public/girl",
    name: "Emma Smith",
    role: "Stay-at-Home Mom",
    comment: "With Budgetify, I can now manage my family's budget seamlessly.",
    rating: 9,
  },
  {
    image: "https://avatar.iran.liara.run/public/boy",
    name: "Liam Carter",
    role: "Freelance Designer",
    comment:
      "Using Budgetify has helped me plan my finances and save more money.",
    rating: 7,
  },
  {
    image: "https://avatar.iran.liara.run/public/girl",
    name: "Sophia Taylor",
    role: "Accountant",
    comment: "Budgetify's clear charts give me all the insights I need.",
    rating: 10,
  },
  {
    image: "https://avatar.iran.liara.run/public/boy",
    name: "Ethan Harris",
    role: "Business Owner",
    comment: "This tool has streamlined the way I handle my company's budget.",
    rating: 8,
  },
  {
    image: "https://avatar.iran.liara.run/public/girl",
    name: "Olivia Davis",
    role: "Marketing Specialist",
    comment: "Budgetify has transformed the way I track my monthly spending.",
    rating: 9,
  },
  {
    image: "https://avatar.iran.liara.run/public/boy",
    name: "James Wilson",
    role: "Consultant",
    comment:
      "Budgetify is the perfect tool for anyone looking to improve their finances.",
    rating: 10,
  },
];

export const Testimonial = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-bold">
          Testimonials
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our{" "}
          <span className="text-transparent px-2 bg-gradient-to-r from-secondary to-primary bg-clip-text">
            1000+
          </span>
          Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex items-center gap-1 pb-6">
                    {Array.from({ length: Math.floor(review.rating / 2) }).map(
                      (_, index) => (
                        <Star
                          key={index}
                          className="size-4 fill-primary text-primary"
                        />
                      )
                    )}
                    {review.rating % 2 !== 0 && (
                      <StarHalf className="size-4 fill-primary text-primary" />
                    )}
                  </div>
                  <span className="italic">{`"${review.comment}"`}</span>
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-xl font-bold text-primary">
                        {review.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {review.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
