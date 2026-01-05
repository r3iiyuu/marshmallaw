const popCard   = document.getElementById('popCard');
const flipper   = document.getElementById('flipper');
const bgVid     = document.getElementById('bgVid');
const hotZone   = document.getElementById('hotZone');
const closeZone = document.getElementById('closeZone');

const lockScroll   = () => document.body.style.overflow = 'hidden';
const unlockScroll = () => document.body.style.overflow = '';

/* open */
hotZone.onclick = () => {
  popCard.style.display = 'grid';
  lockScroll();
};

/* flip */
flipper.onclick = () => flipper.classList.toggle('flipped');

/* close */
function closeCard() {
  popCard.style.animation = 'zoomOut .2s ease forwards';
  unlockScroll();
  setTimeout(() => {
    popCard.style.display = 'none';
    popCard.style.animation = '';
    flipper.classList.remove('flipped');
  }, 200);
}
closeZone.onclick = closeCard;

/* ESC */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && popCard.style.display === 'grid') closeCard();
});

/* autoplay insurance */
document.addEventListener('click', () => bgVid.play(), { once: true });