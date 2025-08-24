import { Button } from "@/components/ui/button"
import { Target, Shield, Users, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-mono">
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <img src="/bttr-logo.jpeg" alt="Beat The Rat Race Logo" className="w-12 h-12 object-contain" />
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
              <Link
                href="/insiders-club"
                className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors"
              >
                INSIDERS CLUB
              </Link>
              <Link href="/about" className="text-black font-bold bg-yellow-300 px-3 py-1">
                ABOUT
              </Link>
              <Link href="/contact" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 transform rotate-45 translate-x-32 -translate-y-32"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 text-center">
            <div className="text-black">WHY WE</div>
            <div className="text-yellow-400 bg-black px-4 py-2 inline-block transform rotate-1 my-2">EXIST</div>
          </h1>

          <div className="bg-stone-100 p-8 border-l-8 border-black mb-12 transform -skew-x-1 max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-black text-center leading-relaxed">
              We're tired of watching people's savings get destroyed by inflation while banks pay pathetic interest
              rates. There's a better way, and we're here to show you exactly how to do it safely.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-black mb-6">
                <span className="bg-black text-white px-4 py-2 inline-block transform -rotate-1">THE PROBLEM</span>
              </h2>
              <div className="space-y-4 text-lg font-medium">
                <p>UK banks are paying 4% interest while inflation eats away at your purchasing power.</p>
                <p>
                  Meanwhile, safe stablecoin yield opportunities are paying 8-12% with lower risk than the stock market.
                </p>
                <p>
                  But most people don't know these opportunities exist, or they're too scared to try because of all the
                  crypto horror stories.
                </p>
              </div>
            </div>
            <div className="bg-white border-4 border-black p-8 transform rotate-2">
              <div className="text-center">
                <div className="text-5xl font-black text-red-600 mb-4">4%</div>
                <div className="font-bold">BANK INTEREST</div>
                <div className="text-sm font-medium mt-2">VS 6.5% INFLATION</div>
                <div className="bg-red-100 p-4 mt-4 border-2 border-red-600">
                  <p className="font-bold text-red-800">YOU'RE LOSING MONEY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-yellow-300 border-4 border-black p-8 transform -rotate-2">
              <div className="text-center">
                <div className="text-5xl font-black mb-4">10%</div>
                <div className="font-bold">STABLECOIN YIELD</div>
                <div className="text-sm font-medium mt-2">BEATS INFLATION</div>
                <div className="bg-green-100 p-4 mt-4 border-2 border-green-600">
                  <p className="font-bold text-green-800">YOU'RE GROWING WEALTH</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-6">
                <span className="bg-yellow-300 text-black px-4 py-2 inline-block transform rotate-1">OUR SOLUTION</span>
              </h2>
              <div className="space-y-4 text-lg font-medium">
                <p>
                  We cut through the noise and show you exactly which stablecoin yield opportunities are safe and
                  profitable.
                </p>
                <p>
                  No jargon. No hype. Just clear, step-by-step guidance from people who've been doing this for years.
                </p>
                <p>We never hold your money. We just teach you how to put it to work properly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="bg-black text-white px-6 py-3 inline-block transform -rotate-1">OUR PRINCIPLES</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-100 border-4 border-black p-6 transform hover:translate-x-2 transition-transform">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-black mb-4">SAFETY FIRST</h3>
              <p className="font-medium">
                We only recommend protocols with proven track records and strong security practices. Your capital
                preservation is more important than chasing the highest yields.
              </p>
            </div>

            <div className="bg-stone-100 border-4 border-black p-6 transform hover:translate-x-2 transition-transform">
              <Users className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-black mb-4">EDUCATION OVER SALES</h3>
              <p className="font-medium">
                We teach you to fish rather than selling you fish. Our goal is to make you independent and confident in
                your own investment decisions.
              </p>
            </div>

            <div className="bg-stone-100 border-4 border-black p-6 transform hover:translate-x-2 transition-transform">
              <Target className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-black mb-4">NO CUSTODY</h3>
              <p className="font-medium">
                We never hold, touch, or have access to your funds. You maintain complete control of your money at all
                times. We're educators, not fund managers.
              </p>
            </div>

            <div className="bg-stone-100 border-4 border-black p-6 transform hover:translate-x-2 transition-transform">
              <Award className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-black mb-4">PROVEN RESULTS</h3>
              <p className="font-medium">
                Everything we teach is based on real experience and proven strategies. We don't recommend anything we
                haven't tested ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-8">
            <span className="bg-yellow-300 text-black px-6 py-3 inline-block transform rotate-1">
              READY TO BEAT THE RAT RACE?
            </span>
          </h2>
          <p className="text-xl font-bold mb-8">Stop letting banks profit from your money while paying you peanuts.</p>
          <Link href="/services">
            <Button className="bg-yellow-300 text-black hover:bg-yellow-400 text-xl px-12 py-6 font-black border-4 border-yellow-300 transform hover:scale-110 transition-transform">
              START LEARNING TODAY →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
