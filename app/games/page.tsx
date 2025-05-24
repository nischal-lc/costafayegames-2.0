import React from "react";
import { imageList } from "../libs/games";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center pt-5 min-h-screen ">
      <h1 className="text-4xl font-bold mb-4 font-bricolage">Games</h1>
      <Link href="/" className="md:self-start self-center md:ml-15">
        <button className=" px-5 font-work-sans font-semibold py-2 bg-neutral-400/40 backdrop-blur-3xl cursor-pointer rounded-full ">
          Go back
        </button>
      </Link>
      <div className="flex flex-wrap flex-col md:flex-row w-full md:justify-center cursor-pointer select-none gap-3 p-2">
        {imageList.map((game, index) => {
          return (
            <a
              key={index}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 size-32 w-full md:w-32 justify-center rounded-md backdrop-blur-3xl bg-neutral-500/40 flex flex-col items-center">
                <Image
                  src={`/images/${game.imageUrl}`}
                  alt={game.name}
                  width={64}
                  height={64}
                  className="object-cover rounded-lg shadow-lg mb-2"
                />
                <h2 className="font-bricolage text-center leading-4 font-semibold">{game.name}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
