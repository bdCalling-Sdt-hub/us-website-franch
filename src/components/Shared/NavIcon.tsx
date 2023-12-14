import { Facebook, Mail, Phone, Twitter, Youtube } from "lucide-react";

const NavIcon = () => {
  const items = [
    {
      icon: <Facebook color="#fff" />,
      link: "https://www.facebook.com/VodalinkTelecom",
      bgColor: "bg-blue-500",
      title: "fa",
    },
    {
      icon: <Youtube color="#fff" />,
      link: "https://www.youtube.com/channel/UCjmm1bRMIWIGXPW17fnBd8Q",
      bgColor: "bg-[#ff0000]",
      title: "yo",
    },
    {
      icon: <Twitter color="#fff" />,
      link: "https://twitter.com/Vodalink",
      bgColor: "bg-[#1da1f2]",
      title: "tw",
    },
    {
      icon: <Mail color="#fff" />,
      link: "info@vodalink.com",
      bgColor: "bg-[#fbbc04]",
      title: "ma",
    },
  ];
  return (
    <div className="container mx-auto flex justify-between p-1">
      <div className="flex items-center gap-2 cursor-pointer hover:text-white">
        <a href="tel:514-800-0201" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-500 flex justify-center items-center rounded">
            <Phone className="text-white animate-pulse" />
          </div>
          <p className="text-lg">514-800-0201</p>
        </a>
      </div>
      <div className="flex gap-2">
        {items.map((item, index) => {
          const uri = item.title === "ma" ? `mailto:${item.link}` : item.link;
          return (
            <a key={index} href={uri} target="_blank" rel="noopener noreferrer">
              <div
                className={`w-7 h-7 ${item.bgColor} flex justify-center items-center rounded`}
              >
                {item.icon}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NavIcon;
