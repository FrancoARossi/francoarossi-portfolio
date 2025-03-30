export const yearsOfExperience = () => {
  const startDateMillis = new Date("2020-11-01").getTime();
  const currentDateMillis = new Date().getTime();
  const yearsOfExperience = Math.floor(
    (currentDateMillis - startDateMillis) / (1000 * 60 * 60 * 24 * 365.25),
  );

  return yearsOfExperience;
};

export const completeEasterEgg = (easterEgg: string) => {
  let easterEggs = localStorage.getItem("foundEasterEggs")?.split(",") || [];

  if (!easterEggs.includes(easterEgg)) {
    easterEggs.push(easterEgg);
    localStorage.setItem("foundEasterEggs", easterEggs.join(","));
    const foundEasterEggsCount = document.getElementById(
      "found-easter-eggs-count",
    );
    if (foundEasterEggsCount) {
      foundEasterEggsCount.innerText =
        String(easterEggs.filter(Boolean).length) || "0";
    }
  }
};
