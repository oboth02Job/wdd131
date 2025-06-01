

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Nairobi City Kenya",
      location: "Nairobi City, Kenya",
      dedicated: "2025, May, 18",
      area: 19870,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg City, South Africa",
      dedicated: "1985, August, 24-25",
      area:  19184 ,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
   {
    templeName: "Kinshasa Democratic Republic of the Congo",
      location: "51 Avenue de L'OUA, Quartier Basoko, GB, Commune de Ngaliema, Kinshasa",
      dedicated: "2019, April, 14",
      area: 12000 ,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
   },
  ];


  //Get a reference to the container element where cards will be displayed
  const container = document.getElementById('temple-cards-container');
  //loop through each temple in the array
  function displayTemples(templeArray) {
    container.innerHTML = "";

    templeArray.forEach(temple => {
      const card = document.createElement('div');
      card.classList.add(temple-card)

      const name = document.createElement('h2');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

     const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement('img');

    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    container.appendChild(card);

});
  }

displayTemples(temples);

     const oldFilter = document.getElementById('old-filter');

  oldFilter.addEventListener('click',(event)=> {
    event.preventDefault();

    const oldTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(',')[0]);
      return year < 1900;
    })

    displayTemples(oldTemples);
  });

  const newFilter = document.getElementById('new-filter');

  newFilter.addEventListener('click',(event) => {
    event.preventDefault();

    const newTemples = temples.filter(temple => {
      const year = parseInt(temple.dedicated.split(',')[0]);
      return year > 2000;
    })

    displayTemples(newTemples);
  })

  const largeFilter = document.getElementById('large-filter');

  largeFilter.addEventListener('click',(event) => {
    event.preventDefault();

    const largeTemples = temples.filter(temple => {
      return temple.area > 90000;
    });

    displayTemples(largeTemples);
  })

  const smallFilter = document.getElementById('small-filter');

  smallFilter.addEventListener('click', (event) => {
    event.preventDefault();

    const smallTemples = temples.filter(temple => {
      return temple.area < 10000;
    }) 

    displayTemples(smallTemples);
  })


