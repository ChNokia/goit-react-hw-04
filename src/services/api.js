import axios from 'axios';

export const fetchImages = async (query, page = 0) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&&page=${page}&client_id=${
      import.meta.env.VERCEL_API_KEY
    }`
  );

  return response.data;
};
