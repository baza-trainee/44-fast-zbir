import s from './styles.module.scss';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton
} from 'react-share';

const ModalShare = () => {
  //   const shareUrl = window.location.href;
  const shareUrl = '44FastZbir.com';
  const handleClick = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className={s.WrapOverlay}>
      <div className={s.overlay}>
        <h3 className={s.tittle}>
          поділитись <span>з друзями</span>
        </h3>
        <p className={s.text}>Поділись сайтом через соціальні мережі</p>
        <div className={s.socialShare}>
          <FacebookShareButton url={shareUrl} hashtag={'#44FastZbir'}>
            <div className={`${s.icon} ${s.fb}`}></div>
          </FacebookShareButton>

          <LinkedinShareButton
            source={shareUrl}
            url={shareUrl}
            title="Терміновий збір на необхідне обладнання для 44-ї бригади!"
            summary="Допоможемо нашому війську дати потужну відсіч ворогу разом. Терміновий збір на необхідне обладнання для 44-ї бригади!4-та окрема артилерійська бригада імені гетьмана Данила Апостола (44 ОАБр, в/ч А3215, пп В1428) — військове з'єднання у складі артилерійських військ Збройних сил України чисельністю у бригаду. Місце дислокації — м. Тернопіль. Бригада належить до оперативного командування «Захід».
    Бригада була сформована після початку російської агресії, восени 2014 року. Вела бої на Бахмутці, під Дебальцевим."
          >
            <div className={`${s.icon} ${s.in}`}></div>
          </LinkedinShareButton>

          <TelegramShareButton
            url={shareUrl}
            title="Терміновий збір на необхідне обладнання для 44-ї бригади!"
          >
            <div className={`${s.icon} ${s.tMe}`}></div>
          </TelegramShareButton>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.icon} ${s.ig}`}
          ></a>

          <TwitterShareButton
            url={shareUrl}
            hashtag="#44FastZbir"
            title="Терміновий збір на необхідне обладнання для 44-ї бригади!"
          >
            <div className={`${s.icon} ${s.x}`}></div>
          </TwitterShareButton>
        </div>
        <p className={s.text}>або скопіюйте посилання</p>
        <button className={s.button} onClick={handleClick}>
          скопіювати
        </button>
      </div>
    </div>
  );
};

export default ModalShare;
