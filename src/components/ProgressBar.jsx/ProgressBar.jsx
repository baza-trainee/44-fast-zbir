// import { useState, useEffect } from "react";
import s from './styles.module.scss';
import Button from '../ui/Button/Button';
import plane from '../../assets/buttonIcons/plane.svg';

export const ProgressBar = () => {
  const handleClick = () => {
    window.open('https://send.monobank.ua/jar/AHkZPMTCF', '_blank'); // замінити на потрібне посилання
  };

  // const Details = () => {
  //     const max = 50000;
  //     const [balance, setBalance] = useState(0);
  //     const formattedValue = formatNumber(balance);
  //     const formattedMax = formatNumberWithCommas(max);
  //     const formattedMaxProgress = formatNumber(max);
  //     const isComplete = balance >= max;

  //     useEffect(() => {
  //       getBalance(setBalance);
  //     }, []);

  return (
    <section id="1" className={s.progressBar}>
      <div className={s.progressBar__container}>
        <div className={s.progressBar__detalik}>
          <p className={s.progressBar__collect}>Наразі зібрано</p>
          <p className={s.progressBar__collect}>наша мета</p>
        </div>

        {/* <progress
          value={balance}
          max={max}
          className={`${s.details__progress} ${
            isComplete && S.details__progress_complete
          }`}
        ></progress>
        {isComplete && (
          <p className={s.details__done}>
            <strong>Збір завершено</strong>
          </p>
        )} */}

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
    </section>
  );
};
