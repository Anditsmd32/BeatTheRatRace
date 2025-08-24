import { Button } from "@/components/ui/button"
import { Play, Clock, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VideoTutorialsPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-mono">
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/bttr-logo.jpeg"
                  alt="Beat The Rat Race Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-black tracking-tight">BEAT THE</div>
                <div className="text-xs font-bold text-stone-600 -mt-1">RAT RACE</div>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/guides" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                GUIDES
              </Link>
              <Link href="/services" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                SERVICES
              </Link>
              <Link href="/about" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                ABOUT
              </Link>
              <Link href="/contact" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                CONTACT
              </Link>
              <Link
                href="/insiders-club"
                className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors"
              >
                INSIDERS CLUB
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 transform rotate-45 translate-x-32 -translate-y-32"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 text-center">
            <div className="text-black">VIDEO</div>
            <div className="text-yellow-400 bg-black px-4 py-2 inline-block transform rotate-1 my-2">TUTORIALS</div>
          </h1>

          <div className="bg-stone-100 p-6 border-l-8 border-black mb-12 transform -skew-x-1 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-black text-center">
              Step-by-step video guides to get you earning stablecoin yields safely and quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "WALLET SETUP BASICS",
                duration: "12 MIN",
                level: "BEGINNER",
                description: "How to create and secure your first crypto wallet",
              },
              {
                title: "BUYING YOUR FIRST STABLECOIN",
                duration: "8 MIN",
                level: "BEGINNER",
                description: "Step-by-step guide to purchasing USDC safely",
              },
              {
                title: "EARNING 8% ON COMPOUND",
                duration: "15 MIN",
                level: "INTERMEDIATE",
                description: "Complete walkthrough of Compound protocol",
              },
              {
                title: "SECURITY BEST PRACTICES",
                duration: "20 MIN",
                level: "ALL LEVELS",
                description: "Essential security measures every user needs",
              },
              {
                title: "TAX REPORTING MADE SIMPLE",
                duration: "18 MIN",
                level: "INTERMEDIATE",
                description: "UK tax implications and reporting requirements",
              },
              {
                title: "ADVANCED YIELD STRATEGIES",
                duration: "25 MIN",
                level: "ADVANCED",
                description: "Maximizing returns with multiple protocols",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black p-6 transform hover:translate-y-1 transition-transform"
              >
                <div className="bg-black text-white px-3 py-1 inline-block mb-4 text-sm font-bold">{video.level}</div>
                <h3 className="text-xl font-black mb-3">{video.title}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-bold">{video.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-bold">MEMBERS ONLY</span>
                  </div>
                </div>
                <p className="text-stone-600 font-medium text-sm mb-4">{video.description}</p>
                <Button className="w-full bg-yellow-300 text-black hover:bg-yellow-400 font-bold border-2 border-black">
                  <Play className="h-4 w-4 mr-2" />
                  <Link href="/services">WATCH NOW</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-8">
            <span className="bg-black text-white px-6 py-3 inline-block transform -rotate-1">UNLOCK ALL VIDEOS</span>
          </h2>
          <p className="text-xl font-bold mb-8">Join the Insider Club for access to our complete video library.</p>
          <Button
            className="bg-yellow-300 text-black hover:bg-yellow-400 text-xl px-12 py-6 font-black border-4 border-black transform hover:scale-110 transition-transform"
            asChild
          >
            <Link href="/services">JOIN NOW →</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
