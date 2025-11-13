// src/components/StrengthMeter.jsx
import { motion } from "framer-motion";

const StrengthMeter = ({ strength }) => {
  const getColor = () => {
    switch (strength) {
      case "Weak":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Strong":
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  const width = {
    Weak: "w-1/3",
    Medium: "w-2/3",
    Strong: "w-full",
  };

  return (
    <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-3">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: width[strength] || 0 }}
        transition={{ duration: 0.5 }}
        className={`h-3 rounded-full ${getColor()}`}
      />
    </div>
  );
};

export default StrengthMeter;