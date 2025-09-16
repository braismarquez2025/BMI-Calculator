export const CalculoBmiMetric = (height, weight) => {
    height = Number(height);
    weight = Number(weight);


    if (height > 0 && weight > 0) {
        const heightM = height / 100;
        return weight / (heightM * heightM);
    }
}