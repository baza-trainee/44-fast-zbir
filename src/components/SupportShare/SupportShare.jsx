import { useState } from 'react';
import share from '../../assets/buttonIcons/share.svg';
import s from './styles.module.scss';
import ModalShare from '../ModalShare/ModalShare';
import Button from '../ui/Button/Button.jsx';

export const SupportShare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={s.SupportShare}>
      <h2>
        допоможи <br />
        <span>іншим дізнатись</span> <br />
        про наш збір
      </h2>
      <Button
        className={s.share_btn}
        text="Поділитись"
        hoverText="Поділитись"
        activeText="Поділитись"
        icon={<img src={share} alt="Share" />}
        onClick={openModal}
        type="share"
      />

      {isModalOpen && <ModalShare onClose={closeModal} />}
    </section>
  );
};
