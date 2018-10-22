const endPoint = 'https://iwkz.de/wp-json/wp/v2';
const mjuanJadwalShalatURL = 'https://api.mjuan.info/jadwalshalat';
const jadwalShalatURL = mjuanJadwalShalatURL+'/berlin';//'http://iwkz.de/jdwlshalat_ibmus';
const wpAPI = {
	posts: `${endPoint}/posts?_embed`,
	ibmus: `${jadwalShalatURL}/jdwlshalat_ibmus/`,
	mjuan: `${mjuanJadwalShalatURL}/berlin`,
}

export {wpAPI, jadwalShalatURL}
