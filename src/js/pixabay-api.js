import axios from 'axios';

export default function fetchImg(searchRequest) {
  const options = {
    params: {
      key: '48773957-0ff53b0d4b6397cb99259d9c5',
      q: searchRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}
