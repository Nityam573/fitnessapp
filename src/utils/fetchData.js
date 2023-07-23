export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '86950904c1msh5db7e9374331cafp1eba75jsn1b545ba0abcd',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  }, 
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  headers: {
    'X-RapidAPI-Key': '59d3f7919bmsha4bc13f5e01165ep12ff55jsna5281a71c9d4',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};