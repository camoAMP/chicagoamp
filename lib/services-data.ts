import { LucideIcon, Video, Music, Camera, Film, Lightbulb, Mic } from "lucide-react"

export type ServiceHighlight = {
  label: string
  description: string
}

export type ServiceStat = {
  label: string
  value: string
}

export type ServiceTestimonial = {
  quote: string
  author: string
  role: string
}

export type ServiceOnboardingStep = {
  title: string
  description: string
}

export type ServiceDetail = {
  slug: string
  title: string
  description: string
  longDescription: string
  metrics: string
  color: string
  image?: string
  video?: string
  icon: LucideIcon
  stats: ServiceStat[]
  highlights: ServiceHighlight[]
  testimonials: ServiceTestimonial[]
  onboardingSteps?: ServiceOnboardingStep[]
  requirements?: string[]
  heroTagline?: string
  introParagraph?: string
  whatYouGet?: string[]
  perfectFor?: string
  statLine?: string
  ctaLine?: string
  additionalNote?: string
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "commercial-video",
    icon: Video,
    title: "Commercial Video",
    description: "High-quality video production for brands, products, and corporate storytelling.",
    longDescription:
      "We concept, plan, and deliver cinematic commercial content that gives brands a visual signature. From scripts to shoot to final grade, our team owns every phase so your message lands exactly as intended.",
    metrics: "50+ films",
    color: "text-primary",
    image: "/OneDrive_1_17-12-2025/john with cameras at zebra.jpg",
    heroTagline: "High-quality video production for brands, products, and corporate storytelling.",
    introParagraph:
      "Transform your brand's message into compelling visual stories that drive results. Our commercial video production combines strategic storytelling with cinematic quality to help you connect with your audience, whether you're launching a product, building brand awareness, or communicating your company's vision.",
    whatYouGet: [
      "Pre-production consultation to understand your goals and target audience",
      "Professional scriptwriting and storyboarding",
      "Full production crew with cinema-grade equipment",
      "Multiple revision rounds to ensure your vision comes to life",
      "Optimized deliverables for all platforms (social media, web, broadcast)",
    ],
    perfectFor:
      "Product launches, brand campaigns, corporate communications, testimonial videos, explainer videos, and social media content.",
    statLine: "50+ films delivered • Trusted by leading brands",
    ctaLine: "Ready to start? Let's discuss your project and create a custom proposal that fits your goals and budget.",
    stats: [
      { label: "Campaign Lifts", value: "+250%" },
      { label: "Average Turnaround", value: "4 weeks" },
    ],
    highlights: [
      { label: "Creative Development", description: "Narrative development rooted in your brand voice." },
      { label: "On-Set Excellence", description: "Full crew management, lighting, and cinematography." },
      { label: "Post Production", description: "Editorial, color, and finishing for every deliverable size." },
    ],
    testimonials: [
      {
        quote: "Chicago AMP crafted a spot that finally captured our product's energy.",
        author: "Maya Patterson",
        role: "VP of Marketing, Saybrook",
      },
    ],
    onboardingSteps: [
      {
        title: "Discovery & Brief",
        description: "We collect campaign goals, audiences, and references so creative direction is aligned from day one.",
      },
      {
        title: "Creative Treatment",
        description: "Our team writes scripts, develops boards, and builds a visual plan for stakeholder sign-off.",
      },
      {
        title: "Production & Post",
        description:
          "We schedule the shoot, capture performances, and deliver polished edits with review rounds baked in.",
      },
    ],
    requirements: [
      "Brand guidelines or reference materials",
      "Primary message and CTA",
      "Budget and launch timeline",
      "Stakeholder availability for reviews",
    ],
  },
  {
    slug: "music-videos",
    icon: Music,
    title: "Music Videos",
    description: "Cinematic music videos that bring your sound to life with stunning visuals.",
    longDescription:
      "We collaborate with artists to translate lyrics and beats into visual poetry. Whether it's narrative-driven or performance-heavy, every frame is designed to amplify your sound.",
    metrics: "30+ videos",
    color: "text-secondary",
    video: "https://www.youtube.com/embed/hktW_HhhJfo?si=8qgWFqab6T5eL77W",
    heroTagline: "Cinematic music videos that bring your sound to life with stunning visuals.",
    introParagraph:
      "Your music deserves visuals that match its power. We craft music videos that don't just complement your sound—they amplify it. From concept development to final color grade, we work closely with artists to create videos that resonate with fans and stand out in today's crowded landscape.",
    whatYouGet: [
      "Creative concept development tailored to your song and artistic vision",
      "Location scouting and art direction",
      "Professional lighting and cinematography",
      "Performance direction to capture your best on camera",
      "Advanced post-production with color grading and VFX",
      "Formatted versions for YouTube, Instagram, TikTok, and streaming platforms",
    ],
    perfectFor: "Independent artists, record labels, promotional singles, album releases, and live performance videos.",
    statLine: "30+ videos produced • Featured on major platforms",
    ctaLine: "Let's bring your music to life. Share your track with us and we'll create a visual concept that elevates your artistry.",
    stats: [
      { label: "View Counts", value: "100K+" },
      { label: "Shoot Days", value: "2-4 avg" },
    ],
    highlights: [
      { label: "Conceptual Direction", description: "Mood boards, treatments, and art direction for each release." },
      { label: "Performance Coaching", description: "On-set support to get authentic energy on camera." },
      { label: "Global Production", description: "Travel-ready crews with international experience." },
    ],
    testimonials: [
      {
        quote: "They turned a song into a cinematic universe—we still get compliments months later.",
        author: "Whüzy",
        role: "Recording Artist",
      },
    ],
  },
  {
    slug: "event-coverage",
    icon: Camera,
    title: "Event Coverage",
    description: "Capture the energy and emotion of your corporate events, conferences, and gatherings.",
    longDescription:
      "From keynote recaps to highlight reels, we preserve every moment that matters. Multi-cam setups, live audio, and agile crews keep us invisible yet everywhere.",
    metrics: "200+ events",
    color: "text-primary",
    image: "/L1000582-2.jpg",
    heroTagline: "Capture the energy and emotion of your corporate events, conferences, and gatherings.",
    introParagraph:
      "Don't let your event's impact end when the lights go down. Our event coverage extends the life of your conferences, product launches, and corporate gatherings with dynamic video that captures every important moment. We blend into your event seamlessly while capturing the content you need for marketing, internal communications, and future promotion.",
    whatYouGet: [
      "Multi-camera coverage for comprehensive documentation",
      "Highlight reels delivered within 48-72 hours for social sharing",
      "Full event recordings for archives or on-demand viewing",
      "Interviews and testimonials with speakers and attendees",
      "B-roll of venue, branding, and atmosphere",
      "Licensed music and professional editing",
    ],
    perfectFor:
      "Conferences, product launches, corporate retreats, galas, award ceremonies, trade shows, and annual meetings.",
    statLine: "200+ events covered • Nationwide experience",
    ctaLine:
      "Planning an event? Contact us early to ensure availability and discuss your coverage needs—we'll create a custom package that captures everything that matters.",
    stats: [
      { label: "Events Shot", value: "200+" },
      { label: "Same-Day Edits", value: "Available" },
    ],
    highlights: [
      { label: "Conference Coverage", description: "Panels, demos, and networking captured with polish." },
      { label: "Live Content", description: "Quick-turn clips for social and in-room playback." },
      { label: "National Travel", description: "Experienced crews for any venue size." },
    ],
    testimonials: [
      {
        quote: "They felt like an extension of our team and delivered assets before we even asked.",
        author: "Ian Flores",
        role: "Event Producer, HP",
      },
    ],
  },
  {
    slug: "wedding-films",
    icon: Film,
    title: "Wedding Films",
    description: "Beautiful wedding videography that tells your love story.",
    longDescription:
      "We craft timeless heirlooms built on authentic emotion. Documentary sensibilities meet luxe cinematography so every couple can relive the day exactly as it felt.",
    metrics: "100+ weddings",
    color: "text-secondary",
    image: "/weddings.png",
    heroTagline: "Beautiful wedding videography that tells your love story.",
    introParagraph:
      "Your wedding day flies by in a blur of emotion and celebration. Our wedding films preserve every precious moment so you can relive the joy, laughter, and love for years to come. We don't just document—we craft cinematic stories that capture the unique spirit of your relationship and the magic of your day.",
    whatYouGet: [
      "Full-day coverage with multiple videographers",
      "Cinematic highlight film (5-8 minutes) perfect for sharing",
      "Full ceremony and speeches edit",
      "Professional audio recording of vows and toasts",
      "Drone footage (where permitted) for stunning aerial perspectives",
      "Beautifully color-graded footage with licensed music",
      "Digital delivery plus keepsake USB",
    ],
    perfectFor: "Couples who want a cinematic keepsake of their day with authentic storytelling and luxurious visuals.",
    statLine: "100+ weddings filmed • Cherished memories preserved",
    ctaLine:
      "Getting married? Let's chat about your vision and how we can tell your unique love story. We book up months in advance, so reach out early to secure your date.",
    additionalNote:
      "Our approach: We blend into your celebration, capturing authentic moments while artfully directing key scenes. You'll forget we're there, but you'll never forget what we capture.",
    stats: [
      { label: "Happy Couples", value: "100+" },
      { label: "Delivery Timeline", value: "4-6 weeks" },
    ],
    highlights: [
      { label: "Story Sessions", description: "Pre-production interviews to map the narrative arc." },
      { label: "Cinematic Coverage", description: "Multi-camera ceremony, reception, and detail capture." },
      { label: "Custom Keepsakes", description: "Trailers, full edits, and raw footage add-ons." },
    ],
    testimonials: [
      {
        quote: "They bottled the entire feeling of our day—family and friends cried watching it.",
        author: "Jasmine & Eli",
        role: "Chicago Couple",
      },
    ],
  },
  {
    slug: "lighting-set-design",
    icon: Lightbulb,
    title: "Lighting & Set Design",
    description: "Professional lighting and atmosphere creation to enhance every production.",
    longDescription:
      "Our gaffers and art directors sculpt light and space to reinforce the tone of your story. We build immersive worlds that look incredible in-person and on camera.",
    metrics: "Expert crew",
    color: "text-primary",
    image: "/OneDrive_1_17-12-2025/Camera Setup.jpg",
    heroTagline: "Professional lighting and atmosphere creation to enhance every production.",
    introParagraph:
      "Great video isn't just about what you capture—it's about how you illuminate it. Our lighting and set design services transform any space into a cinematic environment that elevates your production value and ensures every frame looks polished and professional.",
    whatYouGet: [
      "Lighting design consultation for your specific project needs",
      "Professional grip and electric crew",
      "Complete lighting packages (LED, tungsten, HMI, specialty)",
      "Set dressing and production design",
      "Grip equipment (stands, flags, diffusion, rigging)",
      "On-set gaffer and key grip supervision",
    ],
    perfectFor:
      "Commercial shoots, music videos, interviews, corporate videos, and any production requiring professional lighting.",
    statLine: "Expert crew • Complete lighting inventory",
    ctaLine:
      "Enhance your production. Whether you need full set design or just professional lighting, we'll create the perfect atmosphere for your vision.",
    stats: [
      { label: "Custom Sets", value: "50+" },
      { label: "Lighting Packages", value: "ARRI, Aputure" },
    ],
    highlights: [
      { label: "Atmosphere Control", description: "Lighting, haze, and color palettes dialed per scene." },
      { label: "Scenic Builds", description: "Modular sets tailored to budgets and timelines." },
      { label: "On-Set Support", description: "Team stays through wrap to adapt with the director." },
    ],
    testimonials: [
      {
        quote: "Their lighting elevated the production value beyond expectations.",
        author: "Diego Ramirez",
        role: "Director",
      },
    ],
  },
  {
    slug: "sound-design",
    icon: Mic,
    title: "Sound Design",
    description: "Professional audio recording, mixing, and sound design for all projects.",
    longDescription:
      "Sound makes the story breathe. From capture to mix, we deliver audio that is clean, emotive, and broadcast-ready.",
    metrics: "Studio quality",
    color: "text-secondary",
    image: "/sound.jpg",
    heroTagline: "Professional audio recording, mixing, and sound design for all projects.",
    introParagraph:
      "Great visuals deserve great audio. Poor sound quality can undermine even the most beautiful cinematography, which is why we treat audio with the same care and precision as our visual work. From crystal-clear dialogue to immersive soundscapes, we ensure your audience hears every word and feels every moment.",
    whatYouGet: [
      "Location sound recording with professional equipment",
      "Lavalier and boom microphone options",
      "Post-production audio mixing and mastering",
      "Sound design and Foley for enhanced atmosphere",
      "Music selection and licensing",
      "Dialogue cleanup and noise reduction",
      "Final mix optimized for your delivery platform",
    ],
    perfectFor: "Commercials, documentaries, corporate videos, films, and events that demand pristine audio.",
    statLine: "Broadcast-quality audio • Experienced sound engineers",
    ctaLine:
      "Elevate your audio. Whether you need on-set recording or post-production mixing, we'll ensure your project sounds as good as it looks.",
    stats: [
      { label: "Original Scores", value: "Available" },
      { label: "Audio Mix", value: "5.1 ready" },
    ],
    highlights: [
      { label: "Field Recording", description: "Location sound with redundancies for safety." },
      { label: "Mix & Master", description: "Dialogue editing, foley, and mastering for every platform." },
      { label: "Soundscapes", description: "Custom sonic environments to match the visuals." },
    ],
    testimonials: [
      {
        quote: "Every whisper, beat, and effect sat perfectly in the mix.",
        author: "Cam O' Flage",
        role: "Artist",
      },
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return servicesData.find((service) => service.slug === slug)
}
