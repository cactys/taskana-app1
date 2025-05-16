export const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 9);
};

export const timeStamp = () => {
  const now = new Date();
  return now.toISOString();
};
