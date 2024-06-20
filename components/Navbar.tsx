"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween padding-container max-container z-30 relative py-5">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="hilink"
          width={74}
          priority
          height={29}
          className="w-auto h-auto"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="/menu.svg"
        width={32}
        height={32}
        alt="menu"
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
