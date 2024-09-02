import s from './styles.module.scss';
import chevron from '../../assets/imagesAboutBrigade/44th.separate.big.svg';

export const AboutBrigade = () => {
  return (
    <section id="2" className={s.aboutbrigade}>
      <div className={s.container}>
        <div className={s.flex_wrapper}>
          <div className={s.info}>
            <div className={s.heading_wrapper}>
              <div className={s.heading}>
                <h5>
                  Про <span>бригаду</span>
                </h5>
              </div>
              <div className={s.heading_img}>
                <img src={chevron} alt="chevron-44-oabr" />
              </div>
            </div>
            <div className={s.description}>
              <p>
                44-та окрема артилерійська бригада імені гетьмана Данила
                Апостола. (44 ОАБр, в/ч А3215, пп В1428) — військове
                з&#39;єднання у складі артилерійських військ Збройних сил
                України чисельністю у бригаду. Бригада належить до оперативного
                командування «Захід».
                <br />
                <br />
                Бригада була сформована після початку російської агресії, восени
                2014 року. Вела бої на Бахмутці, під Дебальцевим.
              </p>
            </div>
          </div>
          <div className={s.image_big}>
            <img src={chevron} alt="chevron-44-oabr" />
          </div>
        </div>
      </div>
    </section>
  );
};
