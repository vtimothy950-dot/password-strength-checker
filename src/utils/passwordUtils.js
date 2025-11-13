// src/utils/passwordUtils.js
export const checkPasswordStrength = (password) => {
  const conditions = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const score = Object.values(conditions).filter(Boolean).length;

  let strength = "";
  if (score <= 2) strength = "Weak";
  else if (score === 3 || score === 4) strength = "Medium";
  else strength = "Strong";

  return { strength, conditions, score };
};