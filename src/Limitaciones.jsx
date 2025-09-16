import gender from './assets/images/icon-gender.svg';
import age from './assets/images/icon-age.svg';
import muscle from './assets/images/icon-muscle.svg';
import pregnancy from './assets/images/icon-pregnancy.svg';
import race from './assets/images/icon-race.svg';


export function Limitaciones({children, name, img}) {
    const icons = {gender, age, muscle, pregnancy, race}

    return (        
        <article className="main_limits-article">
            <div className="main_limits-type">
                <img src={icons[img]} className="main_limits-type-img"/>
                <p className="main_limits-type-text text-preset-5">{name}</p>
            </div>
            <p className="main_limits-article-description text-preset-6-regular">{children}</p>
        </article>

    )
}


