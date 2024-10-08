import s from './styles.module.scss';
import imgMobile from '../../assets/imagesHowItWorks/img-mobile.png';
import imgTablet from '../../assets/imagesHowItWorks/img-tablet.png';
import imgDesktop from '../../assets/imagesHowItWorks/img-desktop.png';
import Button from '../ui/Button/Button';
import plane from '../../assets/buttonIcons/plane.svg';
import ThankYouModal from '../ThankYouModal/ThankYouModal';
import { useDonationStatus } from '../../hooks/useDonationModal';

export const HowItWorks = () => {
  const { isModalOpen, startDonation, closeModal } = useDonationStatus();

  return (
    <section id="4" className={s.HowItWorks}>
      <div className={s.HowItWorks__container}>
        <div className={s.HowItWorks__wrapper}>
          <div className={s.HowItWorks__title}>Як це працює?</div>
          <div className={s.HowItWorks__img_mobile}>
            <img src={imgMobile} alt="How it works" />
          </div>
          <div className={s.HowItWorks__img_tablet}>
            <img src={imgTablet} alt="How it works" />
          </div>
          <div className={s.HowItWorks__img_desktop}>
            <img src={imgDesktop} alt="How it works" />
          </div>
          <ul className={s.HowItWorks__list}>
            <li>Проводити розвідку та виявляти позиції ворога.</li>
            <li>
              Коригувати вогонь артилерії та рятувати життя мирних жителів.
            </li>
            <li>Наводити на цілі та знищувати ворожу техніку.</li>
            <li>Евакуювати поранених з поля бою.</li>
          </ul>
          <Button
            className={s.join_btn}
            text="Хочу доєднатись"
            hoverText="Летить мій донат"
            activeText="Летить мій донат"
            icon={<img src={plane} alt="Plane" />}
            onClick={startDonation}
            type="join"
          />
        </div>
      </div>
      {isModalOpen && <ThankYouModal onClose={closeModal} />}
    </section>
  );
};
