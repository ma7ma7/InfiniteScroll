const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];

// Unsplash API
const apiKey = 'yB39omRSE7SZsUZ63NHyHlQ1CA1jFVIMrCyE02Z-dRQ';
const count = 10;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper function to set attributes
function newAttribute(element, attributes) {
  for(const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create ELement
function displayPhotos() {
  photosArray.forEach(photo => {
    // Create Th ancore point
    const item = document.createElement('a');
    newAttribute(item, 
      {
        href: photo.links.html,
        target: '_blank'
      }
    );

    // Create the image
    const img = document.createElement('img');
    newAttribute(img,
      {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description
      } 
    )
    // Put img inside a
    item.appendChild(img);

    // put the element inside image COntainer
    imageContainer.appendChild(item);
  })
}

// Get photos from unsplash api
async function getPhotos() {
  try {
    const photos = await fetch(apiURL);
    photosArray = await photos.json();
    displayPhotos();
  } catch (error) {
    console.log(error)
  }
}

getPhotos()