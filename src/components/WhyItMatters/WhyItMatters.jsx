import s from './styles.module.scss';
import glasses from '../../assets/imageswhyitmatters/glasses.png';
import antenna from '../../assets/imageswhyitmatters/antenna.png';
import happymodel from '../../assets/imageswhyitmatters/happymodel.png';
import radiomaster from '../../assets/imageswhyitmatters/radiomaster.png';
import propellers from '../../assets/imageswhyitmatters/propellers.png';

export const WhyItMatters = () => {
  return (
    <section className={s.WhyItMatters}>
      <div className={s.WhyItMatters__container}>
        <div className={s.WhyItMatters__wrapper}>
          <div className={s.WhyItMatters__upper}>
            <h1>
              Чому це
              <br />
              <span>важливо?</span>
            </h1>
            <p>
              Докупівля обладнання із переліку дозволить бригаді проводити
              розвідку, коригувати вогонь, наводити на цілі, рятувати поранених.{' '}
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
          <div
            className={`${s.WhyItMatters__dot} ${s.WhyItMatters__firstdot}`}
          ></div>
          <div className={s.WhyItMatters__antenna}>
            <div className={s.WhyItMatters__img}>
              <img src={antenna} alt="Antenna" />
            </div>
            <p className={s.WhyItMatters__text}>
              FPV-антена Maple Wireless 5.8G
            </p>
          </div>
          <div className={s.WhyItMatters__dot}></div>
          <div className={s.WhyItMatters__happymodel}>
            <div className={s.WhyItMatters__img}>
              <img src={happymodel} alt="Happymodel" />
            </div>
            <p className={`${s.WhyItMatters__text} ${s.happymodel__text}`}>
              Модуль Happymodel ELRS ES900TX
            </p>
          </div>
          <div className={s.WhyItMatters__radiomaster}>
            <div className={s.WhyItMatters__img}>
              <img src={radiomaster} alt="Radiomaster" />
            </div>
            <p className={`${s.WhyItMatters__text} ${s.radiomaster__text}`}>
              Пульт RadioMaster Boxer
            </p>
          </div>
          <div className={s.WhyItMatters__dot}></div>
          <div className={s.WhyItMatters__propellers}>
            <div className={s.WhyItMatters__img}>
              <img src={propellers} alt="Propellers" />
            </div>
            <p className={s.WhyItMatters__text}>
              Пропелери HQP для 7 і 8-дюймових дронів
            </p>
          </div>
          <div className={s.WhyItMatters__lower}>
            <p>
              Кожна гривня рятує найцінніше -<br /> життя військових.
            </p>
            <button className={s.join__btn} type="button">
              <p>ХОЧУ ДОЄДНАТИСЬ</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
