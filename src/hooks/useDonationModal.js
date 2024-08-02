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
    }
  }, []);

  const startDonation = () => {
    localStorage.setItem('donationStarted', 'true');
    window.location.href = 'https://send.monobank.ua/jar/AHkZPMTCF';
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
