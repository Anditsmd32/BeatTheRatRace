import { Button } from "@/components/ui/button"
import { TrendingUp, Calendar, Star, AlertCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MonthlyYieldReportsPage() {
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
            <div className="text-black">MONTHLY</div>
            <div className="text-yellow-400 bg-black px-4 py-2 inline-block transform rotate-1 my-2">YIELD</div>
            <div className="text-black">REPORTS</div>
          </h1>

          <div className="bg-stone-100 p-6 border-l-8 border-black mb-12 transform -skew-x-1 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-black text-center">
              Current best opportunities updated monthly with risk ratings and step-by-step instructions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white border-4 border-black p-8 transform hover:translate-y-1 transition-transform">
              <div className="bg-black text-white px-3 py-1 inline-block mb-4 text-sm font-bold">LATEST REPORT</div>
              <h2 className="text-3xl font-black mb-4">DECEMBER 2024 YIELD OPPORTUNITIES</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-bold">UPDATED 24/12/2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-bold">TOP PICKS INSIDE</span>
                </div>
              </div>
              <p className="text-stone-600 font-medium mb-6">
                This month's report covers 12 vetted opportunities ranging from 4.5% to 18% APY, with detailed risk
                analysis and setup instructions.
              </p>
              <Button className="bg-black text-white hover:bg-stone-800 font-bold border-4 border-black">
                <TrendingUp className="h-4 w-4 mr-2" />
                VIEW REPORT
              </Button>
            </div>

            <div className="bg-yellow-300 border-4 border-black p-6 transform rotate-1 hover:rotate-0 transition-transform">
              <h3 className="text-xl font-black mb-3">THIS MONTH'S TOP PICK</h3>
              <div className="text-4xl font-black mb-2">8.5%</div>
              <div className="text-sm font-bold mb-3">COMPOUND USDC</div>
              <div className="flex items-center space-x-1 mb-3">
                <AlertCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-bold">LOW RISK</span>
              </div>
              <p className="text-black font-medium text-sm">Established protocol with $2B+ TVL</p>
            </div>

            {[
              { month: "NOVEMBER 2024", opportunities: "15 OPPORTUNITIES", avgYield: "9.2%" },
              { month: "OCTOBER 2024", opportunities: "18 OPPORTUNITIES", avgYield: "10.1%" },
              { month: "SEPTEMBER 2024", opportunities: "12 OPPORTUNITIES", avgYield: "8.7%" },
            ].map((report, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black p-6 transform hover:translate-x-2 transition-transform"
              >
                <h3 className="text-xl font-black mb-3">{report.month}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-sm font-bold">{report.opportunities}</div>
                  <div className="text-2xl font-black">{report.avgYield} AVG</div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-2 border-black text-black hover:bg-yellow-300 font-bold bg-transparent"
                >
                  VIEW ARCHIVE
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-8">
            <span className="bg-black text-white px-6 py-3 inline-block transform -rotate-1">GET ALL REPORTS</span>
          </h2>
          <p className="text-xl font-bold mb-8">
            Join the Insider Club for access to all monthly yield reports and real-time updates.
          </p>
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
