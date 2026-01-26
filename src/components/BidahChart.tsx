import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Wajib (Obligatory)", value: 15, description: "Includes: Preserving Quran (Book form)" },
  { name: "Mandub (Recommended)", value: 25, description: "Includes: Mawlid, Building Schools" },
  { name: "Mubah (Permissible)", value: 20, description: "Neutral innovations" },
  { name: "Makruh (Disliked)", value: 15, description: "Discouraged but not forbidden" },
  { name: "Haram (Forbidden)", value: 25, description: "Contradicts core principles" },
];

const COLORS = [
  "hsl(180, 14%, 13%)",   // Ink - Wajib
  "hsl(41, 48%, 56%)",    // Gold - Mandub
  "hsl(220, 10%, 70%)",   // Grey - Mubah
  "hsl(0, 70%, 70%)",     // Light Red - Makruh
  "hsl(0, 70%, 45%)",     // Red - Haram
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: typeof data[0] }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 rounded-lg shadow-lg border border-border">
        <p className="font-semibold text-foreground">{payload[0].payload.name}</p>
        <p className="text-sm text-muted-foreground">{payload[0].payload.description}</p>
      </div>
    );
  }
  return null;
};

export function BidahChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card p-8 rounded-xl shadow-xl border border-border"
    >
      <h3 className="text-center font-serif text-xl font-bold mb-2 text-foreground">
        Classification of New Matters
      </h3>
      <p className="text-center text-sm text-muted-foreground mb-6">
        Based on Qawa'id al-Ahkam by Al-Izz bin Abd al-Salam
      </p>
      
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index]} 
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center"
              wrapperStyle={{ paddingTop: 20 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
