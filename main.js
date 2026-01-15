import './style.css'

const totalOriginalItems = 7;
const visibleItems = window.innerWidth > 768 ? 3 : 1;

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
             <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          </a>
        </div>
        <div class="install-help-wrapper">
          <a href="#" class="install-link" onclick="openInstallModal(event)">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="margin-right: 6px; opacity: 0.8;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            How to install on iOS
          </a>
        </div>
        <div class="support-link-wrapper" style="margin-top: 1rem;">
          <a href="#" class="support-link" onclick="openDonationModal(event)">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="margin-right: 6px; color: #FFD700;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            Support the Project (Donate)
          </a>
        </div>
      </div>
    </section>

    <!-- UI Gallery - Carousel -->
    <section class="gallery-section">
      <h2 class="section-title">App Interface</h2>
      <p class="section-desc">Designed for clarity, powered by intelligence.</p>
      <div class="gallery-carousel-wrapper">
        <button class="nav-btn nav-prev" id="prevBtn">&#10094;</button>
        
        <div class="gallery-track-container">
          <div class="gallery-track" id="galleryTrack">
            <!-- Infinite Clones + Originals -->
            ${generateCarouselItems()}
          </div>
        </div>
        
        <button class="nav-btn nav-next" id="nextBtn">&#10095;</button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-container">
      <h2 class="section-title">Why Beruang?</h2>
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

    <!-- AI Intelligence Section -->
    <section class="ai-section main-character">
      <div class="ai-content">
        <div class="ai-text">
          <h2 class="section-title" style="text-align: left">Intelligent AI Chat</h2>
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
      <div style="margin-top: 1rem;">
         <a href="#" class="footer-link" onclick="openDonationModal(event)">Support the Developer</a>
      </div>
    </footer>

    <!-- Installation Modal -->
    <div id="installModal" class="modal-overlay">
      <div class="modal-content">
        <button class="modal-close" onclick="closeInstallModal()">&times;</button>
        <h2 class="section-title">Install Beruang on iOS</h2>
        <p class="section-desc">Follow these simple steps to add Beruang to your iPhone home screen.</p>
        
        <div class="install-steps-simple">
          <div class="step-card-simple">
            <div class="step-header">
              <span class="step-num-pill">Step 1</span>
              <h4>Open in Safari</h4>
            </div>
            <p>Tap the <strong>Safari</strong> browser to open this page. Other browsers like Chrome won't work for installation.</p>
          </div>
          
          <div class="step-card-simple">
            <div class="step-header">
              <span class="step-num-pill">Step 2</span>
              <h4>Tap Share</h4>
            </div>
            <p>Tap the <strong>Share</strong> icon <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="display:inline; vertical-align:middle;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100 2.684m0-2.684l6.632-3.316m0 0a3 3 0 100-2.684 3 3 0 000 2.684z"/></svg> at the bottom of the screen.</p>
          </div>
          
          <div class="step-card-simple">
            <div class="step-header">
              <span class="step-num-pill">Step 3</span>
              <h4>Add to Home</h4>
            </div>
            <p>Scroll down and tap <strong>'Add to Home Screen'</strong>. Look for the plus [+] icon.</p>
          </div>
        </div>

        <div class="troubleshooting-box">
          <h5>Still can't see 'Add to Home Screen'?</h5>
          <ul>
            <li>Make sure you scrolled down far enough in the Share menu.</li>
            <li>Double-check if you are accidentally using a private/incognito tab.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Donation Modal -->
    <div id="donationModal" class="modal-overlay">
      <div class="modal-content donation-modal-content">
        <button class="modal-close" onclick="closeDonationModal()">&times;</button>
        <h2 class="section-title">Support Beruang 🐻</h2>
        <p class="section-desc">If this project has helped you manage your finances, consider buying the dev a coffee! Your support keeps the AI running.</p>
        
        <div class="donation-qr-container">
          <img src="/donation.jpeg" class="qr-image" alt="DuitNow QR" />
          <div class="qr-instruction">
            <p><strong>Scan with any Malaysian Bank App</strong></p>
            <p style="font-size: 0.85rem; opacity: 0.7;">(GXBank, ShopeePay, TNG, Maybank, etc.)</p>
          </div>
        </div>

        <div class="bank-details-box">
          <p>Recipient Name: <strong>Izwan</strong></p>
          <p style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.8;">Thank you for your generosity! every small contribution helps build better financial futures.</p>
        </div>
      </div>
    </div>

  </div>
`;

function generateCarouselItems() {
  const items = [1, 2, 3, 4, 5, 6, 7];
  // For infinite scroll, we clone items at both ends
  // Buffer size should be at least visibleItems
  const buffer = 3;
  const pre = items.slice(-buffer);
  const post = items.slice(0, buffer);
  const combined = [...pre, ...items, ...post];

  return combined.map((i, index) => {
    // Map indices for lightbox back to original 0-6
    let originalIdx;
    if (index < buffer) originalIdx = items.length - buffer + index;
    else if (index < buffer + items.length) originalIdx = index - buffer;
    else originalIdx = index - (buffer + items.length);

    return `
      <div class="gallery-item" onclick="openLightbox(${originalIdx})">
        <img src="/app_ui/ui_${i}.png" class="gallery-img" alt="Screen ${i}" />
      </div>
    `;
  }).join('');
}

// --- Infinite Carousel Logic ---
const track = document.getElementById('galleryTrack');
const itemsCount = 7;
const buffer = 3;
let currentIndex = buffer; // Start at first original item
let isTransitioning = false;

function updateCarousel(instant = false) {
  if (instant) track.style.transition = 'none';
  else track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';

  const item = track.querySelector('.gallery-item');
  if (!item) return;
  const itemWidth = item.getBoundingClientRect().width;
  const gap = window.innerWidth <= 768 ? 0 : 32;
  const moveAmount = (itemWidth + gap) * currentIndex;
  track.style.transform = `translateX(-${moveAmount}px)`;

  if (instant) {
    // Force reflow
    track.offsetHeight;
    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
  }
}

// Initial position
updateCarousel(true);

document.getElementById('nextBtn').addEventListener('click', () => {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex++;
  updateCarousel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex--;
  updateCarousel();
});

track.addEventListener('transitionend', () => {
  isTransitioning = false;

  // Wrap around detection
  // If we've reached the start clone (itemsCount + buffer), jump to the first original item
  if (currentIndex >= itemsCount + buffer) {
    currentIndex = buffer;
    updateCarousel(true);
  }
  // If we've reached the end clone (buffer - 1), jump back to the last original item
  else if (currentIndex < buffer) {
    currentIndex = itemsCount + buffer - 1;
    updateCarousel(true);
  }
});

window.addEventListener('resize', () => {
  currentIndex = buffer;
  updateCarousel(true);
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
  currentLightboxIndex = (currentLightboxIndex + 1) % itemsCount;
  updateLightboxImage();
});

document.getElementById('lbPrev').addEventListener('click', (e) => {
  e.stopPropagation();
  currentLightboxIndex = (currentLightboxIndex - 1 + itemsCount) % itemsCount;
  updateLightboxImage();
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// --- Install Modal Logic ---
const installModal = document.getElementById('installModal');

window.openInstallModal = (e) => {
  e.preventDefault();
  installModal.classList.add('active');
};

window.closeInstallModal = () => {
  installModal.classList.remove('active');
};

if (installModal) {
  installModal.addEventListener('click', (e) => {
    if (e.target === installModal) closeInstallModal();
  });
}

// --- Donation Modal Logic ---
const donationModal = document.getElementById('donationModal');

window.openDonationModal = (e) => {
  e.preventDefault();
  donationModal.classList.add('active');
};

window.closeDonationModal = () => {
  donationModal.classList.remove('active');
};

if (donationModal) {
  donationModal.addEventListener('click', (e) => {
    if (e.target === donationModal) closeDonationModal();
  });
}
