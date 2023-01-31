import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveTimePlayer, 1000));

function saveTimePlayer(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}

if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}
