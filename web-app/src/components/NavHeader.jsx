import { House } from "lucide-react";
import React from "react";

export default function NavHeader() {
  return (
    <div className="w-20 transition-all duration-500 shadow-2xl hover:w-full p-1 bg-white rounded-full flex justify-start items-center">
      <div className="bg-amber-600 shadow-lg h-20 w-20 rounded-full flex justify-center items-center">
        <House size="60px" />
      </div>
    </div>
  );
}
