import { useState } from "react"

import { setIdealRangeMetric } from "./assets/utils/SetIdealRangeMetric";
import { setIdealRangeImperial } from "./assets/utils/SetIdealRangeImperial";

import { getFeedbackMessage } from "./assets/utils/FeedbackMessage";

import { CalculoBmiMetric } from "./assets/utils/CalculoBmiMetric";
import { CalculoBmiImperial } from "./assets/utils/CalculoBmiImperial"

export function CalculatorBMI() {
    const [unit, setUnit] = useState("metric");
    const [bmi, setBmi] = useState(null);
    const [idealRange, setIdealRange] = useState(null);

    const [inputMetric, setInputMetric] = useState({
        height: "",
        weight: ""
    })

    const [inputImperial, setInputImperial] = useState({
        ft: "",
        in: "",
        st: "",
        lbs: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (unit === "metric") {
          setInputMetric({ ...inputMetric, [name]: value });
        } else {
          setInputImperial({ ...inputImperial, [name]: value });
        }
      };

      const metricFilled = Object.values(inputMetric).every((value) => value.trim() !== "");
      const imperialValues = Object.values(inputImperial).filter((value) => value.trim() !== "");
      const imperialFilled = imperialValues.length >= 2; // al menos 2 campos llenos
      
      const allFilled = metricFilled || imperialFilled;


    // Operaciones
    const handleBlur = () => {
        let result, range;

        if (unit === "metric") {
            result = CalculoBmiMetric(inputMetric.height, inputMetric.weight);
            range = setIdealRangeMetric(inputMetric.height); 
        } else {
            result = CalculoBmiImperial(inputImperial.ft, inputImperial.in, inputImperial.st, inputImperial.lbs);
            const totalInches = Number(inputImperial.ft) * 12 + Number(inputImperial.in);
            range = setIdealRangeImperial(totalInches);
        }

            setBmi(result ? result.toFixed(1) : null);
            setIdealRange(result ? range : null);
        }
 

    return (
        <section className="calculator">
            <h3 className="calculator_title text-preset-4">Enter your details below</h3>

            <article className="calculator_article">
                <div className="calculator_option">
                <div className={unit === "metric" ? "check-on" : "check"} onClick={() => setUnit("metric")}>{unit === "metric" && <div className="circle"></div>}</div>
                <p className="calculator_option-text text-preset-6-semibold">Metric</p>
                </div>

                <div className="calculator_option">
                <div className={unit === "imperial" ? "check-on" : "check"} onClick={() => setUnit("imperial")}>{unit === "imperial" && <div className="circle"></div>}</div>
                <p className="calculator_option-text text-preset-6-semibold">Imperial</p>
                </div>
            </article>


            {unit === "metric" && (
                <form className="calculator_form-metric">
                    <div className="calculator_form-container">
                        <label htmlFor="height" className="text-preset-7 calculator_form-label">Height</label>
                        <input type="text" name="height" maxLength="3" placeholder="0" className="text-preset-4 calculator_form-input" 
                        value={inputMetric.height} onChange={handleChange} onBlur={handleBlur} />
                        <p className="calculator_form-cm text-preset-4">cm</p>
                    </div>
                    <div className="calculator_form-container">
                        <label htmlFor="weight" className="text-preset-7 calculator_form-label">Weight</label>
                        <input type="text" name="weight" maxLength="3" placeholder="0" className="text-preset-4 calculator_form-input"
                        value={inputMetric.weight} onChange={handleChange} onBlur={handleBlur}/>
                        <p className="calculator_form-kg text-preset-4">kg</p>
                    </div>
                </form> 
            )}

            {unit === "imperial" && (
                <form className="calculator_form-imperial">
                    <div>
                        <label htmlFor="height" className="text-preset-7 calculator_form-label">Height</label>
                        <div className="calculator_container">
                            <input type="text" name="ft" maxLength="5" placeholder="0" className="text-preset-4 calculator_container-input"
                            value={inputImperial.ft} onChange={handleChange} onBlur={handleBlur}/>
                            <p className="calculator_form-ft text-preset-4">ft</p>        
                            <input type="text" name="in" maxLength="5" placeholder="0" className="text-preset-4 calculator_container-input"
                            value={inputImperial.in} onChange={handleChange} onBlur={handleBlur}/>
                            <p className="calculator_form-in text-preset-4">in</p>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="weight" className="text-preset-7 calculator_form-label">Weight</label>
                        <div className="calculator_container">
                            <input type="text" name="st" maxLength="5" placeholder="0" className="text-preset-4 calculator_container-input"
                            value={inputImperial.st} onChange={handleChange} onBlur={handleBlur}/>
                            <p className="calculator_form-st text-preset-4">st</p>
                            <input type="text" name="lbs" maxLength="5" placeholder="0" className="text-preset-4 calculator_container-input"
                            value={inputImperial.lbs} onChange={handleChange} onBlur={handleBlur}/>
                            <p className="calculator_form-lbs text-preset-4">lbs</p>
                        </div>
                    </div>
                </form> 
            )}

            {allFilled ? (
                <article className="calculator_resultado">
                    <div className="calculator_resultado-container">
                        <p className="calculator_resultado-header text-preset-6">Your BMI is...</p>
                        <h3 className="calculator_resultado-title text-preset-2">
                            {bmi}
                        </h3>
                    </div>
                    <p className="calculator_resultado-subtitle text-preset-7">{getFeedbackMessage(bmi)}Your ideal weight is between{" "}
                        <strong>
                            {idealRange}
                        </strong>
                    </p>
                </article>
            ) : (
                <article className="calculator_bienvenida">
                    <h3 className="calculator_bienvenida-title text-preset-4">Welcome</h3>
                    <p className="calculator_bienvenida-subtitle text-preset-7">Enter your height and weight and you’ll see your BMI result here</p>
                </article>
            )}
            
      
        </section>
    )
}
