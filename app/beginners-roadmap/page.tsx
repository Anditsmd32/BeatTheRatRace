import { Button } from "@/components/ui/button"
import { MapPin, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BeginnersRoadmapPage() {
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
            <div className="text-black">BEGINNER'S</div>
            <div className="text-yellow-400 bg-black px-4 py-2 inline-block transform rotate-1 my-2">ROADMAP</div>
          </h1>

          <div className="bg-stone-100 p-6 border-l-8 border-black mb-12 transform -skew-x-1 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-black text-center">
              Your first 30 days: from zero knowledge to earning your first stablecoin yield.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {[
              {
                week: "WEEK 1",
                title: "EDUCATION & SETUP",
                tasks: [
                  "Read our complete stablecoin guide",
                  "Watch wallet setup tutorial",
                  "Create your first crypto wallet",
                  "Complete security checklist",
                  "Buy your first £50 of USDC",
                ],
              },
              {
                week: "WEEK 2",
                title: "FIRST YIELD POSITION",
                tasks: [
                  "Choose your first protocol (we recommend Compound)",
                  "Connect wallet to protocol",
                  "Deposit £50 USDC to start earning",
                  "Monitor your position daily",
                  "Join our community for support",
                ],
              },
              {
                week: "WEEK 3",
                title: "SCALING UP",
                tasks: [
                  "Increase position to £200-500",
                  "Learn about a second protocol",
                  "Diversify across 2 protocols",
                  "Set up yield tracking spreadsheet",
                  "Review monthly yield report",
                ],
              },
              {
                week: "WEEK 4",
                title: "OPTIMIZATION",
                tasks: [
                  "Compare yields across protocols",
                  "Learn about tax implications",
                  "Set up automated yield compounding",
                  "Plan your next month's strategy",
                  "Consider booking a consultation",
                ],
              },
            ].map((week, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black p-8 transform hover:translate-x-2 transition-transform"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-stone-600">{week.week}</div>
                    <h2 className="text-2xl font-black">{week.title}</h2>
                  </div>
                </div>
                <div className="space-y-3">
                  {week.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-black flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-bold">{task}</span>
                    </div>
                  ))}
                </div>
                {index < 3 && (
                  <div className="flex justify-center mt-6">
                    <ArrowRight className="h-8 w-8 text-stone-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-8">
            <span className="bg-black text-white px-6 py-3 inline-block transform -rotate-1">NEED HELP?</span>
          </h2>
          <p className="text-xl font-bold mb-8">Book a consultation for personalized guidance through your journey.</p>
          <Button
            className="bg-yellow-300 text-black hover:bg-yellow-400 text-xl px-12 py-6 font-black border-4 border-black transform hover:scale-110 transition-transform"
            asChild
          >
            <Link href="/services">BOOK CONSULTATION →</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
