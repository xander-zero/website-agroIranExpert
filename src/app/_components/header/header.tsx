import Image from "next/image";
import React from "react";
import TopNavigation from "./top-navigation";

const Header: React.FC = () => {
  return (
    <header className="border-b border-base-100 dark:border-base-content dark:border-opacity-5 bg-white">
      <div className="container flex items-center justify-between h-full">
        <Image src="/images/logo.svg" width={50} height={26} alt="کلاسبن" />
        <TopNavigation />
        <span className="mr-auto">User Ahentication</span>
      </div>
    </header>
  );
};

export default Header;
