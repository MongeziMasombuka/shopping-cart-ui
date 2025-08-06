//const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

export const getOrCreateUserId = (): string => {
  let userId = localStorage.getItem("userId");

  if (!userId) {
    //userId = generateId(); // pseudo-unique fallback
    userId = "1";
    localStorage.setItem("userId", userId);
  }

  return userId;
};
