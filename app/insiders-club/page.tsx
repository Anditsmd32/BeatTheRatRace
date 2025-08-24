import { Button } from "@/components/ui/button"
import { Lock, User, Key, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InsidersClubPage() {
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
              <Link href="/insiders-club" className="text-black font-bold bg-yellow-300 px-3 py-1">
                INSIDERS CLUB
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 transform rotate-45 translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-stone-800 transform -rotate-12 -translate-x-24 translate-y-24"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="w-24 h-24 bg-yellow-300 mx-auto mb-8 flex items-center justify-center transform rotate-12">
            <Lock className="h-12 w-12 text-black" />
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
            <div className="text-white">MEMBERS</div>
            <div className="text-yellow-400 bg-white px-4 py-2 inline-block transform rotate-1 my-2">ONLY</div>
            <div className="text-white">AREA</div>
          </h1>

          <div className="bg-stone-800 p-6 border-l-8 border-yellow-300 mb-12 transform -skew-x-1 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-white">PAID MEMBERS CAN ACCESS THIS PAGE</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white border-8 border-black p-8 transform hover:scale-105 transition-transform">
            <div className="text-center mb-8">
              <Shield className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-4xl font-black mb-4">SIGN IN TO CONTINUE</h2>
              <p className="text-lg font-bold text-stone-600">
                This content is exclusive to Yield Insider Club members
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-4 border-black font-bold text-lg focus:outline-none focus:bg-yellow-100"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border-4 border-black font-bold text-lg focus:outline-none focus:bg-yellow-100"
                  placeholder="••••••••"
                />
              </div>

              <Button className="w-full bg-black text-white hover:bg-stone-800 text-xl py-4 font-bold border-4 border-black transform hover:scale-105 transition-transform">
                <User className="h-5 w-5 mr-2" />
                SIGN IN →
              </Button>

              <div className="text-center">
                <a href="#" className="text-sm font-bold hover:bg-yellow-300 px-2 py-1 transition-colors">
                  FORGOT PASSWORD?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-8">
            <span className="bg-black text-white px-6 py-3 inline-block transform -rotate-1">NOT A MEMBER YET?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-stone-100 border-4 border-black p-6 transform rotate-1 hover:rotate-0 transition-transform">
              <Key className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-black mb-3">EXCLUSIVE CONTENT</h3>
              <p className="text-stone-600 font-medium text-sm">
                Monthly yield reports, video tutorials, and member-only guides
              </p>
            </div>

            <div className="bg-yellow-300 border-4 border-black p-6 transform -rotate-1 hover:rotate-0 transition-transform">
              <User className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-black mb-3">MONTHLY CONSULTATION</h3>
              <p className="text-black font-medium text-sm">30-minute 1-on-1 session with our experts every month</p>
            </div>

            <div className="bg-stone-100 border-4 border-black p-6 transform rotate-1 hover:rotate-0 transition-transform">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-black mb-3">ONGOING SUPPORT</h3>
              <p className="text-stone-600 font-medium text-sm">Tax help, technical support, and strategy guidance</p>
            </div>
          </div>

          <div className="bg-black text-white p-8 border-4 border-black transform -skew-x-1 mb-8">
            <p className="text-3xl font-black mb-4">
              JOIN FOR JUST <span className="bg-yellow-300 text-black px-3 py-1">£50/MONTH</span>
            </p>
            <p className="text-xl font-bold">7-DAY FREE TRIAL • CANCEL ANYTIME</p>
          </div>

          <Button
            className="bg-yellow-300 text-black hover:bg-yellow-400 text-xl px-12 py-6 font-black border-4 border-black transform hover:scale-110 transition-transform"
            asChild
          >
            <Link href="/services">JOIN THE INSIDER CLUB →</Link>
          </Button>
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
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
