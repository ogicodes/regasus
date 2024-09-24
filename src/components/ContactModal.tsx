'use client'

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


export default function ContactModal() {

  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal hideCloseButton isOpen={isOpen} >
        <ModalContent>
            <>
              <ModalHeader className="flex justify-between items-baseline ">
                <div>R</div>
                <div>CONTACT US</div>
                <Button className=" p-0 justify-end" isIconOnly color="danger" variant="light" onPress={onOpenChange}>
                  X
                </Button>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-14">
                <p className=" text-2xl mt-4"> 
                TAKE YOUR BUSINESS TO THE NEXT LEVEL.
                </p>
                <p>
                Get a quote or request a meeting,
                Simply fill out the form below.
                </p>
                <p>
                Let’s start with your name.
                </p>
              </ModalBody>
              <ModalFooter>

                <Button color="primary">
                  Action
                </Button>
              </ModalFooter>
            </>
        </ModalContent>
      </Modal>
    </>
  );
}