const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RizkiI1q9bDyDUIoyu8m';
const comments = '/comments';

async function getComments(id, type) {
  const response = await fetch(`${baseURL}${type}?item_id=${id}`);
  const result = await response.json();

  return result;
}

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve([
      {
        comment: 'adfadf',
        username: 'Test',
        creation_date: '2022-04-12',
      },
      {
        comment: 'adfadf',
        username: 'Test',
        creation_date: '2022-04-12',
      },
      {
        comment: 'adfadf',
        username: 'Test',
        creation_date: '2022-04-12',
      },
      {
        comment: 'adfadf',
        username: 'Test',
        creation_date: '2022-04-12',
      },
    ]),
  });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('Test Number of comments', () => {
  test('There should be 4 comments', async () => {
    const commentCount = await getComments('test', comments);
    expect(commentCount.length).toEqual(4);
  });
});