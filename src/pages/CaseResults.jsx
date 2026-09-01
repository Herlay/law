import React, { useState } from 'react';
import bannerImg from '../assets/paid.jpg';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import attImg from '../assets/att1.png';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const CaseResults = () => {
  // Separate states for each accordion so they toggle independent
  const [isPonziOpen, setIsPonziOpen] = useState(true);
  const [isArbitrationOpen, setIsArbitrationOpen] = useState(true);

const BRASS = '#AD8A46';
const INK_DEEP = '#0C1526';
const INK = '#12203A';
const BRASS_LIGHT = '#C7A968';

const financial = [
  {
    title: "Claim Against Coinbase:",
    award: "$329,665.12 + $150,000 in Additional Damages",
    fees: "$95,602 in Attorney's Fees | $41,947 in Costs",
    description: "An arbitrator awarded $329,665.12, together with $150,000 in additional damages, $95,602 in attorney's fees, and $41,947 in costs in connection with claims against Coinbase."
  },
  {
    title: "Claimant v. T-Mobile USA:",
    award: "$955,000 Award",
    description: "Arbitrators awarded $955,000 in connection with claims involving SIM-swap fraud and resulting financial losses."
  },
  {
    title: "May v. Stifel Nicolaus:",
    award: "$4,500,000 Award",
    description: "Arbitrators awarded $4.5 million in connection with claims arising from a fraudulent Ponzi scheme."
  },
  {
    title: "Horace Grant v. Morgan Keegan:",
    award: "$1,500,000 Award",
    description: "A $1.5 million arbitration award was obtained in connection with allegations of fraud, misrepresentation, and omissions involving mutual fund investments."
  },
  {
    title: "Josephine Desparte v. William Blair & Co.:",
    award: "$1,100,000+ Award",
    description: "FINRA arbitrators awarded more than $1.1 million on behalf of a 90-year-old client in connection with claims involving breaches of fiduciary duty and unauthorized trading."
  },
  {
    title: "King v. Morgan Keegan:",
    award: "Approximately $700,000 Recovery",
    description: "The client recovered approximately $700,000 for investment losses, attorney's fees, and costs in a matter involving allegations of fraud and unsuitable mutual fund investments."
  },
  {
    title: "Baldwin v. Wachovia:",
    award: "$300,000+ in Investment Losses + $100,000 Attorney's Fees",
    description: "An arbitration panel awarded more than $300,000 in investment losses, together with an additional $100,000 in attorney's fees, following claims involving unauthorized trading and substantial tax consequences."
  }
];

const ponziScheme = [
    {
      text: (
        <>
          <strong>Avelar, et al. v. ING, ProEquities, First Heartland, Nevin Gillette, et al.:</strong> Clients were allegedly sold purported Guaranteed Investment Contracts by financial advisor Nevin Gillette, who instead diverted client funds for personal purposes. Claims against the firm included failure to supervise and failure to detect the advisor's misconduct.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Schmidt, et al. v. LPL:</strong> Financial advisor Raymond Londo allegedly solicited client funds for purported direct investments but instead misappropriated the funds for gambling and personal expenses. Claims against LPL included allegations of inadequate supervision.
        </>
      )
    },
    {
      text: (
        <>
          <strong>May, et al. v. Stifel Nicolaus and Regald Smith:</strong> Advisor Regald Smith allegedly converted client funds through fictitious bonds and other investment activities. The claims included allegations that the firm failed to respond to multiple supervisory warning signs.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Walker, et al. v. Wachovia Securities and William Sirls:</strong> Financial advisor William Sirls allegedly operated a $40 million direct-investment Ponzi scheme, diverting client funds for personal purposes, including gambling. The matter involved claims that Wachovia failed to reasonably supervise the advisor despite significant red flags.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Pingatore, et al. v. Madison Avenue, Algird Norkus, et al.:</strong> Advisor Algird Norkus allegedly marketed fraudulent promissory notes as part of a $10 million Ponzi scheme. Claims against the firm focused on its alleged failure to identify and stop the scheme.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Shipman, et al. v. ING, Richard Wells, et al.:</strong> Advisor Richard Wells allegedly marketed purported mutual bond trusts that were actually part of a Ponzi scheme. The claims included allegations of prolonged supervisory failures.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Bridges, et al. v. LPL, Ameriprise, and James Buchanan:</strong> Advisor James Buchanan allegedly sold approximately $3 million in fraudulent debentures involving Clean Coal Tech Inc., with the funds allegedly diverted for personal purposes. The claims included allegations that the firms failed to act despite multiple warning signs.
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO BANNER --- */}
      <header className="relative w-full min-h-[400px] md:min-h-[500px] bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Guardian Property Law Group" 
            className="w-full h-full object-cover object-[center_top] grayscale opacity-90"
          />
        </div>

        <Navbar />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full min-h-[490px] px-6 lg:px-10 flex flex-col justify-end pb-14 lg:pb-20">
                             
                              <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="font-serif text-5xl sm:text-6xl md:text-[4.25rem] font-black text-white tracking-tight drop-shadow-2xl leading-[0.95]"
                              >
                             Case Results
                              </motion.h1>
                          
                             {/* the brass rule draws itself under the headline like a signature stroke */}
                                    <motion.svg
                                      width="220" height="6" viewBox="0 0 220 6"
                                      className="mt-5 mb-6"
                                      initial="hidden"
                                      animate="visible"
                                    >
                                      <motion.line
                                        x1="2" y1="3" x2="218" y2="3"
                                        stroke={BRASS} strokeWidth="3" strokeLinecap="round"
                                        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.9, delay: 0.65, ease: "easeInOut" } } }}
                                      />
                                    </motion.svg>
                            </div>
      </header>

      <section className="bg-white py-16 px-6 md:px-12 lg:px-15 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* --- LEFT COLUMN: MAIN CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 flex flex-col gap-8" // Added gap-8 to space out the accordions
          >
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-6 md:pl-8 py-2 mb-12"
            >
              {/* Vertical Accent Line */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full" 
                style={{ background: BRASS || '#d40505' }} 
              />
              
              {/* Primary Lead-in Paragraph */}
              <p className="text-gray-800 text-[16px] text-justify md:text-[15px] leading-relaxed mb-4">
                At <strong className="font-bold" style={{ color: INK }}>Guardian Property Law Group</strong>, Joe Wojciechowski, Esq. represents investors in complex disputes involving investment fraud, broker misconduct, Ponzi schemes, unauthorized trading, unsuitable investments, misrepresentation, and failures to properly supervise financial professionals.
              </p>
              
              {/* Secondary Context Paragraph */}
              <p className="text-gray-600 text-[15px] md:text-[15.5px] leading-relaxed">
                Through arbitration and litigation, the firm has pursued recovery for clients who suffered significant financial losses. The following matters represent selected results and examples of the firm&rsquo;s experience.
              </p>
            </motion.div>

            {/* --- Accordion 1: Ponzi Scams --- */}
            <div className="border border-gray-200 bg-gray-100 rounded-sm overflow-hidden shadow-sm">
              <button 
                onClick={() => setIsPonziOpen(!isPonziOpen)}
                className="w-full bg-brand-yellow p-4 flex items-center cursor-pointer justify-start gap-4 transition-colors"
              >
                <div className="bg-black text-white w-6 h-6 flex items-center justify-center font-bold text-xl leading-none pb-1">
                  {isPonziOpen ? '-' : '+'}
                </div>
                <h3 className="text-white font-bold text-[15px] md:text-xl">Selected Financial Recoveries</h3>
              </button>

              <AnimatePresence>
                {isPonziOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white px-6 py-8"
                  >
                    <div className="space-y-6 text-justify">
                      {financial.map((item, index) => (
                        <p key={index} className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                          <strong className="font-bold text-gray-900">{item.title}</strong> {item.description}
                          {item.conclusion && item.conclusion}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* --- Accordion 2: Arbitration Cases --- */}
            <div className="border border-gray-200 bg-gray-100 rounded-sm overflow-hidden shadow-sm">
              <button 
                onClick={() => setIsArbitrationOpen(!isArbitrationOpen)}
                className="w-full bg-brand-yellow p-4 flex items-center cursor-pointer justify-start gap-4 transition-colors"
              >
                <div className="bg-black text-white w-6 h-6 flex items-center justify-center font-bold text-xl leading-none pb-1 shrink-0">
                  {isArbitrationOpen ? '-' : '+'}
                </div>
                <h3 className="text-white font-bold text-[15px] md:text-xl text-left">
                  Selected Ponzi Scheme & Investment Fraud Matters
                </h3>
              </button>

              <AnimatePresence>
                {isArbitrationOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white px-6 py-8"
                  >
                    <div className="space-y-6 text-justify">
                      {ponziScheme.map((item, index) => (
                        <p key={index} className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                          {index + 1}. {item.text}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>

 {/* --- RIGHT COLUMN: SIDEBAR --- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col self-start lg:sticky lg:top-24"
          >
            <div
              className="rounded-2xl flex flex-col overflow-hidden shadow-lg relative"
              style={{ backgroundColor: INK_DEEP }}
            >
              <div className="pt-10 px-8">
                <h2 className="text-2xl font-serif font-bold leading-tight mb-5 text-white">
                  Experienced Representation for Investors
                </h2>

                <p className="text-white/80 text-[14px] leading-relaxed mb-5">
                  Investment fraud can cause devastating financial consequences. When a broker or financial advisor
                  engages in misconduct&mdash;or when a financial institution fails to adequately supervise its
                  representatives&mdash;investors may have legal rights to pursue compensation.
                </p>

                <p className="text-[14px] leading-relaxed font-semibold mb-3" style={{ color: BRASS_LIGHT }}>
                  Joe Wojciechowski, Esq. and Guardian Property Law Group represent investors in matters involving:
                </p>

                <ul className="text-white/85 text-[14px] leading-relaxed mb-6 space-y-2">
                  {[
                    'Investment fraud and Ponzi schemes',
                    'Broker and financial advisor misconduct',
                    'Unauthorized trading',
                    'Unsuitable investment recommendations',
                    'Excessive concentration of investment portfolios',
                    'Misrepresentation and omission of material information',
                    'Breach of fiduciary duty',
                    'Conversion and misappropriation of client funds',
                    'Financial exploitation of elderly investors',
                    'Failure to supervise',
                    'Securities arbitration and investment disputes'
                  ].map((line, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-[7px] w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: BRASS }} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-white text-[14px] leading-relaxed mb-6 font-medium">
                  If you believe your financial advisor or brokerage firm caused you to suffer investment losses,
                  Guardian Property Law Group can evaluate your circumstances and discuss the legal options
                  available to you.
                </p>

                <Link
                  to="/ContactUs"
                  className="inline-block font-semibold py-3 px-8 rounded-sm text-white self-start shadow-md transition-colors duration-300 mb-8"
                  style={{ backgroundColor: BRASS, }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRASS_LIGHT)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRASS)}
                >
                 CONTACT US TODAY
                </Link>
              </div>

              {/* Attorneys image */}
              <div className="flex justify-center px-4">
                <img
                  src={attImg}
                  alt="Chicago Investment Fraud Attorneys"
                  className="w-[75%] object-contain object-bottom"
                />
              </div>

              {/* Disclaimer */}
              <div className="px-8 pb-8 pt-5 border-t border-white/15">
                <h4 className="text-[13px] text-red-600 font-bold tracking-wide mb-1.5">
                  Case Results Disclaimer
                </h4>
                <p className="text-[12.5px] leading-relaxed text-white/60">
                  The results described above are representative examples of prior matters handled by the firm and
                  are provided for informational purposes only. Past results do not guarantee or predict a similar
                  outcome in any future matter. Every case is different, and the outcome depends on the specific
                  facts and circumstances involved.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default CaseResults;