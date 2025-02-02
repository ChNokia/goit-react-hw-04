import axios from 'axios';

export const fetchImages = async (query, page = 0) => {
  console.log(import.meta.env.VITE_API_ID);
  console.log(import.meta.env.VERCEL_API_KEY);
  console.log(import.meta.env.REACT_API_KEY);
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&&page=${page}&client_id=${
      import.meta.env.VITE_API_ID
    }`
  );

  return response.data;
};
