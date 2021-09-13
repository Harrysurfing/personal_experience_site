const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getNames = async () => {
  let names = fetch(BASE_URL + "?offset=0&limit=386")
    .then((result) => result.json())
    .then((data) => {
      //   console.log(data);
      return data.results;
    });

  const nameResults = await names;
  return nameResults;
};
