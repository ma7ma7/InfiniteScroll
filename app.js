// Api Key : yB39omRSE7SZsUZ63NHyHlQ1CA1jFVIMrCyE02Z-dRQ
// Secret key : mdu1ym8t2aCQZaAEEi3V-ruRo7FvNb6vKQYb8usmTOM
const apiKey = 'yB39omRSE7SZsUZ63NHyHlQ1CA1jFVIMrCyE02Z-dRQ';
const count = 10;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unsplash api
async function getPhotos() {
  try {
    const photos = await fetch(apiURL);
    const data = await photos.json();

    console.log(data);
  } catch (error) {
    console.log(error)
  }
}

getPhotos()