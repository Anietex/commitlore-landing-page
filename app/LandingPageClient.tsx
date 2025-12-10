'use client';

import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Lenis from 'lenis';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ children, href, className = '' }: { children: React.ReactNode; href: string; className?: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function Typewriter({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 80);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isInView, text, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {showCursor && isInView && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[3px] h-[1em] bg-[#B45309] ml-1 align-middle"
        />
      )}
    </span>
  );
}

function AnimatedUnderline({ children, color = "#B45309", delay = 0 }: { children: React.ReactNode; color?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className="relative inline">
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: delay, ease: [0.25, 0.8, 0.25, 1] }}
      />
    </span>
  );
}

function CommitToDraftDemo() {
  const demos = [
    {
      commits: [
        { msg: "feat: add user authentication", stats: "+5 files • 127 insertions" },
        { msg: "feat: implement JWT tokens", stats: "+2 files • 45 insertions" },
        { msg: "test: add auth test suite", stats: "+3 files • 89 insertions" }
      ],
      platform: "Twitter",
      output: "Just shipped a complete authentication system with JWT tokens and full test coverage. Security first! 🔐"
    },
    {
      commits: [
        { msg: "fix: resolve memory leak", stats: "+1 file • 12 insertions" },
        { msg: "perf: optimize db queries", stats: "+2 files • 34 insertions" }
      ],
      platform: "LinkedIn",
      output: "Improved our application performance by fixing a critical memory leak and optimizing database queries. Response times are now 40% faster."
    },
    {
      commits: [
        { msg: "feat: add dark mode", stats: "+8 files • 203 insertions" },
        { msg: "style: update color palette", stats: "+4 files • 67 insertions" }
      ],
      platform: "Blog",
      output: "Dark Mode is Here! 🌙 We've completely redesigned our UI with a beautiful dark theme. Check out the new color palette and smooth transitions."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % demos.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [demos.length]);

  const currentDemo = demos[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl border-2 border-[#1A1614]/10 overflow-hidden shadow-xl"
    >
      <div className="flex items-center justify-between px-6 py-4 bg-[#1A1614] border-b-2 border-[#1A1614]/10">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-white/20"></span>
          <span className="w-3 h-3 rounded-full bg-white/20"></span>
          <span className="w-3 h-3 rounded-full bg-white/20"></span>
        </div>
        <div className="font-space text-sm font-bold text-white">Commits → Drafts</div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-3 py-1 text-xs font-bold bg-white text-[#1A1614] rounded"
        >
          Live
        </motion.div>
      </div>

      <div className="p-8 bg-[#FAF8F3]">
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#1A1614]/60 font-bold mb-4">
              Input ({currentDemo.commits.length} commits)
            </p>
            <div className="space-y-3">
              {currentDemo.commits.map((commit, i) => (
                <motion.div
                  key={`${currentIndex}-${i}`}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: isTransitioning ? 0 : 1, x: isTransitioning ? -40 : 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="p-4 bg-white rounded-xl border-2 border-[#1A1614]/10"
                >
                  <span className="block font-mono text-sm font-semibold text-[#1A1614] mb-2">
                    {commit.msg}
                  </span>
                  <span className="block text-xs text-[#1A1614]/60 font-medium">
                    {commit.stats}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 bg-[#1A1614] rounded-full flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 5v14M19 12l-7 7-7-7"></path>
              </svg>
            </motion.div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-[#1A1614]/60 font-bold mb-4">Output</p>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTransitioning ? 0 : 1, y: isTransitioning ? 20 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-5 bg-white rounded-xl border-2 border-[#1A1614]/10"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-bold bg-[#1A1614] text-white rounded">
                  {currentDemo.platform}
                </span>
                <span className="px-3 py-1 text-xs font-bold bg-[#1A1614] text-white rounded">✓</span>
              </div>
              <p className="text-sm text-[#1A1614] leading-relaxed font-medium">
                {currentDemo.output}
              </p>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-2 pt-2">
            {demos.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: i === currentIndex ? 1.2 : 1,
                  backgroundColor: i === currentIndex ? '#1A1614' : '#1A161420'
                }}
                className="w-2 h-2 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LiveActivityFeed() {
  const [activities] = useState([
    { name: "Sarah K.", action: "published a devlog", time: "2m ago", avatar: "SK", color: "blue" },
    { name: "Alex M.", action: "connected GitHub", time: "5m ago", avatar: "AM", color: "green" },
    { name: "Jordan P.", action: "generated 3 posts", time: "8m ago", avatar: "JP", color: "purple" },
    { name: "Taylor R.", action: "upgraded to Pro", time: "12m ago", avatar: "TR", color: "orange" }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activities.length]);

  const currentActivity = activities[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-8 left-8 z-40 hidden lg:block"
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-xl shadow-lg border border-[#EDE9D5] p-4 flex items-center gap-3 max-w-xs"
      >
        <div className={`w-10 h-10 rounded-full bg-${currentActivity.color}-100 flex items-center justify-center flex-shrink-0`}>
          <span className={`text-${currentActivity.color}-700 font-semibold text-xs`}>{currentActivity.avatar}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-[#1A1614] font-medium truncate">{currentActivity.name}</p>
          <p className="text-xs text-[#3A2F2A] truncate">{currentActivity.action}</p>
        </div>
        <div className="text-xs text-[#EDE9D5] flex-shrink-0">{currentActivity.time}</div>
      </motion.div>
    </motion.div>
  );
}

function UIScreenshots() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -35]);

  const screenshots = [
    { title: "Dashboard", desc: "Track all repos and drafts at a glance", y: y1 },
    { title: "Draft List", desc: "Filter by repo, platform, or status", y: y2 },
    { title: "Editor View", desc: "Edit, regenerate, and publish instantly", y: y3 },
    { title: "Repo Selection", desc: "Control which repos generate content", y: y4 }
  ];

  return (
    <section ref={ref} className="py-24 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-widest text-[#B45309] font-semibold mb-4">Inside CommitLore</p>
            <h2 className="font-space text-3xl sm:text-4xl font-bold text-[#1A1614] mb-6">Simple tools. Powerful workflow.</h2>
            <p className="text-lg text-[#3A2F2A]">Track commits, manage drafts, and publish. All from one clean dashboard.</p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screen, i) => (
            <motion.div
              key={i}
              style={{ y: screen.y }}
              whileHover={{ rotateX: 1, rotateY: 2, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FAF8F3] rounded-xl border border-[#EDE9D5] shadow-lg overflow-hidden"
            >
              <div className="aspect-[16/10] bg-white border-b border-[#EDE9D5] p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-[#FFEFE6] flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#B45309]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        <path d="M9 9h6M9 13h6M9 17h3"></path>
                      </svg>
                    </div>
                    <p className="font-space text-sm font-bold text-[#1A1614]">{screen.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#FAF8F3]">
                <p className="text-sm text-[#3A2F2A] text-center">{screen.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveDemoPreview() {
  const commits = [
    { msg: "feat: add draft regeneration UI", stats: "+3 files • 42 insertions" },
    { msg: "fix: webhook auth headers", stats: "+1 file • 8 insertions" },
    { msg: "docs: update API examples", stats: "+2 files • 15 insertions" }
  ];

  const [visibleCommits, setVisibleCommits] = useState<number>(0);
  const [showArrow, setShowArrow] = useState(false);
  const [showDraft, setShowDraft] = useState(false);
  const [terminalTilt, setTerminalTilt] = useState({ x: 0, y: 0 });
  const [draftTilt, setDraftTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, setter: typeof setTerminalTilt) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / 25;
    const y = (e.clientX - rect.left - rect.width / 2) / 25;
    setter({ x, y });
  };

  const handleMouseLeave = (setter: typeof setTerminalTilt) => {
    setter({ x: 0, y: 0 });
  };

  useEffect(() => {
    const sequence = async () => {
      setVisibleCommits(0);
      setShowArrow(false);
      setShowDraft(false);

      for (let i = 1; i <= commits.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setVisibleCommits(i);
      }

      await new Promise(resolve => setTimeout(resolve, 400));
      setShowArrow(true);

      await new Promise(resolve => setTimeout(resolve, 500));
      setShowDraft(true);

      await new Promise(resolve => setTimeout(resolve, 3000));
    };

    sequence();
    const interval = setInterval(sequence, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#1A1614] relative overflow-hidden">

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/60 font-semibold mb-4 sm:mb-6 md:mb-8"
            >
              See it in action
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              className="font-space text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10 max-w-5xl leading-[1.1] sm:leading-[1.05]"
            >
              Watch your commits become content in real-time
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl leading-relaxed font-medium"
            >
              Commits flow in. Drafts flow out. You stay in control.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
            style={{ perspective: '1000px' }}
            onMouseMove={(e) => handleMouseMove(e, setTerminalTilt)}
            onMouseLeave={() => handleMouseLeave(setTerminalTilt)}
          >
            <motion.div
              animate={{
                rotateX: terminalTilt.x,
                rotateY: terminalTilt.y
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl border-2 border-white/10 overflow-hidden"
                style={{ background: '#1A1614' }}>
              <div className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#1A1614]/80 border-b border-[#3A2F2A]">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-3 sm:ml-4 font-mono text-xs sm:text-sm text-[#EDE9D5]">git log --oneline</span>
              </div>

              <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                {commits.slice(0, visibleCommits).map((commit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group"
                  >
                    <div className="font-mono text-sm sm:text-base text-[#D2691E] mb-1 sm:mb-2">
                      <span className="text-[#B45309]">▸</span> {commit.msg}
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-[#3A2F2A] pl-3 sm:pl-4">{commit.stats}</div>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-5 bg-[#B45309] ml-1"
                ></motion.div>
              </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{
                opacity: showArrow ? 1 : 0,
                x: showArrow ? [0, 20, 0] : 0
              }}
              transition={{
                opacity: { duration: 0.3 },
                x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="flex items-center gap-4"
            >
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#B45309] to-transparent"></div>
              <div className="w-4 h-4 rounded-full bg-[#B45309] shadow-lg shadow-[#B45309]/50"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#B45309] to-transparent"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:mt-32"
            style={{ perspective: '1000px' }}
            onMouseMove={(e) => handleMouseMove(e, setDraftTilt)}
            onMouseLeave={() => handleMouseLeave(setDraftTilt)}
          >
            <motion.div
              animate={{
                rotateX: draftTilt.x,
                rotateY: draftTilt.y
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative"
            >
              <div className="relative bg-white rounded-3xl border-2 border-[#1A1614]/10 overflow-hidden">
              <div className="flex items-center justify-between px-8 py-6 bg-[#FAF8F3] border-b-2 border-[#1A1614]/10">
                <span className="font-space text-sm font-bold text-[#1A1614] uppercase tracking-wider">Generated Draft</span>
                <span className="px-3 py-1 text-sm font-semibold text-white rounded-lg" style={{ background: '#B45309' }}>Twitter</span>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showDraft ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 min-h-[400px] flex flex-col justify-center"
              >
                {showDraft && (
                  <div className="space-y-6">
                    <p className="text-xl text-[#1A1614] leading-relaxed">
                      Shipped draft regeneration UI and fixed webhook auth. Also updated API docs with real examples.
                    </p>
                    <p className="text-xl text-[#1A1614] leading-relaxed">
                      The new editor makes it super easy to tweak and republish. 🚀
                    </p>
                    <div className="flex gap-3 pt-4">
                      <span className="px-4 py-2 text-sm font-medium bg-[#FFEFE6] text-[#3A2F2A] rounded-lg">Tone: Casual</span>
                      <span className="px-4 py-2 text-sm font-medium bg-[#15803D]/10 text-[#15803D] rounded-lg">✓ Ready</span>
                    </div>
                  </div>
                )}
              </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAF8F3] text-[#1A1614]">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#B45309] origin-left z-[100]"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-[#B45309] text-white rounded-full shadow-lg hover:bg-[#B45309]/90 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <LiveActivityFeed />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-[#1A1614]/10"
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 sm:gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#B45309] to-[#D97706] flex items-center justify-center shadow-lg relative overflow-hidden p-0.5 logo-container">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white logo-mark" viewBox="0 0 24 24" fill="none">
              <motion.circle
                cx="12" cy="6" r="2.5"
                fill="currentColor"
                fillOpacity="0.9"
                className="animate-pulse-node"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ duration: 0.6, delay: 0 }}
              />
              <motion.circle
                cx="8" cy="10" r="2.5"
                fill="currentColor"
                fillOpacity="0.9"
                className="animate-pulse-node"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.circle
                cx="8" cy="18" r="2.5"
                fill="currentColor"
                fillOpacity="0.9"
                className="animate-pulse-node"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              <motion.circle
                cx="12" cy="14" r="2.5"
                fill="currentColor"
                fillOpacity="0.9"
                className="animate-pulse-node"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />

              <motion.path
                d="M12 8.5 L9.5 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                strokeLinecap="round"
                className="animate-draw-line"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <motion.path
                d="M8 12.5 L8 15.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                strokeLinecap="round"
                className="animate-draw-line"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <motion.path
                d="M10 17 L10.5 14.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.7"
                strokeLinecap="round"
                className="animate-draw-line"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />

              <motion.path
                d="M15 8 L18 8 L18 20 L15 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.5"
                strokeLinecap="round"
                className="animate-fade-in"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              />
              <motion.path
                d="M16.5 12 L18 12"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeLinecap="round"
                className="animate-fade-in"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              />
              <motion.path
                d="M16.5 15 L18 15"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeLinecap="round"
                className="animate-fade-in"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              />
              </svg>
            </div>
            <motion.span
              className="font-space font-bold text-lg sm:text-xl md:text-3xl text-[#1A1614]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              CommitLore
            </motion.span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-sm font-medium text-[#1A1614]/70 hover:text-[#1A1614] transition-colors">How it works</a>
            <a href="#features" className="text-sm font-medium text-[#1A1614]/70 hover:text-[#1A1614] transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-[#1A1614]/70 hover:text-[#1A1614] transition-colors">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton
              href="#pricing"
              className="px-4 py-2 text-sm font-bold bg-[#1A1614] text-white rounded-lg hover:bg-[#1A1614]/90 transition-colors"
            >
              Get Started
            </MagneticButton>
          </div>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1614] hover:bg-[#1A1614]/5 rounded-lg transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-[#1A1614]/10 bg-white/95 backdrop-blur-md overflow-hidden"
            >
              <nav className="px-4 py-4 space-y-1">
                <a
                  href="#how"
                  onClick={handleMobileNavClick}
                  className="block px-4 py-3 text-base font-medium text-[#1A1614]/70 hover:text-[#1A1614] hover:bg-[#1A1614]/5 rounded-lg transition-colors"
                >
                  How it works
                </a>
                <a
                  href="#features"
                  onClick={handleMobileNavClick}
                  className="block px-4 py-3 text-base font-medium text-[#1A1614]/70 hover:text-[#1A1614] hover:bg-[#1A1614]/5 rounded-lg transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  onClick={handleMobileNavClick}
                  className="block px-4 py-3 text-base font-medium text-[#1A1614]/70 hover:text-[#1A1614] hover:bg-[#1A1614]/5 rounded-lg transition-colors"
                >
                  Pricing
                </a>
                <div className="pt-2">
                  <a
                    href="#pricing"
                    onClick={handleMobileNavClick}
                    className="block px-4 py-3 text-base font-bold bg-[#1A1614] text-white rounded-lg text-center hover:bg-[#1A1614]/90 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="main-content" className="min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 gradient-hero relative overflow-hidden" aria-label="Hero section">
        <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 lg:gap-16 items-center py-20 sm:py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#1A1614]/60 font-semibold mb-6 sm:mb-8 md:mb-12"
            >
              From Code to Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              className="font-space text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1614] leading-[1.1] mb-6 sm:mb-8 md:mb-12 tracking-tight"
            >
              Your code tells a story.<br className="hidden sm:block" /> The world should hear it.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-[#1A1614]/70 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-2xl"
            >
              CommitLore transforms your GitHub commits into ready-to-share content for Twitter, LinkedIn, and your blog. Review, refine, and publish on your terms.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6"
            >
              <MagneticButton
                href="https://app.commitlore.com/"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-[#B45309] text-white rounded-xl hover:bg-[#B45309]/90 transition-colors text-center"
              >
                Connect GitHub and Start Telling Your Story
              </MagneticButton>
              <motion.a
                href="#demo"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-[#1A1614] rounded-xl border-2 border-[#1A1614] hover:bg-[#1A1614] hover:text-white transition-colors text-center"
              >
                See Live Demo
              </motion.a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-sm text-[#1A1614]/50 mt-6 font-medium"
            >
              Join 500+ developers turning their commits into career momentum
            </motion.p>
          </motion.div>

          <CommitToDraftDemo />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#B45309] font-semibold mb-6"
              >
                The Problem
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1614] mb-8 leading-[1.1]"
              >
                The Developer&apos;s Visibility Problem
              </motion.h2>
            </motion.div>
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-lg sm:text-xl text-[#3A2F2A] leading-relaxed font-medium"
              >
                You solve real problems every day.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg sm:text-xl text-[#3A2F2A] leading-relaxed"
              >
                You debug that <AnimatedUnderline delay={0.3}>impossible race condition</AnimatedUnderline> at 2am. You refactor legacy spaghetti into <AnimatedUnderline delay={0.5}>clean architecture</AnimatedUnderline>. You ship features that users actually love.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="text-2xl sm:text-3xl font-bold text-[#1A1614]"
              >
                <Typewriter text="But nobody knows." delay={400} />
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg sm:text-xl text-[#3A2F2A] leading-relaxed"
              >
                Your GitHub is full of <AnimatedUnderline delay={0.2}>green squares</AnimatedUnderline>. Your resume says &quot;5 years experience.&quot; But when someone Googles your name? <AnimatedUnderline delay={0.4} color="#DC2626">Nothing.</AnimatedUnderline>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg sm:text-xl text-[#3A2F2A] leading-relaxed"
              >
                Meanwhile, developers with half your skills are getting job offers, building audiences, and landing clients. <span className="font-semibold text-[#1A1614]">Because they <AnimatedUnderline delay={0.3} color="#16A34A">show up online</AnimatedUnderline>.</span>
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-4 border-t border-[#1A1614]/10"
              >
                <p className="text-lg text-[#3A2F2A] leading-relaxed italic">
                  You know you should post more. You&apos;ve told yourself a hundred times. But after a long day of coding, the last thing you want to do is write a clever tweet about it.
                </p>
                <p className="text-lg text-[#3A2F2A] leading-relaxed mt-4">
                  So you don&apos;t. And another week passes. Another month. <span className="font-semibold text-[#1A1614]">Another year of invisible work.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#1A1614] relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/60 font-semibold mb-6"
            >
              The Solution
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
              className="font-space text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]"
            >
              What if your commits spoke for you?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            >
              Add a CommitLore command to your commit message, and we'll craft a draft for you. Review it, tweak it, publish it—on your schedule.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                example: "That authentication refactor you just pushed?",
                result: "It's already a LinkedIn post about security best practices."
              },
              {
                example: "That performance fix that cut load time by 40%?",
                result: "It's a Twitter thread about optimization techniques. Ready when you are."
              },
              {
                example: "That side project you've been quietly building?",
                result: "It's a weekly devlog your future employer will read."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: [0.25, 0.8, 0.25, 1] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#B45309]/50 transition-colors"
              >
                <p className="text-white/90 text-lg font-medium mb-4">{item.example}</p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="text-[#B45309] text-lg font-semibold"
                >
                  {item.result}
                </motion.p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-xl sm:text-2xl text-white font-semibold max-w-3xl mx-auto">
              You don&apos;t write anything. You don&apos;t copy-paste anything. You don&apos;t even open Twitter. <span className="text-[#B45309]">You just code, and your story tells itself.</span>
            </p>
          </motion.div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-[#B45309]/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B45309]/10 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#FAF8F3]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: 500, suffix: "+", label: "Active Developers" },
              { value: 25000, suffix: "+", label: "Commits Processed" },
              { value: 8500, suffix: "+", label: "Posts Generated" },
              { value: 400, suffix: "+", label: "Hours Saved Weekly" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 sm:p-8"
              >
                <div className="font-space text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1614] mb-2 leading-none">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-base font-semibold text-[#3A2F2A]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-32">
            <AnimatedSection>
              <p className="text-xs uppercase tracking-[0.3em] text-[#3A2F2A] font-semibold mb-6">How it works</p>
              <h2 className="font-space text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1614] mb-8 max-w-5xl leading-[1.1]">
                Three steps to being seen
              </h2>
              <p className="text-2xl text-[#3A2F2A] max-w-3xl leading-relaxed font-medium">One-time setup. Done in 60 seconds.</p>
            </AnimatedSection>
          </div>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Connect GitHub + Social Accounts",
                desc: "Link your GitHub, Twitter/X, and LinkedIn. One-time setup. Done in 60 seconds."
              },
              {
                num: "02",
                title: "Trigger drafts with a command",
                desc: "Add a simple command to your commit message. Our AI analyzes your work and generates content that sounds like you, ready for review."
              },
              {
                num: "03",
                title: "Review, refine, and publish",
                desc: "Approve drafts from your dashboard, tweak the tone, and publish when you're happy. You're always in control."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ x: 20 }}
                className="bg-[#FAF8F3] rounded-3xl p-12 lg:p-16 border-2 border-[#1A1614]/10 hover:border-[#1A1614] transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                  <div className="font-space text-8xl lg:text-9xl font-bold text-[#1A1614]/10 leading-none">
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1614] mb-6 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xl sm:text-2xl text-[#3A2F2A] leading-relaxed max-w-2xl font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LiveDemoPreview />

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#FAF8F3]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#B45309] font-semibold mb-6"
            >
              Why It Matters
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1614] mb-6 leading-[1.1]"
            >
              More than posts. A career advantage.
            </motion.h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {[
              {
                title: "Get Hired",
                subtitle: "Your next job is watching",
                desc: "Recruiters Google you. Hiring managers check your Twitter. When they find a developer who clearly ships and communicates? You skip the line.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )
              },
              {
                title: "Build Authority",
                subtitle: "Become the developer people remember",
                desc: "Every post compounds. In six months, you're not just \"another developer.\" You're the one who posts thoughtful insights about your stack. That's how you get conference invites, consulting gigs, and inbound opportunities.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                )
              },
              {
                title: "Effortless Content",
                subtitle: "Stay consistent without the grind",
                desc: "You've tried posting before. It lasted a week. CommitLore removes the friction. Add a command to your commit, review the draft, hit publish. Stay visible without the mental overhead.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                  </svg>
                )
              },
              {
                title: "Own Your Narrative",
                subtitle: "Control how the world sees your work",
                desc: "Your code is impressive. But commits like \"fix bug\" and \"update config\" don't show that. CommitLore translates your technical work into stories non-technical people can appreciate: investors, managers, future cofounders.",
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                )
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border-2 border-[#1A1614]/10 hover:border-[#B45309] hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="w-14 h-14 rounded-xl bg-[#FFEFE6] flex items-center justify-center mb-6 text-[#B45309]"
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="font-space text-2xl sm:text-3xl font-bold text-[#1A1614] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#B45309] font-semibold mb-4">
                  {benefit.subtitle}
                </p>
                <p className="text-lg text-[#3A2F2A] leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedSection>
              <p className="text-xs uppercase tracking-widest text-[#B45309] font-semibold mb-4">Features</p>
              <h2 className="font-space text-3xl sm:text-4xl font-bold text-[#1A1614] mb-6">Built for developers who&apos;d rather code</h2>
            </AnimatedSection>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Smart Commit Analysis", desc: "Not just your commit message. We analyze the diff, the files changed, and the context to generate meaningful content." },
              { title: "Multi-Platform Publishing", desc: "Connect Twitter/X, LinkedIn, and your blog. Review your draft once, then publish to all platforms with a single click." },
              { title: "Your Voice, Not Ours", desc: "Set your tone. Professional? Casual? Technical deep-dives? Indie hacker vibes? We match your style." },
              { title: "Weekly Digests", desc: "Get a summary of your coding week delivered to your drafts every Sunday. Review and share your wins with one click." },
              { title: "Always in Control", desc: "Every draft waits for your approval. Edit, regenerate, or publish—nothing goes out without your say." },
              { title: "Engagement Dashboard", desc: "See what's been posted, track likes and comments, and learn what content resonates with your audience." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FAF8F3] rounded-xl p-6 border border-[#EDE9D5]"
              >
                <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg bg-[#FFEFE6]">
                  <svg className="w-5 h-5 text-[#B45309]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                </div>
                <h3 className="font-space text-lg font-bold text-[#1A1614] mb-2">{item.title}</h3>
                <p className="text-[#3A2F2A]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <UIScreenshots />

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 sm:px-8 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <AnimatedSection>
              <p className="text-xs uppercase tracking-widest text-[#B45309] font-semibold mb-4">Pricing</p>
              <h2 className="font-space text-3xl sm:text-4xl font-bold text-[#1A1614] mb-4">Invest in your visibility</h2>
            </AnimatedSection>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                name: "Free",
                desc: "Perfect for trying it out",
                price: "$0",
                period: "/month",
                features: ["1 repository", "5 drafts per month", "Manual copy/paste only", "Twitter & LinkedIn formats"],
                cta: "Start Free",
                popular: false
              },
              {
                name: "Pro",
                desc: "For developers building in public",
                price: "$15",
                period: "/month",
                features: ["Unlimited repositories", "Unlimited posts", "Publish to Twitter/X & LinkedIn", "All content formats (Twitter, LinkedIn, Blog, Devlog)", "Custom tone & voice settings", "Weekly digest summaries", "Engagement dashboard", "Priority support"],
                cta: "Start Pro",
                popular: true
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                animate={plan.popular ? {
                  boxShadow: [
                    "0 0 0 0 rgba(180, 83, 9, 0.08)",
                    "0 0 0 6px rgba(180, 83, 9, 0.08)",
                    "0 0 0 0 rgba(180, 83, 9, 0.08)"
                  ]
                } : {}}
                transition={plan.popular ? {
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 0.3 }
                } : { duration: 0.3 }}
                className={`bg-white rounded-xl p-8 shadow-sm relative ${plan.popular ? 'border-2 border-[#B45309] shadow-lg' : 'border border-[#EDE9D5]'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#B45309] text-white text-xs font-semibold rounded-full">Recommended</div>
                )}
                <div className="mb-6">
                  <h3 className="font-space text-xl font-bold text-[#1A1614] mb-2">{plan.name}</h3>
                  <p className="text-[#3A2F2A]">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <span className="font-space text-4xl font-bold text-[#1A1614]">{plan.price}</span>
                  <span className="text-lg text-[#3A2F2A]">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-[#3A2F2A]">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#B45309] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full px-6 py-3 text-center text-base font-semibold rounded-lg ${plan.popular ? 'bg-[#B45309] text-white hover:bg-[#B45309]/90 shadow-sm' : 'text-[#3A2F2A] hover:text-[#1A1614] border border-[#EDE9D5]'}`}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-[#3A2F2A] flex-wrap">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B45309]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B45309]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B45309]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="font-medium">Secure payments</span>
              </div>
            </div>
            <p className="mt-8 text-sm text-[#3A2F2A]">
              Need custom features or on-premise deployment? <a href="#" className="text-[#B45309] font-semibold hover:underline">Contact sales</a> for Enterprise pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-[#B45309] font-semibold mb-3">Social Proof</p>
            <h2 className="font-space text-3xl sm:text-4xl font-bold text-[#1A1614] mb-4">Developers who stopped being invisible</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "I've been coding for 8 years and had nothing to show for it publicly. Two months with CommitLore and I have a LinkedIn following, three consulting leads, and people actually recognize my name at meetups.",
                author: "James K.",
                role: "Senior Backend Developer",
                avatar: "JK",
                color: "blue"
              },
              {
                quote: "I connected my accounts once and forgot about it. Three weeks later I noticed my Twitter followers doubled. CommitLore was just... posting for me. It's wild.",
                author: "Maya P.",
                role: "Indie Hacker",
                avatar: "MP",
                color: "purple"
              },
              {
                quote: "The content doesn't sound like AI garbage. It actually sounds like something I would write, just better and faster. And I never have to touch it.",
                author: "Alex R.",
                role: "Senior Engineer",
                avatar: "AR",
                color: "green"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-[#EDE9D5] shadow-sm relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#B45309] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-[#3A2F2A] leading-relaxed mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFEFE6] flex items-center justify-center">
                    <span className="text-[#B45309] font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A1614]">{testimonial.author}</div>
                    <div className="text-sm text-[#3A2F2A]">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#FAF8F3]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#B45309] font-semibold mb-4">Common Questions</p>
            <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1614] mb-6">
              You might be wondering...
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "Will it sound like AI wrote it?",
                answer: "We spent months tuning the output to not sound like ChatGPT slop. Real developers test every prompt update. If it sounds robotic, we kill it."
              },
              {
                question: "My commits are messy: 'wip', 'fix', 'asdf'",
                answer: "We analyze the actual code changes, not just your messages. Even \"fixed stuff\" becomes meaningful content when we see you refactored 200 lines of auth logic."
              },
              {
                question: "How much time does reviewing drafts take?",
                answer: "Most drafts take 10 seconds to approve. The AI nails your voice, so you're usually just hitting publish. Quick edits when needed."
              },
              {
                question: "What if I don't like a draft?",
                answer: "Regenerate it with one click, edit it yourself, or just skip it. Nothing posts without your approval."
              },
              {
                question: "I'm not building anything interesting",
                answer: "Every developer thinks this. Your \"boring\" CRUD app taught you lessons others would pay to learn. Your \"simple\" bug fix is content to someone three months behind you."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#1A1614]/10 hover:border-[#B45309] transition-all duration-300"
              >
                <h3 className="font-space text-lg sm:text-xl font-bold text-[#1A1614] mb-3">
                  &quot;{faq.question}&quot;
                </h3>
                <p className="text-base text-[#3A2F2A] leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 gradient-cta">
        <div className="max-w-[1600px] mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-space text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 max-w-4xl mx-auto leading-[1.1]"
              >
                Your code is already impressive. Let the world see it.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
              >
                Connect your accounts once. Never think about posting again.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <MagneticButton
                  href="#pricing"
                  className="inline-block px-10 py-5 text-xl font-semibold bg-[#B45309] text-white rounded-2xl hover:bg-[#B45309]/90"
                >
                  Start Telling Your Story
                </MagneticButton>
                <p className="text-sm text-gray-400">
                  No credit card required. Cancel anytime. Your code stays yours.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 md:px-8 bg-[#FAF8F3] border-t-2 border-[#1A1614]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="flex items-center gap-2 text-[#1A1614]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B45309] to-[#D97706] flex items-center justify-center shadow-lg relative overflow-hidden p-0.5 logo-container">
                <svg className="w-8 h-8 text-white logo-mark" viewBox="0 0 24 24" fill="none">
                <motion.circle
                  cx="12" cy="6" r="2.5"
                  fill="currentColor"
                  fillOpacity="0.9"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.9, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                />
                <motion.circle
                  cx="8" cy="10" r="2.5"
                  fill="currentColor"
                  fillOpacity="0.9"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.9, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                <motion.circle
                  cx="8" cy="18" r="2.5"
                  fill="currentColor"
                  fillOpacity="0.9"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.9, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
                <motion.circle
                  cx="12" cy="14" r="2.5"
                  fill="currentColor"
                  fillOpacity="0.9"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.9, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />

                <motion.path
                  d="M12 8.5 L9.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                <motion.path
                  d="M8 12.5 L8 15.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.path
                  d="M10 17 L10.5 14.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.7 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                />

                <motion.path
                  d="M15 8 L18 8 L18 20 L15 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                />
                <motion.path
                  d="M16.5 12 L18 12"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                />
                <motion.path
                  d="M16.5 15 L18 15"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                />
                </svg>
              </div>
              <motion.span
                className="font-space font-semibold text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                CommitLore
              </motion.span>
            </motion.div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#pricing" className="text-[#3A2F2A] hover:text-[#1A1614] transition-colors font-medium">Pricing</a>
              <a href="#" className="text-[#3A2F2A] hover:text-[#1A1614] transition-colors font-medium">Docs</a>
              <Link href="/privacy" className="text-[#3A2F2A] hover:text-[#1A1614] transition-colors font-medium">Privacy</Link>
              <Link href="/terms" className="text-[#3A2F2A] hover:text-[#1A1614] transition-colors font-medium">Terms</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t-2 border-[#1A1614]/10 text-center">
            <span className="text-sm text-[#3A2F2A] font-medium">© 2024 CommitLore. Build in Public Effortlessly.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
