import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Narrative() {
  return (
    <section className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4"
          >
            My Story
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            From the Field to the Future
          </h2>
        </div>
        
        <div className="relative">
          <Quote className="absolute -top-4 -left-4 h-12 w-12 text-primary/10" />
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 pl-4 border-l-2 border-primary/20">
            <p>
              People often ask how I went from owning a farm and a brewery to building AI agents. To me, it was the natural next step.
            </p>
            <p>
              As a farmer, I didn't just drive tractors—I architected <span className="text-foreground font-medium">IoT sensor networks</span> that reduced chemical use by <span className="text-primary font-semibold">40%</span>. As a brewery owner, I didn't just pour pints—I used A/B testing and data analytics to drive a <span className="text-primary font-semibold">30% increase</span> in customer acquisition.
            </p>
            <p className="text-foreground font-medium italic">
              I realized that my true passion wasn't just in the product, but in the intelligence behind it.
            </p>
            <p>
              That curiosity led me to a Master's in Data Science and a deep dive into Large Language Models. Now, instead of optimizing crop yields, I optimize multi-agent workflows. I bring the grit of a business owner and the rigor of a data scientist to every product I build.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
