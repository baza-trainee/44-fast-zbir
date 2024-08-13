import { useState, useEffect } from 'react';
import s from './styles.module.scss';
import Button from '../ui/Button/Button';
import plane from '../../assets/buttonIcons/plane.svg';
import getBalance from '../../helpers/getBalance';
import { formatNumber } from '../../helpers/formattedNum';
import ThankYouModal from '../ThankYouModal/ThankYouModal';
import { useDonationStatus } from '../../hooks/useDonationModal';

export const ProgressBar = () => {
  const { isModalOpen, startDonation, closeModal } = useDonationStatus();

  const max = 47000;
  const [balance, setBalance] = useState(0);
  const formattedValue = formatNumber(balance);
  const formattedMaxProgress = formatNumber(max);
  const isComplete = balance >= max;

  useEffect(() => {
    getBalance(setBalance);
  }, []);

  return (
    <section id="1" className={s.progressBar}>
      <div className={s.progressBar__container}>
        <div className={s.progressBar__detalik}>
          <p className={s.progressBar__collect}>Наразі зібрано</p>
          <p className={s.progressBar__collect}>Наша мета</p>
        </div>
        <progress
          value={balance}
          max={max}
          className={`${s.details__progress} ${isComplete && s.details__progress_complete}`}
        ></progress>
        <div className={s.progressBar__detalik}>
          <p className={s.details__collect_1}>
            {' '}
            <span>
              <strong>{formattedValue} UAH </strong>
            </span>
          </p>
          <p className={s.progressBar__text}>
            Забезпечення 44-ї бригади необхідним обладнянням.
          </p>
          <p className={s.details__collect}>
            {' '}
            <span className={s.details__total}>
              <strong className={s.details__total}>
                {formattedMaxProgress} UAH
              </strong>
            </span>
          </p>
        </div>
        {isComplete && (
          <p className={s.details__done}>
            <strong>Збір завершено</strong>
          </p>
        )}

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
      {isModalOpen && <ThankYouModal onClose={closeModal} />}
    </section>
  );
};
