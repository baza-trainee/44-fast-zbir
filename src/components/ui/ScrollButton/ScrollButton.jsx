import { useEffect, useState } from 'react';
import ScrollBtnSvg from '../../../assets/icons/liftUp-icon.svg';
import s from './styles.module.scss';

export const ScrollButton = () => {
  const [ScrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {ScrollToTop && (
        <button type="button" className={s.ScrollBtn} onClick={ScrollUp}>
          <img className={s.icon} src={ScrollBtnSvg} />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
