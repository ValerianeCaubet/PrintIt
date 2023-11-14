// tableau de la diapositive 
const slides = [
	{
	  "image":"slide1.jpg",
	  "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image":"slide2.jpg",
	  "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image":"slide3.jpg",
	  "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image":"slide4.png",
	  "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];

    // Récupère les éléments flèches
	const leftArrow = document.querySelector('.arrow_left');
	const rightArrow = document.querySelector('.arrow_right');
	
	// Ajoute un event listener pour la flèche gauche
	leftArrow.addEventListener('click', function() {
	  changeSlide(-1);
	});
	
	// Ajoute un event listener pour la flèche droite
	rightArrow.addEventListener('click', function() {
	  changeSlide(1);
	});

    // Récupère l'élément point 
	const dotsContainer = document.querySelector('.dots');
	
	
	// Compte le nombre de slides dans le tableau 
	const numberOfSlides = slides.length;
	let currentIndex = 0; // Suit l'index de la diapositive 
	
	// Boucle pour ajouter un point par image 
	for (let i = 0; i < numberOfSlides; i++) {
	  const dot = document.createElement('div');
	  dot.classList.add('dot');
	
	  // Ajoute la classe 'dot_selected' au premier point
	  if (i === 0) {
		dot.classList.add('dot_selected');
	  }
	
	  dotsContainer.appendChild(dot);
	}
  
	const dots = dotsContainer.querySelectorAll('.dot'); // Récupère tous les points  

	
  // Fonction pour changer la diapositive
  function changeSlide(direction) {
	// Met à jour l'index de la diapositive actuelle
	currentIndex = (currentIndex + direction + numberOfSlides) % numberOfSlides;
	
	// Met à jour le bullet point actif
	updateDots();
	
	// Met à jour l'image
	updateBanner();
	
	// Met à jour le texte correspondant à l'image
	updateText();
  }
  
  // Fonction pour mettre à jour les bullet points
  function updateDots() {
	dots.forEach((dot, index) => {
	  dot.classList.toggle('dot_selected', index === currentIndex);
	});
  }
  
  // Fonction pour mettre à jour le contenu de la bannière
  function updateBanner() {
	const bannerImg = document.querySelector('.banner-img');
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  }
  
  // Fonction pour mettre à jour le texte correspondant à l'image
  function updateText() {
	const bannerText = document.querySelector('#banner p');
	bannerText.innerHTML = slides[currentIndex].tagLine;
  }
  

  






