import "./assets/sass/style.scss"
import { CalculatorBMI } from './CalculatorBMI'
import { Header } from './Header'
import { ResultadoInfo } from './ResultadoInfo'
import { ApartadoInformacion } from './Caracteristicas';
import { Limitaciones } from './Limitaciones';

import curva from './assets/images/pattern-curved-line-right.svg';

function App() {

  return (
    <>
    <div className="grid_desktop">
      <Header />
      <CalculatorBMI />
    </div>

      <main className="main">
        <ResultadoInfo />

        <section className="main_points">
          <div className="gradient-section"></div>


          <ApartadoInformacion imagen="eating" title="Healthy eating">
            Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.
          </ApartadoInformacion>

          <ApartadoInformacion imagen="exercise" title="Regular exercise">
            Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.
          </ApartadoInformacion>

          <ApartadoInformacion imagen="sleep" title="Adequate sleep">
            Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.
          </ApartadoInformacion>
          
        </section>

        <section className="main_limits">
            <div className="main_limits-header">

              <img src={curva} alt="elemento decorativo" className="line-right" />
              <h2 className="main_limits-title text-preset-3">Limitations of BMI</h2>
              <p className="main_limits-description text-preset-6-regular">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
            </div>

            <div className="main_limits-grid">
              <Limitaciones name="Gender" img="gender">
                The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.
              </Limitaciones>

              <Limitaciones name="Age" img="age">
                In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
              </Limitaciones>

              <Limitaciones name="Muscle" img="muscle">
                BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.
              </Limitaciones>

              <Limitaciones name="Pregnancy" img="pregnancy">
                Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.
              </Limitaciones>

              <Limitaciones name="Race" img="race">
                Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.
              </Limitaciones>
            </div>
          </section>

      </main>
    </>
  )
}

export default App
