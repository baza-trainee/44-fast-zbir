// import { useEffect, useState } from 'react';

// export const useDonationStatus = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem('donationCompleted') === 'true') {
//       setIsModalOpen(true);
//       localStorage.removeItem('donationCompleted');
//     }
//   }, []);

//   useEffect(() => {
//     if (localStorage.getItem('donationStarted') === 'true') {
//       localStorage.setItem('donationCompleted', 'true');
//       localStorage.removeItem('donationStarted');
//     }
//   }, []);

//   const startDonation = () => {
//     localStorage.setItem('donationStarted', 'true');
//     window.open('https://send.monobank.ua/jar/AHkZPMTCF', '_blank');
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return {
//     isModalOpen,
//     startDonation,
//     closeModal
//   };
// };
import { useEffect, useState } from 'react';

export const useDonationStatus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('donationCompleted') === 'true') {
      setIsModalOpen(true);
      localStorage.removeItem('donationCompleted');
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('donationStarted') === 'true') {
      localStorage.setItem('donationCompleted', 'true');
      localStorage.removeItem('donationStarted');
      setIsModalOpen(true); // Відкриття модального вікна після завершення донату
    }
  }, []);

  const startDonation = () => {
    localStorage.setItem('donationStarted', 'true');
    window.open('https://send.monobank.ua/jar/AHkZPMTCF', '_blank');
    setIsModalOpen(true); // Відкриття модального вікна відразу після переходу
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    startDonation,
    closeModal
  };
};
