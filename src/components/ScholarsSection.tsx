import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const scholars = [
  {
    initials: "IS",
    name: "Imam Al-Suyuti",
    title: "Shafi'i Jurist & Hadith Master (d. 911 AH)",
    quote: "The origin of the Mawlid... which consists of gathering people, reciting the Quran, and recounting the signs regarding the beginning of the Prophetic mission... is among the good innovations for which one is rewarded due to the veneration of the Prophet ﷺ contained therein."
  },
  {
    initials: "AS",
    name: "Imam Abu Shamah Al-Maqdisi",
    title: "The Teacher of Imam Al-Nawawi (d. 665 AH)",
    quote: "Among the best of what has been innovated in our times is what is done every year on the day of the Prophet's birth... acts of charity, doing good... and expressing joy."
  }
];

export function ScholarsSection() {
  return (
    <section id="scholars">
      <SectionHeader 
        number="04" 
        title="Scholarly Positions" 
        subtitle="The majority of Ahlussunnah scholars have accepted the Mawlid as a 'Good Innovation'" 
      />

      <div className="grid md:grid-cols-2 gap-8">
        {scholars.map((scholar, index) => (
          <motion.div
            key={scholar.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card p-8 shadow-sm border-t-4 border-secondary hover:shadow-md transition-shadow rounded-lg"
          >
            <div className="mb-6 text-primary text-5xl font-serif">"</div>
            <p className="text-muted-foreground italic mb-6 leading-relaxed">
              {scholar.quote}
            </p>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold text-sm">
                {scholar.initials}
              </div>
              <div>
                <p className="font-bold text-foreground font-serif">{scholar.name}</p>
                <p className="text-xs text-muted-foreground">{scholar.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hanafi Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 bg-background border border-primary/30 rounded-lg p-6"
      >
        <h4 className="font-bold text-foreground mb-2 font-serif">
          Note on the Hanafi (Maturidi) Position
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The great Hanafi scholar <strong className="text-foreground">Mulla Ali al-Qari</strong> wrote 
          specifically on the Mawlid, praising it. Additionally, <strong className="text-foreground">Ibn Abidin</strong>, 
          the final authority in the Hanafi school, accepted the Mawlid, stating that it is a 
          commendable gathering when free of reprehensible acts.
        </p>
      </motion.div>
    </section>
  );
}
