export const yearsOfExperience = () => {
  const startDateMillis = new Date("2020-11-01").getTime();
  const currentDateMillis = new Date().getTime();
  const yearsOfExperience = Math.floor(
    (currentDateMillis - startDateMillis) / (1000 * 60 * 60 * 24 * 365.25),
  );

  return yearsOfExperience;
};
