import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-visual">
        <img src="/screenshot.png" class="app-screenshot-hero" alt="Beruang App" />
      </div>
      
      <div class="hero-content">
        <h1>Beruang: Your AI Financial Advisor</h1>
        <p class="subtitle">
          Master your budget through the power of artificial intelligence. 
          Get real-time expert insights, predictive spending analysis, 
          and personalized wealth-building strategies.
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

    <!-- AI Intelligence Section (MOVED UP) -->
    <section class="ai-section main-character">
      <div class="ai-content">
        <div class="ai-text">
          <h2 class="section-title" style="text-align: left">The Brain Behind Your Balance</h2>
          <p class="card-text" style="font-size: 1.15rem; margin-bottom: 2rem; color: #fff; font-weight: 500;">
            Beruang's AI isn't just a chatbot—it's your personal financial data scientist. 
          </p>
          <div class="glass-card ai-feature-card">
            <h4 style="margin: 0 0 0.5rem 0; font-weight: 700; color: var(--primary);">Predictive Context Analysis</h4>
            <p style="font-size: 0.95rem; margin: 0; opacity: 0.9;">
              By analyzing your unique spending history, our AI identifies patterns before you do, predicting upcoming bills and suggesting adjustments in real-time.
            </p>
          </div>
          <p style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.7;">
            * All AI processing is done with enterprise-grade privacy. We never sell your data.
          </p>
        </div>
        
        <div class="ai-visuals">
          <div class="chart-card glow-card">
            <h5 style="color: #333; margin: 0 0 1rem 0; font-weight: 700;">AI Prediction Engine</h5>
            <img src="/ai_accuracy.png" class="chart-img" alt="AI Accuracy Heatmap" />
          </div>
          <div class="chart-card glow-card" style="margin-top: -1rem; margin-left: 2rem;">
             <h5 style="color: #333; margin: 0 0 1rem 0; font-weight: 700;">Spending Optimization</h5>
            <img src="/ai_distribution.png" class="chart-img" alt="Needs vs Wants Distribution" />
          </div>
        </div>
      </div>
    </section>

    <!-- UI Gallery - Carousel -->
    <section class="gallery-section">
      <h2 class="section-title">Intelligent Interface</h2>
      <p class="section-desc">Designed for clarity, powered by intelligence.</p>
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
      <h2 class="section-title">Beyond Simple Tracking</h2>
      <p class="section-desc">Professional-grade financial strategies made accessible.</p>
      
      <div class="features-grid">
        <div class="glass-card border-glow">
          <span class="feature-icon">🧠</span>
          <h3 class="card-title">AI Financial Expert</h3>
          <p class="card-text">Connect with a real-time advisor that understands your goals. Get actionable advice tailored to your currency and cost of living.</p>
        </div>
        <div class="glass-card">
          <span class="feature-icon">📊</span>
          <h3 class="card-title">Automated 50/30/20</h3>
          <p class="card-text">Stop guessing where your money goes. Our intelligence engine automatically allocates every RM into scientific budget categories.</p>
        </div>
        <div class="glass-card">
          <span class="feature-icon">🎮</span>
          <h3 class="card-title">Rewarding Progress</h3>
          <p class="card-text">Stay motivated with a 13-level evolution system. Watch your bear evolve as the AI helps you reach new financial milestones.</p>
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
    const gap = 32;
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
