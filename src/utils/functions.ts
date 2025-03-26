export const yearsOfExperience = () => {
  const startDateMillis = new Date("2020-11-01").getTime();
  const currentDateMillis = new Date().getTime();
  const yearsOfExperience = Math.floor(
    (currentDateMillis - startDateMillis) / (1000 * 60 * 60 * 24 * 365.25),
  );

  return yearsOfExperience;
};

export const getTechnologyProps = (technology: string) => {
  switch (technology) {
    case "TailwindCSS":
      return {
        colorClasses:
          "border-cyan-500 bg-cyan-200 dark:bg-cyan-950 dark:border-cyan-800",
        label: "Tailwind CSS",
      };
    case "Sass":
      return {
        colorClasses:
          "border-pink-500 bg-pink-200 dark:bg-pink-950 dark:border-pink-800",
        label: "Sass",
      };
    case "Jest":
      return {
        colorClasses:
          "border-rose-500 bg-rose-200 dark:bg-rose-950 dark:border-rose-800",
        label: "Jest",
      };
    case "Git":
      return {
        colorClasses:
          "border-rose-500 bg-rose-200 dark:bg-rose-950 dark:border-rose-800",
        label: "Git",
      };
    case "GitHub":
      return {
        colorClasses:
          "border-violet-500 bg-yviolet-200 dark:bg-violet-950 dark:border-violet-800",
        label: "GitHub",
      };
    case "GitLab":
      return {
        colorClasses:
          "border-amber-500 bg-amber-200 dark:bg-amber-950 dark:border-amber-800",
        label: "GitLab",
      };

    default:
      return {
        colorClasses:
          "border-black-500 bg-black-200 dark:bg-black-950 dark:border-black-800",
        label: "default",
      };
  }
}