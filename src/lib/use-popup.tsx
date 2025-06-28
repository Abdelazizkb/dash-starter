import { useState } from "react";

export interface IPopup<TData> {
  open: (newData?: TData) => void;
  close: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  data?: TData;
}

const usePopup = <TData,>() => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<TData | undefined>(undefined);

  const openModal = (newData?: TData) => {
    setData(newData);
    setOpen(true);
  };

  return {
    open: openModal,
    close: () => setOpen(false),
    setOpen,
    isOpen: open,
    data,
  };
};

export default usePopup;
