export const CalculoBmiImperial = (ft, inches, st, lbs) => {
    ft = Number(ft);
    inches = Number(inches);
    st = Number(st);
    lbs = Number(lbs);

    if (ft > 0 && (inches >= 0) && (st >= 0 || lbs > 0)) {
        const totalInches = ft * 12 + inches;
        const totalLbs = st * 14 + lbs;
        return totalLbs / (totalInches * totalInches) * 703;
    }
}