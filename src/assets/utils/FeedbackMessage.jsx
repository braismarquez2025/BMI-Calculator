export const getFeedbackMessage = (bmi) => {
    if (!bmi) return "";
    if (bmi < 18.5) return "Your BMI is below the healthy range.";
    if (bmi > 25.9) return "Your BMI is above the healthy range.";
    return "Your BMI suggests you’re a healthy weight.";
}