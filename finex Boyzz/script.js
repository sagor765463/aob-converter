import { createIcons, Github, Linkedin, Twitter, Terminal, Cpu, Activity, Layers, ArrowUpRight, Wifi, Heart, Code2, Database, Globe, Monitor, Zap, Star, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, X, Crosshair, Eye } from 'lucide';

// 1. Initialize Lucide Icons
createIcons({
  icons: {
    Github, Linkedin, Twitter, Terminal, Cpu, Activity, Layers, ArrowUpRight, Wifi, Heart, Code2, Database, Globe, Monitor, Zap, Star, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, X, Crosshair, Eye
  }
});

// Since JS is running successfully, it is safe to apply the custom cursor CSS hiding rules
document.body.classList.add('custom-cursor');

/* --- 1.1 Advanced Aesthetic Data-Stream --- */
class AestheticDataRain {
  constructor() {
    this.canvas = document.getElementById('bg-particles');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.count = window.innerWidth < 768 ? 40 : 80;
    this.mouse = { x: null, y: null, radius: 200 };
    
    this.init();
    this.animate();
    this.handleResize();
    this.handleMouseMove();
  }

  init() {
    this.resize();
    this.particles = [];
    for (let i = 0; i < this.count; i++) {
        const isSquare = Math.random() > 0.7; // 30% squares for technical look
        this.particles.push({
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            size: Math.random() * 2.5 + 1,
            shape: isSquare ? 'square' : 'circle',
            pulse: Math.random() * Math.PI * 2, // Random starting phase
            pulseSpeed: 0.02 + Math.random() * 0.03,
            glow: Math.random() > 0.8 // 20% have a pulsing glow
        });
    }
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  handleResize() {
    window.addEventListener('resize', () => {
      this.resize();
      this.init();
    });
  }

  handleMouseMove() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        
        // Update pulsing
        p.pulse += p.pulseSpeed;
        const currentOpacity = 0.15 + Math.sin(p.pulse) * 0.1; // Breathes between 0.05 - 0.25
        const currentSize = p.size + Math.sin(p.pulse) * 0.5;

        // Position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = this.canvas.width;
        if (p.x > this.canvas.width) p.x = 0;
        if (p.y < 0) p.y = this.canvas.height;
        if (p.y > this.canvas.height) p.y = 0;

        // Mouse Repulsion
        if (this.mouse.x != null) {
          const dx = p.x - this.mouse.x;
          const dy = p.y - this.mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < this.mouse.radius) {
            const force = (this.mouse.radius - dist) / this.mouse.radius;
            p.x += dx * force * 0.04;
            p.y += dy * force * 0.04;
          }
        }

        // Draw shape
        this.ctx.beginPath();
        this.ctx.fillStyle = `rgba(0, 240, 255, ${currentOpacity})`;
        
        if (p.shape === 'circle') {
            this.ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        } else {
            this.ctx.rect(p.x - currentSize, p.y - currentSize, currentSize * 2, currentSize * 2);
        }
        
        // Pulsing Shadow for "Glow" particles
        if (p.glow) {
            this.ctx.shadowBlur = 15 * (0.5 + Math.sin(p.pulse) * 0.5);
            this.ctx.shadowColor = `rgba(0, 240, 255, 0.4)`;
        }
        
        this.ctx.fill();
        this.ctx.shadowBlur = 0; // Reset

        // Subtle Connections (Neural Links)
        for (let j = i + 1; j < this.particles.length; j++) {
            const p2 = this.particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) { // Shorter distance for a cleaner look
                this.ctx.beginPath();
                this.ctx.strokeStyle = `rgba(0, 240, 255, ${(1 - dist / 120) * 0.1})`;
                this.ctx.lineWidth = 0.5;
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(p2.x, p2.y);
                this.ctx.stroke();
            }
        }
    }
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => new AestheticDataRain());
} else {
  new AestheticDataRain();
}

// 2. Custom Cursor System (Tenzo Difference Blend)
const cursor = document.getElementById('cur');

window.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
    
    // Check if hovering an interactive target
    const target = e.target;
    const isHovering = target && target.closest && (
                       target.closest('.magic-hover') !== null ||
                       target.closest('a') !== null ||
                       target.closest('button') !== null ||
                       target.closest('.pill') !== null ||
                       target.closest('.ac') !== null ||
                       target.closest('.mts-cell') !== null
                     );
                       
    if (isHovering) {
        if (cursor) cursor.classList.add('big');
    } else {
        if (cursor) cursor.classList.remove('big');
    }
});

// 2b. Magnetic Hover Physics!
// When hovering over .magic-hover, elements slightly pull towards the mouse.
document.querySelectorAll('.magic-hover, .pill, .ac, .cw-item, .game-item, .mts-cell, .mal-btn').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Tweak the multiplier (0.15) to control how magnetic it is
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });
  
  el.addEventListener('mouseleave', () => {
    // Reset transform on leave with CSS transition taking over
    el.style.transform = 'translate(0px, 0px)';
  });
});

// 3. Scroll Reveal Observer (Buttery smooth cubic-bezier fades)
const fadeElements = document.querySelectorAll('.fade-up');
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
fadeElements.forEach(el => fadeObserver.observe(el));

// 4. Equalizer BGM Player Setup with Autoplay Logic
const bgmToggle = document.getElementById('bgm-toggle');
const bgmAudio = document.getElementById('bgm-audio');
const bgmStatusText = document.getElementById('bgm-status-text');
const bgmIcon = document.getElementById('bgm-icon');
const visualizerBars = document.getElementById('bgm-visualizer');

let isPlaying = false;

const mpContainer = document.getElementById('music-player');

function updateUI(playing) {
    if (playing) {
        bgmStatusText.textContent = 'BGM PLAYING';
        bgmIcon.textContent = '🔊';
        visualizerBars.classList.add('playing');
        mpContainer?.classList.add('is-playing');
    } else {
        bgmStatusText.textContent = 'BGM STOPPED';
        bgmIcon.textContent = '🔇';
        visualizerBars.classList.remove('playing');
        mpContainer?.classList.remove('is-playing');
    }
}

function toggleAudio() {
    if (isPlaying) {
        bgmAudio.pause();
    } else {
        bgmAudio.play().catch(e => console.error("Audio playback failed:", e));
    }
    isPlaying = !isPlaying;
    updateUI(isPlaying);
}

if (bgmToggle && bgmAudio && visualizerBars) {
    bgmToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent trigger from global listeners
        toggleAudio();
    });

    // Autoplay Logic: Attempt to play on first user interaction
    const startOnInteraction = () => {
        if (!isPlaying) {
            bgmAudio.play().then(() => {
                isPlaying = true;
                updateUI(true);
                // Remove listeners after successful autoplay
                cleanupListeners();
            }).catch(() => {
                // Keep waiting for interaction if blocked
            });
        }
    };

    const cleanupListeners = () => {
        window.removeEventListener('click', startOnInteraction);
        window.removeEventListener('keydown', startOnInteraction);
        window.removeEventListener('scroll', startOnInteraction);
        window.removeEventListener('touchstart', startOnInteraction);
    };

    window.addEventListener('click', startOnInteraction);
    window.addEventListener('keydown', startOnInteraction);
    window.addEventListener('scroll', startOnInteraction);
    window.addEventListener('touchstart', startOnInteraction);
    
    // Also try immediately (for users who have already interacted/allowed)
    startOnInteraction();
}

// 5. Visitor Counter Logic (HUD Integration)
async function initVisitorCounter() {
    const namespace = "finex-boyzz-portfolio"; // Unique key
    const key = "visits";
    try {
        const response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`);
        const data = await response.json();
        const countEl = document.getElementById('v-count');
        if (countEl && data.count) {
            countEl.textContent = data.count.toString().padStart(6, '0');
        }
    } catch (e) {
        console.error("Counter HUD Error:", e);
        const countEl = document.getElementById('v-count');
        if (countEl) countEl.textContent = "000142"; // Fallback aesthetic
    }
}

initVisitorCounter();
