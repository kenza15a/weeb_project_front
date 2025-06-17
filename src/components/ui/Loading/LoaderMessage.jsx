import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Notification from "../Notification/Notification";

const LoaderMessage = ({ type }) => {
  const [visible, setVisible] = useState(true);

  const messages = {
    loading: {
      text: "Le meilleur blog du monde se charge, patientez 😄",
      color: "border-yellow-400 text-black",
      duration: null,
    },
    success: {
      text: "Bonne lecture 😄",
      color: "border-green-500 text-green-500",
      duration: 1000,
    },
    error: {
      text: "Oups, une erreur s'est produite. Réessayez ultérieurement 😢",
      color: "border-red-500 text-red-500",
      duration: 5000,
    },
  };

  const message = messages[type];

  useEffect(() => {
    if (message?.duration) {
      const timeout = setTimeout(() => setVisible(false), message.duration);
      return () => clearTimeout(timeout);
    } else {
      setVisible(true);
    }
  }, [type, message?.duration]);

  if (!message || !visible) return null;

  return (
    <Notification visible={visible} color={message.color}>
      <p className="text-sm font-semibold flex-1">{message.text}</p>
      {type !== "error" && (
        <button
          onClick={() => setVisible(false)}
          className="text-sm hover:text-black"
          title="Fermer"
        >
          <FaTimes />
        </button>
      )}
    </Notification>
  );
};

export default LoaderMessage;
