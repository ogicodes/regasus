"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Input,
} from "@nextui-org/react";
import { IconLogo } from "../Logos";
import { X } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onOpenChange,
  onClose,
}: ContactModalProps) {
  const [currentStep, setCurrentStep] = useState(1);

  // Form field states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  // Validation error states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [projectError, setProjectError] = useState("");

  // Helper functions for validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep1 = () => {
    let valid = true;
    if (name.trim() === "") {
      setNameError("Name is required.");
      valid = false;
    } else {
      setNameError("");
    }
    return valid;
  };

  const validateStep2 = () => {
    let valid = true;
    if (email.trim() === "") {
      setEmailError("Email is required.");
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format.");
      valid = false;
    } else {
      setEmailError("");
    }
    if (company.trim() === "") {
      setCompanyError("Company name is required.");
      valid = false;
    } else {
      setCompanyError("");
    }
    return valid;
  };

  const validateStep3 = () => {
    let valid = true;
    if (projectDetails.trim() === "") {
      setProjectError("Project details are required.");
      valid = false;
    } else {
      setProjectError("");
    }
    return valid;
  };

  const handleNextClick = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleSubmitClick = () => {
    if (validateStep3()) {
      console.log({
        name,
        email,
        company,
        projectDetails,
      });
      setCurrentStep(4); // Success screen
    }
  };

  const handleBackClick = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <>
      <Modal
        backdrop="blur"
        classNames={{ base: "bg-[#ECE0D1]", wrapper: "z-[1001]" }}
        hideCloseButton
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
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

            {currentStep === 1 && (
              <ModalBody className="flex flex-col gap-14 text-[#160206]">
                <p className="text-2xl mt-4">
                  TAKE YOUR BUSINESS TO THE NEXT LEVEL.
                </p>
                <p>
                  Get a quote or request a meeting. Simply fill out the form
                  below.
                </p>
                <p>Let’s start with your name.</p>
                <Input
                  isRequired
                  type="text"
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-4"
                  variant="bordered"
                  size="sm"
                  classNames={{ label: "text-[#160206]" }}
                />
                {nameError && <p className="text-red-500">{nameError}</p>}
              </ModalBody>
            )}

            {currentStep === 2 && (
              <ModalBody className="flex flex-col gap-14 text-[#160206]">
                <p>What's your email?</p>
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4"
                  variant="bordered"
                  size="sm"
                  classNames={{ label: "text-[#160206]" }}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}

                <p>What's the name of your company?</p>
                <Input
                  isRequired
                  type="text"
                  label="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mb-4"
                  variant="bordered"
                  size="sm"
                  classNames={{ label: "text-[#160206]" }}
                />
                {companyError && <p className="text-red-500">{companyError}</p>}
              </ModalBody>
            )}

            {currentStep === 3 && (
              <ModalBody className="flex flex-col gap-14 text-[#160206]">
                <p>Tell us more about your project.</p>
                <Textarea
                  placeholder="Enter details here"
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  className="mb-4"
                  minRows={4}
                  classNames={{ label: "text-[#160206]" }}
                />
                {projectError && <p className="text-red-500">{projectError}</p>}
              </ModalBody>
            )}

            {currentStep === 4 && (
              <ModalBody className="flex flex-col gap-14 text-[#160206]">
                <p className="text-2xl">Success!</p>
                <p>
                  Thank you for contacting us. We will get back to you soon.
                </p>
              </ModalBody>
            )}

            <ModalFooter>
              {currentStep > 1 && currentStep < 4 && (
                <Button
                  color="default"
                  className="text-[#160206]"
                  onPress={handleBackClick}
                  isIconOnly
                >
                  <ChevronLeft size={24} color="#160206" />
                </Button>
              )}

              {currentStep === 1 || currentStep === 2 ? (
                <Button
                  fullWidth
                  className="text-[#160206]"
                  onPress={handleNextClick}
                >
                  Next
                </Button>
              ) : currentStep === 3 ? (
                <Button
                  fullWidth
                  className="text-[#160206]"
                  onPress={handleSubmitClick}
                >
                  Submit
                </Button>
              ) : null}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
