import s from './styles.module.scss';

export const ThankYouModal = () => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h1 className={s.header}>ДЯКУЄМО ЗА ТВІЙ ДОНАТ!</h1>
        <div className={s.icon}>
          <span role="img" aria-label="heart">
            💛
          </span>
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
