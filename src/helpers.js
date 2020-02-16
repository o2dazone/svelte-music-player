export const INDEX_URL = 'http://d2phn2ea0nqfsq.cloudfront.net/api/musicIndex.json';
export const STREAM_URL = 'https://xkjifuezph.execute-api.us-east-1.amazonaws.com/prod/o2m-getStreamUrl?id=';
export const STOP_WORDS = ['a', 'the', 'of', 'is'];
export const REPLACE_WEIRD_CHARACTERS = /-|&|\//g;
export const REPLACE_MORE_WEIRD_CHARACTERS = /'|\(|\)|\.|!/g;

export const getStreamUrl = async(trackId) => {
  const res = await fetch(STREAM_URL);
  return res.json();
}

export const getWords = str => {
  const rval = [];
  const words = str.toLowerCase().replace(REPLACE_WEIRD_CHARACTERS, ' ').replace(REPLACE_MORE_WEIRD_CHARACTERS, '').split(/ +/);
  words.forEach(w => {
    if (STOP_WORDS.indexOf(w) === -1 && rval.indexOf(w) === -1) {
      rval.push(w);
    }
  });
  return rval;
};

export const intersection = (set1 = [], set2) => {
  const rval = [];
  set1.forEach(e => {
    if (set2.indexOf(e) !== -1) {
      rval.push(e);
    }
  });

  return rval;
};



export const makeDurationFromMs = ms => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};