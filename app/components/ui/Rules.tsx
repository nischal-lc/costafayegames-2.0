"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

const Rules = () => {
  const [isFirstRuleOpen, setIsFirstRuleOpen] = useState(false);
  const [isSecondRuleOpen, setIsSecondRuleOpen] = useState(false);
  return (
    <div className="md:h-screen md:w-1/4 w-full h-max border-l border-[hsla(0,0%,100%,0.1)] md:sticky top-0 right-0 shadow-md bg-neutral-800/50 backdrop-blur-3xl p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-sky-600 font-bricolage">Rules</h1>
      <p className="text-sm text-neutral-400 font-work-sans">
        (click to see the rules)
      </p>
      <ul className="self-start mt-3 w-full font-bricolage space-y-3">
        <li
          onClick={() => setIsFirstRuleOpen(true)}
          className="w-full bg-neutral-300/20 px-3 py-2 rounded-md cursor-pointer select-none shadow-sm capitalize"
        >
          cash deposit rules
        </li>
        <Modal
          isOpen={isFirstRuleOpen}
          onClose={() => setIsFirstRuleOpen(false)}
        >
          <h2 className="text-xl font-semibold mb-2 font-bricolage">
            Cash deposit rules
          </h2>
          <Image
            src="/images/rules/1.jpg"
            alt="Rules by costafayegames"
            width={500}
            height={200}
            className="rounded-md"
            style={{ objectFit: "cover" }}
          />
        </Modal>
        <li
          onClick={() => setIsSecondRuleOpen(true)}
          className="w-full bg-neutral-300/20 px-3 py-2 rounded-md cursor-pointer select-none shadow-sm capitalize"
        >
          deposit Cashout rules
        </li>
        <Modal
          isOpen={isSecondRuleOpen}
          onClose={() => setIsSecondRuleOpen(false)}
        >
          <h2 className="text-xl font-semibold mb-2 font-bricolage">
            Free play and Bonus only Cashout rules
          </h2>
          <Image
            src="/images/rules/2.jpg"
            alt="Rules by costafayegames"
            width={500}
            height={200}
            className="rounded-md"
            style={{ objectFit: "cover" }}
          />
        </Modal>
      </ul>
      <div className="flex md:mt-auto flex-wrap self-start mt-2 justify-between flex-col md:items-end  ">
        <p className="text-neutral-400 font-bricolage hover:underline   cursor-pointer">
          <a href="tel:+15172801270">+15172801270</a>
        </p>
        <p className="text-neutral-400 font-bricolage hover:underline cursor-pointer">
          <a href="mailto:costafayegames@gmail.com">costafayegames@gmail.com</a>
        </p>
        <p className="text-neutral-400 font-bricolage hover:underline cursor-pointer">
          <a href="mailto:info@costafayegames.com">info@costafayegames.com</a>
        </p>
        <p className="text-sm text-neutral-400 self-start  font-bricolage">
          4721 Winding Oak Drive, Fort Worth, TX 76133
        </p>
      </div>
    </div>
  );
};

export default Rules;
