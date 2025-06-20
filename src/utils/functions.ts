import { ENCODED_EGGS } from "@utils/easterEggs.js";

export const yearsOfExperience = () => {
  const startDateMillis = new Date("2020-11-01").getTime();
  const currentDateMillis = new Date().getTime();
  const yearsOfExperience = Math.floor(
    (currentDateMillis - startDateMillis) / (1000 * 60 * 60 * 24 * 365.25),
  );

  return yearsOfExperience;
};

export const completeEasterEgg = (encodedEasterEgg: string) => {
  let foundEasterEggs =
    window.atob(localStorage.getItem("foundEasterEggs") || "").split(",") || [];

  if (!foundEasterEggs.includes(encodedEasterEgg)) {
    foundEasterEggs.push(encodedEasterEgg);
    const encodedFoundEasterEggs = window.btoa(foundEasterEggs.join(","));
    localStorage.setItem("foundEasterEggs", encodedFoundEasterEggs);
    const foundEasterEggsCount = document.getElementById(
      "found-easter-eggs-count",
    );
    if (foundEasterEggsCount) {
      foundEasterEggsCount.innerText =
        String(foundEasterEggs.filter(Boolean).length) || "0";
      updateEasterEggsIcon();
    }
  }
};

export const updateEasterEggsIcon = () => {
  const easterEggsIcon = document.getElementById("easter-eggs-icon");
  let foundEasterEggs =
    window.atob(localStorage.getItem("foundEasterEggs") || "").split(",") || [];

  if (easterEggsIcon && foundEasterEggs) {
    easterEggsIcon.innerHTML =
      foundEasterEggs.length === ENCODED_EGGS.length ? "🎉" : "👀";
  }
};
