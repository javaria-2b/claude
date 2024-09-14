"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is Claude and how does it work?",
    answer:
      "Claude is an AI assistant. It works by processing natural language and generating human-like responses.",
  },
  {
    question: "What should I use Claude for?",
    answer:
      "Claude can be used for a variety of tasks including answering questions, helping with analysis, and creative writing.",
  },
  {
    question: "How much does it cost to use?",
    answer:
      "Claude has three pricing plans available — Free, Pro, and Team. The Free plan offers limited use with no payment required. Learn more about Pro and Team pricing.",
  },
];

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 w-full py-24 md:py-48">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Frequently asked questions
      </h2>
      <div className="space-y-4 w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 w-full">
            <button
              className="flex justify-between items-center w-full text-left py-4"
              onClick={() => toggleQuestion(index)}
              aria-expanded={expandedIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Plus className="w-6 h-6 text-gray-500" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {expandedIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
