import { useState } from 'react';

import s from './styles.module.scss';
import ModalShare from '../ModalShare/ModalShare';

export const SupportShare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={s.SupportShare}>
      <h2>
        допоможи <br />
        <span>іншим дізнатись</span> <br />
        про наш збір
      </h2>
      {/* <Button variant="share" label="Поділитися" /> */}
      <button onClick={openModal}> поділитись </button>
      {isModalOpen && <ModalShare onClose={closeModal} />}
    </section>
  );
};
