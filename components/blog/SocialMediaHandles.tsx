import FBImg from "@/public/blog/facebook.png";
import XImg from "@/public/blog/x.jpg";
import LI from "@/public/blog/linkedin.png";
import IGImg from "@/public/blog/instagram.png";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

export default function SocialMediaHandles() {
  return (
    <div className="mt-6">
      <h4 className="font-bold mb-4">Follow Us</h4>
      <div className="flex space-x-0">
        <Link href="/">
          <Image
            src={FBImg}
            alt="FB"
            width={24}
            height={24}
            className="rounded-full mr-4"
          />
        </Link>
        <Link href="/">
          <Image
            src={XImg}
            alt="X"
            width={24}
            height={24}
            className="rounded-full mr-4"
          />
        </Link>
        <Link href="/">
          <Image
            src={LI}
            alt="LI"
            width={24}
            height={24}
            className="rounded-full mr-4"
          />
        </Link>
        <Link href="/">
          <Image
            src={IGImg}
            alt="IG"
            width={24}
            height={24}
            className="rounded-full mr-4"
          />
        </Link>
      </div>
    </div>
  );
}
