import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Lock, Target } from "lucide-react"
import Image from "next/image"

export default function StablecoinLandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-mono">
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
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
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/guides" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                GUIDES
              </a>
              <a href="/services" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                SERVICES
              </a>
              <a href="/about" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                ABOUT
              </a>
              <a href="/contact" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                CONTACT
              </a>
              <a href="/insiders-club" className="text-black font-bold hover:bg-yellow-300 px-3 py-1 transition-colors">
                INSIDERS CLUB
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 transform rotate-45 translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-stone-900 transform -rotate-12 -translate-x-24 translate-y-24"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-block bg-black text-white px-4 py-2 mb-6 transform -rotate-1">
                <span className="font-bold text-sm">UK REGULATED • GDPR COMPLIANT</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
                <div className="text-black">EARN</div>
                <div className="text-yellow-400 bg-black px-4 py-2 inline-block transform rotate-1 my-2">2X MORE</div>
                <div className="text-black">THAN BANKS</div>
              </h1>

              <div className="bg-stone-100 p-6 border-l-8 border-black mb-8 transform -skew-x-1">
                <p className="text-xl font-bold text-black">
                  Put your money to work in crypto yield strategies that pay
                  <span className="bg-yellow-300 px-2 py-1 mx-2">8-12%</span>
                  without giving up control.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-stone-800 text-lg px-8 py-6 font-bold transform hover:scale-105 transition-transform border-4 border-black"
                  asChild
                >
                  <a href="/stablecoins-vs-uk-banks-guide.pdf" download="Stablecoins-vs-UK-Banks-Ultimate-Guide.pdf">
                    GET FREE GUIDE →
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="space-y-4">
                {[
                  { icon: Lock, text: "WE NEVER HOLD YOUR MONEY" },
                  { icon: Target, text: "SIMPLE STEP-BY-STEP" },
                  { icon: Shield, text: "UK-BASED BUSINESS" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border-4 border-black p-4 transform hover:translate-x-2 transition-transform"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-black flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-bold text-sm">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guides" className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black mb-12 text-center transform -rotate-1">
            <span className="bg-yellow-300 px-6 py-3 inline-block">FREE EDUCATION</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2 lg:col-span-2 bg-white border-4 border-black p-6 transform hover:translate-y-1 transition-transform">
              <h3 className="text-2xl font-black mb-3">THIS MONTH'S BEST STABLECOIN YIELDS</h3>
              <p className="text-stone-600 font-medium">
                Discover the highest-paying, safest opportunities available right now.
              </p>
            </div>

            <div className="bg-yellow-300 border-4 border-black p-6 transform rotate-1 hover:rotate-0 transition-transform">
              <h3 className="text-xl font-black mb-3">WHAT IS A STABLECOIN?</h3>
              <p className="text-black font-medium text-sm">Everything you need to know in plain English.</p>
            </div>

            <div className="bg-white border-4 border-black p-6 transform -rotate-1 hover:rotate-0 transition-transform">
              <h3 className="text-xl font-black mb-3">BEAT 4% BANK INTEREST</h3>
              <p className="text-stone-600 font-medium text-sm">Safety-first crypto approach.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-center mb-12">
            <span className="bg-black text-white px-6 py-3 inline-block transform rotate-1">CHOOSE YOUR PATH</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-yellow-300 border-8 border-black p-8 transform hover:scale-105 transition-transform">
              <div className="bg-black text-white px-4 py-2 inline-block mb-6 font-bold text-sm">MOST POPULAR</div>
              <h3 className="text-3xl font-black mb-2">THE YIELD INSIDER CLUB</h3>
              <p className="font-bold mb-6">Monthly subscription</p>

              <ul className="space-y-3 mb-8">
                {["Monthly stablecoin yield updates", "Easy-to-follow tutorials", "Member-only guides"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-black flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-bold text-sm">{item}</span>
                    </li>
                  ),
                )}
              </ul>

              <div className="text-center">
                <div className="text-5xl font-black mb-4">
                  £50<span className="text-2xl">/MONTH</span>
                </div>
                <Button
                  className="w-full bg-black text-white hover:bg-stone-800 text-xl py-4 font-bold border-4 border-black"
                  asChild
                >
                  <a href="/services">JOIN NOW →</a>
                </Button>
              </div>
            </div>

            <div className="bg-white border-8 border-black p-8 transform hover:scale-105 transition-transform">
              <h3 className="text-3xl font-black mb-2">DONE-WITH-YOU CONSULTING</h3>
              <p className="font-bold mb-6">One-time session</p>

              <ul className="space-y-3 mb-8">
                {[
                  "1-to-1 session with expert",
                  "Wallet setup & security",
                  "Live yield protocol setup",
                  "Ask anything & get answers",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <div className="text-5xl font-black mb-2">£250</div>
                <div className="text-sm font-bold mb-4">ONE-TIME</div>
                <Button
                  className="w-full bg-white text-black hover:bg-yellow-300 text-xl py-4 font-bold border-4 border-black"
                  asChild
                >
                  <a href="/auth">BOOK MY CALL →</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-12">
            <span className="bg-yellow-300 text-black px-6 py-3 inline-block transform -rotate-1">
              WHAT £10,000 LOOKS LIKE
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-stone-800 border-4 border-stone-600 p-8">
              <h3 className="text-2xl font-black mb-6 text-stone-400">UK BANK SAVINGS @ 4%</h3>
              <div className="text-6xl font-black text-stone-400 mb-4">£400</div>
              <div className="text-stone-400 font-bold">PER YEAR</div>
            </div>

            <div className="bg-yellow-300 text-black border-4 border-yellow-400 p-8 transform scale-105">
              <h3 className="text-2xl font-black mb-6">STABLECOIN YIELD @ 10%</h3>
              <div className="text-6xl font-black mb-4">£1,000</div>
              <div className="font-bold">PER YEAR</div>
            </div>
          </div>

          <div className="bg-white text-black p-8 border-4 border-white transform -skew-x-1">
            <p className="text-3xl font-black mb-4">
              THAT'S AN EXTRA <span className="bg-yellow-300 px-3 py-1">£600 PER YEAR</span>
            </p>
            <p className="text-xl font-bold">WITHOUT STOCK MARKET RISK</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-center mb-12 transform rotate-1">
            <span className="bg-black text-white px-6 py-3 inline-block">WHAT MEMBERS SAY</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-4 border-black p-6 transform rotate-2 hover:rotate-0 transition-transform">
              <div className="bg-yellow-300 p-4 mb-4 border-2 border-black">
                <p className="font-bold text-black">
                  "I didn't know where to start, but after one session I'm earning 9% on my savings. Way more than my
                  ISA."
                </p>
              </div>
              <div className="font-black">SARAH T., LONDON</div>
            </div>

            <div className="bg-white border-4 border-black p-6 transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="bg-yellow-300 p-4 mb-4 border-2 border-black">
                <p className="font-bold text-black">"Clear, simple, and safe. Wish I'd known sooner."</p>
              </div>
              <div className="font-black">JAMES M., MANCHESTER</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-yellow-300">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-black mb-8 text-black transform -rotate-1">READY TO BEAT THE BANKS?</h2>
          <Button
            className="bg-black text-white hover:bg-stone-800 text-2xl px-12 py-6 font-black mb-6 border-4 border-black transform hover:scale-110 transition-transform"
            asChild
          >
            <a href="https://drive.google.com/file/d/1234567890/view" target="_blank" rel="noopener noreferrer">
              GET FREE GUIDE →
            </a>
          </Button>
          <Button
            className="bg-white text-black hover:bg-yellow-300 text-xl px-8 py-4 font-bold border-4 border-black transform hover:scale-105 transition-transform mb-4"
            asChild
          >
            <a href="/auth">START LEARNING TODAY →</a>
          </Button>
          <p className="text-black font-bold text-lg">NO JARGON. NO HYPE. JUST RESULTS.</p>
        </div>
      </section>

      <footer className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-12 relative">
              <Image
                src="/bttr-logo.jpeg"
                alt="Beat The Rat Race Logo"
                width={48}
                height={48}
                className="object-contain filter invert"
              />
            </div>
            <div>
              <div className="text-2xl font-black">BEAT THE</div>
              <div className="text-xs font-bold text-stone-400 -mt-1">RAT RACE</div>
            </div>
          </div>

          <div className="bg-stone-800 p-6 mb-8 border-l-8 border-yellow-300">
            <p className="font-bold text-stone-300">
              EDUCATIONAL PURPOSES ONLY. THIS IS NOT FINANCIAL ADVICE. WE NEVER HOLD CLIENT FUNDS.
            </p>
          </div>

          <div className="flex justify-center space-x-8 text-sm font-bold">
            {[
              { text: "PRIVACY POLICY", href: "/privacy" },
              { text: "TERMS & CONDITIONS", href: "/terms" },
              { text: "CONTACT", href: "/contact" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:bg-yellow-300 hover:text-black px-3 py-1 transition-colors"
              >
                <a href="https://drive.google.com/file/d/1234567890/view" target="_blank" rel="noopener noreferrer">
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
