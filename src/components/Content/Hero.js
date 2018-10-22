import React, { Component } from "react";
import JadwalShalat from "./jadwalShalat/JadwalShalatComponent";

class Hero extends Component {
  render() {
       return (
      <div className="container">
        <div className="columns ">
          <div
            className="column is-hidden-mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left"
            }}
          >
            <p className="is-size-5">IWKZ</p>
            <p className="title is-size-1 is-size-3-touch">
              Indonesisches Weisheits- und Kulturzentrum e.V.
            </p>
            {/* <p className="heading">Weisheits-</p>
            <p className="heading">und Kulturzentrum e.V.</p> */}
          </div>
        <JadwalShalat />
        </div>
      </div>
    );
  }
}

export default Hero;
