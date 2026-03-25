import { useState, useCallback } from "react";

export type AlertType = "error" | "success" | "info" | "warning";

export const useAlert = () => {
  const [alertState, setAlertState] = useState({
    message: "",
    type: "error" as AlertType,
    isVisible: false,
  });

  const showAlert = useCallback(
    (message: string, type: AlertType = "error", duration = 1000) => {
      setAlertState({ message, type, isVisible: true });

      setTimeout(() => {
        setAlertState((prev) => ({ ...prev, isVisible: false }));
      }, duration);
    },
    [],
  );

  return { alertState, showAlert };
};
