import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import alFalah from "../../../img/alfalah-black-300x300.png";
import "./aboutMasjid.styles.scss";

const AboutMasjid = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <section className="section is-large" id="tentang-masjid">
      <animated.div ref={ref} style={props}>
        <div className="container">
          <div className="columns">
            <div className="column is-6 is-offset-2">
              <p className="is-size-4 has-text-weight-medium title">
                Masjid Al-Falah
              </p>
              <p className="about  text">
                Al-Falah sebagai sebuah masjid, telah berdiri sejak lebih dari
                20 tahun yang lalu. Ia tidak hanya menjadi tempat melaksanakan
                ritual ibadah saja. Bahkan sejak didirikannya, ia telah menjadi
                pusat kegiatan sosial, pendidikan dan dakwah bagi masyarakat
                muslim Indonesia di Berlin dan sekitarnya.
              </p>
              <p className="about text">
                Melalui halaman ini, kami berusaha menunjukkan kepada
                saudara-saudara kaum muslimin di tempat lain bagaimana masjid
                Al-Falah Berlin dengan semua pengurus dan jamaahnya menghidupkan
                agama kita, Islam, di tengah budaya barat.
              </p>
            </div>
            <div className="column is-3 is-hidden-mobile">
              <img className="img" src={alFalah} alt="al-falah" />
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default AboutMasjid;
