'use strict';

// --- BASE DE DATOS DE EJERCICIOS ---
const exerciseData = [
    // --- PECHO ---
    {
        id: "pecho_1",
        name: "Press de Banca con Barra",
        category: "pecho",
        videoId: "rT7DgCr-3pg", 
        fileName: "pressbancabarra.gif", // Archivo real
        variants: ["Press con Mancuernas", "Flexiones con Lastre"]
    },
    {
        id: "pecho_2",
        name: "Press Inclinado Mancuernas",
        category: "pecho",
        videoId: "PAd6ezGbDUQ", // ACTUALIZADO
        fileName: "pressinclinadomanc.jpg", // Archivo real
        variants: ["Press Inclinado Barra", "Aperturas Inclinadas"]
    },
    {
        id: "pecho_3",
        name: "Aperturas (Mancuernas)",
        category: "pecho",
        videoId: "taI4XduLpTk",
        fileName: "Apertura mancuernas.gif", // Archivo real
        variants: ["Aperturas en Máquina (Pec Deck)", "Cruce de Poleas"]
    },
    {
        id: "pecho_4",
        name: "Fondos en Paralelas",
        category: "pecho",
        videoId: "2z8JmcrW-As",
        variants: ["Press Declinado", "Flexiones Diamante"]
    },
    {
        id: "pecho_5",
        name: "Flexiones (Push Ups)",
        category: "pecho",
        videoId: "IODxDxX7oi4",
        fileName: "pushup.gif", // Archivo real
        variants: ["Press Banca", "Flexiones Inclinadas"]
    },

    // --- ESPALDA ---
    {
        id: "espalda_1",
        name: "Jalón al Pecho",
        category: "espalda",
        videoId: "CAwf7n6Luuc",
        fileName: "jalonpechp.gif", 
        variants: ["Dominadas", "Jalón Supino"]
    },
    {
        id: "espalda_2",
        name: "Remo con Barra",
        category: "espalda",
        videoId: "G8l_8chR5BE",
        fileName: "RemoconBarra.gif", 
        variants: ["Remo Mancuerna", "Remo en Polea Baja"]
    },
    {
        id: "espalda_3",
        name: "Dominadas",
        category: "espalda",
        videoId: "eGo4IYlbE5g",
        fileName: "Dominadas.gif", 
        variants: ["Jalón al Pecho", "Dominadas Asistidas"]
    },
    {
        id: "espalda_4",
        name: "Peso Muerto",
        category: "espalda",
        videoId: "op9kVnSso6Q",
        fileName: "pesomuerto.gif", 
        variants: ["Peso Muerto Rumano", "Hip Thrust"]
    },
    {
        id: "espalda_5",
        name: "Remo Gironda",
        category: "espalda",
        videoId: "GZbfZ033f74",
        variants: ["Remo con Barra", "Remo Unilateral"]
    },

    // --- PIERNAS ---
    {
        id: "pierna_1",
        name: "Sentadilla Libre",
        category: "piernas",
        videoId: "dsCuiccYNGs", // ACTUALIZADO
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
        videoId: "J-Y-Z0EU9Ic", // ACTUALIZADO
        variants: ["Sentadilla Sissy", "Zancadas"]
    },
    {
        id: "pierna_4",
        name: "Curl Femoral Tumbado",
        category: "piernas",
        videoId: "VEAv16_YIF0", // ACTUALIZADO
        variants: ["Peso Muerto Rumano", "Curl Sentado"]
    },
    {
        id: "pierna_5",
        name: "Zancadas (Lunges)",
        category: "piernas",
        videoId: "D7KaRcUTQeE",
        variants: ["Sentadilla Búlgara", "Step Up"]
    },
    {
        id: "pierna_6",
        name: "Hip Thrust",
        category: "piernas",
        videoId: "5S8SApGU_Lk", // ACTUALIZADO
        variants: ["Puente de Glúteo", "Peso Muerto"]
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
    {
        id: "hombro_3",
        name: "Pájaros (Posterior)",
        category: "hombros",
        videoId: "24z3h_bZ7Zo", // ACTUALIZADO
        variants: ["Face Pull", "Peck Deck Inverso"]
    },

    // --- BRAZOS ---
    {
        id: "brazos_1",
        name: "Curl de Bíceps Barra",
        category: "brazos",
        videoId: "no-dXip-rJM", // ACTUALIZADO
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
    },

    // --- CORE (ABS) ---
    {
        id: "core_1",
        name: "Plancha Abdominal",
        category: "core",
        videoId: "pSHjTRCQxIw",
        variants: ["Plancha Lateral", "Rueda Abdominal"]
    },
    {
        id: "core_2",
        name: "Crunches",
        category: "core",
        videoId: "Xyd_fa5zoEU",
        variants: ["Crunch en Polea", "Máquina Abs"]
    },
    {
        id: "core_3",
        name: "Elevación de Piernas",
        category: "core",
        videoId: "JB2oyawG9KI",
        variants: ["Tijeras", "Montañeros"]
    },

    // --- CARDIO ---
    {
        id: "cardio_1",
        name: "Cinta de Correr",
        category: "cardio",
        videoId: "clOMvIG1R-o", // ACTUALIZADO
        variants: ["Caminar Inclinado", "Correr al aire libre"]
    },
    {
        id: "cardio_2",
        name: "Elíptica",
        category: "cardio",
        videoId: "Sbv44Rf-5U0", // ACTUALIZADO
        variants: ["Bicicleta", "Cinta"]
    },
    {
        id: "cardio_3",
        name: "Remo Concept 2",
        category: "cardio",
        videoId: "kPA-X9IfBgU", // ACTUALIZADO
        variants: ["Assault Bike", "SkiErg"]
    }
];

// --- FOTOS ESTÉTICAS PARA EL MENÚ PRINCIPAL ---
const categoryImages = {
    pecho: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80",
    espalda: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80",
    piernas: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    hombros: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80", 
    brazos: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    core: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    cardio: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=600&q=80", 
    default: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80"
};

// --- VARIABLES GLOBALES ---
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn'); // NUEVO: Botón limpiar
const categoryButtons = document.querySelectorAll('.cat-btn');
const exerciseGrid = document.getElementById('exerciseGrid');
const noResults = document.getElementById('noResults');

// Modales
const modal = document.getElementById('exerciseModal');
const imageViewerModal = document.getElementById('imageViewerModal'); 
const img1 = document.getElementById('modalImg1'); 
const enlargedImage = document.getElementById('enlargedImage');
const rouletteBtn = document.getElementById('rouletteBtn'); 
let currentCategory = 'all';

// NUEVO: Opcional, sonido de click háptico (genera un "pop" bajito usando el AudioContext del navegador)
function playHapticClick() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime); // Tono grave
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.05);
    } catch(e) { } // Si el navegador bloquea el audio, no pasa nada
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    renderExercises(); 
    setupEventListeners();
});

// --- LISTENERS ---
function setupEventListeners() {
    // 1. Buscador
    searchInput.addEventListener('input', (e) => {
        // Mostrar botón de limpiar si hay texto
        if(e.target.value.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
        renderExercises(e.target.value);
    });

    // NUEVO: Limpiar búsqueda
    if(clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            playHapticClick();
            searchInput.value = '';
            clearSearchBtn.classList.add('hidden');
            renderExercises();
        });
    }

    // 2. Filtros PC
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            playHapticClick();
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.dataset.category;
            renderExercises(searchInput.value);
        });
    });

    // 3. Ruleta
    if (rouletteBtn) {
        rouletteBtn.addEventListener('click', () => {
            playHapticClick();
            triggerRoulette();
        });
    }
}

// --- RULETA / JUEGO ---
function triggerRoulette() {
    currentCategory = 'all';
    searchInput.value = '';
    if(clearSearchBtn) clearSearchBtn.classList.add('hidden');
    
    categoryButtons.forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('.cat-btn[data-category="all"]');
    if(allBtn) allBtn.classList.add('active');

    renderExercises();
    exerciseGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const randomIndex = Math.floor(Math.random() * exerciseData.length);
    const selectedExercise = exerciseData[randomIndex];

    setTimeout(() => {
        openModal(selectedExercise);
    }, 500);
}

// --- RENDERIZADO PRINCIPAL (GRID) ---
function renderExercises(searchTerm = '') {
    exerciseGrid.innerHTML = ''; 
    const term = searchTerm.toLowerCase();
    
    const filtered = exerciseData.filter(ex => {
        const matchesSearch = ex.name.toLowerCase().includes(term);
        const matchesCategory = currentCategory === 'all' || ex.category === currentCategory;
        return matchesSearch && matchesCategory;
    });

    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
        noResults.style.opacity = '1';
        return;
    } 
    
    noResults.classList.add('hidden');
    noResults.style.opacity = '0';

    filtered.forEach((ex, index) => { // NUEVO: Se añade el index para la cascada
        const thumbnailImg = categoryImages[ex.category] || categoryImages.default;
        
        const card = document.createElement('div');
        // NUEVO: Se añade 'card-cascade' a las clases de la tarjeta
        card.className = 'card-cascade exercise-card group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-1';
        // NUEVO: Retardo progresivo según el orden de la tarjeta
        card.style.animationDelay = `${index * 0.05}s`; 
        
        card.innerHTML = `
            <div class="h-56 overflow-hidden relative">
                <div class="absolute inset-0 bg-red-900 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity z-10 duration-300"></div>
                
                <img src="${thumbnailImg}" 
                     alt="${ex.name}" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                
                <div class="absolute top-3 left-3 z-20">
                    <span class="bg-black/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded border border-gray-700 uppercase tracking-widest shadow-lg">
                        ${ex.category}
                    </span>
                </div>
            </div>
            
            <div class="p-5 relative z-20 bg-gray-900 border-t border-gray-800">
                <div class="flex justify-between items-start gap-2">
                    <h3 class="text-3xl font-display font-bold text-gray-200 leading-none group-hover:text-red-500 transition-colors uppercase">${ex.name}</h3>
                    <ion-icon name="play-circle" class="text-4xl text-gray-700 group-hover:text-white transition-all group-hover:scale-110 flex-shrink-0"></ion-icon>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            playHapticClick();
            openModal(ex);
        });
        exerciseGrid.appendChild(card);
    });
}

// --- LÓGICA DEL MODAL (POP UP) ---
function openModal(exercise) {
    const title = document.getElementById('modalTitle');
    const category = document.getElementById('modalCategory');
    const iframe = document.getElementById('modalVideo');
    const variantsList = document.getElementById('modalVariants');

    title.textContent = exercise.name;
    category.textContent = exercise.category;
    iframe.src = `https://www.youtube.com/embed/${exercise.videoId}?autoplay=1&mute=1&loop=1&playlist=${exercise.videoId}&controls=1&modestbranding=1&rel=0`;

    const fileName = exercise.fileName ? exercise.fileName : `${exercise.name}.gif`;
    const localImgPath = `media/Ejercicios/${fileName}`;
    const fallbackImg = categoryImages[exercise.category] || categoryImages.default;
    
    if(img1) {
        img1.src = localImgPath;
        img1.onerror = () => { img1.src = fallbackImg; };
    }

    variantsList.innerHTML = '';
    if(exercise.variants && exercise.variants.length > 0) {
        exercise.variants.forEach(v => {
            const li = document.createElement('li');
            li.className = 'text-gray-400 text-sm font-sans flex items-center gap-3 bg-gray-900 p-3 rounded border border-gray-800 hover:border-gray-600 transition-colors';
            li.innerHTML = `<ion-icon name="fitness" class="text-red-600"></ion-icon> ${v}`;
            variantsList.appendChild(li);
        });
    } else {
        variantsList.innerHTML = '<li class="text-gray-500 italic">No hay variantes registradas.</li>';
    }

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeModal() {
    const iframe = document.getElementById('modalVideo');
    iframe.src = '';
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// --- FUNCIONES VISOR (AGRANDAR IMAGEN) ---
function openImageViewer() {
    playHapticClick();
    if(img1 && enlargedImage && imageViewerModal) {
        enlargedImage.src = img1.src; 
        imageViewerModal.classList.remove('hidden');
    }
}

function closeImageViewer() {
    if(imageViewerModal) {
        imageViewerModal.classList.add('hidden');
        if(enlargedImage) {
            setTimeout(() => { enlargedImage.src = ''; }, 300);
        }
    }
}

// --- NUEVO: LÓGICA DEL SALVAPANTALLAS (IDLE MODE) ---
let idleTimer;
const IDLE_TIMEOUT = 3000; // 2 minutos (120000 ms). Cámbialo si quieres más tiempo.
const screensaver = document.getElementById('screensaver');

function resetIdleTimer() {
    // Si el salvapantallas está visible, ocultarlo suavemente
    if (screensaver && !screensaver.classList.contains('hidden')) {
        screensaver.style.opacity = '0';
        setTimeout(() => {
            screensaver.classList.add('hidden');
        }, 500); // 500ms para que se desvanezca suavemente
    }
    
    // Limpiar el contador actual
    clearTimeout(idleTimer);
    
    // Configurar nuevo contador
    idleTimer = setTimeout(() => {
        // Cuando pasan los 2 minutos: cerrar modales abiertos y volver al inicio
        closeModal();
        closeImageViewer();
        if(searchInput.value !== '') {
            searchInput.value = '';
            if(clearSearchBtn) clearSearchBtn.classList.add('hidden');
            renderExercises();
        }
        
        // Mostrar salvapantallas
        if (screensaver) {
            screensaver.classList.remove('hidden');
            // Hack forzar el reflow para que la animación de opacidad funcione
            void screensaver.offsetWidth; 
            screensaver.style.opacity = '1';
        }
    }, IDLE_TIMEOUT);
}

// Escuchar cualquier tipo de interacción en la pantalla para resetear el tiempo
['touchstart', 'mousemove', 'keydown', 'scroll', 'click'].forEach(evt => {
    document.addEventListener(evt, resetIdleTimer, true);
});

// Arrancar el temporizador por primera vez
resetIdleTimer();