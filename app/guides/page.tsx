import { Button } from "@/components/ui/button"
import { Download, Video, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GuidesPage() {
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
              <Link href="/guides" className="text-black font-bold bg-yellow-300 px-3 py-1">
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
            <div className="text-black">FREE</div>
            <div className="text-yellow-400 bg-black px-4 py-2 inline-block transform rotate-1 my-2">EDUCATION</div>
            <div className="text-black">LIBRARY</div>
          </h1>

          <div className="bg-stone-100 p-6 border-l-8 border-black mb-12 transform -skew-x-1 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-black text-center">
              Everything you need to know about stablecoin yields, crypto safety, and beating bank interest rates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white border-4 border-black p-8 transform hover:translate-y-1 transition-transform">
              <div className="bg-black text-white px-3 py-1 inline-block mb-4 text-sm font-bold">FEATURED GUIDE</div>
              <h2 className="text-3xl font-black mb-4">STABLECOINS VS UK BANKS</h2>
              <p className="text-stone-600 font-medium mb-6">
                A comprehensive 50-page guide covering the reasons why we choose Stablecoins over traditional banks.
                Read this to learn about Stablecoins in general before starting.
              </p>
              <Button className="bg-black text-white hover:bg-stone-800 font-bold border-4 border-black" asChild>
                <a href="/stablecoins-vs-uk-banks-guide.pdf" download="Stablecoins-vs-UK-Banks-Ultimate-Guide.pdf">
                  <Download className="h-4 w-4 mr-2" />
                  DOWNLOAD FREE PDF
                </a>
              </Button>
            </div>

            <div className="bg-yellow-300 border-4 border-black p-6 transform rotate-1 hover:rotate-0 transition-transform">
              <Video className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-black mb-3">VIDEO TUTORIALS</h3>
              <p className="text-black font-medium text-sm mb-4">
                Step-by-step video walkthroughs for setting up your first yield position.
              </p>
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-white font-bold bg-transparent"
                asChild
              >
                <Link href="/video-tutorials">WATCH NOW</Link>
              </Button>
            </div>

            <div className="bg-white border-4 border-black p-6 transform -rotate-1 hover:rotate-0 transition-transform">
              <FileText className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-black mb-3">SAFETY CHECKLIST</h3>
              <p className="text-stone-600 font-medium text-sm mb-4">
                Essential security practices to protect your crypto investments.
              </p>
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-yellow-300 font-bold bg-transparent"
                asChild
              >
                <Link href="/safety-checklist">GET CHECKLIST</Link>
              </Button>
            </div>

            <div className="bg-white border-4 border-black p-6 transform hover:translate-x-2 transition-transform">
              <h3 className="text-xl font-black mb-3">MONTHLY YIELD REPORTS</h3>
              <p className="text-stone-600 font-medium text-sm mb-4">
                Current best opportunities updated every month with risk ratings.
              </p>
              <Button
                variant="outline"
                className="border-2 border-black text-black hover:bg-yellow-300 font-bold bg-transparent"
                asChild
              >
                <Link href="/monthly-yield-reports">VIEW LATEST</Link>
              </Button>
            </div>

            <div className="bg-black text-white border-4 border-black p-6 transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-black mb-3 text-yellow-300">BEGINNER'S ROADMAP</h3>
              <p className="text-stone-300 font-medium text-sm mb-4">
                Your first 30 days: from zero knowledge to earning your first yield.
              </p>
              <Button
                className="bg-yellow-300 text-black hover:bg-yellow-400 font-bold border-2 border-yellow-300"
                asChild
              >
                <Link href="/beginners-roadmap">START HERE</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-8">
            <span className="bg-black text-white px-6 py-3 inline-block transform -rotate-1">WANT MORE?</span>
          </h2>
          <p className="text-xl font-bold mb-8">Join our community for exclusive content and live Q&A sessions.</p>
          <Button
            className="bg-yellow-300 text-black hover:bg-yellow-400 text-xl px-12 py-6 font-black border-4 border-black transform hover:scale-110 transition-transform"
            asChild
          >
            <Link href="/services">JOIN THE INSIDER CLUB →</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
