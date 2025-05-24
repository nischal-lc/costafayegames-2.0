import React from "react";
import Sidebar from "./components/ui/Sidebar";
import Main from "./components/ui/Main";
import Rules from "./components/ui/Rules";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <Main />
      <Rules />
    </div>
  );
};

export default Page;
