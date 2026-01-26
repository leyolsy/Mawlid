import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const tabs = [
  { id: "quran", label: "Quranic Basis" },
  { id: "sunnah", label: "Sunnah Hasanah" },
  { id: "hadith", label: "Specific Hadith" },
  { id: "qiyas", label: "Analogy (Qiyas)" },
];

export function EvidenceTabs() {
  const [activeTab, setActiveTab] = useState("quran");

  return (
    <section id="evidence">
      <SectionHeader number="03" title="Scriptural Evidence" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-xl shadow-lg overflow-hidden border border-border"
      >
        {/* Tab Headers */}
        <div className="flex border-b border-border overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-serif font-bold flex-shrink-0 transition-all duration-200 border-b-4 ${
                activeTab === tab.id
                  ? "text-secondary border-secondary bg-muted/50"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8 md:p-12 min-h-[450px]">
          <AnimatePresence mode="wait">
            {activeTab === "quran" && <QuranContent key="quran" />}
            {activeTab === "sunnah" && <SunnahContent key="sunnah" />}
            {activeTab === "hadith" && <HadithContent key="hadith" />}
            {activeTab === "qiyas" && <QiyasContent key="qiyas" />}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

function QuranContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-4 font-serif">Surah Yunus, Verse 58</h3>
        <p className="arabic-text text-3xl md:text-4xl text-foreground mb-6 leading-relaxed">
          قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا
        </p>
        <p className="text-lg italic text-muted-foreground">
          "Say: In the Bounty of Allah and in His Mercy, in that let them rejoice..."
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-8">
        <div>
          <h4 className="font-bold text-secondary mb-3 font-serif">The Tafsir (Interpretation)</h4>
          <p className="text-muted-foreground leading-relaxed">
            Ibn Abbas (RA), the cousin of the Prophet and the "Interpreter of the Quran", 
            commented on this verse saying:
            <br /><br />
            <em className="text-foreground">"The Bounty of Allah is Knowledge (Ilm), and His Mercy is Muhammad ﷺ."</em>
          </p>
          <span className="citation-ref mt-3 inline-block" title="Tafsir al-Durr al-Manthur, Vol 4, Pg 330">
            [Tafsir al-Durr al-Manthur, Vol 4, Pg 330]
          </span>
        </div>
        <div className="bg-background p-6 rounded-lg border border-border">
          <h4 className="font-bold text-secondary mb-3 font-serif">The Deduction (Istidlal)</h4>
          <p className="text-muted-foreground leading-relaxed">
            Allah commands us to rejoice in His Mercy. The Prophet ﷺ is the greatest Mercy. 
            Therefore, expressing joy for his existence is complying with a Divine Command. 
            The Mawlid is a structured expression of this commanded joy.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SunnahContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-primary mb-4 font-serif">The Foundational Principle</h3>
        <p className="arabic-text text-2xl md:text-3xl text-foreground mb-6 leading-relaxed">
          مَنْ سَنَّ فِي الْإِسْلَامِ سُنَّةً حَسَنَةً فَلَهُ أَجْرُهَا
        </p>
        <p className="text-lg italic text-muted-foreground">
          "Whoever institutes a good practice (Sunnah Hasanah) in Islam will have its reward 
          and the reward of those who act upon it..."
        </p>
        <span className="citation-ref mt-3 inline-block">[Sahih Muslim]</span>
      </div>

      <div className="bg-card p-6 rounded-lg border-l-4 border-secondary shadow-sm">
        <h4 className="font-bold text-foreground mb-3 font-serif">
          Refuting the "Every Bid'ah is Fire" Argument
        </h4>
        <p className="text-muted-foreground leading-relaxed">
          The Ashari and Maturidi scholars explain that the Hadith "Every (Kullu) Bid'ah is misguidance" 
          is a general statement (<em>Aam</em>) that is specified (<em>Makhsus</em>) by the Hadith of 
          Sunnah Hasanah. The 'Kullu' is not taken at face value.
          <br /><br />
          Just as "Kullu" (Every) in the Quranic verse <em>"Destroying everything by the command of its Lord"</em> (46:25) 
          did not mean the earth and heavens were destroyed, "Every Bid'ah" refers to innovations 
          that contradict Sharia.
        </p>
      </div>
    </motion.div>
  );
}

function HadithContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-xl font-bold text-primary mb-4 font-serif">The Hadith of Monday</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <p className="text-muted-foreground leading-relaxed mb-4">
              When the Prophet ﷺ was asked about fasting on Mondays, he replied:
            </p>
            <p className="text-xl font-serif text-foreground italic mb-4">
              "That is the day on which I was born and the day on which revelation was sent down to me."
            </p>
            <span className="citation-ref">[Sahih Muslim, Book 6, Hadith 2606]</span>
          </div>
          <div className="md:w-1/3 bg-background p-5 rounded-lg border-l-2 border-secondary">
            <p className="text-sm text-secondary font-bold mb-2">Implication:</p>
            <p className="text-sm text-muted-foreground">
              The Prophet himself distinguished his birthday by an act of worship (fasting) 
              to show gratitude. This establishes the principle of honoring the day of birth.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-border" />

      <div>
        <h3 className="text-xl font-bold text-primary mb-4 font-serif">The Hadith of Ashura</h3>
        <p className="text-muted-foreground leading-relaxed">
          The Prophet saw Jews fasting on Ashura to thank Allah for saving Musa (AS). 
          He said, "We have more right to Musa," and fasted. Ibn Hajar uses this to prove 
          that thanking Allah on days when great favors occurred is established in the Sunnah.
        </p>
      </div>
    </motion.div>
  );
}

function QiyasContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold text-foreground mb-6 font-serif">
        The Argument of Ibn Hajar Al-Asqalani
      </h3>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        The <em>Amir al-Mu'minin</em> in Hadith, <strong className="text-foreground">Ibn Hajar</strong>, 
        derived the permissibility via <em>Qiyas</em> (Analogy) on the Hadith of Ashura.
      </p>

      <div className="space-y-6">
        {[
          {
            step: 1,
            title: "The Principle (Asl)",
            description: "It is Sunnah to show gratitude to Allah on days coinciding with great blessings (e.g., saving Musa)."
          },
          {
            step: 2,
            title: "The Comparison (Far')",
            description: "The birth of the Prophet is the greatest blessing bestowed upon humanity."
          },
          {
            step: 3,
            title: "The Conclusion (Hukm)",
            description: "Therefore, it is recommended to show gratitude on the day of his birth annually."
          }
        ].map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex"
          >
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
              {item.step}
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-foreground font-serif">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-muted text-sm text-muted-foreground italic rounded-lg">
        Source: Al-Hawi lil-Fatawi by Imam Al-Suyuti, Vol 1, Pg 196.
      </div>
    </motion.div>
  );
}
