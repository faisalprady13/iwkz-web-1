import {observable, action} from 'mobx';
import {jadwalShalatURL} from "../../../api/wp-api";

class JadwalShalatService {
  @observable prayTimes = {};
  @observable prayTimeKeys = [
    'subuh', 'terbit', 'dzuhur', 'ashr', 'maghrib', 'isya'
  ];

  @action
  async getTodayPrayTime() {
    try {
      const result = await fetch(jadwalShalatURL);
      const prayTimeData = await result.json();

      this.prayTimes = {...prayTimeData, isPrayTimeFetching: true};
    } catch (e) {
      this.prayTimes = {isPrayTimeFetching: false};
    }
  }
}

export default JadwalShalatService;