import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Heart } from "./icons/heart";
import { HomeIcon } from "lucide-react";

export type Folder = {
  name: string;
  path: string;
  exteral_id: string;
};

const Sidebar = async () => {
  return (
    <div className="pb-12 border-r h-full">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {/* Home */}
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start text-lg">
                <HomeIcon className="w-6 h-6 mr-3" />
                Home
              </Button>
            </Link>
            {/* gallery */}
            <Link href="/gallery">
              <Button variant="ghost" className="w-full justify-start text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                Gallery
              </Button>
            </Link>
            {/* photo album */}
            {/* favourites */}
            <Link href="favourites">
              <Button variant="ghost" className="w-full justify-start text-lg">
                <Heart className="w-6 h-6 mr-1 my-1" />
                Favourites
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
