type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export type FAQSection = {
  id: string;
  title: string;
  description: string;
  items: FAQItem[];
};
