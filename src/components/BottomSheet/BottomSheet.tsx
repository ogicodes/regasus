"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@nextui-org/react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
  hideCloseButton?: boolean;
}

/**
 * Renders a bottom sheet modal with an overlay that prevents scrolling
 * on the page when open. The modal slides up from the bottom of the screen
 * and closes when the user clicks on the overlaw or a close button.
 * */
const BottomSheet = ({
  isOpen,
  onClose,
  children,
  hideCloseButton = false,
}: ServiceModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  /**
   * useEffect to toggle the 'overflow-hidden' class on the body.
   * It prevents scrolling when the sheet is open.
   * */
  useEffect(() => {
    setIsMounted(true);

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // Framer Motion Variants for the bottom sheet animation
  const sheetVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: { y: "100%", transition: { ease: "easeInOut", duration: 0.4 } },
  };

  if (!isMounted) return null;

  // Renders the sheet should isOpen is true
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="fixed inset-0 flex justify-center items-end z-[10002] backdrop-blur-lg bg-[#000000] bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { ease: "easeInOut", duration: 0.4 },
          }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full bg-[#212121] p-8 rounded-t-2xl shadow-lg h-[75%] overflow-hidden"
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {!hideCloseButton && (
              <div className="absolute right-0 pr-8">
                <Button isIconOnly variant="ghost" onPress={onClose}>
                  <X />
                </Button>
              </div>
            )}
            {children}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default BottomSheet;
