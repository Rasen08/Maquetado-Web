// Datos de los personajes
const characters = [
    {
        name: "Shogun Raiden",
        desc: "Con una determinación inquebrantable, empuña el trueno para preservar su visión de la eternidad.",
        img: "./assets/img/characters/shogun-raiden-splashart.png",
        details: [
            { iconItem: "./assets/img/icons/item.svg", label: "Constelación: Imperatrix Umbrosa", icon: "./assets/img/icons/shogun-raiden-constellation.png" },
            { iconItem: "./assets/img/icons/item.svg", label: "Poder elemental: Electro", icon: "./assets/img/icons/electro-icon.svg" },
            { iconItem: "./assets/img/icons/item.svg", label: "Arma: Lanza", icon: "./assets/img/icons/electro-lance.png" },
            { iconItem: "./assets/img/icons/item.svg", label: "Rol: DPS | Sub DPS | Soporte", icon: "" }, // Sin ícono
            { iconItem: "./assets/img/icons/item.svg", label: "Región: Inazuma", icon: "" },
            { iconItem: "./assets/img/icons/item.svg", label: "Rareza: 5 estrellas", icon: "./assets/img/icons/five-stars-electro.svg" }
        ]
    },
    {
        name: "Zhongli",
        desc: "Con la sabiduría de eras pasadas y una fuerza tan sólida como la roca, protege el equilibrio del mundo con calma imperturbable.",
        img: "./assets/img/characters/zhongli-splashart.png",
        details: [
            { iconItem: "./assets/img/icons/item.svg", label: "Constelación: Lapis Dei", icon: "./assets/img/icons/zhongli-constellation.png" },
            { iconItem: "./assets/img/icons/item.svg", label: "Poder elemental: Geo", icon: "./assets/img/icons/geo-icon.svg" },
            { iconItem: "./assets/img/icons/item.svg", label: "Arma: Lanza", icon: "./assets/img/icons/geo-lance.png" },
            { iconItem: "./assets/img/icons/item.svg", label: "Rol: Soporte | Escudo", icon: "" },
            { iconItem: "./assets/img/icons/item.svg", label: "Región: Liyhue", icon: "" },
            { iconItem: "./assets/img/icons/item.svg", label: "Rareza: 5 estrellas", icon: "./assets/img/icons/five-stars-geo.svg" }
        ]
    },
    {
        name: "Shenhe",
        desc: "Con un espíritu marcado por el aislamiento y una disciplina sin igual, su conexión con los adeptos la convierte en una fuerza sobrenatural en combate.",
        img: "./assets/img/characters/shenhe-splashart.png",
        details: [
            { iconItem: "./assets/img/icons/item.svg", label: "Constelación: Crista Doloris", icon: "./assets/img/icons/shenhe-constellation.png" },
            { iconItem: "./assets/img/icons/item.svg", label: "Poder elemental: Cryo", icon: "./assets/img/icons/cryo-icon.svg" },
            { iconItem: "./assets/img/icons/item.svg", label: "Arma: Lanza", icon: "./assets/img/icons/cryo-lance.png" },
            { iconItem: "./assets/img/icons/item.svg", label: "Rol: Soporte | Escudo", icon: "" },
            { iconItem: "./assets/img/icons/item.svg", label: "Región: Liyhue", icon: "" },
            { iconItem: "./assets/img/icons/item.svg", label: "Rareza: 4 estrellas", icon: "./assets/img/icons/four-stars-cryo.svg" }
        ]
    }
    // Agrega más personajes aquí...
];

let currentIndex = 0;
const characterImg = document.getElementById("characterImg");
const characterName = document.getElementById("characterName");
const characterDesc = document.getElementById("characterDesc");
const characterDetails = document.getElementById("characterDetails");
const contrastBar = document.getElementById("contrastBar");
const characterInfo = document.getElementById("characterInfo");

// Actualiza la información del personaje
function updateCharacter(index) {
    contrastBar.style.width = "0%"; // Reinicia la barra
    characterImg.style.opacity = "0"; // Suaviza el cambio de imagen
    characterName.style.opacity = "0";
    characterInfo.style.opacity = "0";

    setTimeout(() => {
        const character = characters[index];
        characterName.textContent = character.name;
        characterDesc.textContent = character.desc;
        characterImg.src = character.img;
        
        // Actualiza los detalles del personaje
        characterDetails.innerHTML = character.details
            .map(detail => {
                return `
                    <li>
                        ${detail.iconItem ? `<img src="${detail.iconItem}" alt="Icono" class="icon-item">` : ""}
                        ${detail.label} 
                        ${detail.icon ? `<img src="${detail.icon}" alt="Icono" class="icon">` : ""}
                    </li>
                `;
            })
            .join("");
        
        // Dispara las animaciones
        contrastBar.style.width = "100%";
    }, 1000);
    setTimeout(() => {
        characterImg.style.opacity = "1";
        characterName.style.opacity = "1";
    },2200);
    setTimeout(() => {
        characterInfo.style.opacity = "1";
    },3200);
}

function nextCharacter() {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacter(currentIndex);
}

function prevCharacter() {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacter(currentIndex);
}

window.onload = () => {
    const contrastBar = document.getElementById("contrastBar");
    contrastBar.style.width = "100%"; // Extiende la barra al 100% al cargar
    updateCharacter(currentIndex); // Asegura que el personaje inicial se cargue correctamente
};

// Characters Mobile
document.addEventListener("DOMContentLoaded", () => {
  // ...tus otros scripts...

  const toggleInfoBtn = document.getElementById('toggleInfoBtn');
  const closeInfoBtn = document.getElementById('closeInfoBtn');

  toggleInfoBtn.addEventListener('click', () => {
    characterInfo.classList.add('open');
  });

  closeInfoBtn.addEventListener('click', () => {
    characterInfo.classList.remove('open');
  });
});

// --- Menu hamburguesa Mobile

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
});

// Menu active inactive

  const navItems = document.querySelectorAll('.nav-hover');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Quita li-focus de todos
      navItems.forEach(el => el.classList.remove('li-focus'));
      // Agrega li-focus solo al clickeado
      item.classList.add('li-focus');
    });
  });


// Features

let currentFeatureIndex = 0;
const cardsInner = document.querySelector('.features-cards-inner');
const totalFeatures = cardsInner.children.length;
const navLeftArrow = document.querySelector('.nav-left-arrow');
const navRightArrow = document.querySelector('.nav-right-arrow');

// Función para actualizar el slide y mostrar/ocultar botones según el tamaño de pantalla
function updateFeatureSlide() {
  const offset = -currentFeatureIndex * 80; // -80vw por cada card
  cardsInner.style.transform = `translateX(${offset}vw)`;

  if (window.innerWidth <= 768) {
    // En mobile: mostrar u ocultar según posición
    if (currentFeatureIndex === 0) {
      navLeftArrow.style.display = "none";
      navRightArrow.style.display = "block";
    } else if (currentFeatureIndex === totalFeatures - 1) {
      navLeftArrow.style.display = "block";
      navRightArrow.style.display = "none";
    } else {
      navLeftArrow.style.display = "block";
      navRightArrow.style.display = "block";
    }
  } else {
    // En desktop: siempre mostrar ambas flechas
    navLeftArrow.style.display = "block";
    navRightArrow.style.display = "block";
  }
}

// Eventos de los botones
navLeftArrow.addEventListener('click', () => {
  if (currentFeatureIndex > 0) {
    currentFeatureIndex--;
    updateFeatureSlide();
  }
});

navRightArrow.addEventListener('click', () => {
  if (currentFeatureIndex < totalFeatures - 1) {
    currentFeatureIndex++;
    updateFeatureSlide();
  }
});

// Estado inicial al cargar
window.addEventListener('DOMContentLoaded', () => {
  updateFeatureSlide();
});

// También actualizar cuando cambia el tamaño de la ventana
window.addEventListener('resize', updateFeatureSlide);
