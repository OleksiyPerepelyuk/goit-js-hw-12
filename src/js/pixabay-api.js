import axios from 'axios';

const API_KEY = '48773957-0ff53b0d4b6397cb99259d9c5';

export default async function fetchImg(searchRequest, page) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';

  const params = {
    key: API_KEY,
    q: searchRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: page,
  };

  const images = await axios.get(BASE_URL + END_POINT, { params });
  return images;
}
