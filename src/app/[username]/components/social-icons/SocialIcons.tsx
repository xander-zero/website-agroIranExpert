import { socialIcons } from "@/constants/secial-media";
import { Expert } from "@/types/expert.interface";
import Image from "next/image";
import React from "react";

type SocialIconsProps = {
  expert: Expert;
};

function replaceFirstZeroWithPlus98(inputString: string) {
  return inputString.replace(/^0/, "+98");
}

const getAddress = (address: string, expert: Expert) => {
  switch (address) {
    case "phoneNumber":
      return expert?.phoneNumber ? `tel:${expert?.phoneNumber}` : null;
    case "email":
      return expert?.email ? `mailto:${expert?.email}` : null;
    case "instagramId":
      return expert?.instagramId ? `${expert?.instagramId}` : null;
    case "linkedInURL":
      return expert?.linkedInURL ? `${expert?.linkedInURL}` : null;
    case "takId":
      return expert?.takId ? `${expert?.takId}` : null;
    case "telegramId":
      return expert?.telegramId ? `https://t.me/${expert?.telegramId}` : null;
    case "whatsappPhoneNumber":
      return expert?.whatsappPhoneNumber
        ? `https://wa.me/${replaceFirstZeroWithPlus98(
            expert?.whatsappPhoneNumber
          )}`
        : null;
    default:
      return null;
  }
};

const SocialIcons: React.FC<SocialIconsProps> = ({
  expert,
}: SocialIconsProps) => {
  return (
    <div className="flex items-center gap-x-4">
      {socialIcons.map((socialIcon, idx) => {
        const icon = getAddress(socialIcon.title, expert);
        const href = `${getAddress(socialIcon.title, expert)}`;
        if (!icon) return null;

        return (
          <div
            key={idx}
            className="Gmail w-8 h-8 max-lg:w-9 max-lg:h-9 bg-white shadow-2xl p-1 rounded-xl justify-center items-center flex hover:translate-y-1 transition-all delay-150"
          >
            <a href={href} target="_blank">
              <Image
                src={socialIcon?.image}
                alt={socialIcon?.title}
                width={40}
                height={40}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SocialIcons;
