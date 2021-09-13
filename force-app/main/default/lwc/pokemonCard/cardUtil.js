// const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
// const IMG_URL =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export const getInfo = async (url) => {
  let info = fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let pic = result.sprites.other.dream_world.front_default;
      return pic ? pic : null;
    });
  const img_url = await info;
  return img_url;
};
