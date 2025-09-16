import "./assets/sass/components/_header.scss"

import logo from "./assets/images/logo.svg"

export function Header() {
    return (
        <header className="header">
            <div className="gradient"></div>
            <img src={logo} alt="Logotipo de la pagina" className="header_logo"/>
            <h1 className="header_title text-preset-2">Body Mass Index Calculator</h1>
            <p className="header_description text-preset-6-regular">Better understand your weight in relation to your height using our 
            body mass index (BM) calculator. Wh ile BMI is not the sole determinant 
            of a healthy weight, it offers a valuable starting point to evaluate 
            your overall health and well-being.</p>
        </header>
    )
} 