"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Input, Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

const inputClasses = {
  label: "text-[#fafafa] uppercase text-sm",
};

const FooterForm = () => {
  const [number, setNumber] = useState<string>("");
  const [inquiry, setInquiry] = useState<string>("");
  const [progressable, setProgressable] = useState<boolean>(false);

  const validateNumber = (value: string) =>
    value.match(/^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/);

  const isInvalid = useMemo(() => {
    if (number === "") return false;

    return validateNumber(number) ? false : true;
  }, [number]);

  const handleSubmit = () => {
    console.info("Form Submitted");
    setInquiry("");
    setNumber("");
  };

  useEffect(() => {
    setProgressable(number !== "" && !isInvalid && inquiry !== "");
  }, [number, inquiry, isInvalid]);

  return (
    <>
      <div className="flex gap-8 mb-4">
        <Input
          label="your number"
          value={number}
          isInvalid={isInvalid}
          onValueChange={setNumber}
          classNames={inputClasses}
          variant="underlined"
        />
        <Input
          classNames={inputClasses}
          value={inquiry}
          onValueChange={setInquiry}
          label="your inquiry"
          endContent={<ArrowRight className="ml-8" size={24} />}
          variant="underlined"
        />
      </div>
      <Button
        className="uppercase"
        variant="solid"
        radius="none"
        color={progressable ? "success" : "default"}
        fullWidth
        disabled={!progressable}
        onClick={handleSubmit}
      >
        send inquiry
      </Button>
      {isInvalid && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 uppercase text-xs text-danger"
        >
          invalid number format: 000-000-0000
        </motion.p>
      )}
    </>
  );
};

export default FooterForm;
