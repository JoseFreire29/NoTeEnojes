import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSmile, FiCalendar, FiFrown, FiHeart, FiArrowDown } from 'react-icons/fi';
import confetti from 'canvas-confetti';

function App() {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    // Trigger confetti rain
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffb6b9', '#fae3d9', '#bbded6', '#8ac6d1']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffb6b9', '#fae3d9', '#bbded6', '#8ac6d1']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-semibold mb-12 max-w-4xl leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tengo 3 razones para que me perdones...
        </motion.h1>
        <motion.button 
          onClick={() => scrollToSection('razon-1')}
          className="group flex flex-col items-center gap-3 text-lg md:text-xl font-medium tracking-wide text-gray-600 hover:text-gray-900 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span>Ver razones</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="p-3 bg-white/50 backdrop-blur-sm rounded-full shadow-sm group-hover:shadow-md transition-shadow"
          >
            <FiArrowDown className="text-xl" />
          </motion.div>
        </motion.button>
      </section>

      {/* Reason 1 */}
      <section id="razon-1" className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-rose-100/50 rounded-full flex items-center justify-center mb-10 shadow-sm">
            <FiSmile className="text-5xl md:text-7xl text-rose-400" />
          </div>
          <h2 className="text-4xl md:text-6xl max-w-3xl leading-snug">
            Porque me gusta verte feliz.
          </h2>
        </motion.div>
      </section>

      {/* Reason 2 */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-sky-100/50 rounded-full flex items-center justify-center mb-10 shadow-sm">
            <FiCalendar className="text-5xl md:text-7xl text-sky-400" />
          </div>
          <h2 className="text-4xl md:text-6xl max-w-3xl leading-snug mb-6">
            Porque ya mismo nos vamos a ver.
          </h2>
          <p className="text-lg md:text-2xl text-gray-500 font-sans font-light max-w-xl">
            Estoy muy emocionado de verte
          </p>
        </motion.div>
      </section>

      {/* Reason 3 */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-indigo-100/50 rounded-full flex items-center justify-center mb-10 shadow-sm">
            <FiFrown className="text-5xl md:text-7xl text-indigo-400" />
          </div>
          <h2 className="text-4xl md:text-6xl max-w-3xl leading-snug">
            Porque me voy a poner triste.
          </h2>
        </motion.div>
      </section>

      {/* Closing Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {!accepted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-7xl mb-14">No te enojes 🥹</h2>
            <h2 className="text-5xl md:text-7xl mb-14">Me perdonas?</h2>
            <button
              onClick={handleAccept}
              className="group relative px-12 py-5 bg-rose-400 text-white rounded-full text-2xl md:text-3xl font-sans font-medium overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 flex items-center gap-3">
                Sí <FiHeart className="animate-pulse" />
              </span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 md:w-40 md:h-40 bg-rose-100 rounded-full flex items-center justify-center mb-8 shadow-inner">
              <FiHeart className="text-6xl md:text-8xl text-rose-500 drop-shadow-sm" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif max-w-4xl leading-tight mb-6">
              ¡SIII! Prometo que te voy a hacer reír mucho cuando nos veamos. ❤️
            </h2>
          </motion.div>
        )}
      </section>
    </main>
  );
}

export default App;
