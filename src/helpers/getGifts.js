const API_KEY = import.meta.env.VITE_API_KEY;

export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifts = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifts;
};