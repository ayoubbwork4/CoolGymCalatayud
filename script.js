'use strict';

// --- BASE DE DATOS DE EJERCICIOS ---
// He añadido videos REALES de YouTube con buena técnica.
const exerciseData = [
    // --- PECHO ---
    {
        id: "pecho_1",
        name: "Press de Banca con Barra",
        category: "pecho",
        videoId: "rT7DgCr-3pg", // Scott Herman
        variants: ["Press con Mancuernas", "Flexiones con Lastre"]
    },
    {
        id: "pecho_2",
        name: "Press Inclinado Mancuernas",
        category: "pecho",
        videoId: "0G2_XV7-A4s", 
        variants: ["Press Inclinado Barra", "Aperturas Inclinadas"]
    },
    {
        id: "pecho_3",
        name: "Cruce de Poleas (Crossover)",
        category: "pecho",
        videoId: "taI4XduLpTk",
        variants: ["Aperturas en Máquina (Pec Deck)", "Fondos"]
    },
    {
        id: "pecho_4",
        name: "Fondos en Paralelas",
        category: "pecho",
        videoId: "2z8JmcrW-As",
        variants: ["Press Declinado", "Flexiones Diamante"]
    },

    // --- ESPALDA ---
    {
        id: "espalda_1",
        name: "Jalón al Pecho",
        category: "espalda",
        videoId: "CAwf7n6Luuc",
        variants: ["Dominadas", "Jalón Supino"]
    },
    {
        id: "espalda_2",
        name: "Remo con Barra",
        category: "espalda",
        videoId: "G8l_8chR5BE",
        variants: ["Remo Mancuerna", "Remo en Polea Baja"]
    },
    {
        id: "espalda_3",
        name: "Dominadas",
        category: "espalda",
        videoId: "eGo4IYlbE5g",
        variants: ["Jalón al Pecho", "Dominadas Asistidas"]
    },
    {
        id: "espalda_4",
        name: "Peso Muerto",
        category: "espalda",
        videoId: "op9kVnSso6Q",
        variants: ["Peso Muerto Rumano", "Hip Thrust"]
    },

    // --- PIERNAS ---
    {
        id: "pierna_1",
        name: "Sentadilla Libre",
        category: "piernas",
        videoId: "SW_8ORKN8G4", // Squat University
        variants: ["Prensa", "Sentadilla Goblet"]
    },
    {
        id: "pierna_2",
        name: "Prensa de Piernas",
        category: "piernas",
        videoId: "IZxyjW7MPJQ",
        variants: ["Sentadilla Hack", "Zancadas"]
    },
    {
        id: "pierna_3",
        name: "Extensión de Cuádriceps",
        category: "piernas",
        videoId: "YyvSfVjS62I",
        variants: ["Sentadilla Sissy", "Zancadas"]
    },
    {
        id: "pierna_4",
        name: "Curl Femoral Tumbado",
        category: "piernas",
        videoId: "1Tq3QdYU-hA",
        variants: ["Peso Muerto Rumano", "Curl Sentado"]
    },
    {
        id: "pierna_5",
        name: "Zancadas (Lunges)",
        category: "piernas",
        videoId: "D7KaRcUTQeE",
        variants: ["Sentadilla Búlgara", "Step Up"]
    },

    // --- HOMBROS ---
    {
        id: "hombro_1",
        name: "Press Militar Barra",
        category: "hombros",
        videoId: "2yjwXTZQDDI",
        variants: ["Press Mancuernas", "Press Arnold"]
    },
    {
        id: "hombro_2",
        name: "Elevaciones Laterales",
        category: "hombros",
        videoId: "3VcKaXpzqRo",
        variants: ["Remo al mentón", "Pájaro"]
    },

    // --- BRAZOS ---
    {
        id: "brazos_1",
        name: "Curl de Bíceps Barra",
        category: "brazos",
        videoId: "kwG2Zqt10-E",
        variants: ["Curl Martillo", "Curl con Mancuerna"]
    },
    {
        id: "brazos_2",
        name: "Extensión Tríceps Polea",
        category: "brazos",
        videoId: "6kALZikXxLc",
        variants: ["Press Francés", "Fondos en Banco"]
    },
    {
        id: "brazos_3",
        name: "Curl Martillo",
        category: "brazos",
        videoId: "zC3nLlEvin4",
        variants: ["Curl Zottman", "Dominadas Supinas"]
    },
    {
        id: "brazos_4",
        name: "Press Francés",
        category: "brazos",
        videoId: "nRiJVZDpdL0",
        variants: ["Patada de Tríceps", "Copeo"]
    }
];

// --- IMÁGENES DE RESPALDO (PLACEHOLDERS) ---
// Si no encuentra tu GIF local, usa estas imágenes genéricas de alta calidad
// para que el diseño siempre se vea profesional.
const categoryImages = {
    pecho: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
    espalda: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80",
    piernas: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    hombros: "https://images.unsplash.com/photo-1532029837066-656edef25b2e?auto=format&fit=crop&w=600&q=80",
    brazos: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    default: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80"
};

// --- VARIABLES GLOBALES ---
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.cat-btn');
const exerciseGrid = document.getElementById('exerciseGrid');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('exerciseModal');
let currentCategory = 'all';

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    renderExercises(); // Cargar todo al inicio
    setupEventListeners();
});

// --- LISTENERS (Escuchadores de eventos) ---
function setupEventListeners() {
    // 1. Buscador en tiempo real
    searchInput.addEventListener('input', (e) => {
        renderExercises(e.target.value);
    });

    // 2. Filtros de Categoría
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Quitar clase activa de todos
            categoryButtons.forEach(b => b.classList.remove('active'));
            // Poner clase activa al clickeado
            btn.classList.add('active');
            
            // Actualizar estado y renderizar
            currentCategory = btn.dataset.category;
            renderExercises(searchInput.value);
        });
    });
}

// --- FUNCIÓN PRINCIPAL: PINTAR LOS EJERCICIOS ---
function renderExercises(searchTerm = '') {
    // Limpiar rejilla
    exerciseGrid.innerHTML = ''; 
    const term = searchTerm.toLowerCase();
    
    // Filtrar datos
    const filtered = exerciseData.filter(ex => {
        const matchesSearch = ex.name.toLowerCase().includes(term);
        const matchesCategory = currentCategory === 'all' || ex.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    // Manejar "Sin Resultados"
    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
        noResults.style.opacity = '1';
        return;
    } 
    
    noResults.classList.add('hidden');
    noResults.style.opacity = '0';

    // Generar Tarjetas
    filtered.forEach(ex => {
        // Ruta de tu GIF local (debe coincidir el nombre exacto)
        // Ejemplo: "Press de Banca con Barra.gif"
        const localImgPath = `media/Ejercicios/${ex.name}.gif`; 
        
        const card = document.createElement('div');
        
        // Clases de Tailwind + Clases Custom (exercise-card)
        card.className = 'exercise-card group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-gray-800';
        
        card.innerHTML = `
            <div class="h-56 overflow-hidden relative">
                <div class="absolute inset-0 bg-red-600 mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity z-10 duration-300"></div>
                
                <img src="${localImgPath}" 
                     alt="${ex.name}" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     onerror="this.onerror=null; this.src='${categoryImages[ex.category] || categoryImages.default}';">
                
                <div class="absolute top-3 left-3 z-20">
                    <span class="bg-black/80 backdrop-blur text-red-500 text-xs font-bold px-2 py-1 rounded border border-red-500/30 uppercase tracking-wider">
                        ${ex.category}
                    </span>
                </div>
            </div>
            
            <div class="p-5 relative z-20 bg-gray-900 border-t border-gray-800">
                <div class="flex justify-between items-center">
                    <h3 class="text-3xl font-display font-bold text-gray-100 leading-none group-hover:text-red-500 transition-colors">${ex.name}</h3>
                    <ion-icon name="play-circle-outline" class="text-3xl text-gray-500 group-hover:text-white transition-transform group-hover:scale-125"></ion-icon>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(ex));
        exerciseGrid.appendChild(card);
    });
}

// --- LÓGICA DEL MODAL (POP UP) ---
function openModal(exercise) {
    const title = document.getElementById('modalTitle');
    const category = document.getElementById('modalCategory');
    const iframe = document.getElementById('modalVideo');
    const variantsList = document.getElementById('modalVariants');
    const img1 = document.getElementById('modalImg1');

    // 1. Rellenar Textos
    title.textContent = exercise.name;
    category.textContent = exercise.category;
    
    // 2. Cargar Video YouTube
    // ?autoplay=1&mute=1 permite que arranque solo (los navegadores bloquean autoplay con sonido)
    // &controls=0 quita la barra de youtube para que se vea más limpio
    iframe.src = `https://www.youtube.com/embed/${exercise.videoId}?autoplay=1&mute=1&loop=1&playlist=${exercise.videoId}&controls=1&modestbranding=1&rel=0`;

    // 3. Cargar Imágenes (Con fallback)
    const localImgPath = `media/Ejercicios/${exercise.name}.gif`;
    const fallbackImg = categoryImages[exercise.category] || categoryImages.default;
    
    img1.src = localImgPath;
    // Si la imagen local falla, poner el placeholder
    img1.onerror = () => { img1.src = fallbackImg; };

    // 4. Rellenar Variantes
    variantsList.innerHTML = '';
    if(exercise.variants && exercise.variants.length > 0) {
        exercise.variants.forEach(v => {
            const li = document.createElement('li');
            li.className = 'text-gray-300 text-lg font-light flex items-center gap-3 bg-gray-800/50 p-2 rounded border border-gray-700';
            li.innerHTML = `<ion-icon name="caret-forward" class="text-red-500"></ion-icon> ${v}`;
            variantsList.appendChild(li);
        });
    } else {
        variantsList.innerHTML = '<li class="text-gray-500 italic">No hay variantes registradas.</li>';
    }

    // 5. Mostrar Modal
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open'); // Bloquear scroll del body
}

function closeModal() {
    const iframe = document.getElementById('modalVideo');
    iframe.src = ''; // Importante: Vaciar el src detiene el video
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}