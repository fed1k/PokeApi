import getPoke from '../pokeApi.js';

beforeAll(() => {
  global.fetch = jest.fn(() => {
    Promise.resolve({
      json: () => Promise.resolve({ name: 'pikachu', height: 40 }),
    });
  });
});

describe('getPoke Api call', () => {
  test('Getting data form Api', async () => {
    const getData = await getPoke('pikachu');

    expect(getData).toBeDefined();
  });

  test('Correct fetch URL', async () => {
    expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/pikachu/');
  });
});
