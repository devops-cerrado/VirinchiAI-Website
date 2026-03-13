import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";
import { solutions, industries, type Solution } from "@/constants/solutionsData";

const videos = [
  { title: "Virinchi Predictive Analytics",             videoId: "y1qqm24aNog" },
  { title: "Virinchi Finance — Balance Sheet Commentary", videoId: "wfeCkFLmwRY" },
];

const YoutubeEmbed = ({ title, videoId }: { title: string; videoId: string }) => (
  <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
    {videoId ? (
      <div className="relative aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    ) : (
      <div className="aspect-video flex flex-col items-center justify-center bg-secondary gap-3">
        <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Play className="w-6 h-6 text-primary ml-0.5" />
        </div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-xs text-muted-foreground/50">Video coming soon</p>
      </div>
    )}
    <div className="px-4 py-3 border-t border-border">
      <p className="text-sm font-medium text-foreground">{title}</p>
    </div>
  </div>
);

const SolutionDetail = ({ solution, onBack }: { solution: Solution; onBack: () => void }) => {
  const Icon = solution.icon;
  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Solutions
      </button>
      <div className="bg-card border border-border rounded-2xl p-10 max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground">{solution.name}</h3>
        </div>
        <div className="space-y-4">
          {solution.detail.map((para, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-base">{para}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Solutions = () => {
  const [selected, setSelected] = useState<Solution | null>(null);
  const [gridHeight, setGridHeight] = useState<number | undefined>(undefined);

  const gridRef = useCallback((node: HTMLDivElement | null) => {
    if (node) setGridHeight(node.offsetHeight);
  }, []);

  return (
  <section id="solutions" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      {/* Solutions */}
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-3 block">SOLUTIONS</span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          Purpose-Built Solutions
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Beyond our core platform, we offer a suite of specialized AI Applications which you can easily integrate into your application workflow.
        </p>
      </div>

      <div
        className="relative mb-20 flex items-center"
        style={{ minHeight: gridHeight }}
      >
      <AnimatePresence mode="wait">
        {selected ? (
          <SolutionDetail key="detail" solution={selected} onBack={() => setSelected(null)} />
        ) : (
          <motion.div
            key="grid"
            ref={gridRef}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors group"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
                  <button
                    onClick={() => setSelected(s)}
                    className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      {/* Industries */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Built for Your Industry</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className={`px-6 py-3 rounded-lg border text-sm font-medium ${
              ind.comingSoon
                ? "border-border text-muted-foreground opacity-60"
                : "border-border text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer"
            }`}
          >
            {ind.name}
            {ind.comingSoon && <span className="ml-2 text-xs text-primary">Coming Soon</span>}
          </div>
        ))}
      </div>

      {/* Video showcases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <YoutubeEmbed title={v.title} videoId={v.videoId} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Solutions;
