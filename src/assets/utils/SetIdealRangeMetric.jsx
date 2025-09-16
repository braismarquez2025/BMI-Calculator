export const setIdealRangeMetric = (height) => {
  
    if (height > 0) {
      const weightMin = (18.5 * (height / 100) ** 2).toFixed(1);
      const weightMax = (24.9 * (height / 100) ** 2).toFixed(1);
      return `${weightMin}kg - ${weightMax}kg`;
    }
  
    return null;
  };