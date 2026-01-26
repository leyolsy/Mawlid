import { motion } from "framer-motion";

const refutations = [
  {
    objection: "It is an imitation of the Christians (Christmas).",
    response: "Imitation (Tashabbuh) is prohibited if it involves their specific rituals or beliefs (like attributing divinity to Isa). Commemorating a birth is a universal human expression. The Prophet ﷺ adopted practices of previous nations if they aligned with Islamic principles, such as fasting on Ashura."
  },
  {
    objection: "All Bid'ah is Misguidance (Kullu Bid'ah Dalala).",
    response: "As established in the first section, the word 'Kullu' (Every) functions linguistically as general but legally as specific. If 'Every' meant literally all, the companions would be guilty of innovation for compiling the Quran between two covers, which is unanimously accepted as a praiseworthy innovation."
  }
];

export function RefutationsSection() {
  return (
    <section id="qa" className="bg-foreground rounded-xl p-8 md:p-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-serif font-bold text-card mb-10 text-center"
      >
        Refuting Common Objections
      </motion.h2>

      <div className="space-y-8">
        {refutations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-muted-foreground/20 pb-8 last:border-b-0"
          >
            <h4 className="text-primary font-bold mb-3 font-serif text-lg">
              Objection: "{item.objection}"
            </h4>
            <p className="text-card/80 leading-relaxed">
              <strong className="text-card">Response:</strong> {item.response}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
