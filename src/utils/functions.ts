import {
  ENCODED_EGGS,
  readFoundEggs,
  saveFoundEggs,
} from "@utils/easterEggs.js";

export const yearsOfExperience = () => {
  const startDateMillis = new Date("2020-11-01").getTime();
  const currentDateMillis = new Date().getTime();
  const yearsOfExperience = Math.floor(
    (currentDateMillis - startDateMillis) / (1000 * 60 * 60 * 24 * 365.25),
  );

  return yearsOfExperience;
};

export const renderEasterEggProgress = () => {
  const foundEasterEggs = readFoundEggs();
  const foundEasterEggsCount = document.getElementById(
    "found-easter-eggs-count",
  );

  if (foundEasterEggsCount) {
    foundEasterEggsCount.textContent = String(foundEasterEggs.length);
  }

  const easterEggsIcon = document.getElementById("easter-eggs-icon");
  if (easterEggsIcon) {
    easterEggsIcon.textContent =
      foundEasterEggs.length === ENCODED_EGGS.length ? "🎉" : "👀";
  }
};

export const completeEasterEgg = (encodedEasterEgg: string) => {
  const foundEasterEggs = readFoundEggs();

  if (!foundEasterEggs.includes(encodedEasterEgg)) {
    foundEasterEggs.push(encodedEasterEgg);
    saveFoundEggs(foundEasterEggs);
    renderEasterEggProgress();
  }
};
