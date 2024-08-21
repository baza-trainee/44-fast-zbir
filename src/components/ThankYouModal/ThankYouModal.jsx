import PropTypes from 'prop-types';
import s from './styles.module.scss';
import Button from '../ui/Button/Button';
import heart from '../../assets/modal/svg/Heart.svg';
import plane from '../../assets/buttonIcons/plane.svg';
import x from '../../assets/modal/svg/X.svg';

const ThankYouModal = ({ onClose }) => {
  const handleClick = () => {
    window.location.href = 'https://zbir-44-brigada.vercel.app/'; // Замінити на потрібне посилання
  };

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <button className={s.closeButton} onClick={onClose}>
          <img src={x} alt="Close" />
        </button>
        <h1 className={s.header}>ДЯКУЄМО ЗА ТВІЙ ДОНАТ!</h1>
        <div className={s.icon}>
          <img src={heart} alt="Heart" />
        </div>
        <p className={s.description}>
          Кожен твій донат допомагає нищити ворогів і наближати нашу Перемогу!
        </p>
        <h2 className={s.subtitle}>Слава Україні! Героям Слава</h2>
        <div className={s.buttonContainer}>
          <Button
            text="НА ГОЛОВНУ"
            hoverText="НА ГОЛОВНУ"
            icon={<img src={plane} alt="Plane" />}
            activeText="НА ГОЛОВНУ"
            type="toMain"
            className={s.main_btn}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

ThankYouModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ThankYouModal;
