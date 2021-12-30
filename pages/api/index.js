export const getPlanets = async (page = 1,limit = 10) => 
  await axios.get('https://swapi.dev/api/planets', {
      params: {
          page: page,
          limit: limit
      }
  });