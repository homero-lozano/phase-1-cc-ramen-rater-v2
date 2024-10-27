// index.js
const fetchData = (url) => fetch(url).then((res) => res.json());
// Callbacks
const handleClick = (ramen) => {
  // Add code
  const ramenDetail = document.getElementById('ramen-detail'); 
  const name = ramenDetail.querySelector('.name');
  const restaurant = ramenDetail.querySelector('.restaurant');
  const image = ramenDetail.querySelector('.detail-image');
  const rating = document.getElementById('rating-display');
  const comment = document.getElementById('comment-display');
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  image.src = ramen.image;
  rating.textContent = ramen.rating;
  comment.textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const form = document.getElementById('new-ramen');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newRamen = {
      name: form.name.value,
      restaurant: form.restaurant.value,
      image: form.image.value,
      rating: form.rating.value,
      comment: form['new-comment'].value,
    };

    // Add the new ramen to the menu
    addRamenToMenu(newRamen);

    // Reset the form fields
    form.reset();
  });
};

const displayRamens = async () => {
  // Add code
  const ramens = await fetchData('http://localhost:3000/ramens');
  const ramenMenu = document.getElementById('ramen-menu');

  ramens.forEach((ramen) => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;

    // Add click event to each ramen image
    img.addEventListener('click', () => handleClick(ramen));

    ramenMenu.appendChild(img);
  });

  // Display the first ramen's details on load
  if (ramens.length > 0) handleClick(ramens[0]);
};

// Helper function to add a new ramen to the menu
const addRamenToMenu = (ramen) => {
  const ramenMenu = document.getElementById('ramen-menu');
  const img = document.createElement('img');
  img.src = ramen.image;
  img.alt = ramen.name;

  // Add click event to the new ramen image
  img.addEventListener('click', () => handleClick(ramen));

  ramenMenu.appendChild(img);
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
