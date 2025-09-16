import eating from './assets/images/icon-eating.svg';
import exercise from './assets/images/icon-exercise.svg';
import sleep from './assets/images/icon-sleep.svg';


export function ApartadoInformacion({imagen, title, children}) {
    const icons = { eating, exercise, sleep };

    return (
            <article>
                <img src={icons[imagen]} className="main_points-img"/>
                <div>
                <h3 className="main_points-title text-preset-4">{title}</h3>
                <p className="main_points-description text-preset-6-regular">{children}</p>
                </div>
            </article>
    )
}