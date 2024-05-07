"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What is Steal?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Steal is a browser extension that helps you discover and compare
        products from small businesses, providing you with competitive
        alternatives to offerings from large corporations.
      </div>
    ),
  },
  {
    question: "How does Steal work?",
    answer: (
      <p>
        Once installed, Steal analyzes the products you view on large online
        shopping platforms and suggests similar items from small businesses. It
        allows these businesses to submit competitive offers, helping you find
        unique and possibly better alternatives.
      </p>
    ),
  },
  {
    question: "Is Steal free to use?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes, our browser extension is free for consumers. Our goal is to make
        shopping from small businesses as easy and accessible as possible.
      </div>
    ),
  },
  {
    question: "How can I install Steal?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Steal can be installed via our website or through extensions/add-ons
        store of your preferred browser. Follow the simple installation
        instructions, and you&aposll be set up in no time.
      </div>
    ),
  },
  {
    question:
      "How does Steal ensure the quality of products from small businesses?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We have a Quality Assurance process in place that evaluates products
        from small businesses. Only those that meet our high standards receive a
        Quality Assurance seal, ensuring that you receive only the best
        products.
      </div>
    ),
  },
  {
    question: "How can my business join Steal?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Small businesses can sign up through our website to become part of
        Steal&aposs network. After a brief verification and quality check, your
        products will be eligible to be featured as competitive alternatives to
        consumers.
      </div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
