export const setIdealRangeImperial = (totalInches) => {
    let weightMin = ((18.5 * totalInches ** 2) / 703).toFixed(1);
    let weightMax = ((24.9 * totalInches ** 2) / 703).toFixed(1);

    let weightMinSt = Math.floor(weightMin / 14);
    let weightMinLbs = Math.floor(weightMin % 14);
    let weightMaxSt = Math.floor(weightMax / 14);
    let weightMaxLbs = Math.floor(weightMax % 14);
    
    return `${weightMinSt}st ${weightMinLbs}lbs - ${weightMaxSt}st ${weightMaxLbs}lbs.`;
  };