import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveTimePlayer, 1000));

function saveTimePlayer() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(STORAGE_KEY, seconds);
  });
}

const data = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(data);
