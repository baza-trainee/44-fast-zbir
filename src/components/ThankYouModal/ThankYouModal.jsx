// import PropTypes from 'prop-types';
// import s from './styles.module.scss';
// import Button from '../ui/Button/Button';
// import heart from '../../assets/modal/svg/Heart.svg';
// import plane from '../../assets/buttonIcons/plane.svg';
// import x from '../../assets/modal/svg/X.svg';

// const ThankYouModal = ({ onClose }) => {
//   const handleClick = () => {
//     window.location.href = 'https://www.example.com'; // замінити на потрібне посилання
//   };

//   return (
//     <div className={s.overlay}>
//       <div className={s.modal}>
//         <button className={s.closeButton} onClick={onClose}>
//           <img src={x} alt="x" />
//         </button>
//         <div className={s.header}>
//           ДЯКУЄМО ЗА <span className={s.highlight}>ТВІЙ ДОНАТ!</span>
//         </div>
//         <div className={s.icon}>
//           <img src={heart} alt="heart" />

// import s from './styles.module.scss';

// export const ThankYouModal = () => {
//   return (
//     <div className={s.overlay}>
//       <div className={s.modal}>
//         <h1 className={s.header}>ДЯКУЄМО ЗА ТВІЙ ДОНАТ!</h1>
//         <div className={s.icon}>
//           <span role="img" aria-label="heart">
//             💛
//           </span>
// main
//         </div>
//         <p className={s.description}>
//           Кожен твій донат допомагає нищити ворогів і наближати нашу Перемогу!
//         </p>
//         <h2 className={s.subtitle}>Слава Україні! Героям Слава</h2>
//         feature/thank-you-modal
//         <div className={s.buttonContainer}>
//           <Button
//             text="НА ГОЛОВНУ"
//             hoverText="ЛЕТИТЬ МІЙ ДОНАТ"
//             icon={<img src={plane} alt="plane" />}
//             activeText="ЛЕТИТЬ МІЙ ДОНАТ"
//             type="toMain"
//             className={s.main_btn}
//             onClick={handleClick}
//           />
//         </div>
//         <button className={s.button}>НА ГОЛОВНУ</button>
// main
//       </div>
//     </div>
//   );
// };
// feature/thank-you-modal

// ThankYouModal.propTypes = {
//   onClose: PropTypes.func.isRequired
// };

// export default ThankYouModal;
// main

import PropTypes from 'prop-types';
import s from './styles.module.scss';
import Button from '../ui/Button/Button';
import heart from '../../assets/modal/svg/Heart.svg';
import plane from '../../assets/buttonIcons/plane.svg';
import x from '../../assets/modal/svg/X.svg';

const ThankYouModal = ({ onClose }) => {
  const handleClick = () => {
    window.location.href = 'https://www.example.com'; // замените на нужную ссылку
  };

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <button className={s.closeButton} onClick={onClose}>
          <img src={x} alt="x" />
        </button>
        <div className={s.header}>
          ДЯКУЄМО ЗА <span className={s.highlight}>ТВІЙ ДОНАТ!</span>
        </div>
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
            icon={<img src={plane} alt="plane" />}
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
