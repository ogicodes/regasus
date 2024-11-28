import { Button, Link as NextLink } from "@nextui-org/react";
import FooterForm from "./FooterForm";
import { ArrowUpRight } from "lucide-react";

interface Link {
  name: string;
  url: string;
}

const links: Link[] = [
  {
    name: "instagram",
    url: "https://www.instagram.com/cw.webworks",
  },
  {
    name: "email",
    url: "mailto:hello@cw.webworks",
  },
  {
    name: "behance",
    url: "https://www.behance.com/cw.webworks",
  },
];

const Footer = () => {
  return (
    <footer>
      <section className="flex justify-center md:justify-end border-y-[1px] border-[#757575] py-2">
        {links.map((link) => (
          <Button
            href={link.url}
            as={NextLink}
            key={link.name}
            variant="light"
            radius="none"
            className="text-lg md:text-2xl uppercase font-light tracking-tighter"
            endContent={<ArrowUpRight />}
          >
            {link.name}
          </Button>
        ))}
      </section>
      <section className="mt-12 flex justify-between px-8">
        <div>
          <h3 className="text-4xl uppercase tracking-tighter">
            have any questions?
          </h3>
          <p className="my-12 text-md font-light tracking-tight">
            We move quickly, <br />
            drop us a line and we’ll reach out to dance.
          </p>
          <FooterForm />
        </div>
        <div className="hidden md:block">
          <p className="text-right text-md font-light tracking-tight">
            Drop us your number, and our <br /> manager will give you a call to
            offer <br />
            personalized advice.
          </p>
          <h4 className="text-right mt-12 text-4xl uppercase tracking-tighter">
            where innovation
            <br />
            happens
          </h4>
        </div>
      </section>
      <section className="flex justify-between border-t-[1px] border-[#757575] mt-12 px-8 py-2">
        <p className="text-sm font-medium text-[#757575]">
          (c) All Wrongs Reversed.
        </p>
        <p className="text-base font-medium tracking-tight text-[#fafafa]">
          CW Webworks
        </p>
      </section>
    </footer>
  );
};

export default Footer;
