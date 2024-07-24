import s from './styles.module.scss';
import imgMobile from '../../assets/imagesHowItWorks/img-mobile.png';

export const HowItWorks = () => {
  return (
    <section className={s.HowItWorks}>
      <div className={s.HowItWorks__container}>
        <div className={s.HowItWorks__img}>
          <img src={imgMobile} alt="How it works" />
        </div>
      </div>
    </section>
  );
};
