import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    
    <!-- Hero Section - AI SPOTLIGHT -->
    <section class="hero">
      <div class="hero-visual">
        <img src="/screenshot.png" class="app-screenshot-hero" alt="Beruang AI Interface" />
      </div>
      
      <div class="hero-content">
        <h1>Your AI-Powered <br> Financial Mastermind</h1>
        <p class="subtitle">
          Beruang uses advanced artificial intelligence to analyze your unique financial habits, 
          providing real-time insights and predictive analysis that manual trackers can't match.
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

    <!-- AI Intelligence Section - THE MAIN CHARACTER -->
    <section class="ai-section main-character-ai">
      <div class="ai-content">
        <div class="ai-text">
          <h2 class="section-title ai-highlight-title" style="text-align: left">Financial Intelligence</h2>
          <p class="card-text ai-description-hero">
            Chat in real-time with Beruang's sophisticated AI assistant. It doesn't just track data—it understands your life, predicts future spending, and provides actionable wealth-building advice.
          </p>
          <div class="glass-card ai-focus-card">
            <h4 style="margin: 0 0 0.5rem 0; font-weight: 800; color: #fff;">Context-Aware Analysis</h4>
            <p style="font-size: 0.95rem; margin: 0; opacity: 0.9;">
              Beruang analyzes your transaction history to categorize spending automatically and forecast your month-end balance with frightening accuracy.
            </p>
          </div>
        </div>
        
        <div class="ai-visuals">
          <div class="chart-card ai-visual-card">
            <h5 style="color: #333; margin: 0 0 1rem 0; font-weight: 800;">AI Optimization Heatmap</h5>
            <img src="/ai_accuracy.png" class="chart-img" alt="AI Accuracy Heatmap" />
          </div>
          <div class="chart-card ai-visual-card">
             <h5 style="color: #333; margin: 0 0 1rem 0; font-weight: 800;">Predictive Distribution</h5>
            <img src="/ai_distribution.png" class="chart-img" alt="Needs vs Wants Distribution" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section - REORDERED -->
    <section class="features-container">
      <h2 class="section-title">Superior Capability</h2>
      <p class="section-desc">The perfect blend of high-performance AI and engaging user experience.</p>
      
      <div class="features-grid">
        <!-- AI FIRST -->
        <div class="glass-card ai-featured-card">
          <span class="feature-icon">🧠</span>
          <h3 class="card-title">Intelligent Insights</h3>
          <p class="card-text">Access deep financial analytics. Beruang's LLM-driven engine identifies patterns in your spending that help you eliminate waste and save more efficiently.</p>
        </div>
        
        <!-- STRATEGY SECOND -->
        <div class="glass-card">
          <span class="feature-icon">📊</span>
          <h3 class="card-title">Professional Strategy</h3>
          <p class="card-text">Implementation of the 50-30-20 rule helps you allocate RM income perfectly into Needs, Wants, and Savings without doing any manual math.</p>
        </div>

        <!-- GAMIFICATION THIRD (SUPPORTING) -->
        <div class="glass-card footer-feature">
          <span class="feature-icon">🎮</span>
          <h3 class="card-title">Progress Tracking</h3>
          <p class="card-text">Stay motivated with a fun 13-level bear evolution system. Earn XP for positive financial habits and watch your mascot grow as your net worth increases.</p>
        </div>
      </div>
    </section>

    <!-- UI Gallery - Carousel -->
    <section class="gallery-section">
      <h2 class="section-title">The Interface</h2>
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
      <p style="font-size: 0.8rem; margin-top: 5px; opacity: 0.5;">Data Security: 256-bit TLS Encryption | Firebase Cloud Strategy</p>
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
