import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-visual">
        <img src="/screenshot.png" class="app-screenshot-hero" alt="Beruang App" />
      </div>
      
      <div class="hero-content">
        <h1>Beruang</h1>
        <p class="subtitle">
          Your intelligent financial companion. 
          Master the 50/30/20 rule, gamify your savings, and unlock 
          expert wealth insights powered by AI.
        </p>
        
        <div class="btn-group">
          <a href="/downloads/beruang.apk" class="btn btn-primary" download>
            <span>Download for Android</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          </a>
          <a href="/downloads/beruang.ipa" class="btn btn-secondary" download>
             <span>Download for iOS</span>
          </a>
        </div>
      </div>
    </section>

    <!-- UI Gallery - Carousel -->
    <section class="gallery-section">
      <h2 class="section-title">App Interface</h2>
      <div class="gallery-carousel-wrapper">
        <button class="nav-btn nav-prev" id="prevBtn">&#10094;</button>
        
        <div class="gallery-track-container">
          <div class="gallery-track" id="galleryTrack">
            ${[1, 2, 3, 4, 5, 6, 7].map((i, index) => `
              <div class="gallery-item" onclick="openLightbox(${index})">
                <img src="/app_ui/ui_${i}.png" class="gallery-img" alt="Screen ${i}" />
              </div>
            `).join('')}
          </div>
        </div>
        
        <button class="nav-btn nav-next" id="nextBtn">&#10095;</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-container">
      <h2 class="section-title">Why Beruang?</h2>
      <p class="section-desc">A professional financial tool that feels like a game.</p>
      
      <div class="features-grid">
        <div class="glass-card">
          <span class="feature-icon">🎮</span>
          <h3 class="card-title">RPG Gamification</h3>
          <p class="card-text">Climb through 13 unique bear evolution levels. Earn XP for every RM saved and transform your financial habits through engaging character progression.</p>
        </div>
        <div class="glass-card">
          <span class="feature-icon">📊</span>
          <h3 class="card-title">50/30/20 Strategy</h3>
          <p class="card-text">Automatically organize your RM income into Needs (50%), Wants (30%), and Savings (20%). Visualize budget overflows and stay on track with interactive charts.</p>
        </div>
        <div class="glass-card">
          <span class="feature-icon">🛡️</span>
          <h3 class="card-title">Enterprise Security</h3>
          <p class="card-text">Protected by industry-standard TLS encryption, Firebase Auth, and secure Firestore rules. Your data is stored on secure Google Cloud infrastructure.</p>
        </div>
      </div>
    </section>

    <!-- AI Intelligence Section -->
    <section class="ai-section">
      <div class="ai-content">
        <div class="ai-text">
          <h2 class="section-title" style="text-align: left">Intelligent AI Chat</h2>
          <p class="card-text" style="font-size: 1.1rem; margin-bottom: 2rem;">
            Chat in real-time with our AI assistant. It analyzes your unique financial context to provide personalized saving tips and predictive spending analysis.
          </p>
          <div class="glass-card" style="padding: 1.5rem; background: rgba(255,255,255,0.05);">
            <h4 style="margin: 0 0 0.5rem 0; font-weight: 700;">Data Privacy Built-In</h4>
            <p style="font-size: 0.9rem; margin: 0; opacity: 0.8;">
              We don't connect to your bank, we don't track your location, and we never sell your data. You have the total right to export or delete your account at any time.
            </p>
          </div>
        </div>
        
        <div class="ai-visuals">
          <div class="chart-card">
            <h5 style="color: #333; margin: 0 0 1rem 0; font-weight: 700;">Prediction Accuracy</h5>
            <img src="/ai_accuracy.png" class="chart-img" alt="AI Accuracy Heatmap" />
          </div>
          <div class="chart-card">
             <h5 style="color: #333; margin: 0 0 1rem 0; font-weight: 700;">Spending Distribution</h5>
            <img src="/ai_distribution.png" class="chart-img" alt="Needs vs Wants Distribution" />
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="lightbox">
      <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
      <div class="lightbox-content-wrapper">
        <button class="lightbox-nav lb-prev" id="lbPrev">&#10094;</button>
        <img id="lightboxImg" src="" class="lightbox-img" />
        <button class="lightbox-nav lb-next" id="lbNext">&#10095;</button>
      </div>
    </div>

    <footer class="footer">
      <p>&copy; ${new Date().getFullYear()} Beruang. Built for better financial futures.</p>
    </footer>

  </div>
`;

// --- Carousel Logic ---
const track = document.getElementById('galleryTrack');
const totalItems = 7;
let currentIndex = 0;

function updateCarousel() {
    const item = track.querySelector('.gallery-item');
    if (!item) return;
    const itemWidth = item.getBoundingClientRect().width;
    const gap = 32; // match CSS 2rem gap
    const moveAmount = (itemWidth + gap) * currentIndex;
    track.style.transform = `translateX(-${moveAmount}px)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    const visibleItems = window.innerWidth > 768 ? 3 : 1;
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        updateCarousel();
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    currentIndex = 0;
    updateCarousel();
});


// --- Lightbox Logic ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let currentLightboxIndex = 0;

window.openLightbox = (index) => {
    currentLightboxIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
};

window.closeLightbox = () => {
    lightbox.classList.remove('active');
};

function updateLightboxImage() {
    lightboxImg.src = `/app_ui/ui_${currentLightboxIndex + 1}.png`;
}

document.getElementById('lbNext').addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex + 1) % totalItems;
    updateLightboxImage();
});

document.getElementById('lbPrev').addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex - 1 + totalItems) % totalItems;
    updateLightboxImage();
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
