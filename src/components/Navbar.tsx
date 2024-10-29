import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Image from "next/image";

const Navbar = () => {
  return (
    <div className=" flex-col md:flex">
      <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
            <Image
              src="/album.png"
              width="50"
              height="50"
              alt="icon of this photo album app"
            />
          <h1 className="text-3xl font-bold tracking-tight">Gallery Hub</h1>
          <div className="ml-auto flex items-center space-x-4">
            {/* <Search />
              <UserNav /> */}
            <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>I</AvatarFallback>
    </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
