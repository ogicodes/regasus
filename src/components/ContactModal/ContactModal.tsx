"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { IconLogo } from "../Logos";
import { X } from "lucide-react";
import { Input } from "@nextui-org/react";

export default function ContactModal() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal
        backdrop="blur"
        classNames={{ base: "bg-[#ECE0D1]", wrapper: "z-[1001]" }}
        hideCloseButton
        isOpen={isOpen}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex justify-between items-baseline ">
              <IconLogo size={24} color="#160206" />
              <p className=" text-[#160206] text-2xl ">CONTACT US</p>
              <Button
                className=" p-0 justify-end"
                isIconOnly
                color="danger"
                variant="light"
                onPress={onOpenChange}
              >
                <X size={24} color="#160206" />
              </Button>
            </ModalHeader>
            <ModalBody className="flex flex-col gap-14 text-[#160206]">
              <p className=" text-2xl mt-4">
                TAKE YOUR BUSINESS TO THE NEXT LEVEL.
              </p>
              <p>
                Get a quote or request a meeting, Simply fill out the form
                below.
              </p>
              <p>Let’s start with your name.</p>
              <Input
                isRequired
                type="email"
                label="Jason"
                className="mb-4"
                variant="bordered"
                size="sm"
                classNames={{ label: "text-[#160206]" }}
              />
            </ModalBody>
            <ModalFooter>
              <Button fullWidth className="text-[#160206]">Start</Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
