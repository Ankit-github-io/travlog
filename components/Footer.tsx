import Image from "next/image";
import React from "react";
import LogoMini from "@/public/LogoMini.svg";
import FaceBook from "@/public/social/FaceBook.svg";
import Instagram from "@/public/social/Instagram.svg";
import Twitter from "@/public/social/Twitter.svg";
import Link from "next/link";

const Footer = () => {
  const social = [
    { icon: FaceBook, url: "" },
    { icon: Twitter, url: "" },
    { icon: Instagram, url: "" },
  ];
  return (
    <div className="flex sm:gap-4 md:gap-6 lg:gap-8 sm:px-8 md:px-16 lg:px-24 xl:px-32  justify-between items-start container mx-auto sm:py-8">
      <div className="flex flex-col gap-6 basis-3/12 ">
        <div className="flex logoWrapper items-center sm:gap-2">
          <Image src={LogoMini} alt="Logo Image" />
          <h1 className="text-xl font-black">Travlog</h1>
        </div>
        <p className="sm:text-sm lg:text-lg font-medium text-gray-600">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex gap-4 items-center">
          {social.map((v, i) => (
            <Link href={v.url} key={i}>
              <Image src={v.icon} alt="socialMediaIcon" />
            </Link>
          ))}
        </div>
      </div>
      <div className="footerChild flex flex-col sm:gap-2 md:gap-4 basis-3/12">
        <h4 className="sm:text-xl md:text-2xl py-1 mb-1">Company</h4>
        <Link href="/about">About</Link>
        <Link href="/career">Career</Link>
        <Link href="/mobile">Mobile</Link>
      </div>
      <div className="footerChild flex flex-col sm:gap-2 md:gap-4 basis-3/12">
        <h4 className="sm:text-xl md:text-2xl py-1 mb-1">Contact</h4>
        <p>Why Travlog?</p>
        <p>Partner with us </p>
        <p>{`FAQ's`} </p>
        <p>Blog</p>
      </div>
      <div className="footerChild flex flex-col sm:gap-2 md:gap-4 basis-3/12">
        <h4 className="sm:text-xl md:text-2xl py-1 mb-1">Meet Us</h4>
        <p>+91 7348416096 </p>
        <p> info@travlog.com </p>
        <p>205, R Street, New York Bd387478</p>
      </div>
    </div>
  );
};

export default Footer;
