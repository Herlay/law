import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/insurance.jpg';
import attImg from '../assets/att1.png';
import arbitrationImg from '../assets/iul.jpg';
import tieImg from '../assets/practice.jpg';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';



// ==========================================
// 1. ANIMATION VARIANTS
// ==========================================
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ==========================================
// 2. ACCORDION DATA
// ==========================================
const iulData = [
  {
    title: "What Guardian Property Law Group Wants You to Know",
    content: (
      <p className="text-gray-700 leading-relaxed">
        If you purchased an Ameritas indexed universal life (IUL) policy and the cash value or projected retirement benefit has fallen short of what you were promised, you’re not alone and you may have legal options. At Guardian Property Law Group, we represent policyholders who suspect they were sold IULs using misleading illustrations, deceptive sales tactics, or omissions about costs and risks. Below we explain what an Ameritas IUL Fraud Lawsuit typically alleges, the evidence plaintiffs rely on, recent developments, and how our firm helps clients pursue recovery.
      </p>
    )
  },
  {
    title: "What is an Indexed Universal Life (IUL) policy?",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          An IUL combines permanent life insurance with a cash-value account tied to the performance of a market index (like the S&P 500). Insurers credit interest based on index performance subject to caps, participation rates, and floors. While marketed as providing growth potential with downside protection, actual credited interest depends on policy mechanics and fees sometimes leaving policyholders disappointed when projected values don’t materialize.
        </p>
        <p>
          <strong className="text-black">Why that matters:</strong> many IUL sales rely on performance illustrations showing optimistic long-term returns. When those illustrations omit realistic caps, spreads, or assumed crediting mechanics, buyers can be left with policies that cost more and grow less than promised.
        </p>
      </div>
    )
  },
  {
    title: "Recent case developments and the legal landscape",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Litigation over IULs has multiplied in recent years. Plaintiffs’ lawyers, including newly formed national practices focused on IUL litigation, have filed suits alleging misleading marketing and failed expectations; some firms highlight large recoveries in select matters. At the same time, insurers have defended aggressively and courts have produced mixed results. Some courts have dismissed class claims while others have permitted discovery into how carriers prepared illustrations and handled claims.
        </p>
        <p>
          For example, some lawsuits have survived motions to dismiss and moved into discovery where plaintiffs sought internal documents about illustration models and sales practices; other actions have been resolved or dismissed on procedural grounds. The upshot: outcomes vary by jurisdiction, the strength of the evidence, and how the policy and sales process were documented.
        </p>
      </div>
    )
  },
  {
    title: "How deceptive IUL sales typically work (red flags we see)",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>We’ve reviewed hundreds of IUL files and frequently spot the same warning signs:</p>
        <ul className="list-disc list-outside ml-6 space-y-2">
          <li><strong>Over-optimistic illustrations</strong> that show sustained 6–8% growth without clear disclosure of caps, spreads, or realistic crediting formulas.</li>
          <li><strong>Unclear fee structures:</strong> agents emphasize “no fees” or “tax-advantaged growth,” while policies contain mortality charges, admin fees, and costly riders.</li>
          <li><strong>Rollover pressure:</strong> clients were advised to move qualified funds into an IUL without full disclosure of tax consequences and loss of ERISA protections.</li>
          <li><strong>Aggressive premium schedules</strong> that require high early payments to achieve the illustrated performance, leaving clients underwater if market results are modest.</li>
          <li><strong>Sparse or inconsistent documentation</strong> crucial for proving what the agent actually promised.</li>
        </ul>
        <p>If you recognize any of these signs in your Ameritas IUL experience, that helps build a claim.</p>
      </div>
    )
  },
  {
    title: "Typical damages plaintiffs seek",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>Depending on the case, plaintiffs may pursue:</p>
        <ul className="list-disc list-outside ml-6 space-y-2">
          <li>Return of premiums paid (rescission or partial rescission),</li>
          <li>Compensatory damages for lost growth or increased out-of-pocket costs,</li>
          <li>Restitution or disgorgement for amounts the insurer retained improperly, and</li>
          <li>Fees and costs (in limited circumstances or where statutes allow).</li>
        </ul>
        <p>Each case is fact-specific. Some clients recover significant sums through negotiated settlements; others proceed to trial. Recent press and firm reports show both recoveries and defense victories which underscores why early, document-driven investigation matters.</p>
      </div>
    )
  },
  {
    title: "Why you should get a lawyer experienced in IUL cases",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>IUL litigation depends heavily on technical evidence: the exact illustration used, emails or notes reflecting the sales pitch, internal modeling assumptions, and actuarial or financial expert analysis. Successfully advancing an Ameritas IUL Fraud Lawsuit requires:</p>
        <ul className="list-disc list-outside ml-6 space-y-2">
          <li>A careful review of your policy, illustrations, and application materials,</li>
          <li>Interviews and file requests to determine what the agent said and documented,</li>
          <li>Economists/actuaries to model realistic policy performance under disclosed caps and participation rates, and</li>
          <li>Strategic litigation planning (e.g., whether to push for class treatment, focus on individual rescission, or seek negotiated remediation).</li>
        </ul>
        <p>At Guardian Property Law Group, we pair investigative rigor with litigation experience so clients can make an informed choice about pursuing claims.</p>
      </div>
    )
  }
];

const pacificData = [
  {
    title: "How Guardian Property Law Group Helps with Pacific Life IUL Lawsuits",
    content: (
      <div>
 <p className="text-gray-700 leading-relaxed">
    If you bought an Indexed Universal Life (IUL) policy from Pacific Life because a sales illustration promised steady growth and low risk, and you wound up facing shrinking cash values, rising premiums, or even lapses in coverage, you’re not alone. At Guardian Property Law Group, we investigate whether those decisions were the result of misleading sales practices, faulty illustrations, or undisclosed policy features and we stand ready to hold insurers and advisors accountable on behalf of policyholders.
          </p>
      <p className="text-gray-700 mt-5 leading-relaxed">
    Below we explain what policyholders are alleging about Pacific Life’s IUL products, why certain design features can create big surprises for buyers, and how our team evaluates and pursues Pacific Life IUL lawsuits on a client’s behalf.
      </p>
      </div>
     
    )
  },
  {
    title: "What is a Pacific Life IUL and why are people filing lawsuits?",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
  An Indexed Universal Life policy (IUL) is a life insurance product that combines death benefit protection with a cash-value account tied, in whole or in part, to an equity index. In practice, that means the policy can credit interest based on index performance while also charging various insurance and administrative fees. For some IUL designs, insurance companies and the agents who sell them used illustrations showing high potential returns to make the product look attractive to buyers who might otherwise choose more conservative strategies.
        </p>
        <p>
      Policyholders who later suffered dramatic declines in cash value or who were forced to pay much higher premiums now allege those illustrations were misleading and omitted important details about how certain features like multipliers, performance factors, or “accelerator” strategies could amplify losses as well as gains. These complaints are central to the Pacific Life IUL lawsuits that have been filed in multiple states.
        </p>
      </div>
    )
  },
  {
    title: "The specific concern: leveraged or “Xcelerator” features",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
 One version of Pacific Life’s product that has drawn particular scrutiny reportedly included a component sometimes described as an “Xcelerator” or performance multiplier. While such mechanics can show large upside in ideal market conditions, they also create greater downside risk when the market underperforms. Plaintiffs say the net effect was that many policyholders, some of them older or risk-averse, were left with rapidly eroding cash values and unaffordable premium requirements after buying what they believed to be relatively safe life insurance. Those allegations are a frequent theme in lawsuits and consumer complaints.
        </p>
      </div>
    )
  },
  {
    title: "How improper illustrations and agent representations can create legal claims",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>A central legal theory in many IUL cases is that illustrations and sales pitches misrepresented the likely performance or failed to disclose material risks. Common problems that give rise to claims include:</p>
        <ul className="list-disc list-outside ml-6 space-y-2">
          <li>Overly optimistic illustrated returns that ignore multipliers, caps, or participation limits.</li>
          <li>Failure to clearly disclose fees, cost-of-insurance charges, and how increases will affect cash value and premiums.</li>
          <li>Concealing the mechanics of special indexing strategies or “performance factors” that make results more volatile.</li>
          <li>Selling an inappropriate, high-risk product to a retiree or conservative investor who needed guaranteed coverage and predictable reserves.</li>
        </ul>
        <p>When these practices are proven, they can support claims such as negligent misrepresentation, breach of fiduciary duty, fraud, or violations of state insurance laws.</p>
      </div>
    )
  },
  {
    title: "Time matters but so does accuracy",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>Insurance and consumer protection laws vary by state, and statutes of limitations can limit how long you have to bring a claim. That said, rushing without a proper review isn’t helpful either. At Guardian Property Law Group we move quickly to preserve evidence, obtain policy documents, and evaluate statutes and deadlines, but we also methodically build a case that fairly presents the economic realities you suffered.</p>
      </div>
    )
  },
];

const TransData = [
  {
    title: "What is a Transamerica IUL (and why do they matter)?",
    content: (
      <div>
 <p className="text-gray-700 leading-relaxed">
An indexed universal life (IUL) policy is a hybrid product: it provides a death benefit like traditional life insurance while offering a cash value component tied (indirectly) to market indexes. Transamerica markets several IUL products including what the company has called the Financial Choice IUL designed to provide tax-advantaged access to cash value while offering index-linked growth options. These products are complex by design, and that complexity is often what creates problems for buyers who expected steady growth or clearer fee disclosures. 
         </p>
              </div>
     
    )
  },
  {
    title: "The typical complaints in Transamerica IUL lawsuits",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
 Lawsuits against insurers that sell IULs commonly arise from one or more of the following problems:
        </p>
        <ul className="list-disc list-outside ml-6 space-y-2">
          <li>Misleading sales illustrations: insureds rely on glossy projections that assume optimistic crediting rates or ignore realistic caps and spreads.</li>
          <li>Concealed or confusing fees: multiple embedded fees reduce cash-value growth but were not clearly explained.</li>
          <li>Improper fee increases after sale: insurers may amend expense structures or adopt new monthly charges that materially change the policy economics.</li>
          <li>Replacement and suitability issues: a new IUL may have been sold to replace an existing contract without proper analysis showing the replacement was in the client’s best interest.</li>
          <li>Failure to disclose surrender penalties and loan interest mechanics: when surrender or loan costs are higher than represented, policyholders can suffer surprise losses.</li>
        </ul>
        <p>If you recognize any of these scenarios with your Transamerica policy, you should consider speaking with counsel experienced in IUL litigation.</p>
      </div>
    )
  },
  {
    title: "How Transamerica IUL fees work",
    content: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
IULs are sold as growth-with-protection products, but they make money for insurers through a web of fees and charges. With Transamerica policies those fees frequently include (and are described in policy contracts and illustrations):
        </p>
              <ul className="list-disc list-outside ml-6 space-y-2">
      <li>Cost of insurance (COI): a charge for the pure life-insurance component that rises as the insured ages.</li>
      <li>Index account monthly charges: fees assessed against cash-value index accounts these can be percentage-based and compounded over time.</li>
      <li>Flat monthly policy fees: small recurring monthly charges (for example, $10–$12 per month are typical on many IULs).</li>
      <li>Per-unit charges: fees assessed per thousand dollars of the face amount or for certain riders.</li>
      <li>Surrender charges and market value adjustments: heavy penalties if you surrender or partially withdraw early, which can drastically reduce the amount you receive.</li>
  </ul>
<p>These multiple layers of fees and periodic expense increases are a frequent source of underperformance in IULs sold years earlier. If you were shown projections without clear, side-by-side expense disclosures, that can form the factual basis for a claim.</p>
      </div>
    )
  },
 
];

// ==========================================
// 3. ACCORDION ITEM COMPONENT (Moved outside)
// ==========================================
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="mb-4 shadow-sm border border-gray-100">
      <button 
        onClick={onClick}
        className="w-full flex items-stretch bg-brand-yellow cursor-pointer transition-colors duration-300 group"
      >
        <div className="bg-black w-12 md:w-16 flex items-center justify-center shrink-0">
          <span className="text-white text-2xl md:text-3xl font-normal leading-none group-hover:scale-110 transition-transform">
            {isOpen ? '−' : '+'}
          </span>
        </div>
        <div className="flex-1 py-4 px-4 md:px-6 text-left text-white font-extrabold text-[16px] md:text-lg">
          {title}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-white"
          >
            <div className="p-6 md:p-8 border-t-0 border border-gray-100">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};






// ==========================================
// 4. MAIN PAGE COMPONENT
// ==========================================
const Lawsuits = () => {
  const [openIndex, setOpenIndex] = useState(0);

    // --- INDEPENDENT STATE FOR EACH SECTION ---
  const [ameritasOpenIndex, setAmeritasOpenIndex] = useState(0); 
  const [pacificOpenIndex, setPacificOpenIndex] = useState(0); 
  const [transOpenIndex, setTransOpenIndex] = useState(0);

  // Notice how Lawsuits NOW has a return statement here!
  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO BANNER --- */}
      <header className="relative w-full h-[400px] bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Guardian Property Law Group Attorneys" 
            className="w-full h-full object-cover object-[center_top] grayscale opacity-40"
          />
        </div>
        <Navbar />
        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full px-6 lg:px-10 flex flex-col justify-end pb-12 lg:pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-6xl md:text-[3rem] font-black text-white tracking-tight drop-shadow-2xl mt-20"
          >
            Indexed Universal Life (IUL) Insurance Lawsuits
          </motion.h1>
        </div>
      </header>

      {/* --- MAIN CONTENT & SIDEBAR SECTION --- */}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-15 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 relative">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 flex flex-col gap-8"
          >
            <div>
              <p className="text-2xl sm:text-3xl lg:text-2xl font-extrabold text-black mb-6 sm:mb-2 leading-tight tracking-tight">
                How Guardian Property Law Group Helps When Your IUL Isn’t Delivering
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 font-medium text-justify">
                If you purchased an indexed universal life insurance policy (commonly called an IUL) after being told it would serve as “tax-free retirement income,” a “guaranteed lifetime pension” or a “no-risk wealth-building vehicle,” and you’re now seeing troubling results then you’re in the right place. At Guardian Property Law Group, we represent policy-holders who have been misled or sold IUL products under false pretenses.
                <br /><br />
                We understand that an IUL can seem like a flexible, promising financial instrument. You may have been told it would outperform market risks, fund itself, and provide a comfortable retirement. Unfortunately, what you may be discovering is very different: steady fees, rising costs, weak growth, shifting policy terms, and increased risk that eating away at your cash value. We know how these products are marketed and we know how to hold the sellers to account.
              </p>

              <p className="text-2xl sm:text-3xl lg:text-2xl font-extrabold text-black mb-6 sm:mb-2 leading-tight tracking-tight">
                What is an Indexed Universal Life (IUL) Policy?
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 font-medium text-justify">
                An IUL is a life insurance policy with a cash-value component tied, in part, to a market index (such as the S&P 500). The idea: you get the death benefit protection of life insurance, plus the potential to accumulate cash value, and the ability to borrow or withdraw from that cash value. Often these policies are pitched as a hybrid of insurance + investment, with attractive tax-advantaged features, and the notion of upside market growth without downside risk. Agents may describe IULs as:
              </p>

              <ul className="list-disc list-outside pl-5 sm:pl-8 space-y-1 mb-2 text-gray-600 text-[15px] font-medium text-justify leading-relaxed font-sans marker:text-gray-500">
                <li className="pl-2">“Tax-free retirement income” vehicles</li>
                <li className="pl-2">“Private pension plans” for high-net-worth individuals</li>
                <li className="pl-2">“Wealth-building strategies with no market risk”</li>
                <li className="pl-2">“Self-funding life insurance that replaces your 401(k) or IRA”</li>
              </ul>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 font-medium text-justify mt-4">
                These portrayals are widely used in seminars, webinars, social-media influencer outlets, or multi-level marketing (“MLM”)-style networks. But behind that appealing pitch lies complexity, non-guaranteed returns, internal costs, and shifting insurer terms that many policy-holders don’t fully appreciate.
              </p>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-1/3 self-start lg:sticky lg:top-[120px] z-10">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col" 
            >
              <div className="bg-brand-yellow rounded-2xl flex flex-col h-[680px] overflow-hidden shadow-lg relative pt-10 px-8 pb-0">
                <h2 className="text-1xl md:text-2xl font-black text-white leading-tight mb-6">
                  Chicago Investment Fraud Attorneys Offering Nationwide Representation to Investors
                </h2>
                <p className="text-white text-[15px] md:text-[15px] leading-relaxed mb-8">
                  If you have suffered financial losses because of the negligence or fraud of your financial advisor or broker through unsuitable investment recommendations, over-concentration, churning, misrepresenting risks, conversion or selling away, you have legal rights and options to pursue recovery of those losses.
                </p>
                <Link to="/ContactUs" className="z-10 self-start block">
                  <motion.button className="bg-[#d40505] text-white font-bold py-3 px-8 rounded-sm shadow-md hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                    CONTACT US TODAY
                  </motion.button>
                </Link>
                <div className="mt-8 flex justify-end items-end flex-1 w-full">
                  <img 
                    src={attImg} 
                    alt="Chicago Investment Fraud Attorneys" 
                    className="w-[50%] sm:w-[60%] lg:w-[70%] mr-[-32px] object-contain object-bottom"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- ARBITRATION OVERVIEW SECTION --- */}
      <section className="bg-[#FDFDFD] py-16 overflow-hidden w-full">
        <div className="w-full flex flex-col lg:flex-row items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative lg:pr-10"
          >
            <div className="relative w-full shadow-2xl rounded-br-[6rem] lg:rounded-br-[3rem] overflow-hidden">
              <div className="w-full h-6 bg-brand-yellow relative z-10"></div>
              <div className="relative">
                <img 
                  src={arbitrationImg} 
                  alt="Arbitration Process" 
                  className="w-full h-[400px] sm:h-[1100px] object-cover"
                />
                <div className="absolute inset-0 bg-red-400/20 mix-blend-multiply pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-5 mt-16 lg:mt-0"
          >
            <h2 className="text-2xl sm:text-[1.6rem] font-black text-gray-900 mb-2 tracking-tight leading-tight">
              Why Does an IUL Often Fail to Deliver?
            </h2>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-10 max-w-xl">
              Despite the marketing hype, many IULs underperform, or even collapse, for reasons that are inherent in how these products are structured and sold. Below are some of the most common issues we investigate:
            </p>

            <h2 className="text-2xl sm:text-[1.6rem] font-black text-gray-900 mb-2 tracking-tight leading-tight">
              High Up-Front Commissions and Sales Incentives
            </h2>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-10 max-w-xl">
              Because IULs often carry generous front-loaded commissions, agents may be incentivized to sell them even when the product may not be in the client’s best interests. These incentives can lead to aggressive marketing (e.g., “funds itself after five years,” “guaranteed tax-free income”) rather than full disclosure of risks and fees.          
            </p>

            <h2 className="text-2xl sm:text-[1.6rem] font-black text-gray-900 mb-2 tracking-tight leading-tight">
              Hidden, Rising Costs and Insurance Charges
            </h2>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-10 max-w-xl">
              Many policy-holders discover later that the “cost of insurance,” administrative fees, and internal charges steadily eat away at the cash value. What looked like a modest premium may face increased deductions and shrinking net growth or worse, a need for increased premium injections to keep the policy alive.
            </p>

            <h2 className="text-2xl sm:text-[1.6rem] font-black text-gray-900 mb-2 tracking-tight leading-tight">
              Illustrations Based on Aggressive Assumptions
            </h2>
            <p className="text-gray-500 text-[0.9rem] leading-relaxed mb-10 max-w-xl">
              Sales illustrations frequently rely on optimistic cap-rates, participation rates, and index credits. These assumptions are presented as future performance even though the insurer retains control and may reduce caps or participation when market conditions change. If the assumptions don’t hold, the gap between promised and actual results can be dramatic.
            </p>

            <h2 className="text-2xl sm:text-[1.6rem] font-black text-gray-900 mb-2 tracking-tight leading-tight">
              Loans, Withdrawals and Tax Traps
            </h2>
            <p className="text-gray-500 text-[0.9rem] leading-relaxed mb-10 max-w-xl">
              The “tax-free income” promise often depends on borrowing from the policy. If market credits underperform, or cost of insurance and fees rise, loans can compound, triggering a lapse or taxable event. In other words, the promise of tax-free retirement income may unravel into unexpected tax burdens or losses.             
            </p>

            <h2 className="text-2xl sm:text-[1.6rem] font-black text-gray-900 mb-2 tracking-tight leading-tight">
              Unsuitable Sales & Marketing Practices
            </h2>
            <p className="text-gray-500 text-[0.9rem] leading-relaxed mb-10 max-w-xl">
              Policies may be sold as replacement for 401(k)s/IRAs, as “private pension” alternatives, or pitched through complex premium-financed structures. In some cases, agents, advisors or carriers have failed to provide adequate disclosure of costs, risks, alternate options, or conflicts of interest.
            </p>

            <Link to="/ContactUs" className="w-[200px] block no-underline">
              <button className="bg-brand-yellow text-white 
              font-bold py-3.5 px-8 rounded cursor-pointer hover:text-brand-yellow hover:bg-white border-[1px] transition duration-300 text-sm tracking-wide">
                LEARN MORE
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- RED FLAGS SECTION --- */}
      <section className="relative py-15 px-6 md:px-12 lg:px-20 bg-gray-100">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={tieImg} 
            alt="Writing on paper" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-tight"
          >
            Signs Your Indexed Universal Life (IUL) Insurance Might Be a Problem
          </motion.h2>

          <div className="space-y-3 text-white leading-relaxed text-sm md:text-[17px] text-justify">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              You should consider reaching out to us if you recognize one or more of the following red flags:            
            </motion.p>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
              <ul className="list-disc list-outside pl-5 sm:pl-8 space-y-1 mb-2 text-gray-200 text-[15px] font-medium text-justify leading-relaxed font-sans marker:text-gray-200">
                <li className="pl-2">Your IUL policy’s cash value is far lower than what the illustration promised.</li>
                <li className="pl-2">You were told the policy would “pay for itself” after a certain period, yet you’re required to continue making large premium payments.</li>
                <li className="pl-2">You were led to believe the policy had no downside and would produce tax-free retirement income, yet you’re facing loans, increased premiums, or a collapse of benefits.</li>
                <li className="pl-2">You were persuaded to roll over a 401(k), IRA or other retirement account into an IUL.</li>
                <li className="pl-2">The agent or advisor marketed the IUL as a “private pension,” “business succession tool,” or “premium-financed” strategy.</li>
                <li className="pl-2">You didn’t receive clear disclosures about cap rates, participation rates, loan terms, surrender charges, or the potential for policy lapse.</li>
                <li className="pl-2">You feel you were sold the policy based on aggressive sales material, rather than a careful discussion of your goals, risk tolerance, and alternatives.</li>
                <li className="pl-2">You were solicited through social media, influencer marketing or multi-level marketing (MLM) networks, rather than through a transparent fiduciary process.</li>
              </ul>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} viewport={{ once: true }}>
              If any of these statements apply to you, there is a strong possibility you may have a claim, and you should not wait. Delays can diminish documentation, reduce recoverable value, or trigger statute-of-limitations issues.              
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* --- ACCORDION SECTION (The Fix!) --- */}
      <section className="w-full py-16 md:py-24 bg-[#fafafa] px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Ameritas IUL Fraud Lawsuit
            </h2>
            <div className="w-20 h-1.5 bg-brand-yellow mx-auto md:mx-0"></div>
          </div>

          <div className="flex flex-col">
            {iulData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                // Check against the Ameritas state
                isOpen={ameritasOpenIndex === index}
                // Update the Ameritas state
                onClick={() => setAmeritasOpenIndex(ameritasOpenIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

       {/* ---Pacific Life IUL Lawsuits --- */}
  <section className="w-full py-16 md:py-1 bg-[#fafafa] px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
           Pacific Life IUL Lawsuits
            </h2>
            <div className="w-20 h-1.5 bg-brand-yellow mx-auto md:mx-0"></div>
          </div>

          <div className="flex flex-col">
            {pacificData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                // Check against the Pacific Life state
                isOpen={pacificOpenIndex === index}
                // Update the Pacific Life state
                onClick={() => setPacificOpenIndex(pacificOpenIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

       {/* ---Transamerica IUL Lawsuits --- */}
    <section className="w-full py-16 md:py-15 bg-[#fafafa] px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Transamerica IUL Lawsuits
            </h2>
            <div className="w-20 h-1.5 bg-brand-yellow mx-auto md:mx-0"></div>
          </div>

          <div className="flex flex-col">
            {TransData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                // Check against the Transamerica state
                isOpen={transOpenIndex === index}
                // Update the Transamerica state
                onClick={() => setTransOpenIndex(transOpenIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      
            <ContactSection />
            <Footer />

    </div>
  );
};

export default Lawsuits;