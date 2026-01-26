import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <header className="relative py-20 md:py-28 px-6 teal-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1.5 px-4 border border-primary/60 rounded-full text-xs font-serif tracking-widest text-primary mb-6 uppercase"
        >
          Ahlussunnah wal Jama'ah
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-secondary-foreground"
        >
          The Mawlid: <br />
          <span className="text-primary">Innovation or Devotion?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          A structured analysis based on the principles of the Ashari and Maturidi schools, 
          examining the legal classification of <em className="text-primary/90">Bid'ah</em> and 
          the evidences for honoring the Prophetic birth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#framework"
            className="inline-block gold-gradient text-foreground px-10 py-4 rounded-lg hover:opacity-90 transition-opacity font-bold shadow-lg text-lg"
          >
            Start Analysis
          </a>
        </motion.div>
      </div>
    </header>
  );
}
