const apiKey = 'DEMO_KEY'; // Replace with your NASA API key
const picSection = document.querySelector('.picture-of-day');
const picImg = picSection.querySelector('img');
const picTitle = picSection.querySelector('h2');
const picDesc = picSection.querySelector('p');
const dateInput = document.getElementById('date');
const dateForm = document.getElementById('date-form');
const galleryContainer = document.querySelector('.gallery-cards');

// Set max date as today for date input
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('max', today);

// Local fallback gallery data (your images)
const localGallery = [
  {
    url: 'images/earth.png',
    title: 'Earth',
    explanation: 'Beautiful image of Earth from space.'
  },
  {
    url: 'images/nebula.png',
    title: 'Nebula',
    explanation: 'A stunning nebula glowing with cosmic dust.'
  },
  {
    url: 'images/moon.png',
    title: 'Moon',
    explanation: 'The Moon’s surface showing craters and terrain.'
  }
];

// Fetch Picture of the Day for given date or today
async function fetchPictureOfDay(date = '') {
  const url = date
    ? `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
    : `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch picture');
    const data = await response.json();

    updatePictureOfDay(data);
    saveToLocalStorage('pictureOfDay', data);
  } catch (error) {
    console.error(error);
    loadFromLocalStorage('pictureOfDay');
  }
}

// Update Picture of the Day section with data
function updatePictureOfDay(data) {
  picImg.src = data.url;
  picImg.alt = data.title;
  picTitle.textContent = data.title;
  picDesc.textContent = data.explanation;
}

// Save data to localStorage
function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Load data from localStorage and update UI
function loadFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  if (data) updatePictureOfDay(data);
}

// Fetch recent pictures for gallery (last 3 days)
async function fetchRecentPictures() {
  const dates = [];
  const todayDate = new Date();

  for (let i = 0; i < 3; i++) {
    const d = new Date(todayDate);
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().split('T')[0]);
  }

  try {
    const promises = dates.map(date =>
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
        .then(res => res.json())
    );
    const pictures = await Promise.all(promises);
    updateGallery(pictures);
    saveToLocalStorage('galleryPictures', pictures);
  } catch (error) {
    console.error(error);
    loadGalleryFromLocalStorage();
  }
}

function updateGallery(pictures) {
  galleryContainer.innerHTML = ''; // Clear old content
  pictures.forEach(pic => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${pic.url}" alt="${pic.title}" />
      <h3>${pic.title}</h3>
      <p>${pic.explanation.substring(0, 100)}...</p>
    `;
    galleryContainer.appendChild(card);
  });
}

function loadGalleryFromLocalStorage() {
  const pictures = JSON.parse(localStorage.getItem('galleryPictures'));
  if (pictures) updateGallery(pictures);
  else updateGallery(localGallery); // fallback to local images
}

// Event listener for form submit (date picker)
dateForm.addEventListener('submit', e => {
  e.preventDefault();
  const selectedDate = dateInput.value;
  if (selectedDate) {
    fetchPictureOfDay(selectedDate);
  }
});

// On page load
window.addEventListener('DOMContentLoaded', () => {
  // Load from localStorage or fetch new data
  loadFromLocalStorage('pictureOfDay');
  loadGalleryFromLocalStorage();

  // Fetch fresh data in the background
  fetchPictureOfDay();
  fetchRecentPictures();
});
