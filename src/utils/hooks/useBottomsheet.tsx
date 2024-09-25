import { useState } from "react";

/**
 * useBottomsheet hook to handle the BottomSheet component.
 * */
const useBottomsheet = () => {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);

  const onOpen = () => {
    setSheetOpen(true);
  };

  const onClose = () => {
    setSheetOpen(false);
  };

  return { sheetOpen, onOpen, onClose };
};

export { useBottomsheet };
