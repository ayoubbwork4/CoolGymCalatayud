'use strict';

// --- BASE DE DATOS DE EJERCICIOS ---
const exerciseData = [
    // --- PECHO ---
    {
        id: "pecho_1",
        name: "Press de Banca con Barra",
        category: "pecho",
        videoId: "rT7DgCr-3pg", 
        fileName: "pressbancabarra.gif",
        variants: ["Press con Mancuernas", "Flexiones con Lastre"]
        // (Sin videoFile porque no estaba en tu lista exacta, tirará de YouTube)
    },
    {
        id: "pecho_2",
        name: "Press Inclinado con Barra",
        category: "pecho",
        videoId: "PAd6ezGbDUQ",
        videoFile: "press_de_banca_inclinado_con_barra.mp4",
        fileName: "pressinclinadomanc.jpg",
        variants: ["Press Inclinado Mancuernas"]
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName para que no busque GIF)
        id: "pecho_2_alt",
        name: "Press Inclinado con Barra (Var)",
        category: "pecho",
        videoId: "PAd6ezGbDUQ",
        videoFile: "press_de_banca_inclinado_con_barra2.mp4",
        variants: []
    },
    {
        id: "pecho_3",
        name: "Aperturas (Mancuernas)",
        category: "pecho",
        videoId: "taI4XduLpTk",
        fileName: "Apertura mancuernas.gif",
        variants: ["Aperturas en Máquina (Pec Deck)", "Cruce de Poleas"]
    },
    {
        id: "pecho_4",
        name: "Fondos en Máquina",
        category: "pecho",
        videoId: "2z8JmcrW-As",
        videoFile: "fondos_en_máquina.mp4",
        variants: ["Press Declinado", "Flexiones Diamante"]
    },
    {
        id: "pecho_5",
        name: "Flexiones (Push Ups)",
        category: "pecho",
        videoId: "IODxDxX7oi4",
        fileName: "pushup.gif",
        variants: ["Press Banca", "Flexiones Inclinadas"]
    },
    {
        id: "pecho_6",
        name: "Cruce de Poleas",
        category: "pecho",
        videoId: "taI4XduLpTk", 
        fileName: "cruce_poleas.gif",
        variants: ["Aperturas en Máquina", "Flexiones"]
    },

    // --- ESPALDA ---
    {
        id: "espalda_1",
        name: "Jalón al Pecho",
        category: "espalda",
        videoId: "CAwf7n6Luuc",
        videoFile: "Jalon_al_pecho.mp4",
        fileName: "jalonpechp.gif", 
        variants: ["Dominadas", "Jalón Supino"]
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "espalda_1_alt",
        name: "Jalón al Pecho Polea Alta",
        category: "espalda",
        videoId: "CAwf7n6Luuc",
        videoFile: "jalon_al_pecho_en_polea_alta.mp4",
        variants: []
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
        videoFile: "Dominadas.mp4",
        fileName: "Dominadas.gif", 
        variants: ["Jalón al Pecho", "Dominadas Asistidas"]
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "espalda_3_alt",
        name: "Dominada (Variante)",
        category: "espalda",
        videoId: "eGo4IYlbE5g",
        videoFile: "Dominada.mp4",
        variants: []
    },
    {
        id: "espalda_4",
        name: "Peso Muerto Rumano",
        category: "espalda",
        videoId: "op9kVnSso6Q",
        videoFile: "peso_muerto_rumano.mp4",
        fileName: "pesomuerto.gif", 
        variants: ["Peso Muerto Convencional", "Hip Thrust"]
    },
    {
        id: "espalda_5",
        name: "Máquina de Remo",
        category: "espalda",
        videoId: "GZbfZ033f74",
        videoFile: "maquina_de_remo.mp4",
        variants: ["Remo con Barra", "Remo Unilateral"]
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "espalda_6",
        name: "Extensión de Espalda",
        category: "espalda",
        videoId: "op9kVnSso6Q",
        videoFile: "extensión_de_espalda.mp4",
        variants: []
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "espalda_7",
        name: "Extensiones de Espalda",
        category: "espalda",
        videoId: "op9kVnSso6Q",
        videoFile: "extensiones_de_espalda.mp4",
        variants: []
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "espalda_8",
        name: "Remo en Punta (Barra T)",
        category: "espalda",
        videoId: "G8l_8chR5BE",
        videoFile: "remo_en_punta_o_remo_con_barra_T.mp4",
        variants: []
    },

    // --- PIERNAS ---
    {
        id: "pierna_1",
        name: "Sentadilla con Barra Trasera",
        category: "piernas",
        videoId: "dsCuiccYNGs",
        videoFile: "sentadilla_con_barra_trasera.mp4",
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
        videoId: "J-Y-Z0EU9Ic",
        videoFile: "Extension_cuadriceps.mp4",
        variants: ["Sentadilla Sissy", "Zancadas"]
    },
    {
        id: "pierna_4",
        name: "Curl Femoral",
        category: "piernas",
        videoId: "VEAv16_YIF0",
        videoFile: "Femoral.mp4",
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
        name: "Patada de Glúteo",
        category: "piernas",
        videoId: "5S8SApGU_Lk",
        videoFile: "patada_gluteo.mp4",
        variants: ["Puente de Glúteo", "Peso Muerto"]
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "pierna_7",
        name: "Abductores Sentado",
        category: "piernas",
        videoId: "IZxyjW7MPJQ",
        videoFile: "abductores_sentado.mp4",
        variants: []
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "pierna_8",
        name: "Aductores",
        category: "piernas",
        videoId: "IZxyjW7MPJQ",
        videoFile: "Aductores.mp4",
        variants: []
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "pierna_9",
        name: "Glúteos",
        category: "piernas",
        videoId: "5S8SApGU_Lk",
        videoFile: "Gluteos.mp4",
        variants: []
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "pierna_10",
        name: "Patada de Glúteo en Máquina",
        category: "piernas",
        videoId: "5S8SApGU_Lk",
        videoFile: "patada_de_gluteo_en_maquina.mp4",
        variants: []
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "pierna_11",
        name: "Patada de Glúteo en Máquina 2",
        category: "piernas",
        videoId: "5S8SApGU_Lk",
        videoFile: "patada_de_gluteo__en_maquina2.mp4",
        variants: []
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "pierna_12",
        name: "Patada",
        category: "piernas",
        videoId: "5S8SApGU_Lk",
        videoFile: "patada.mp4",
        variants: []
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "pierna_13",
        name: "Péndulo de Glúteo",
        category: "piernas",
        videoId: "5S8SApGU_Lk",
        videoFile: "pendulo_de_glúteo.mp4",
        variants: []
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
        videoId: "24z3h_bZ7Zo",
        variants: ["Face Pull", "Peck Deck Inverso"]
    },

    // --- BRAZOS ---
    {
        id: "brazos_1",
        name: "Curl de Bíceps Barra",
        category: "brazos",
        videoId: "no-dXip-rJM",
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
        name: "Abdominales",
        category: "core",
        videoId: "pSHjTRCQxIw",
        videoFile: "Abdominales.mp4",
        variants: ["Plancha Lateral", "Rueda Abdominal"]
    },
    {
        id: "core_2",
        name: "Abdominales Inclinados",
        category: "core",
        videoId: "Xyd_fa5zoEU",
        videoFile: "Abdominales_mas_inclinados.mp4",
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
        videoId: "clOMvIG1R-o",
        variants: ["Caminar Inclinado", "Correr al aire libre"]
    },
    {
        id: "cardio_2",
        name: "Elíptica",
        category: "cardio",
        videoId: "Sbv44Rf-5U0",
        variants: ["Bicicleta", "Cinta"]
    },
    {
        id: "cardio_3",
        name: "Remo Concept 2",
        category: "cardio",
        videoId: "kPA-X9IfBgU",
        variants: ["Assault Bike", "SkiErg"]
    },
    {
        // ¡NUEVO CREADO DE TU LISTA! (Sin fileName)
        id: "cardio_4",
        name: "Escaladora",
        category: "cardio",
        videoId: "Sbv44Rf-5U0",
        videoFile: "escaladora.mp4",
        variants: []
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
const clearSearchBtn = document.getElementById('clearSearchBtn'); 
const categoryButtons = document.querySelectorAll('.cat-btn');
const exerciseGrid = document.getElementById('exerciseGrid');
const noResults = document.getElementById('noResults');

const modal = document.getElementById('exerciseModal');
const imageViewerModal = document.getElementById('imageViewerModal'); 
const img1 = document.getElementById('modalImg1'); 
const enlargedImage = document.getElementById('enlargedImage');
const rouletteBtn = document.getElementById('rouletteBtn'); 
let currentCategory = 'all';

// --- SONIDO HÁPTICO ---
function playHapticClick() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime); 
        gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.05);
    } catch(e) { } 
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    renderExercises(); 
    setupEventListeners();
});

// --- LISTENERS ---
function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        if(e.target.value.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
        renderExercises(e.target.value);
    });

    if(clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            playHapticClick();
            searchInput.value = '';
            clearSearchBtn.classList.add('hidden');
            renderExercises();
        });
    }

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            playHapticClick();
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.dataset.category;
            renderExercises(searchInput.value);
        });
    });

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

    filtered.forEach((ex, index) => { 
        const thumbnailImg = categoryImages[ex.category] || categoryImages.default;
        
        const card = document.createElement('div');
        card.className = 'card-cascade exercise-card group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-1';
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

// --- LÓGICA DEL MODAL CON YOUTUBE AUTOMÁTICO EN CASO DE FALLO ---
function openModal(exercise) {
    const title = document.getElementById('modalTitle');
    const category = document.getElementById('modalCategory');
    const videoContainer = document.getElementById('videoContainer');
    const variantsList = document.getElementById('modalVariants');

    title.textContent = exercise.name;
    category.textContent = exercise.category;

    videoContainer.innerHTML = ''; 

    // Función auxiliar para cargar YouTube automáticamente
    const loadYouTube = () => {
        if (exercise.videoId) {
            videoContainer.innerHTML = `
                <iframe class="w-full h-full absolute inset-0" 
                        src="https://www.youtube.com/embed/${exercise.videoId}?autoplay=1&mute=1&loop=1&playlist=${exercise.videoId}&controls=1&modestbranding=1&rel=0" 
                        title="Video Ejercicio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            `;
        } else {
            videoContainer.innerHTML = `<div class="text-gray-500 font-display text-2xl flex items-center justify-center h-full uppercase">Video no disponible</div>`;
        }
    };
    
    if (exercise.videoFile) {
        // Creamos la estructura de vídeo de HTML5
        const vid = document.createElement('video');
        vid.className = "w-full h-full absolute inset-0 object-contain bg-black";
        vid.controls = true;
        vid.autoplay = true;
        vid.loop = true;
        vid.muted = true;
        vid.playsInline = true;

        const source = document.createElement('source');
        // Aseguramos que la ruta es 'media/Videos/' y que tolera los espacios en los nombres
        source.src = `media/Videos/${encodeURIComponent(exercise.videoFile)}`;
        source.type = 'video/mp4';

        // LA MAGIA ESTÁ AQUÍ: Si falla el origen local, salta a YouTube al instante
        source.onerror = function() {
            console.warn("No se encontró el archivo local o falló el formato. Cargando YouTube en su lugar...");
            loadYouTube();
        };

        vid.appendChild(source);
        videoContainer.appendChild(vid);
        
    } else {
        // Si desde el principio no le hemos puesto .mp4, carga YouTube directamente
        loadYouTube();
    }

    const fallbackImg = categoryImages[exercise.category] || categoryImages.default;
    
    if(img1) {
        // Solo intenta cargar el GIF local si el ejercicio tiene la propiedad fileName
        if(exercise.fileName) {
            const localImgPath = `media/Ejercicios/${exercise.fileName}`;
            img1.src = localImgPath;
            img1.onerror = () => { img1.src = fallbackImg; };
        } else {
            // A los nuevos que no tienen GIF les ponemos la estética de la categoría directamente
            img1.src = fallbackImg;
        }
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
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = ''; 
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

// --- LÓGICA DEL SALVAPANTALLAS (IDLE MODE) ---
let idleTimer;


const IDLE_TIMEOUT = 120000; // 2 minutos (120000 ms). Cámbialo si quieres más tiempo.
const screensaver = document.getElementById('screensaver');

function resetIdleTimer() {
    if (screensaver && !screensaver.classList.contains('hidden')) {
        screensaver.style.opacity = '0';
        setTimeout(() => {
            screensaver.classList.add('hidden');
        }, 500); 
    }
    
    clearTimeout(idleTimer);
    
    idleTimer = setTimeout(() => {
        closeModal();
        closeImageViewer();
        if(searchInput.value !== '') {
            searchInput.value = '';
            if(clearSearchBtn) clearSearchBtn.classList.add('hidden');
            renderExercises();
        }
        
        if (screensaver) {
            screensaver.classList.remove('hidden');
            void screensaver.offsetWidth; 
            screensaver.style.opacity = '1';
        }
    }, IDLE_TIMEOUT);
}

['touchstart', 'mousemove', 'keydown', 'scroll', 'click'].forEach(evt => {
    document.addEventListener(evt, resetIdleTimer, true);
});

resetIdleTimer();