import { imageList } from "@/app/libs/games";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="md:h-screen md:w-1/4 w-full border-r border-[hsla(0,0%,100%,0.1)] md:sticky top-0 left-0 shadow-md  bg-neutral-800/50 backdrop-blur-3xl p-4 flex flex-col items-center">
      <div className="relative size-24">
        <Image
          src="/images/logo.png"
          alt="Costafaye Games logo"
          className="mix-blend-lighten"
          fill
        />
      </div>
      <p className="text-sm font-bricolage text-neutral-400">
        Your Premium Casino Experience{" "}
      </p>
      <div className="md:hidden p-6 bg-amber-100/10 backdrop-blur-2xl rounded-xl shadow-lg max-w-xl mx-auto text-center space-y-2 font-bricolage">
        <h1 className="text-3xl font-bold text-emerald-400 drop-shadow-sm">
          WELCOME TO OUR GAMEROOM
        </h1>
        <h2 className="text-xl font-semibold text-amber-300 tracking-wider">
          COSTA FAYE GAMES
        </h2>
        <p className="italic text-lg text-white/80">
          “Spin the Future, Win Today”
        </p>
        <p className="text-white">
          Highlights innovation and immediate rewards, appealing to
          forward-thinking players.
        </p>
        <p className="font-semibold text-pink-400 uppercase">
          24/7 NON STOP · DM US · 100% Legit Premium Online Casino
        </p>
        <div className="bg-amber-300/10 p-4 rounded-md text-amber-200 font-bold space-y-1 border border-amber-400/30">
          <p>🎁 50% SIGNUP BONUS</p>
          <p>🎉 100% REFERRAL BONUS</p>
          <p>🌟 20% REGULAR BONUS FOR VIP GUEST</p>
        </div>
      </div>

      <div className="grid grid-rows-1 gap-3 self-start mt-3 w-full ">
        {Array.from({ length: 5 }, (_, i) => (
          <a key={i} href={imageList[i].url} target="_blank" rel="noreferrer">
            <div className="bg-neutral-700/60 gap-2 rounded flex p-1 cursor-pointer">
              <div className="relative size-12">
                <Image
                  src={`/images/${imageList[i].imageUrl}`}
                  alt={imageList[i].name}
                  className="rounded-md border"
                  fill
                />
              </div>
              <p className="flex flex-col ">
                <span className="font-medium text-md leading-5 block font-bricolage">
                  {imageList[i].name}
                </span>
                <span className="block text-sm text-neutral-300 font-bricolage">
                  Click to download
                </span>
              </p>
            </div>
          </a>
        ))}
        <Link href="/games">
          <div className="bg-neutral-700/60 gap-2 rounded flex items-center p-2 cursor-pointer font-bricolage">
            More games <ArrowRight className="size-5 stroke-2" />
          </div>
        </Link>
        <div className="flex flex-wrap justify-between flex-col items-start  ">
          <p className="text-neutral-400 font-bricolage hover:underline   cursor-pointer">
            <a href="tel:+15172801270">+15172801270</a>
          </p>
          <p className="text-neutral-400 font-bricolage hover:underline cursor-pointer">
            <a href="mailto:info@costafayegames.com">info@costafayegames.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
