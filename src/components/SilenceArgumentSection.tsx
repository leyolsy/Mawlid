import { motion } from "framer-motion";
import { AlertTriangle, Users, Heart } from "lucide-react";

const arguments_data = [
  {
    icon: AlertTriangle,
    title: "Absence ≠ Prohibition",
    description: "Prohibition requires a clear text (Nahy). If the Prophet did not do something, it may be because there was no need at the time, or to avoid making it obligatory. The compilation of Hadith into books and the diacritical marks (I'rab) in the Mushaf were also 'new' but done for a greater benefit."
  },
  {
    icon: Users,
    title: "Distinction (Mukhalafa)",
    description: "Early Muslims needed to establish a unique identity distinct from Christians who celebrated Christmas. Once Islamic identity was solidified, scholars like Ibn Hajar deemed it permissible to express gratitude for the Prophet's birth, as the core intention differs."
  },
  {
    icon: Heart,
    title: "Love & Renewal",
    description: "The Sahaba lived the Prophetic reality daily. As time passed and hearts hardened, the Maqasid (Objectives) of Sharia necessitate reviving the memory of his birth to rekindle love in subsequent generations."
  }
];

export function SilenceArgumentSection() {
  return (
    <section id="silence" className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="section-number">02</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            The Argument of Silence
          </h2>
        </div>
        <p className="text-xl text-muted-foreground italic font-arabic">
          "Al-Turuk la yaqtadi al-Tahrim"
        </p>
        <p className="text-sm text-secondary font-bold mt-2">
          Maxim: The mere leaving of an action by the Prophet ﷺ does not imply its prohibition.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {arguments_data.map((arg, index) => (
          <motion.div
            key={arg.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-elegant bg-background p-6"
          >
            <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <arg.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-foreground mb-3 font-serif text-lg">
              {arg.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {arg.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
