import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, AlertTriangle, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SafetyChecklistPage() {
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
            <div className="text-black">SAFETY</div>
            <div className="text-yellow-400 bg-black px-4 py-2 inline-block transform rotate-1 my-2">CHECKLIST</div>
          </h1>

          <div className="bg-stone-100 p-6 border-l-8 border-black mb-12 transform -skew-x-1 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-black text-center">
              Essential security practices to protect your crypto investments from all threats.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-stone-100">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div className="bg-white border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6 flex items-center">
                <Shield className="h-8 w-8 mr-4" />
                WALLET SECURITY
              </h2>
              <div className="space-y-4">
                {[
                  "Use hardware wallets for large amounts (£1000+)",
                  "Never share your seed phrase with anyone",
                  "Store seed phrase offline in multiple secure locations",
                  "Use strong, unique passwords for all accounts",
                  "Enable 2FA on all exchange accounts",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-300 border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 mr-4" />
                PROTOCOL SAFETY
              </h2>
              <div className="space-y-4">
                {[
                  "Only use established protocols with 6+ months history",
                  "Check protocol audit reports before depositing",
                  "Start with small amounts to test everything works",
                  "Diversify across multiple protocols (don't put all eggs in one basket)",
                  "Monitor your positions daily for any unusual activity",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-4 border-black p-8">
              <h2 className="text-3xl font-black mb-6">COMMON SCAMS TO AVOID</h2>
              <div className="space-y-4">
                {[
                  "Never click links in unsolicited emails or messages",
                  "Always double-check website URLs before connecting wallet",
                  "Be suspicious of yields over 20% APY",
                  "Never give anyone remote access to your computer",
                  "Don't trust 'too good to be true' investment opportunities",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-black flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black mb-8">
            <span className="bg-black text-white px-6 py-3 inline-block transform -rotate-1">
              GET THE FULL CHECKLIST
            </span>
          </h2>
          <p className="text-xl font-bold mb-8">Download our complete 20-point security checklist PDF.</p>
          <Button className="bg-yellow-300 text-black hover:bg-yellow-400 text-xl px-12 py-6 font-black border-4 border-black transform hover:scale-110 transition-transform">
            <Download className="h-5 w-5 mr-2" />
            DOWNLOAD PDF →
          </Button>
        </div>
      </section>
    </div>
  )
}
