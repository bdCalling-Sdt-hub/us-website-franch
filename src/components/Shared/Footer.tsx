import {
  Facebook,
  Mail,
  MapPinned,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../util/Icon";

const Footer = () => {
  const socialItems = [
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
    <div className="bg-[#191e24] text-gray-400">
      <footer className="footer py-20 text-base-content container mx-auto px-3 lg:px-0">
        <nav>
          <Image src="/images/logo2.png" alt="logo" width={300} height={200} />
          <p className="text-lg my-3">
            Assoiffé d&#39;une télévision abordable, rapide et fiable,
            <br /> Service Internet et téléphonie résidentielle ? <br /> Tu es
            venu au bon endroit !
          </p>
        </nav>
        <nav>
          <header className="footer-title text-white text-lg">Services</header>
          <Link href="/packages" className="link link-hover text-[16px]">
            Forfaits
          </Link>
          <Link href="/television" className="link link-hover text-[16px]">
            Télévision
          </Link>
          <Link href="/internet" className="link link-hover text-[16px]">
            Internet
          </Link>
          <Link href="/phone" className="link link-hover text-[16px]">
            Téléphone
          </Link>
        </nav>
        <nav>
          <header className="footer-title text-lg text-white">
            Contactez-nous
          </header>
          <div className="flex items-center gap-2">
            <Icon>
              <Phone color="#e8e3e3" size={25} />
            </Icon>
            <p className="text-lg">514-800-0201</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon>
              <Phone color="#e8e3e3" size={25} />
            </Icon>
            <p className="text-lg"> 1-855-396-2838 </p>
          </div>
          <div className="flex items-center gap-2">
            <Icon>
              <Mail color="#e8e3e3" />
            </Icon>
            <p className="text-lg">info@vodalink.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon>
              <MapPinned size={30} color="#e8e3e3" absoluteStrokeWidth />
            </Icon>
            <p className="text-lg">
              7900 boul. Taschereau A-206 Brossard,
              <br /> Quebec, Canada J4X 1C2
            </p>
          </div>
        </nav>
        <nav>
          <header className="footer-title text-white text-lg">
            Réseaux sociaux
          </header>
          <div className="flex items-center gap-2">
            {socialItems.map((item, index) => {
              const uri =
                item.title === "ma" ? `mailto:${item.link}` : item.link;
              return (
                <a
                  key={index}
                  href={uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>{item.icon}</Icon>
                </a>
              );
            })}
          </div>
        </nav>
      </footer>
      <div className="bg-[#191e24]">
        <footer className="footer  py-8 border-t text-base-content border-base-300 container mx-auto">
          <aside className="items-center grid-flow-col">
            <p>&copy; 2022 Vodalink Inc. Tous droits réservés. </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>À propos</a>
              <a>politique de confidentialité</a>
              <a>Plaintes et CPRST</a>
              <a>Termes et conditions du service</a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
