import s from './styles.module.scss';

export const Footer = () => {
  return (
    <footer className={`${s.footer} ${s.container}`}>
      <p>Розробка Baza Trainee Ukraine 2024 © Всі права захищені</p>
    </footer>
  );
};
