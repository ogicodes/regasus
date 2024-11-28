"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { InlineLogo } from "../Logos";
import ContactModal from "../ContactModal/ContactModal";
import { useDisclosure } from "@nextui-org/react";

interface RouteItem {
  id: string;
  label: string;
  route: string;
}

const tabs: RouteItem[] = [
  {
    id: "our-story",
    label: "Our Story",
    route: "/",
  },
  {
    id: "services",
    label: "Services",
    route: "/services",
  },
  {
    id: "clients",
    label: "Clients",
    route: "/clients",
  },
  {
    id: "contact",
    label: "Contact",
    route: "/",
  },
];

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selected, setSelected] = useState<string>("our-story");

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setSelected("our-story");
        break;
      case "/services":
        setSelected("services");
        break;
      case "/clients":
        setSelected("clients");
        break;
      default:
        setSelected("our-story");
        break;
    }
  }, [pathname]);

  const handlePress = (key: string) => {
    if (key === "contact") {
      onOpen();
      setSelected("contact");
    } else {
      router.push(key === "our-story" ? `/` : `/${key}`);
      setSelected(key);
    }
  };

  return (
    <nav className="fixed h-fit w-screen z-[1000] bottom-0 md:top-0 mb-6 md:mb-0 md:mt-8 select-none overscroll-none">
      <div className="md:absolute md:ml-8 fixed top-4 left-4">
        <InlineLogo />
      </div>
      <Tabs
        items={tabs}
        radius="full"
        selectedKey={selected}
        defaultSelectedKey={"our-story"}
        onSelectionChange={(key) => handlePress(key as string)}
        classNames={{
          base: "flex items-center justify-center w-full",
          tabList: "p-2 bg-[#ECE0D1]/20 z-auto backdrop-blur-lg w-[500px]",
          tabContent: "group-data-[selected=true]:text-[#212121]",
          tab: "uppercase tracking-wide text-sm text-[#757575]",
          cursor: "group-data-[selected=true]:bg-[#ECE0D1]",
        }}
      >
        {(item: RouteItem) => <Tab key={item.id} title={item.label} />}
      </Tabs>
      <ContactModal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange} />
    </nav>
  );
};

export default NavBar;
