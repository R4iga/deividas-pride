// Sample game data
const games = [
    {
        id: 1,
        title: "Cyber Quest 2077",
        genre: "action",
        rating: 4.8,
        description: "Embark on an epic cyberpunk adventure in a dystopian future. Hack systems, battle rogue AI, and uncover corporate conspiracies in this action-packed RPG.",
        developer: "Neon Dreams Studio",
        releaseDate: "November 2024",
        platform: "PC, PlayStation, Xbox",
        size: "45 GB",
        image: "https://via.placeholder.com/300x200/667eea/ffffff?text=Cyber+Quest+2077",
        downloadLink: "#download-cyber-quest"
    },
    {
        id: 2,
        title: "Mystic Islands",
        genre: "adventure",
        rating: 4.6,
        description: "Explore mysterious islands filled with ancient secrets, magical creatures, and challenging puzzles. A breathtaking adventure awaits.",
        developer: "Enigma Games",
        releaseDate: "September 2024",
        platform: "PC, Nintendo Switch",
        size: "12 GB",
        image: "https://via.placeholder.com/300x200/764ba2/ffffff?text=Mystic+Islands",
        downloadLink: "#download-mystic-islands"
    },
    {
        id: 3,
        title: "Puzzle Master Pro",
        genre: "puzzle",
        rating: 4.5,
        description: "Challenge your mind with over 1000 unique puzzles. From classic sudoku to innovative brain teasers, this game will keep you hooked for hours.",
        developer: "Brain Teasers Inc",
        releaseDate: "October 2024",
        platform: "PC, Mobile",
        size: "2 GB",
        image: "https://via.placeholder.com/300x200/28a745/ffffff?text=Puzzle+Master+Pro",
        downloadLink: "#download-puzzle-master"
    },
    {
        id: 4,
        title: "Empire Builders",
        genre: "strategy",
        rating: 4.7,
        description: "Build and manage your own empire from the ground up. Make strategic decisions, form alliances, and conquer your enemies in this immersive strategy game.",
        developer: "Strategic Minds",
        releaseDate: "August 2024",
        platform: "PC, Mac",
        size: "8 GB",
        image: "https://via.placeholder.com/300x200/dc3545/ffffff?text=Empire+Builders",
        downloadLink: "#download-empire-builders"
    },
    {
        id: 5,
        title: "Speed Rivals",
        genre: "action",
        rating: 4.4,
        description: "Get behind the wheel of the world's fastest supercars. Race through stunning tracks, customize your vehicles, and become the ultimate racing champion.",
        developer: "Velocity Studios",
        releaseDate: "July 2024",
        platform: "PC, PlayStation, Xbox",
        size: "35 GB",
        image: "https://via.placeholder.com/300x200/ffc107/ffffff?text=Speed+Rivals",
        downloadLink: "#download-speed-rivals"
    },
    {
        id: 6,
        title: "Lost Civilization",
        genre: "adventure",
        rating: 4.9,
        description: "Uncover the mysteries of an ancient civilization. Explore forgotten temples, solve intricate puzzles, and discover treasures beyond imagination.",
        developer: "Adventure Works",
        releaseDate: "December 2024",
        platform: "PC, PlayStation",
        size: "25 GB",
        image: "https://via.placeholder.com/300x200/17a2b8/ffffff?text=Lost+Civilization",
        downloadLink: "#download-lost-civilization"
    },
    {
        id: 7,
        title: "Logic Gates",
        genre: "puzzle",
        rating: 4.3,
        description: "Master the art of digital logic through engaging puzzles. Learn about circuits, binary, and computer science while having fun.",
        developer: "Code Breakers",
        releaseDate: "June 2024",
        platform: "PC, Mobile",
        size: "1 GB",
        image: "https://via.placeholder.com/300x200/6f42c1/ffffff?text=Logic+Gates",
        downloadLink: "#download-logic-gates"
    },
    {
        id: 8,
        title: "World Conquest",
        genre: "strategy",
        rating: 4.6,
        description: "Lead your nation to global dominance. Manage resources, research technologies, and outmaneuver your opponents in this grand strategy game.",
        developer: "Global Strategy Games",
        releaseDate: "November 2024",
        platform: "PC, Mac",
        size: "15 GB",
        image: "https://via.placeholder.com/300x200/e83e8c/ffffff?text=World+Conquest",
        downloadLink: "#download-world-conquest"
    }
];

// DOM elements
const gamesGrid = document.getElementById('gamesGrid');
const modal = document.getElementById('gameModal');
const closeBtn = document.querySelector('.close');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderGames(games);
    setupEventListeners();
});

// Render games to the grid
function renderGames(gamesToRender) {
    gamesGrid.innerHTML = '';
    
    gamesToRender.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Create a game card element
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.dataset.genre = game.genre;
    card.dataset.gameId = game.id;
    
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" class="game-image">
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <div class="game-meta">
                <span class="genre-tag">${game.genre}</span>
                <span class="rating">⭐ ${game.rating}</span>
            </div>
            <p class="game-description">${game.description}</p>
        </div>
    `;
    
    card.addEventListener('click', () => openModal(game));
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterGames(filter);
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Open modal with game details
function openModal(game) {
    document.getElementById('modalImage').src = game.image;
    document.getElementById('modalImage').alt = game.title;
    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalGenre').textContent = game.genre;
    document.getElementById('modalRating').innerHTML = `⭐ ${game.rating}`;
    document.getElementById('modalDescription').textContent = game.description;
    document.getElementById('modalDeveloper').textContent = game.developer;
    document.getElementById('modalReleaseDate').textContent = game.releaseDate;
    document.getElementById('modalPlatform').textContent = game.platform;
    document.getElementById('modalSize').textContent = game.size;
    document.getElementById('modalDownloadLink').href = game.downloadLink;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Filter games by genre
function filterGames(genre) {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        if (genre === 'all' || card.dataset.genre === genre) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Search functionality (bonus feature)
function searchGames(query) {
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.description.toLowerCase().includes(query.toLowerCase()) ||
        game.genre.toLowerCase().includes(query.toLowerCase())
    );
    
    renderGames(filteredGames);
}

// Add search input dynamically (optional enhancement)
function addSearchBar() {
    const header = document.querySelector('header .container');
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="searchInput" placeholder="Search games..." />
    `;
    
    header.appendChild(searchContainer);
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchGames(e.target.value);
    });
}

// Add search bar styles
const searchStyles = `
    .search-container {
        margin-top: 1rem;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
    
    #searchInput {
        width: 100%;
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 25px;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 1rem;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }
    
    #searchInput::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
    
    #searchInput:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.3);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    }
`;

// Add search styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = searchStyles;
document.head.appendChild(styleSheet);

// Initialize search bar
addSearchBar();