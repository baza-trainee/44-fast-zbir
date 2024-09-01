import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Logo from '../../../assets/img/header/logo.png';
import BurgerMenu from '../../../assets/img/header/burger_menu_icon.svg';

import s from './styles.module.scss';

export const Header = () => {
  const [active, setActive] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  // const scrollRef = useRef(null);

  const links = [
    { text: 'Мета', sectionId: '1' },
    { text: 'Про бригаду', sectionId: '2' },
    { text: 'Чому це важливо', sectionId: '3' },
    { text: 'Як це працює', sectionId: '4' }
  ];

  const handleButtonClick = (sectionId) => {
    const head = document.querySelector('header');
    const element = document.getElementById(sectionId);
    const h = head.offsetHeight;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - h,
        behavior: 'smooth'
      });
    }
    setActive(false);
  };

  useEffect(() => {
    const closeModal = (event) => {
      if (event.code === 'Escape') {
        setActive(false);
      }
    };

    // const onScroll = () => {
    //   if (window.scrollY > 1) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // };

    // window.addEventListener('scroll', onScroll);
    document.body.addEventListener('keyup', (event) => closeModal(event));

    return () => {
      window.removeEventListener('keyup', closeModal);
      // window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.logo__wrapper} onClick={() => handleButtonClick('#')}>
          <img className={s.logo__img} src={Logo} alt="logo" />
        </div>
        <nav className={clsx(s.nav, { [s.active]: active })}>
          <ul className={s.nav__list}>
            {links.map((link) => (
              <li className={s.nav__item} key={link.sectionId}>
                <a
                  className={s.nav__href}
                  onClick={() => handleButtonClick(link.sectionId)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={s.burger_menu_icon} onClick={() => setActive(!active)}>
          <img src={BurgerMenu} alt="burger menu icon" />
        </div>
      </div>
      <div
        className={clsx(s.burger_menu_blur, { [s.active]: active })}
        onClick={() => setActive(false)}
      ></div>
    </header>
  );
};
