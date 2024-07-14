import s from './styles.module.scss';
import glasses from '../../assets/imagesWhyItMatters/glasses.png';
import antenna from '../../assets/imagesWhyItMatters/antenna.png';
import happymodel from '../../assets/imagesWhyItMatters/happymodel.png';
import radiomaster from '../../assets/imagesWhyItMatters/radiomaster.png';
import propellers from '../../assets/imagesWhyItMatters/propellers.png';
import Button from '../ui/Button/Button';
import plane from '../../assets/buttonIcons/plane.svg';

export const WhyItMatters = () => {
  const handleClick = () => {
    window.location.href = 'https://www.example.com'; // замінити на потрібне посилання
  };

  return (
    <section className={s.WhyItMatters}>
      <div className={s.WhyItMatters__container}>
        {/* Mobile and Tablet screen */}
        <div className={s.WhyItMatters__small_wrapper}>
          <div className={s.WhyItMatters__nodot_container}>
            <div className={s.WhyItMatters__upper}>
              <h2 className={s.upper_title}>
                Чому це
                <br />
                <span>важливо?</span>
              </h2>
              <p>
                Докупівля обладнання із переліку дозволить бригаді проводити
                розвідку, коригувати вогонь, наводити на цілі, рятувати
                поранених.
              </p>
            </div>
            <div className={s.WhyItMatters__glasses}>
              <div className={s.WhyItMatters__img}>
                <img src={glasses} alt="Glasses" />
              </div>
              <p className={s.WhyItMatters__text}>
                Окуляри FPV Skyzone SKY04X PRO
              </p>
            </div>
          </div>

          <div className={s.WhyItMatters__dot_container}>
            <div className={s.WhyItMatters__antenna}>
              <div className={s.WhyItMatters__img}>
                <img src={antenna} alt="Antenna" />
              </div>
              <p className={s.WhyItMatters__text}>
                FPV-антена Maple Wireless 5.8G
              </p>
            </div>
            <div className={s.WhyItMatters__happymodel}>
              <div className={s.WhyItMatters__img}>
                <img src={happymodel} alt="Happymodel" />
              </div>
              <p className={`${s.WhyItMatters__text} ${s.happymodel__text}`}>
                Модуль Happymodel ELRS ES900TX
              </p>
            </div>
          </div>

          <div className={s.WhyItMatters__dot_container}>
            <div className={s.WhyItMatters__radiomaster}>
              <div className={s.WhyItMatters__img}>
                <img src={radiomaster} alt="Radiomaster" />
              </div>
              <p className={`${s.WhyItMatters__text} ${s.radiomaster__text}`}>
                Пульт RadioMaster Boxer
              </p>
            </div>
            <div className={s.WhyItMatters__propellers}>
              <div className={s.WhyItMatters__img}>
                <img src={propellers} alt="Propellers" />
              </div>
              <p className={`${s.WhyItMatters__text} ${s.propellers__text}`}>
                Пропелери HQP для 7 і 8-дюймових дронів
              </p>
            </div>
          </div>

          <div className={s.WhyItMatters__lower}>
            <p>
              Кожна гривня рятує найцінніше -<br /> життя військових.
            </p>
            <Button
              className={s.join_btn}
              text="Хочу доєднатись"
              hoverText="Летить мій донат"
              activeText="Летить мій донат"
              icon={<img src={plane} alt="Plane" />}
              onClick={handleClick}
              type="join"
            />
          </div>
        </div>

        {/* Desktop screen */}
        <div className={s.WhyItMatters__big_wrapper}>
          <div className={s.WhyItMatters__upper}>
            <h2 className={s.upper_title}>
              Чому це
              <br />
              <span>важливо?</span>
            </h2>
            <p>
              Докупівля обладнання із переліку дозволить бригаді проводити
              розвідку, коригувати вогонь, наводити на цілі, рятувати поранених.
            </p>
          </div>

          <div className={s.WhyItMatters__big_container_upper}>
            <div className={s.WhyItMatters__glasses}>
              <div className={s.WhyItMatters__img}>
                <img src={glasses} alt="Glasses" />
              </div>
              <p className={s.WhyItMatters__text}>
                Окуляри FPV Skyzone SKY04X PRO
              </p>
            </div>

            <div className={s.WhyItMatters__antenna}>
              <div className={s.WhyItMatters__img}>
                <img src={antenna} alt="Antenna" />
              </div>
              <p className={s.WhyItMatters__text}>
                FPV-антена Maple Wireless 5.8G
              </p>
            </div>

            <div className={s.WhyItMatters__happymodel}>
              <div className={s.WhyItMatters__img}>
                <img src={happymodel} alt="Happymodel" />
              </div>
              <p className={`${s.WhyItMatters__text} ${s.happymodel__text}`}>
                Модуль Happymodel ELRS ES900TX
              </p>
            </div>
          </div>

          <div className={s.WhyItMatters__big_container_lower}>
            <div className={s.lower_dot_container}>
              <div className={s.WhyItMatters__radiomaster}>
                <div className={s.WhyItMatters__img}>
                  <img src={radiomaster} alt="Radiomaster" />
                </div>
                <p className={`${s.WhyItMatters__text} ${s.radiomaster__text}`}>
                  Пульт RadioMaster Boxer
                </p>
              </div>
              <div className={s.WhyItMatters__propellers}>
                <div className={s.WhyItMatters__img}>
                  <img src={propellers} alt="Propellers" />
                </div>
                <p className={`${s.WhyItMatters__text} ${s.propellers__text}`}>
                  Пропелери HQP для 7 і 8-дюймових дронів
                </p>
              </div>
            </div>

            <div className={s.WhyItMatters__lower}>
              <p>
                Кожна гривня рятує найцінніше -<br /> життя військових.
              </p>
              <Button
                className={s.join_btn}
                text="Хочу доєднатись"
                hoverText="Летить мій донат"
                activeText="Летить мій донат"
                icon={<img src={plane} alt="Plane" />}
                onClick={handleClick}
                type="join"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
