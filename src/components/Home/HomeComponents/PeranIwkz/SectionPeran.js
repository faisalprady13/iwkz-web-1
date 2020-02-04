import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const SectionPeran = ({ content, judul, kegiatan, image, handleAccordion }) => {
  const [ref, inView] = useInView({
    threshold: 0.3
  });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  return (
    <section className="section">
      <animated.div style={props}>
        <div className="columns is-multiline is-vcentered" ref={ref}>
          <div className="column is-4 is-offset-2 is-hidden-touch">
            <img
              src={require(`${image}`)}
              alt={judul}
              style={{ borderRadius: "30px" }}
            />
          </div>
          <div className="column is-4 ">
            <div className="content">
              <p className="is-size-4">{judul}</p>
              <p>{content}</p>
              {/* <ul>
                {kegiatan.map((acara, i) => (
                  <li key={i}>{acara}</li>
                ))}
              </ul> */}

              {kegiatan.map(({ acara, penjelasan }, i) => (
                <div key={i}>
                  <button
                    className="accordion"
                    onClick={e => handleAccordion(e)}
                  >
                    &#8226; {acara}
                  </button>
                  <div className="penjelasan">
                    <p>{penjelasan} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default SectionPeran;
