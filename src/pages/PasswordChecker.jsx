// src/pages/PasswordChecker.jsx
import { useState } from "react";
import StrengthMeter from "../components/StrengthMeter";
import { checkPasswordStrength } from "../utils/passwordUtils";
import { motion } from "framer-motion";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState({ strength: "", conditions: {}, score: 0 });

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setResult(checkPasswordStrength(value));
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
          🔐 Password Strength Checker
        </h2>

        <input
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password..."
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <StrengthMeter strength={result.strength} />

        {password && (
          <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
            <p>
              Strength:{" "}
              <span
                className={`font-semibold ${
                  result.strength === "Weak"
                    ? "text-red-500"
                    : result.strength === "Medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {result.strength}
              </span>
            </p>

            <ul className="mt-2 space-y-1">
              <li>
                {result.conditions.length ? "✅" : "❌"} At least 8 characters
              </li>
              <li>
                {result.conditions.uppercase ? "✅" : "❌"} Contains uppercase
              </li>
              <li>
                {result.conditions.lowercase ? "✅" : "❌"} Contains lowercase
              </li>
              <li>
                {result.conditions.number ? "✅" : "❌"} Contains number
              </li>
              <li>
                {result.conditions.specialChar ? "✅" : "❌"} Contains special character
              </li>
            </ul>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default PasswordChecker;