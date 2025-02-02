import axios from 'axios';

const YOUR_ACCESS_KEY = '-WO-zOtCPTXRH7NeI_g-zs1gEZBytPATvKuRQnbUcdE';

export const fetchImages = async (query, page = 0) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&&page=${page}&client_id=${YOUR_ACCESS_KEY}`
  );

  return response.data;
};
