// import s from './styles.module.scss';
// import Button from '../ui/Button/Button';
// import heart from '../../assets/modal/svg/Heart.svg';
// // import airplane from '../../assets/buttonIcons/plane.svg';

// export const ThankYouModal = ({ onClose }) => {
//   const handleClick = () => {
//     window.location.href = 'https://www.example.com'; // замінити на потрібне посилання
//   };
//   return (
//     <div className={s.overlay}>
//       <div className={s.modal}>
//         <button className={s.closeButton} onClick={onClose}>
//           &times;
//         </button>
//         <div className={s.header}>ДЯКУЄМО ЗА ТВІЙ ДОНАТ!</div>
//         <div className={s.icon}>
//           <img src={heart} alt="heart" />
//         </div>
//         <p className={s.description}>
//           Кожен твій донат допомагає нищити ворогів і наближати нашу Перемогу!
//         </p>
//         <h2 className={s.subtitle}>Слава Україні! Героям Слава</h2>
//         <div className={s.buttonContainer}>
//           <Button
//             text="НА ГОЛОВНУ"
//             hoverText="ЛЕТИТЬ МІЙ ДОНАТ"
//             icon={<img src={heart} alt="heart" />}
//             activeText="ЛЕТИТЬ МІЙ ДОНАТ"
//             type="join"
//             className={s.join_btn}
//             onClick={handleClick}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThankYouModal;

import PropTypes from 'prop-types';
import s from './styles.module.scss';
import Button from '../ui/Button/Button';
import heart from '../../assets/modal/svg/Heart.svg';
import plane from '../../assets/buttonIcons/plane.svg';
const ThankYouModal = ({ onClose }) => {
  const handleClick = () => {
    window.location.href = 'https://www.example.com'; // замінити на потрібне посилання
  };

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <button className={s.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={s.header}>ДЯКУЄМО ЗА ТВІЙ ДОНАТ!</div>
        <div className={s.icon}>
          <img src={heart} alt="heart" />
        </div>
        <p className={s.description}>
          Кожен твій донат допомагає нищити ворогів і наближати нашу Перемогу!
        </p>
        <h2 className={s.subtitle}>Слава Україні! Героям Слава</h2>
        <div className={s.buttonContainer}>
          <Button
            text="НА ГОЛОВНУ"
            hoverText="ЛЕТИТЬ МІЙ ДОНАТ"
            icon={<img src={plane} alt="heart" />}
            activeText="ЛЕТИТЬ МІЙ ДОНАТ"
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
