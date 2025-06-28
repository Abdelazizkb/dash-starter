import { toast as baseToast } from "sonner";

export const toast = {
  success: (message: string) =>
    baseToast.error(message, {
      style: {
        backgroundColor: "#ecfdf5",
        color: "#166534",
        border: "1px solid #86efac",
      },
    }),
  error: (message: string) =>
    baseToast.error(message, {
      style: {
        backgroundColor: "#fef2f2",
        color: "#991b1b",
        border: "1px solid #fca5a5",
      },
    }),
};
