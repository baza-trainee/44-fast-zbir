import { useState } from 'react';
import s from './styles.module.scss';

const ModalShare = ({ onClose }) => {
  const [textLink, setTextLink] = useState('скопіювати');
  const [clicked, setClicked] = useState(false);

  const shareUrl = window.location.href;
  // const shareUrl = 'https://zbir-44-brigada.vercel.app/';

  const handleClick = () => {
    navigator.clipboard.writeText(shareUrl);
    setTextLink('посилання скопійоване');
    setClicked(true);
  };

  return (
    <div className={s.WrapOverlay}>
      <div className={s.overlay}>
        <button className={s.btn} onClick={onClose}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.59261 5.81035e-06L2.11785e-05 2.5926L7.40741 9.99999L0 17.4074L2.59259 20L10 12.5926L17.4074 20L20 17.4074L12.5926 9.99999L20 2.59259L17.4074 0L10 7.4074L2.59261 5.81035e-06Z"
              fill="#D9D9D9"
            />
          </svg>
        </button>
        <h3 className={s.tittle}>
          поділитись <span>з друзями</span>
        </h3>
        <p className={s.text}>Поділись сайтом через соціальні мережі</p>
        <div className={s.socialShare}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=Терміновий збір на необхідне обладнання для 44-ї бригади!.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="30.000000"
              height="30.000000"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={s.icon}
            >
              <defs />
              <path
                id="fb"
                d="M26.66 0L3.33 0C1.5 0 0 1.5 0 3.33L0 26.66C0 28.5 1.5 30 3.33 30L15 30L15 18.33L11.66 18.33L11.66 14.2L15 14.2L15 10.79C15 7.18 17.02 4.65 21.27 4.65L24.28 4.65L24.28 8.99L22.28 8.99C20.62 8.99 20 10.24 20 11.39L20 14.21L24.27 14.21L23.33 18.33L20 18.33L20 30L26.66 30C28.5 30 30 28.5 30 26.66L30 3.33C30 1.5 28.5 0 26.66 0Z"
                fill="#FFCC00"
              />
            </svg>
          </a>

          <a
            href={`https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${shareUrl}&text=Терміновий збір на необхідне обладнання для 44-ї бригади!.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="29.819824"
              height="30.000000"
              viewBox="0 0 29.8198 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={s.icon}
            >
              <defs />
              <path
                id="in"
                d="M27.61 0L2.2 0C1.91 -0.01 1.63 0.04 1.37 0.15C1.1 0.25 0.86 0.41 0.65 0.61C0.45 0.81 0.29 1.05 0.17 1.31C0.06 1.57 0 1.85 0 2.14L0 27.85C0 28.14 0.06 28.42 0.17 28.68C0.29 28.94 0.45 29.18 0.65 29.38C0.86 29.58 1.1 29.74 1.37 29.84C1.63 29.95 1.91 30 2.2 29.99L27.61 29.99C27.9 30 28.18 29.95 28.44 29.84C28.71 29.74 28.95 29.58 29.16 29.38C29.36 29.18 29.52 28.94 29.64 28.68C29.75 28.42 29.81 28.14 29.81 27.85L29.81 2.14C29.81 1.85 29.75 1.57 29.64 1.31C29.52 1.05 29.36 0.81 29.16 0.61C28.95 0.41 28.71 0.25 28.44 0.15C28.18 0.04 27.9 -0.01 27.61 0ZM9.04 25.1L4.54 25.1L4.54 11.61L9.04 11.61L9.04 25.1ZM6.79 9.72C6.17 9.72 5.57 9.47 5.14 9.03C4.7 8.59 4.45 8 4.45 7.38C4.45 6.75 4.7 6.16 5.14 5.72C5.57 5.28 6.17 5.04 6.79 5.04C7.12 5 7.45 5.03 7.77 5.13C8.09 5.23 8.38 5.4 8.62 5.62C8.87 5.84 9.07 6.11 9.2 6.41C9.34 6.72 9.41 7.04 9.41 7.38C9.41 7.71 9.34 8.03 9.2 8.34C9.07 8.64 8.87 8.91 8.62 9.13C8.38 9.35 8.09 9.52 7.77 9.62C7.45 9.72 7.12 9.75 6.79 9.72ZM25.27 25.1L20.77 25.1L20.77 17.86C20.77 16.04 20.12 14.86 18.49 14.86C17.98 14.86 17.49 15.02 17.08 15.31C16.66 15.61 16.35 16.02 16.18 16.5C16.06 16.85 16.01 17.22 16.03 17.59L16.03 25.09L11.53 25.09L11.53 11.59L16.03 11.59L16.03 13.5C16.44 12.79 17.03 12.2 17.75 11.8C18.47 11.41 19.28 11.21 20.09 11.25C23.09 11.25 25.27 13.18 25.27 17.34L25.27 25.1Z"
                fill="#FFCC00"
              />
            </svg>
          </a>

          <a
            href={`https://telegram.me/share/url?url=${shareUrl}&text=Терміновий збір на необхідне обладнання для 44-ї бригади!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="30.000000"
              height="30.000000"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={s.icon}
            >
              <defs />
              <rect
                id="Rectangle 8"
                rx="3.000000"
                width="30.000000"
                height="30.000000"
                fill="#FFCC00"
              />
              <path
                id="Vector"
                d="M6.4 14.26C11.86 11.88 15.51 10.31 17.33 9.55C22.54 7.38 23.62 7.01 24.32 7C24.48 6.99 24.83 7.03 25.05 7.21C25.24 7.37 25.29 7.58 25.32 7.72C25.34 7.87 25.37 8.2 25.35 8.46C25.07 11.42 23.85 18.62 23.22 21.94C22.96 23.34 22.44 23.81 21.94 23.86C20.85 23.96 20.03 23.14 18.97 22.45C17.32 21.37 16.39 20.7 14.79 19.64C12.94 18.42 14.14 17.75 15.19 16.65C15.47 16.37 20.27 12 20.36 11.61C20.37 11.56 20.38 11.37 20.27 11.28C20.16 11.18 20 11.21 19.88 11.24C19.72 11.28 17.08 13.02 11.98 16.47C11.23 16.98 10.55 17.23 9.94 17.22C9.27 17.2 7.98 16.84 7.03 16.53C5.85 16.15 4.92 15.94 5 15.3C5.04 14.96 5.51 14.61 6.4 14.26Z"
                fill="#FFFFFF"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="30.000000"
              height="30.000000"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={s.icon}
            >
              <defs />
              <path
                id="ig"
                d="M6.42 0C4.72 0 3.08 0.67 1.88 1.88C0.67 3.08 0 4.72 0 6.42L0 23.57C0 25.27 0.67 26.91 1.88 28.11C3.08 29.32 4.72 30 6.42 30L23.57 30C25.27 29.99 26.91 29.32 28.11 28.11C29.32 26.91 30 25.27 30 23.57L30 6.42C29.99 4.72 29.32 3.08 28.11 1.88C26.91 0.67 25.27 0 23.57 0L6.42 0ZM25.42 6.43C25.42 6.92 25.22 7.39 24.88 7.74C24.53 8.09 24.06 8.28 23.57 8.28C23.07 8.28 22.6 8.09 22.26 7.74C21.91 7.39 21.71 6.92 21.71 6.43C21.71 5.94 21.91 5.47 22.26 5.12C22.6 4.77 23.07 4.58 23.57 4.58C24.06 4.58 24.53 4.77 24.88 5.12C25.22 5.47 25.42 5.94 25.42 6.43ZM15 9.86C13.64 9.86 12.33 10.4 11.37 11.36C10.4 12.33 9.86 13.63 9.86 14.99C9.86 16.36 10.4 17.66 11.37 18.62C12.33 19.59 13.64 20.13 15 20.13C16.36 20.13 17.67 19.59 18.63 18.62C19.59 17.66 20.13 16.36 20.13 14.99C20.13 13.63 19.59 12.33 18.63 11.36C17.67 10.4 16.36 9.86 15 9.86ZM7.39 14.99C7.39 12.98 8.19 11.04 9.62 9.62C11.05 8.19 12.98 7.39 15 7.39C17.01 7.39 18.95 8.19 20.37 9.62C21.8 11.04 22.6 12.98 22.6 14.99C22.6 17.01 21.8 18.94 20.37 20.37C18.95 21.8 17.01 22.6 15 22.6C12.98 22.6 11.05 21.8 9.62 20.37C8.19 18.94 7.39 17.01 7.39 14.99Z"
                fill="#FFCC00"
              />
            </svg>
          </a>

          <a
            href={`https://x.com/intent/post?url=${shareUrl}&text=Терміновий збір на необхідне обладнання для 44-ї бригади!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="30.000000"
              height="30.000000"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className={s.icon}
            >
              <defs />
              <rect
                id="Rectangle 9"
                rx="3.000000"
                width="30.000000"
                height="30.000000"
                fill="#FFCC00"
              />
              <path
                id="Vector"
                d="M20.12 8L22.68 8L17.09 14.35L23.66 23L18.52 23L14.49 17.75L9.88 23L7.32 23L13.3 16.2L7 8L12.27 8L15.91 12.79L20.12 8ZM19.22 21.47L20.64 21.47L11.5 9.44L9.98 9.44L19.22 21.47Z"
                fill="#FFFFFF"
              />
            </svg>
          </a>
        </div>
        <p className={s.text}>або скопіюйте посилання</p>
        <button
          className={`${s.button} ${clicked ? s.clicked : ''}`}
          onClick={handleClick}
        >
          {textLink}
        </button>
      </div>
    </div>
  );
};

ModalShare.propTypes = {
  onClose: () => {}
};

export default ModalShare;
