import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
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
              <Link href="/contact" className="text-black font-bold bg-yellow-300 px-3 py-1">
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
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-stone-900 transform rotate-12 translate-x-24 translate-y-24"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8 text-center">
            <div className="text-black">GET IN</div>
            <div className="text-yellow-400 bg-black px-4 py-2 inline-block transform rotate-1 my-2">TOUCH</div>
          </h1>

          <div className="bg-stone-100 p-6 border-l-8 border-black mb-12 transform -skew-x-1 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-black text-center">
              Questions about stablecoin yields? Want to book a consultation? We're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white border-4 border-black p-6 transform hover:translate-x-2 transition-transform">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-black mb-3">EMAIL US</h3>
                <p className="font-medium mb-4">For general questions, support, or partnership inquiries.</p>
                <div className="bg-yellow-300 p-3 border-2 border-black">
                  <p className="font-black">beattheratrace@mail.com</p>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 transform hover:translate-x-2 transition-transform">
                <Calendar className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-black mb-3">BOOK A CONSULTATION</h3>
                <p className="font-medium mb-4">
                  Ready for personalized guidance? Want to know more? Book a callback to secure a date & time.
                </p>
                <Button className="bg-black text-white hover:bg-stone-800 font-bold border-4 border-black">
                  SCHEDULE CALL →
                </Button>
              </div>

              <div className="bg-white border-4 border-black p-6 transform hover:translate-x-2 transition-transform">
                <MessageSquare className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-black mb-3">JOIN OUR COMMUNITY</h3>
                <p className="font-medium mb-4">Connect with other members in our private Discord server.</p>
                <Button
                  variant="outline"
                  className="border-2 border-black text-black hover:bg-yellow-300 font-bold bg-transparent"
                >
                  JOIN DISCORD →
                </Button>
              </div>
            </div>

            <div className="bg-yellow-300 border-8 border-black p-8 transform rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-3xl font-black mb-6">QUICK CONTACT FORM</h2>

              <form className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">NAME *</label>
                  <input
                    type="text"
                    className="w-full p-3 border-4 border-black font-bold bg-white"
                    placeholder="YOUR NAME"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">EMAIL *</label>
                  <input
                    type="email"
                    className="w-full p-3 border-4 border-black font-bold bg-white"
                    placeholder="YOUR@EMAIL.COM"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">SUBJECT</label>
                  <select className="w-full p-3 border-4 border-black font-bold bg-white">
                    <option>GENERAL QUESTION</option>
                    <option>CONSULTATION BOOKING</option>
                    <option>MEMBERSHIP SUPPORT</option>
                    <option>PARTNERSHIP INQUIRY</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2">MESSAGE *</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border-4 border-black font-bold bg-white resize-none"
                    placeholder="TELL US HOW WE CAN HELP..."
                  />
                </div>

                <Button className="w-full bg-black text-white hover:bg-stone-800 text-xl py-4 font-bold border-4 border-black">
                  SEND MESSAGE →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-stone-800 border-4 border-stone-600 p-6">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-black mb-2">LOCATION</h3>
              <p className="font-medium">
                UK-BASED BUSINESS
                <br />
                GDPR COMPLIANT
              </p>
            </div>

            <div className="bg-stone-800 border-4 border-stone-600 p-6">
              <Mail className="h-8 w-8 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-black mb-2">RESPONSE TIME</h3>
              <p className="font-medium">
                WITHIN 24 HOURS
                <br />
                MONDAY - FRIDAY
              </p>
            </div>

            <div className="bg-stone-800 border-4 border-stone-600 p-6">
              <MessageSquare className="h-8 w-8 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-black mb-2">SUPPORT</h3>
              <p className="font-medium">
                MEMBERS GET
                <br />
                PRIORITY SUPPORT
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
