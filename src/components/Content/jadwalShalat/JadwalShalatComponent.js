import React, {Component} from "react";
import JadwalShalatService from './JadwalShalatService';
import BlockJadwal from './BlockJadwal';
import HijriDate from "hijri-date/lib/safe";
import "./BlockJadwal.css";

class JadwalShalat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curHijri: new HijriDate()
        .toLocaleString()
        .split(" ", 4)
        .join(" ")
    };

    this.jadwalShalatService = new JadwalShalatService();
    this.jadwalShalatService.getTodayPrayTime();
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    return (
      !this.jadwalShalatService.prayTimes.isPrayTimeFetching || (
        <div className="column is-narrow-mobile">
          <p className="has-text-centered has-text-weight-bold is-size-5-mobile">
            Jadwal Shalat
          </p>
          <p className="has-text-centered subhas-text-weight-bold is-5 is-size-8-mobile is-hidden-mobile">
            {this.state.curTime}
          </p>
          <p className="has-text-centered subhas-text-weight-bold is-5 is-size-8-mobile " style={{marginBottom: 30}}>
            {this.state.curHijri}
          </p>

          {this.jadwalShalatService.prayTimeKeys.map(pray =>
            (
            <BlockJadwal
              prayName={pray}
              prayTime={this.jadwalShalatService.prayTimes[pray]} />
            )
          )}
        </div>
      )
    );
  }
}

export default JadwalShalat;
