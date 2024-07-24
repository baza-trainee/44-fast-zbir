import s from './styles.module.scss';
import dron from '../../assets/imagesFundraiser/Fundraiser-img.png';
import Button from '../ui/Button/Button';
import plane from '../../assets/buttonIcons/plane.svg';

export const FastFundraiser = () => {
  const handleClick = () => {
    window.location.href = 'https://www.example.com'; // замінити на потрібне посилання
  };
  return (
    <section className={s.fastfundraiser}>
      <div className={s.fastfundraiser__container}>
        <div className={s.fastfundraiser__body}>
          <div className={s.fastfundraiser__content}>
            <h1 className={s.fastfundraiser__heading}>Швидкий збір</h1>
            <p className={s.fastfundraiser__text}>
              Допоможемо нашому війську дати потужну відсіч ворогу разом.
              Терміновий збір на необхідне обладнання для 44-ї бригади!
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
          <div className={s.fastfundraiser__img}>
            <img src={dron} alt="dron" />
            <div className={s.pulse}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
