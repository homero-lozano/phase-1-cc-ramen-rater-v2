import { formNode } from "happy-dom/cjs/PropertySymbol.cjs";

// index.js 
const fetchData = (url) => fetch(url).then((res) => res.json());const baseUrl = "http://localhost:3000/ramens";

// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newRamen = {
      name: form['new-name'].value,
      restaurant: form['new-restaurant'].value,
      image: form['new-image'].value,
      rating: form['new-rating'].value,
      comment: form['new-comment'].value,
    };
    console.log('New ramen:', newRamen); 

    // Add the new ramen to the menu
    addRamenToMenu(newRamen);

    // Clear the form after submission
    form.reset();
  });
};


const addRamenToMenu = (ramen) => {
  const ramenMenu = document.getElementById('ramen-menu');
  const img = document.createElement('img'); 
  img.src = ramen.image; 
  img.alt = ramen.name;

  console.log('Appending image:', img);

  img.addEventListener('click', () => handleClick(ramen));
  ramenMenu.appendChild(img);
};
  // Add code


const displayRamens = () => {
  // Add code
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
