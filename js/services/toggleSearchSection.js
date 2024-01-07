const searchBtn = document.querySelector('.search-btn');
const searchContainer = document.getElementById('searchContainer');
const closeBtn = document.querySelector('.close-btn');

searchBtn.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  searchContainer.classList.remove('active');
});
