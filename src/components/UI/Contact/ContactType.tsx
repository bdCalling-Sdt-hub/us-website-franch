import { Mail, Mailbox, MapPin, PhoneCall } from "lucide-react";

const ContactType = () => {
  const items = [
    {
      title: "OUR OFFICES",
      text: "7900 boulevard Taschereau A-206, Brossard, QC, Canada J4X 1C2",
      icon: <MapPin size={60} color="#1775fa" />,
    },
    {
      title: "PHONE",
      text: "514-800-0201, 1-855-396-2838 (Toll-free)",
      icon: <PhoneCall size={60} color="#1775fa" />,
    },
    {
      title: "FAX",
      text: "514-400-5222",
      icon: <Mailbox size={60} color="#1775fa" />,
    },
    {
      title: "E-MAIL",
      text: "info@vodalink.com",
      icon: <Mail size={60} color="#1775fa" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  my-14">
      {items.map((item, index) => (
        <div
          className="card bg-[#2a323c] text-neutral-content z-10"
          key={index}
        >
          <div className="card-body items-center text-center text-gray-400">
            <div>{item.icon}</div>
            <h2 className="card-title text-white">{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactType;
