import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
}

/**
 * Renders a bottom sheet modal with an overlay that prevents scrolling
 * on the page when open. The modal slides up from the bottom of the screen
 * and closes when the user clicks on the overlaw or a close button.
 * */
const BottomSheet = ({ isOpen, onClose, children }: ServiceModalProps) => {
  /**
   * useEffect to toggle the 'overflow-hidden' class on the body.
   * It prevents scrolling when the sheet is open.
   * */
  useEffect(() => {
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

  // Renders the sheet should isOpen is true
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="fixed inset-0 bg-[#212121] bg-opacity-50 backdrop-blur-lg flex justify-center items-end z-[10002]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { ease: "easeInOut", duration: 0.4 },
          }}
          onClick={onClose}
        >
          <motion.div
            className="w-full p-4"
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default BottomSheet;
