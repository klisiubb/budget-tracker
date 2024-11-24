import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is Budgetify free?",
    answer: "Yes. It has a good free plan to get you started.",
    value: "item-1",
  },
  {
    question: "Who made Budgetify?",
    answer: "Mateusz Kliś, @klisiubb at Github.",
    value: "item-2",
  },
  {
    question: "Will it have an mobile app?",
    answer: "If I find some free time to code it.",
    value: "item-3",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-bold">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left tracking-wide">
              {question}
            </AccordionTrigger>

            <AccordionContent className="font-bold text-primary">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
