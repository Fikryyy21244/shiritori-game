import { motion, AnimatePresence } from "framer-motion";
import type { AlertType } from "../../hooks/useAlert";

type Props = {
  message: string;
  type: AlertType;
  isVisible: boolean;
};

const alertStyles: Record<AlertType, string> = {
  success: "bg-green-500 border-green-700 text-white",
  error: "bg-red-500 border-red-700 text-white",
  info: "bg-blue-500 border-blue-700 text-white",
  warning: "bg-yellow-400 border-yellow-600 text-black",
};

export default function AlertInGame({ message, type, isVisible }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -20, x: "-50%" }}
          className={`fixed top-10 left-1/2 z-50 px-8 py-3 rounded-2xl border-b-4 font-bold shadow-xl text-center min-w-70 ${alertStyles[type]}`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
