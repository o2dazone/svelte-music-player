// export const INDEX_URL =
//   'http://d2phn2ea0nqfsq.cloudfront.net/api/musicIndex.json';
export const INDEX_URL = '../index.json';
export const ALBUM_ART_URL = '../art.json';
// export const STREAM_URL =
//   'https://xkjifuezph.execute-api.us-east-1.amazonaws.com/prod/o2m-getStreamUrl?id=';
export const STREAM_URL = '../../music-indexer/songs';
export const STOP_WORDS = ['a', 'the', 'of', 'is'];
export const REPLACE_WEIRD_CHARACTERS = /-|&|\//g;
export const REPLACE_MORE_WEIRD_CHARACTERS = /'|\(|\)|\.|!/g;
export const TRACK_ID_RE = /(\w)+-(\w)+-(\w)+-(\w)+-(\w)+/;

export const getStreamUrl = async trackId => {
  const res = await fetch(`${STREAM_URL}${trackId}`);
  return res.json();
};

export const makeDurationFromMs = ms => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
