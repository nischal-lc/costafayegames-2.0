"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Modal from "@/app/components/ui/Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [phone, setPhone] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const phoneno = (form.elements.namedItem("phoneno") as HTMLInputElement)
      ?.value;
    const message = `New Form Submission:\nName: ${name}\nEmail: ${email} \nPhone no: ${phoneno}`;

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Failed to send message:", data);
      } else {
        console.log("Message sent successfully:", data);
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }

    setIsOpen(false);
  };

  return (
    <div className="md:col-span-2 px-1 md:w-1/2 w-full mt-12 md:px-0 flex-col shadow-sm flex md:items-center justify-center gap-4">
      <div className="p-2 md:p-6 hidden md:block bg-amber-100/10 backdrop-blur-2xl rounded-xl shadow-lg max-w-xl mx-auto text-center space-y-2 font-bricolage">
        <h1 className="text-3xl font-bold text-emerald-400  font-bricolage drop-shadow-sm">
          WELCOME TO OUR GAMEROOM
        </h1>
        <h2 className="text-xl font-bold leading-3 mb-4 font-work-sans text-amber-300 tracking-wider">
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
        <div className="bg-emerald-300/10 mt-4 p-4 rounded-md text-emerald-200 space-y-1 border border-emerald-400/30">
          <p className="uppercase tracking-wide text-white  font-bold ">
            💳 Accepted Payments
          </p>
          <p>✅ Cash app . Chime</p>
          <p>✅ Bank Transfer · Crypto (USDT, BTC, ETH)</p>
          <p>✅ PayPal · Cards on Request</p>
        </div>
      </div>
      <div className="w-full md:w-xl max-h-max flex flex-col gap-4 p-5 bg-amber-100/10 backdrop-blur-2xl shadow-sm h-full rounded-md">
        <h1 className="font-work-sans font-bold text-neutral-300 text-xl ">
          Join our official pages
        </h1>
        <div className="flex gap-3">
          <a
            target="_blank"
            href="https://t.me/costafayegames"
            className="w-full md:max-w-max"
          >
            <div className="w-full md:max-w-max p-3 h-10 gap-2 flex items-center justify-center rounded-full bg-sky-400/20 cursor-pointer shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7  fill-sky-400"
              >
                <path d="M2.14753 11.8099C7.3949 9.52374 10.894 8.01654 12.6447 7.28833C17.6435 5.20916 18.6822 4.84799 19.3592 4.83606C19.5081 4.83344 19.8411 4.87034 20.0567 5.04534C20.2388 5.1931 20.2889 5.39271 20.3129 5.5328C20.3369 5.6729 20.3667 5.99204 20.343 6.2414C20.0721 9.08763 18.9 15.9947 18.3037 19.1825C18.0514 20.5314 17.5546 20.9836 17.0736 21.0279C16.0283 21.1241 15.2345 20.3371 14.2221 19.6735C12.6379 18.635 11.7429 17.9885 10.2051 16.9751C8.42795 15.804 9.58001 15.1603 10.5928 14.1084C10.8579 13.8331 15.4635 9.64397 15.5526 9.26395C15.5637 9.21642 15.5741 9.03926 15.4688 8.94571C15.3636 8.85216 15.2083 8.88415 15.0962 8.9096C14.9373 8.94566 12.4064 10.6184 7.50365 13.928C6.78528 14.4212 6.13461 14.6616 5.55163 14.649C4.90893 14.6351 3.67265 14.2856 2.7536 13.9869C1.62635 13.6204 0.730432 13.4267 0.808447 12.8044C0.849081 12.4803 1.29544 12.1488 2.14753 11.8099Z" />
              </svg>
              <p className="font-bold font-bricolage">Telegram</p>
            </div>
          </a>
          <a
            target="_blank"
            className="w-full md:max-w-max"
            href="https://www.facebook.com/people/Costa-Faye-Games/61569979275184/"
          >
            <div className="w-full md:max-w-max h-10 p-3 gap-2 flex items-center justify-center rounded-full bg-blue-600/20 cursor-pointer shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-7 "
              >
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z" />
              </svg>
              <p className="font-bold font-bricolage ">Facebook</p>
            </div>
          </a>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="flex rounded-full p-2 gap-2 shadow-sm items-center bg-neutral-500/30 md:max-w-max w-full font-bricolage cursor-pointer select-none"
        >
          <div className=" rounded-full p-1 bg-sky-500/50 backdrop-blur-3xl flex items-center justify-center">
            <Plus className="size-5" />
          </div>{" "}
          <p className="pr-2">Add your contact</p>
        </div>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-xl font-semibold mb-2 font-bricolage">
            Add your contact
          </h2>
          <form className="space-y-1 flex flex-col my-3" onSubmit={onSubmit}>
            <label
              htmlFor="name"
              className="text-sm text-neutral-300 font-bricolage"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Eg. John Doe"
              name="name"
              id="name"
              required
              className="bg-neutral-700/60 p-2 rounded-md font-work-sans outline-none"
            />
            <label
              htmlFor="email"
              className="text-sm text-neutral-300 font-bricolage"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="mail@example.com"
              name="email"
              id="email"
              required
              className="bg-neutral-700/60 p-2 rounded-md font-work-sans outline-none"
            />
            <label
              htmlFor="phoneno"
              className="text-sm text-neutral-300 font-bricolage"
            >
              Phone no.
            </label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputProps={{
                name: "phoneno",
                required: true,
                autoFocus: true,
                id: "phoneno",
              }}
              inputStyle={{ width: "100%" }}
              buttonClass="!bg-neutral-700/60 !text-black !rounded-md !font-work-sans !outline-none"
              inputClass="!bg-neutral-700/60  !rounded-md !font-work-sans !outline-none"
            />
            <p className="text-neutral-400 select-none leading-5 font-bricolage mb-2">
              By submitting, I agree to the Terms of Use and Privacy Policy
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-red-700 cursor-pointer text-white px-5 py-1.5 rounded-full font-bricolage hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="font-bricolage bg-emerald-400/30 backdrop-blur-3xl px-3 rounded-full cursor-pointer hover:bg-emerald-600/70"
              >
                Add contact
              </button>
            </div>
          </form>
        </Modal>

        <div className="flex items-center gap-2">
          <div className="w-1/2 h-[2px] bg-neutral-500/30"></div>
          <p className="font-bricolage text-neutral-300">Or</p>
          <div className="w-1/2 h-[2px] bg-neutral-500/30"></div>
        </div>

        <div className="space-y-2">
          <h1 className="font-work-sans text-xl text-neutral-100 font-bold">
            Contact our admins
          </h1>
          <div className="flex flex-wrap gap-2">
            <a
              target="_blank"
              href="https://telegram.me/Deviling1"
              className="w-full md:max-w-max"
            >
              <div className="min-w-20 w-full md:w-max p-3 h-10 gap-2 flex items-center justify-center rounded-full bg-sky-400/20 cursor-pointer shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7  fill-sky-400"
                >
                  <path d="M2.14753 11.8099C7.3949 9.52374 10.894 8.01654 12.6447 7.28833C17.6435 5.20916 18.6822 4.84799 19.3592 4.83606C19.5081 4.83344 19.8411 4.87034 20.0567 5.04534C20.2388 5.1931 20.2889 5.39271 20.3129 5.5328C20.3369 5.6729 20.3667 5.99204 20.343 6.2414C20.0721 9.08763 18.9 15.9947 18.3037 19.1825C18.0514 20.5314 17.5546 20.9836 17.0736 21.0279C16.0283 21.1241 15.2345 20.3371 14.2221 19.6735C12.6379 18.635 11.7429 17.9885 10.2051 16.9751C8.42795 15.804 9.58001 15.1603 10.5928 14.1084C10.8579 13.8331 15.4635 9.64397 15.5526 9.26395C15.5637 9.21642 15.5741 9.03926 15.4688 8.94571C15.3636 8.85216 15.2083 8.88415 15.0962 8.9096C14.9373 8.94566 12.4064 10.6184 7.50365 13.928C6.78528 14.4212 6.13461 14.6616 5.55163 14.649C4.90893 14.6351 3.67265 14.2856 2.7536 13.9869C1.62635 13.6204 0.730432 13.4267 0.808447 12.8044C0.849081 12.4803 1.29544 12.1488 2.14753 11.8099Z" />
                </svg>
                <p className="font-bricolage">Telegram manager</p>
              </div>
            </a>
            <a
              target="_blank"
              className="w-full md:max-w-max"
              href="https://www.facebook.com/share/1BKgEN4qqQ/"
            >
              <div className="min-w-20 w-full md:w-max h-10 p-3 gap-2 flex items-center justify-center rounded-full bg-blue-600/20 cursor-pointer shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7"
                >
                  <path d="M12.001 2C17.6345 2 22.001 6.1265 22.001 11.7C22.001 17.2735 17.6345 21.4 12.001 21.4C11.0233 21.4023 10.0497 21.273 9.10648 21.0155C8.92907 20.9668 8.7403 20.9808 8.57198 21.055L6.58748 21.931C6.34398 22.0386 6.06291 22.018 5.83768 21.8761C5.61244 21.7342 5.47254 21.4896 5.46448 21.2235L5.40998 19.4445C5.40257 19.2257 5.30547 19.0196 5.14148 18.8745C3.19598 17.1345 2.00098 14.6155 2.00098 11.7C2.00098 6.1265 6.36748 2 12.001 2ZM5.99598 14.5365C5.71398 14.984 6.26398 15.488 6.68498 15.1685L9.84048 12.7735C10.0543 12.6122 10.3491 12.6122 10.563 12.7735L12.8995 14.5235C13.2346 14.7749 13.6596 14.8747 14.0716 14.7987C14.4836 14.7227 14.8451 14.4779 15.0685 14.1235L18.006 9.4635C18.288 9.016 17.738 8.512 17.317 8.8315L14.1615 11.2265C13.9476 11.3878 13.6528 11.3878 13.439 11.2265L11.1025 9.4765C10.7673 9.22511 10.3423 9.12532 9.93034 9.2013C9.51834 9.27728 9.15689 9.5221 8.93348 9.8765L5.99598 14.5365Z" />
                </svg>

                <p className="font-bricolage ">Facebook manager</p>
              </div>
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-work-sans text-md  text-neutral-300 font-bold">
            Don&apos;t believe on us? Checkout:
          </h1>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61569979275184&sk=reviews"
              target="_blank"
              className="w-full md:max-w-max"
            >
              <div className="p-3 gap-2 w-full flex md:w-max items-center justify-center rounded-full bg-emerald-400/40 cursor-pointer shadow-sm">
                <p className="font-bricolage ">Customer Reviews</p>
              </div>
            </a>
            <div
              onClick={() => setIsCertificateOpen(true)}
              className=" p-3 gap-2 flex w-full md:w-max items-center justify-center rounded-full bg-amber-300/50 cursor-pointer shadow-sm"
            >
              <p className="font-bricolage">Certificates we got</p>
            </div>
            <Modal
              isOpen={isCertificateOpen}
              onClose={() => setIsCertificateOpen(false)}
            >
              <h2 className="text-xl font-semibold mb-2 font-bricolage">
                Certificate
              </h2>
              <Image
                src="/images/certificate.jpg"
                alt="Certificate got by costafayegames"
                width={500}
                height={200}
                className="rounded-md"
                style={{ objectFit: "cover" }}
              />
            </Modal>
          </div>
        </div>
      </div>
      <h2 className="font-bold font-bricolage text-center leading-6 text-2xl md:px-7 text-green-500">
        See what our customers are winning:{" "}
      </h2>
      <div className="carousel">
        <div className="carousel-track">
          {Array.from({ length: 21 }, (_, i) => i + 1).map((item, index) => (
            <Image
              src={`/images/winnings/${item}.jpg`}
              onClick={() => {
                setCurrentImage(`/images/winnings/${item}.jpg`);
                setIsImageOpen(true);
              }}
              key={index}
              alt={item.toString()}
              height={200}
              width={200}
              style={{ objectFit: "contain", marginRight: "10px" }}
            />
          ))}

          {Array.from({ length: 21 }, (_, i) => i + 1).map((item, index) => (
            <Image
              src={`/images/winnings/${item}.jpg`}
              onClick={() => {
                setCurrentImage(`/images/winnings/${item}.jpg`);
                setIsImageOpen(true);
              }}
              key={`clone-${index}`}
              alt={item.toString()}
              height={100}
              width={200}
              style={{ objectFit: "contain", marginRight: "10px" }}
            />
          ))}
          <Modal isOpen={isImageOpen} onClose={() => setIsImageOpen(false)}>
            <h2 className="text-xl font-semibold mb-2 font-bricolage">
              Winnings
            </h2>
            <Image
              src={currentImage}
              alt={currentImage}
              width={300}
              height={100}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Main;
