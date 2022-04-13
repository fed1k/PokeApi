// 'https://pokeapi.co/api/v2/pokemon/' BASE URL
// kLuLDD4JnKfdNSgV622k INVOLVEMENT KEY

const getPoke = async (pokeId) => {
  try {
    const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
    const loaded = await poke.json();
    return loaded;
  } catch (e) {
    return e;
  }
};

export default getPoke;
