import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard, { ProjectItem } from "./components/ProjectCard";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

const projects: ProjectItem[] = [
  {
    id: "bookly",
    title: "Bookly.ng",
    domain: "bookly.ng",
    link: "https://bookly.ng",
    snapshotUrl: "/images/bookly-snapshot.png",
    type: "web",
    description:
      "A complete event creation, ticketing, and gate management platform built for event organizers, promoters, and attendees across Nigeria. The system automates the entire ticketing lifecycle from payment to entry verification.",
    features: [
      "Tiered ticket creation (Regular, VIP, Tables) with capped attendee capacities.",
      "Instant, cryptographically verified QR code passes sent directly to attendees upon purchase.",
      "Mobile camera gate check-in system with instant green/red validation to prevent counterfeit passes.",
      "Automated online payment collection and instant split payouts powered by Paystack.",
      "Restricted gate staff access modes keeping organizer revenue and dashboard metrics secure.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Paystack API", "QR Validation"],
  },
  {
    id: "daps-browser",
    title: "Daps Browser",
    domain: "github.com/oladapoojo252-cpu/Daps-Browser",
    link: "https://github.com/oladapoojo252-cpu/Daps-Browser",
    githubUrl: "https://github.com/oladapoojo252-cpu/Daps-Browser",
    apkUrl: "/Daps Browser.apk",
    snapshotUrl: "/images/daps-snapshot.png",
    type: "mobile",
    description:
      "A custom, privacy-focused mobile web browser engineered from the ground up using React Native and Expo. Designed to give users speed, control over tracking, and seamless background downloads without intrusive browser bloat.",
    features: [
      "Integrated Ad & Tracker Shields engine injecting custom privacy rules into active WebViews.",
      "Real-time media and resource sniffer modal that detects downloadable video and audio assets on web pages.",
      "Background file downloads manager powered by expo-file-system and expo-sharing.",
      "Ergonomic bottom navigation dock for rapid tab switching, downloads, history, and settings.",
      "Local session storage and persistent cache using @react-native-async-storage/async-storage.",
    ],
    tags: ["React Native", "Expo SDK", "TypeScript", "WebView", "EAS Build", "AsyncStorage"],
  },
  {
    id: "zilla",
    title: "Zilla Movie Identifier",
    domain: "zillamax.vercel.app",
    link: "https://zillamax.vercel.app",
    snapshotUrl: "/images/yourview-snapshot.png",
    type: "web",
    description:
      "An intelligent cinema identification and film discovery utility designed for modern movie lovers. Users can instantly recognize movies and TV series, view deep metadata, and manage their personal watchlists seamlessly.",
    features: [
      "Sub-second cinematic database matching and smart search.",
      "Comprehensive film details including ratings, cast, genres, and release summaries.",
      "Personalized watchlist curation with real-time browser storage.",
      "Clean, responsive poster grid built with fluid micro-interactions.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TMDB API", "TypeScript"],
  },
  {
    id: "frontier",
    title: "Frontier Massage",
    domain: "frontiermassage.vercel.app",
    link: "https://frontiermassage.vercel.app",
    snapshotUrl: "/images/frontier-snapshot.png",
    type: "web",
    description:
      "A custom, high-converting digital platform built for a professional massage therapy practice. Focuses on an intuitive user journey, calm aesthetic, and an effortless appointment booking flow.",
    features: [
      "Real-time appointment scheduling with automated slot availability updates.",
      "Automated digital client intake forms to streamline pre-session check-ins.",
      "Frictionless booking flow designed to reduce administrative overhead and boost conversion.",
      "Fully responsive mobile-first layout with smooth typography and layout transitions.",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Booking System"],
  },
  {
    id: "adeola",
    title: "Adeola Ojo Portfolio",
    domain: "adeolaojoportfolio.vercel.app",
    link: "https://adeolaojoportfolio.vercel.app/",
    snapshotUrl: "/images/adeola-snapshot.png",
    type: "web",
    description:
      "A high-converting portfolio website built for a client to showcase their professional work through a clean, modern aesthetic with optimized inquiry capture.",
    features: [
      "Custom responsive project gallery optimized for high-resolution images.",
      "Integrated client inquiry form designed for lead generation and direct contact.",
      "Fast page load times with lazy loaded assets and minimal bundle size.",
      "Fluid layout ensuring a premium browsing experience across all screen sizes.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 border-t border-zinc-800/80">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-zinc-400 text-base">
              Websites and applications engineered for performance. Click any project snapshot to visit the live deployment or download.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  );
}