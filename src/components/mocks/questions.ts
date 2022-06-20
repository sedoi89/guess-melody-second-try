import {Questions} from '../../types/question';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const questions: Questions = [
  {
    type: 'genre',
    genre: 'rock',
    answers: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/"Into_the_Oceans_and_the_Air"_%28chorus%29.ogg',
        genre: 'rock',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/"Into_the_Oceans_and_the_Air"_%28chorus%29.ogg',
        genre: 'blues',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/"Into_the_Oceans_and_the_Air"_%28chorus%29.ogg',
        genre: 'jazz',
      },
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/"Into_the_Oceans_and_the_Air"_%28chorus%29.ogg',
        genre: 'rock',
      },
    ],
  }, {
    type: 'artist',
    song: {
      artist: 'Jim Beam',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/"Into_the_Oceans_and_the_Air"_%28chorus%29.ogg',
    },
    answers: [
      {
        picture: `${AVATAR_URL}?rnd=${Math.random()}`,
        artist: 'John Snow',
      },
      {
        picture: `${AVATAR_URL}?rnd=${Math.random()}`,
        artist: 'Jack Daniels',
      },
      {
        picture: `${AVATAR_URL}?rnd=${Math.random()}`,
        artist: 'Jim Beam',
      },
    ],
  },
];

export default questions;
