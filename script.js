const slides = [
    {
        "image": "slide1.jpg",
		"tagLine": "Le furet a été domestiqué  avant la domestication du chat."
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Le furet change de couleur en fonction des saison et des mue."
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Certains cousins mustelidés sont immunisés au venins de serpent comme par exemple le zorille du cap."
        
    },
    {
        "image": "slide4.jpg",
        "tagLine": "Le furet aime que sa litière soit toujours propre."
    },
    {
        "image": "slide5.jpg",
        "tagLine": "Pout Pout est le nom qu'on donne au bruit du fufu!"
    },
	{
        "image": "slide6.jpg",
        "tagLine": "Les fufus sont trop mignons"
    },


]

let index = 0



// fonctionnement du slide
// fonctions qui permet de créer les bullet point//

function genererBullet() {
	for (let i = 0; i < slides.length; i++) {
		// Création d'une balise pour les bullets point
		const bullet = document.createElement("div")
		if (i === 0) {
			bullet.className = "dot dot_selected"

		}

		else {
			bullet.className = "dot"
		}


		const dotsBull = document.querySelector(".dots")
		dotsBull.appendChild(bullet)
	}
}



// Premier affichage du caroussel
genererBullet()

// mise en place du Listener pour faire fonctionner les flèches.

const arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", function (slide1) {
	index = index + 1
	if (index>=slides.length){
		index = 0
	}
	const slide = slides[index]
	const bannerImg = document.querySelector(".banner-img")
    const chemin = "./img/slides/";
    bannerImg.src = chemin + slide.image
	const dotSelected = document.querySelector(".dot_selected")
	dotSelected.className = "dot"
	const dots = document.querySelectorAll(".dot")
	dots[index].className = "dot dot_selected"
	const bannerText = document.querySelector(".banner-text")
	bannerText.innerHTML = slide.tagLine





})
console.log(arrowRight)

const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", function (slide1) {
	index = index - 1
	if (index<0){
		index = slides.length-1
	}
	const slide = slides[index]
	const bannerImg = document.querySelector(".banner-img")
    const chemin = "./img/slides/";	bannerImg.src = chemin + slide.image
	const dotSelected = document.querySelector(".dot_selected")
	dotSelected.className = "dot"
	const dots = document.querySelectorAll(".dot")
	dots[index].className = "dot dot_selected"
	const bannerText = document.querySelector(".banner-text")
	bannerText.innerHTML = slide.tagLine

})
console.log(arrowLeft)




