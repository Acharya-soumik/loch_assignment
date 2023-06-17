export const isValidEmail = (email) => {
  const regexExp = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  return regexExp.test(email);
};
