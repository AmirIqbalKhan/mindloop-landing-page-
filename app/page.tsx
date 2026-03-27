'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Hls from 'hls.js';
import Image from 'next/image';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-28 py-4 flex items-center justify-between bg-transparent">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-foreground/60">
            <div className="w-3 h-3 rounded-full border border-foreground/60" />
          </div>
          <span className="font-bold text-lg tracking-tight">Mindloop</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground font-medium">
          <a href="#" className="hover:text-foreground transition-colors">Home</a>
          <span className="text-muted-foreground/40">•</span>
          <a href="#" className="hover:text-foreground transition-colors">How It Works</a>
          <span className="text-muted-foreground/40">•</span>
          <a href="#" className="hover:text-foreground transition-colors">Philosophy</a>
          <span className="text-muted-foreground/40">•</span>
          <a href="#" className="hover:text-foreground transition-colors">Use Cases</a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors">
          <Instagram className="w-4 h-4" />
        </button>
        <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors">
          <Linkedin className="w-4 h-4" />
        </button>
        <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors">
          <Twitter className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
      />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-[1]" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-32 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden bg-muted relative">
                <Image src={`/avatar-${i}.svg`} alt={`Avatar ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <span className="text-muted-foreground text-sm font-medium">7,000+ people already subscribed</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.1] mb-6">
          Get <span className="font-serif italic font-normal">Inspired</span> with Us
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="text-base sm:text-lg text-hero-subtitle max-w-2xl mb-12">
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        <motion.div {...fadeUp(0.4)} className="liquid-glass rounded-2xl sm:rounded-full p-2 w-full max-w-lg flex flex-col sm:flex-row items-center gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full sm:w-auto flex-1 bg-transparent border-none outline-none px-6 py-3 sm:py-0 text-center sm:text-left text-foreground placeholder:text-muted-foreground"
          />
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-foreground text-background font-medium rounded-xl sm:rounded-full px-8 py-3 text-sm tracking-wide"
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function SearchChangedSection() {
  const platforms = [
    {
      name: "ChatGPT",
      desc: "Conversational AI that answers questions, writes code, and brainstorms ideas instantly.",
      icon: "/icon-chatgpt.svg"
    },
    {
      name: "Perplexity",
      desc: "An AI search engine that delivers direct answers with cited sources in real-time.",
      icon: "/icon-perplexity.svg"
    },
    {
      name: "Google AI",
      desc: "Integrated AI overviews that summarize search results before you even click a link.",
      icon: "/icon-google.svg"
    }
  ];

  return (
    <section className="pt-32 md:pt-64 pb-6 md:pb-9 px-6 max-w-7xl mx-auto text-center">
      <motion.h2 {...fadeUp(0.1)} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6">
        Search has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>
      
      <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-16 md:mb-24">
        The way people find information is evolving. AI is giving answers directly, bypassing traditional links. It&apos;s time to build a direct relationship with your audience.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {platforms.map((platform, i) => (
          <motion.div key={platform.name} {...fadeUp(0.3 + i * 0.1)} className="flex flex-col items-center text-center group">
            <div className="w-48 h-48 mb-8 rounded-2xl overflow-hidden bg-muted/20 relative liquid-glass p-4 transition-transform duration-500 group-hover:scale-105">
              <Image src={platform.icon} alt={platform.name} fill className="object-cover rounded-xl" />
            </div>
            <h3 className="font-semibold text-base mb-2">{platform.name}</h3>
            <p className="text-muted-foreground text-sm max-w-xs">{platform.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.6)} className="text-muted-foreground text-sm text-center">
        If you don&apos;t answer the questions, someone else will.
      </motion.p>
    </section>
  );
}

function Word({ word, scrollYProgress, start, end, isHighlighted }: any) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  return (
    <motion.span 
      style={{ opacity }}
      className={isHighlighted ? "text-foreground" : "text-hero-subtitle"}
    >
      {word}
    </motion.span>
  );
}

function WordReveal({ text, highlightWords = [] }: { text: string, highlightWords?: string[] }) {
  const words = text.split(" ");
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"]
  });

  return (
    <p ref={containerRef} className="flex flex-wrap justify-center gap-x-2 gap-y-1">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const cleanWord = word.replace(/[.,—]/g, "");
        const isHighlighted = highlightWords.includes(cleanWord.toLowerCase());
        
        return (
          <Word 
            key={i} 
            word={word} 
            scrollYProgress={scrollYProgress} 
            start={start} 
            end={end} 
            isHighlighted={isHighlighted} 
          />
        );
      })}
    </p>
  );
}

function MissionSection() {
  return (
    <section className="pt-0 pb-24 md:pb-44 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
      <motion.div {...fadeUp(0.1)} className="w-full max-w-[800px] aspect-square rounded-full overflow-hidden mb-16 md:mb-24 relative liquid-glass p-2">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-full"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
        />
      </motion.div>

      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight max-w-4xl mx-auto mb-10">
        <WordReveal 
          text="We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having." 
          highlightWords={["curiosity", "meets", "clarity"]} 
        />
      </div>
      
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight max-w-3xl mx-auto">
        <WordReveal 
          text="A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved." 
        />
      </div>
    </section>
  );
}

function SolutionSection() {
  const features = [
    { title: "Curated Feed", desc: "An algorithm designed for depth, not just engagement. Find what matters." },
    { title: "Writer Tools", desc: "Everything you need to craft, publish, and monetize your best work." },
    { title: "Community", desc: "Connect directly with your readers through meaningful discussions." },
    { title: "Distribution", desc: "Reach the right audience at the right time with smart delivery." }
  ];

  return (
    <section className="py-24 md:py-44 px-6 max-w-7xl mx-auto border-t border-border/30">
      <motion.div {...fadeUp(0.1)} className="mb-12">
        <span className="text-xs tracking-[3px] uppercase text-muted-foreground font-semibold block mb-4">Solution</span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight">
          The platform for <span className="font-serif italic font-normal">meaningful</span> content
        </h2>
      </motion.div>

      <motion.div {...fadeUp(0.2)} className="w-full aspect-video md:aspect-[3/1] rounded-2xl overflow-hidden mb-16 relative liquid-glass p-1">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div key={feature.title} {...fadeUp(0.3 + i * 0.1)}>
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HlsVideo({ src, className }: { src: string, className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.log("Autoplay prevented:", e));
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari fallback
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.log("Autoplay prevented:", e));
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
    />
  );
}

function CTASection() {
  return (
    <section className="relative py-24 md:py-44 border-t border-border/30 overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
      <HlsVideo 
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8" 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      <div className="absolute inset-0 bg-background/45 z-[1]" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto">
        <motion.div {...fadeUp(0.1)} className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/60 mb-8">
          <div className="w-5 h-5 rounded-full border border-foreground/60" />
        </motion.div>
        
        <motion.h2 {...fadeUp(0.2)} className="text-4xl sm:text-5xl md:text-7xl font-serif italic mb-6">
          Start Your Journey
        </motion.h2>
        
        <motion.p {...fadeUp(0.3)} className="text-muted-foreground text-base sm:text-lg mb-10">
          Join thousands of writers and readers building the future of meaningful content.
        </motion.p>
        
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-medium rounded-lg px-8 py-3.5 w-full sm:w-auto"
          >
            Subscribe Now
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass text-foreground font-medium rounded-lg px-8 py-3.5 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Start Writing <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-28 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border/10 text-center md:text-left">
      <p className="text-muted-foreground text-sm">
        © 2026 Mindloop. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <HeroSection />
      <SearchChangedSection />
      <MissionSection />
      <SolutionSection />
      <CTASection />
      <Footer />
    </main>
  );
}
