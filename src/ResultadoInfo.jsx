import curva from './assets/images/pattern-curved-line-left.svg';

export function ResultadoInfo() {
    return (
        <section className="main_info">
            <div className="main_info-text">
                <div></div>
                <div className="main_info-text-column">
                    <img src={curva} alt="elemento decorativo" className='line-left'/>
                    <h2 className="main_info-title text-preset-3">What your BMI result means</h2>
                    <p className="main_info-description text-preset-6-regular">A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, 
                    ideally about 30 minutes daily for five days a week.</p>
                </div>
            </div>
        </section>
    )
}