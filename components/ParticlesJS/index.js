import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const ParticlesJS = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: theme === 'dark' ? '#ffffff' : '#000000' },
          shape: { type: 'circle' },
          opacity: { value: theme === 'dark' ? 0.5 : 0.3 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: theme === 'dark' ? '#ffffff' : '#000000',
            opacity: theme === 'dark' ? 0.4 : 0.2,
            width: 1
          },
          move: { enable: true, speed: 6, direction: 'none', out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    };
    document.head.appendChild(script);

    return () => {
      if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, [theme]);

  return <div id="particles-js" className="fixed inset-0 -z-10" />;
};

export default ParticlesJS;