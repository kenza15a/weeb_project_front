import { motion, AnimatePresence } from "framer-motion";

const Notification = ({ visible, color, children }) => {
  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="notification"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className={`bg-white fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg z-50 flex items-center justify-between gap-4 min-w-[300px] border ${color}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Notification;
