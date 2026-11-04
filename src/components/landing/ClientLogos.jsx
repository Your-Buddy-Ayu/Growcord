import React from "react";
import Image from "next/image";
import "@/assets/vendors/flowtrack-icons/style.css";

import Delhivery from "@/assets/Clients/Delhivery.svg";
import Bluedart from "@/assets/Clients/Bluedart.svg";
import Amazonshipping from "@/assets/Clients/Amazonshipping.svg";
import Dhl from "@/assets/Clients/Dhl.svg";
import Dtdc from "@/assets/Clients/Dtdc.svg";
import Ecomexpress from "@/assets/Clients/Ecomexpress.svg";
import Professional from "@/assets/Clients/Professional.svg";
import Shadowfax from "@/assets/Clients/Shadowfax.svg";
import Xpressbees from "@/assets/Clients/Xpressbees.svg";
import Ekart from "@/assets/Clients/Ekart.svg";

import Client1 from "@/assets/Clients/Client.svg";
import Client2 from "@/assets/Clients/Client1.svg";
import Client3 from "@/assets/Clients/Client2.svg";
import Client4 from "@/assets/Clients/Client3.svg";
import Client5 from "@/assets/Clients/Client4.svg";
import Client6 from "@/assets/Clients/Client5.svg";
import Client7 from "@/assets/Clients/Client6.svg";
import Client8 from "@/assets/Clients/Client7.svg";
import Client9 from "@/assets/Clients/Client8.svg";
// Using inline SVGs for better performance and guaranteed rendering without external dependencies
const ClientLogos = ({ name }) => {
  console.log(name);

  const clientLogosData = [
    { id: 1, logo: Delhivery },
    { id: 2, logo: Bluedart },
    { id: 3, logo: Amazonshipping },
    { id: 4, logo: Dhl },
    { id: 5, logo: Dtdc },
    { id: 6, logo: Ecomexpress },
    { id: 7, logo: Professional },
    { id: 8, logo: Shadowfax },
    { id: 9, logo: Xpressbees },
    { id: 10, logo: Ekart },
  ];

  const Clients = [
    { id: 1, logo: Client1 },
    { id: 2, logo: Client2 },
    { id: 3, logo: Client3 },
    { id: 4, logo: Client4 },
    { id: 5, logo: Client5 },
    { id: 6, logo: Client6 },
    { id: 7, logo: Client7 },
    { id: 8, logo: Client8 },
    { id: 9, logo: Client9 },
  ];

  const isShipPage =
    typeof name === "string" && name.toLowerCase().trim() === "ship";

  const displayLogos = isShipPage ? clientLogosData : Clients;

  return (
    <section className="overflow-hidden bg-white py-20 md:pb-25 lg:pb-32.5 ">
      <div>
        <p className="text-center text-orange-600 text-lg font-semibold uppercase tracking-widest mb-8">
          {name === "Ship" ? "Our Partners" : "Our Clients"}
        </p>
        <div className="bg-gray-100 relative flex w-full overflow-hidden p-5 select-none lg:px-12 lg:py-10">
          <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-12 lg:gap-28 pr-12 lg:pr-28">
            {displayLogos.map((item) => (
              <Image
                key={item.id}
                src={item.logo}
                alt="Client Logo"
                className="h-20 w-auto lg:h-24 object-contain shrink-0"
              />
            ))}
          </div>
          <div
            className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-12 lg:gap-28 pr-12 lg:pr-28"
            aria-hidden="true"
          >
            {displayLogos.map((item) => (
              <Image
                key={`dup-${item.id}`}
                src={item.logo}
                alt="Client Logo"
                className="h-20 w-auto lg:h-24 object-contain shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoWrapper = ({ children, label }) => (
  <div className="flex items-center justify-center min-w-[150px] opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer">
    {children}
  </div>
);

export default ClientLogos;
