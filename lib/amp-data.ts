import { FileVideo, Flame, Globe, ImageIcon, MonitorPlay, ShieldCheck } from "lucide-react"

export const adminStats = [
  { label: "Videos Live", value: "148", detail: "12 in review" },
  { label: "Images Managed", value: "2,340", detail: "18 duplicates removed" },
  { label: "Campaigns Running", value: "12", detail: "4 cross-channel" },
  { label: "Revenue Streams", value: "$18.4k", detail: "30-day total" },
]

export const videoRows = [
  {
    id: "V-1024",
    title: "Chicago Nightline Brand Film",
    status: "Transcoding",
    duration: "02:41",
    lastUpdated: "4 min ago",
    seo: "Optimized",
  },
  {
    id: "V-1023",
    title: "Loop Neon Rooftop Teaser",
    status: "Live",
    duration: "01:12",
    lastUpdated: "2 hrs ago",
    seo: "Optimized",
  },
  {
    id: "V-1022",
    title: "Agency Sizzle Reel 2025",
    status: "Scheduled",
    duration: "03:08",
    lastUpdated: "Yesterday",
    seo: "Needs Meta",
  },
]

export const imageAssets = [
  {
    id: "IMG-448",
    title: "Riverwalk Hero",
    hash: "5f2c...b9d1",
    size: "4.2 MB",
    source: "Vimeo",
    status: "Ready",
    url: "/L1000639.jpg",
  },
  {
    id: "IMG-447",
    title: "Studio Portrait",
    hash: "b8aa...91fd",
    size: "3.8 MB",
    source: "Upload",
    status: "Optimized",
    url: "/L1000582-2.jpg",
  },
  {
    id: "IMG-446",
    title: "Camera Rig BTS",
    hash: "9c11...4c21",
    size: "2.6 MB",
    source: "Upload",
    status: "Duplicate",
    url: "/L1000515.jpg",
  },
  {
    id: "IMG-445",
    title: "Client Interview",
    hash: "77bb...221a",
    size: "3.1 MB",
    source: "Vimeo",
    status: "Ready",
    url: "/L1000116.jpg",
  },
  {
    id: "IMG-444",
    title: "Brand Workshop",
    hash: "ad39...5e0c",
    size: "2.9 MB",
    source: "Upload",
    status: "Watermarked",
    url: "/L1020829.jpg",
  },
  {
    id: "IMG-443",
    title: "On-Set Lighting",
    hash: "2d9e...0ac2",
    size: "3.5 MB",
    source: "Vimeo",
    status: "Ready",
    url: "/L1000582-2.jpg",
  },
]

export const marketingActions = [
  {
    title: "Social Blast",
    description: "Push a campaign to Twitter, Instagram, and Facebook in one click.",
    icon: Globe,
  },
  {
    title: "Beehiiv Drops",
    description: "Publish weekly newsletters with auto-embedded video teasers.",
    icon: MonitorPlay,
  },
  {
    title: "Campaign Guardrails",
    description: "Auto-tag creatives with compliance metadata before launch.",
    icon: ShieldCheck,
  },
]

export const revenueStreams = [
  {
    title: "Ezoic Ads",
    value: "$6.8k",
    detail: "RPM up 18%",
    icon: Flame,
  },
  {
    title: "Vimeo Tips",
    value: "$3.4k",
    detail: "Top creators in Q3",
    icon: FileVideo,
  },
  {
    title: "Affiliate Links",
    value: "$8.2k",
    detail: "Creator gear kits",
    icon: ImageIcon,
  },
]

export const seoChecklist = [
  {
    title: "Auto-generated sitemap",
    status: "Healthy",
    detail: "58 pages indexed",
  },
  {
    title: "Schema markup",
    status: "Healthy",
    detail: "VideoObject + Organization",
  },
  {
    title: "OpenGraph cards",
    status: "Needs update",
    detail: "4 posts missing",
  },
]
