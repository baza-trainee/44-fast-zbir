import s from './styles.module.scss';

export const ThankYouModal = () => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h1 className={s.header}>ДЯКУЄМО ЗА ТВІЙ ДОНАТ!</h1>
        <div className={s.icon}>
          <svg
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="75" cy="75" r="75" fill="#FFCC00" />
            <path
              d="M29.8549 52.2043C15.2388 80.1475 71.0191 111.659 74.9965 111.659C79.3642 111.659 134.73 80.1475 120.138 52.2043C113.721 41.4513 96.9572 24.3333 74.9965 52.2043C61.8688 33.3745 41.4941 31.9038 29.8549 52.2043Z"
              fill="white"
            />
          </svg>
        </div>
        <p className={s.description}>
          Кожен твій донат допомагає нищити ворогів і наближати нашу Перемогу!
        </p>
        <h2 className={s.subtitle}>Слава Україні! Героям Слава</h2>
        <button className={s.button}>НА ГОЛОВНУ</button>
      </div>
    </div>
  );
};
