import { Instagram, Facebook, Twitter } from "lucide-react";

export default function SocialMedias() {
  return (
    <div className="flex flex-row justify-between py-[53px] mb-[50px] flex-wrap gap-3">
      <h3 className="text-2xl font-bold left-0">Bandage</h3>
      <div className="flex flex-row gap-1 text-primary ">
        <a href="">
          <Instagram />
        </a>
        <a href="">
          <Facebook />
        </a>
        <a href="">
          <Twitter />
        </a>{" "}
      </div>
    </div>
  );
}
