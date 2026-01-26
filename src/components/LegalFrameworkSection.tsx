import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { BidahChart } from "./BidahChart";

export function LegalFrameworkSection() {
  return (
    <section id="framework" className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <SectionHeader number="01" title="The Fiqh of Innovation" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
            The central contention lies in the definition of <em className="text-foreground">Bid'ah</em>. 
            The Ashari and Shafi'i schools do not define Bid'ah merely as "something new" (linguistic), 
            but through a legal lens: Does the action contradict the Quran or Sunnah?
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            <strong className="text-foreground">Imam Al-Shafi'i</strong> (d. 204 AH) stated:{" "}
            <span className="italic text-foreground">
              "Newly invented matters are of two types: One that conflicts with the Book, the Sunnah, 
              or a narration or consensus—this is the reprehensible innovation. And that which has 
              been instituted of good in which there is no conflict with any of these—this is the 
              praiseworthy innovation."
            </span>
          </p>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary shadow-sm">
            <h4 className="font-bold text-secondary mb-2 font-serif">
              The 5 Legal Rulings (Al-Ahkam Al-Khamsa)
            </h4>
            <p className="text-sm text-muted-foreground">
              Scholars like <strong className="text-foreground">Al-Izz bin Abd al-Salam</strong> codified 
              that innovation is not a monolithic category of "Haram", but falls under the five rulings 
              of Sharia based on its nature and objectives: Obligatory, Recommended, Permissible, 
              Disliked, or Forbidden.
            </p>
          </div>
        </motion.div>
      </div>

      <BidahChart />
    </section>
  );
}
