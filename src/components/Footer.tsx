import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <p className="font-arabic text-2xl font-bold text-foreground mb-4">
          والله تعالى أعلم
        </p>
        <p className="text-muted-foreground mb-8">And Allah knows best.</p>

        <div className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          <p className="font-semibold text-foreground mb-3">Primary References:</p>
          <ol className="space-y-1 text-left list-decimal list-inside">
            <li><em>Al-Ba'ith 'ala Inkar al-Bida'</em> by Abu Shamah.</li>
            <li><em>Husn al-Maqsid fi Amal al-Mawlid</em> by Imam Al-Suyuti.</li>
            <li><em>Fath al-Bari</em> by Ibn Hajar Al-Asqalani.</li>
            <li><em>Al-Mawrid al-Rawi fi Mawlid al-Nabi</em> by Mulla Ali al-Qari.</li>
          </ol>
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Al-Burhan. A scholarly resource for Ahlussunnah wal Jama'ah.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
