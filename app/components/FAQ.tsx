"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do you offer a free trial class?",
    answer:
      "Yes. Every new student can attend one free trial class before enrollment.",
  },
  {
    question: "Which platform do you use for classes?",
    answer:
      "We conduct live classes through Zoom or Google Meet according to the student's preference.",
  },
  {
    question: "Can children and adults both join?",
    answer:
      "Yes. We have separate courses for kids, teenagers, and adults.",
  },
  {
    question: "How can I pay the monthly fee?",
    answer:
      "Students in Pakistan can pay through bank transfer, JazzCash or Easypaisa. International students can pay using suitable international payment methods.",
  },
  {
    question: "Can I ask Islamic questions?",
    answer:
      "Yes. Through our 'Ask a Mufti' service, you can submit authentic Islamic questions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="uppercase tracking-widest text-emerald-700 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold text-emerald-900 mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-6">
            Here are the answers to the most common questions.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-lg text-emerald-900">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}