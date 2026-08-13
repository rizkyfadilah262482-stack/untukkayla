// ================================
// 1. GANTI TANGGAL JADIAN DI SINI
// Format: 'YYYY-MM-DDTHH:mm:ss'
// ================================
const anniversaryDate = new Date('2024-08-11T00:00:00');

// ================================
// 2. HITUNG OTOMATIS "TAHUN KE-"
// ================================
function updateYearsBadge() {
  const now = new Date();
  let years = now.getFullYear() - anniversaryDate.getFullYear();
  const hasPassedThisYear =
    now.getMonth() > anniversaryDate.getMonth() ||
    (now.getMonth() === anniversaryDate.getMonth() && now.getDate() >= anniversaryDate.getDate());
  if (!hasPassedThisYear) years -= 1;
  years = Math.max(years, 0);

  const yearsEl = document.querySelector('.years');
  yearsEl.textContent = `${years} 🎉`;
}

// ================================
// 3. COUNTER HARI / JAM / MENIT / DETIK
// ================================
function updateCounter() {
  const now = new Date();
  const diff = now - anniversaryDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();
updateYearsBadge();

// ================================
// 4. HATI MELAYANG DI BACKGROUND
// ================================
const heartsContainer = document.getElementById('hearts-container');
const heartEmojis = ['💗', '💕', '💖', '💘', '❤️'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 16 + 14) + 'px';
  const duration = Math.random() * 4 + 6;
  heart.style.animationDuration = duration + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 600);

// ================================
// 5. BUKA / TUTUP SURAT CINTA
// ================================
const openLetterBtn = document.getElementById('open-letter-btn');
const closeLetterBtn = document.getElementById('close-letter-btn');
const envelopeOverlay = document.getElementById('envelope-overlay');

openLetterBtn.addEventListener('click', () => {
  envelopeOverlay.classList.add('active');
});

closeLetterBtn.addEventListener('click', () => {
  envelopeOverlay.classList.remove('active');
});

envelopeOverlay.addEventListener('click', (e) => {
  if (e.target === envelopeOverlay) {
    envelopeOverlay.classList.remove('active');
  }
});

// ================================
// 6. TOMBOL "SAYANG BANGET" VS "NGGAK" (LUCU-LUCUAN)
// ================================
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const answerText = document.getElementById('answer-text');
const buttonGroup = document.querySelector('.button-group');

let noClickCount = 0;
const noResponses = [
  'Yakin nih? 🥺',
  'Coba klik lagi deh...',
  'Masa sih? 😢',
  'Aku ga percaya!',
  'Tombolnya kabur ya 😆'
];

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('click', () => {
  moveNoButton();
  answerText.textContent = noResponses[noClickCount % noResponses.length];
  noClickCount++;
});

function moveNoButton() {
  const groupRect = buttonGroup.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = groupRect.width - btnRect.width;
  const maxY = 80;

  const randomX = Math.random() * maxX - maxX / 2;
  const randomY = Math.random() * maxY - maxY / 2;

  noBtn.style.position = 'relative';
  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
}

yesBtn.addEventListener('click', () => {
  answerText.textContent = 'Yeayy makasih sayangku 🥰💗 Aku sayang kamu jugaaaa!';
  document.body.style.animation = 'none';
});