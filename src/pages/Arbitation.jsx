import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bannerImg from '../assets/arb.jpg';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import pic1 from '../assets/aaa.jpg';
import pic2 from '../assets/finra.jpg';
import pic3 from '../assets/JAMS.jpg';
import whatPic from '../assets/What.jpg';
import lawPic from '../assets/dispute.jpg';
import arbitration from "../assets/arbitration.jpg"
import whoPic from '../assets/whoare.jpg';
import regImg from '../assets/meditation.jpg'
import tieImage from '../assets/tieImage.jpg';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { FiInfo} from "react-icons/fi";



const INK = '#12203A';
const INK_DEEP = '#0C1526';
const PAPER = '#F6F1E6';
const PAPER_DEEP = '#EDE5D2';
const BRASS = '#AD8A46';
const BRASS_LIGHT = '#D9BE85';
const SLATE = '#5B6472';
const RUST = '#8C3B2E';

const Icon = ({ path, className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d={path} />
  </svg>
);

const ICONS = {
  scale: "M12 3v18M5 8l-3 6a4 4 0 0 0 6 0l-3-6zm14 0l-3 6a4 4 0 0 0 6 0l-3-6zM5 8h4M15 8h4M9 21h6",
  file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M9 13h6M9 17h6M9 9h1",
  shield: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z",
  check: "M20 6 9 17l-5-5",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  gavel: "m14 13-7.5 7.5a2.1 2.1 0 0 1-3-3L11 10M16 16l6 6M8 8l6-6M3 21h6M17.6 9.2 14.8 6.4a1 1 0 0 1 0-1.4l1.4-1.4a1 1 0 0 1 1.4 0l2.8 2.8a1 1 0 0 1 0 1.4l-1.4 1.4a1 1 0 0 1-1.4 0Z",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35",
  arrow: "M5 12h14M13 6l6 6-6 6",
  building: "M3 21h18M6 21V7l6-4 6 4v14M10 21v-6h4v6M10 11h.01M14 11h.01M10 15h.01M14 15h.01",
  doc: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6",
};

/* ------------------------------------------------------------------ */
/*  Motion presets                                                     */
/* ------------------------------------------------------------------ */

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerParent = (gap = 0.1) => ({
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: gap } },
});

const staggerChild = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ------------------------------------------------------------------ */
/*  Section label — a tick and a word, sentence case, no eyebrow pill  */
/* ------------------------------------------------------------------ */

const SectionMark = ({ label, dark = false }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 mb-5"
  >
    <span className="w-6 h-[2px]" style={{ background: BRASS }} />
    <span className={`text-[13px] font-medium tracking-wide ${dark ? "text-[#D9BE85]" : ""}`} style={!dark ? { color: BRASS } : {}}>
      {label}
    </span>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Ledger card — used where content is a flat list of facts, not a    */
/*  generic SaaS tile: thin rule instead of drop shadow, brass corner  */
/* ------------------------------------------------------------------ */

const LedgerCard = ({ icon, title, children, dark = false }) => (
  <motion.div
    variants={staggerChild}
    className="relative h-full flex flex-col p-7 border-t-2"
    style={{
      borderColor: BRASS,
      background: dark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
    }}
  >
    <Icon path={icon} className="w-6 h-6 mb-5" style={{ color: BRASS }} />
    <h4 className={`font-serif text-lg font-bold mb-3 leading-snug ${dark ? "text-white" : ""}`} style={!dark ? { color: INK } : {}}>
      {title}
    </h4>
    <p className={`text-[14.5px] leading-relaxed ${dark ? "text-gray-300" : ""}`} style={!dark ? { color: SLATE } : {}}>
      {children}
    </p>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Accordion row for the eligibility steps (genuinely sequential)     */
/* ------------------------------------------------------------------ */

const AccordionRow = ({ index, title, children, open, onToggle }) => (
  <motion.div variants={staggerChild} className="border-b border-white/10">
    <button
      onClick={onToggle}
      className="w-full flex items-center gap-5 py-6 text-left group focus:outline-none focus-visible:ring-2 rounded-sm"
      style={{ '--tw-ring-color': BRASS }}
    >
      <span
        className="font-serif text-xl md:text-2xl font-bold tabular-nums shrink-0 w-9 transition-colors duration-300"
        style={{ color: open ? BRASS : 'rgba(255,255,255,0.25)' }}
      >
        {String(index).padStart(2, "0")}
      </span>
      <span className="flex-1 font-semibold text-[15px] sm:text-base text-white">
        {title}
      </span>
      <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0" style={{ color: BRASS }}>
        <Icon path="M12 5v14M5 12h14" className="w-5 h-5" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="pb-7 pl-14 pr-4 text-[14.5px] sm:text-[15px] leading-relaxed text-gray-300">
            {children}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Checklist row with a self-drawing checkmark (representation list)  */
/* ------------------------------------------------------------------ */

const CheckRow = ({ text }) => (
  <motion.div variants={staggerChild} className="flex items-start gap-4 py-4 border-b" style={{ borderColor: PAPER_DEEP }}>
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-0.5" fill="none">
      <motion.path
        d="M4 12.5 9.5 18 20 6"
        stroke={BRASS}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </svg>
    <p className="text-[14.5px] font-medium leading-snug pt-0.5" style={{ color: INK }}>{text}</p>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

// const services = [
//   {
//     title: "American Arbitration Association",
//     image: pic1,
//     tag: "AAA",
//     description: "Provides a forum to resolve many types of disputes through several different sets of arbitration rules.",
//   },
//   {
//     title: "FINRA Arbitration",
//     image: pic2,
//     tag: "FINRA",
//     description: "FINRA Dispute Resolution provides investors with a forum to file complaints against brokerage firms and financial advisers.",
//   },
//   {
//     title: "Judicial Arbitration/Mediation Services",
//     image: pic3,
//     tag: "JAMS",
//     description: "JAMS is one of the most popular arbitration forums where a company may require a consumer to file their case.",
//   },
// ];

const understandingProcess = [
  {
    icon: ICONS.file,
    title: "Procedural rules govern everything",
    text: "Securities arbitration is governed by specific procedural rules established by the organization administering the proceeding. These rules may address matters such as filing requirements, selection of arbitrators, discovery, hearings, evidence, motions, and the issuance of an arbitration award.",
  },
  {
    icon: ICONS.scale,
    title: "Procedures vary by forum",
    text: "Procedures can vary depending on the forum and the circumstances of the dispute. Differences may include eligibility requirements for arbitrators, the process for selecting an arbitration panel, the availability of information concerning previous awards, and the extent to which information about the proceeding may become publicly accessible.",
  },
  {
    icon: ICONS.shield,
    title: "Review the rules carefully",
    text: "Because procedural requirements can significantly affect the presentation of a claim or defense, parties should carefully review the applicable rules and consider obtaining legal advice before beginning an arbitration proceeding.",
  },
];

const regulatoryBodies = [
  { icon: ICONS.building, title: "U.S. Securities and Exchange Commission", text: "The federal regulator with authority to investigate securities-related misconduct and take enforcement action." },
  { icon: ICONS.scale, title: "State securities regulators", text: "State-level authorities that may investigate complaints and enforce state securities laws." },
  { icon: ICONS.users, title: "Self-regulatory organizations", text: "Industry bodies that oversee member firms and may investigate rule violations affecting investors." },
];

const representationList = [
  "Evaluating the merits of a potential arbitration claim",
  "Preparing and filing arbitration documents",
  "Responding to claims and defenses",
  "Selecting and evaluating arbitrators",
  "Managing discovery",
  "Preparing motions and prehearing submissions",
  "Negotiating potential settlements",
  "Preparing witnesses and documentary evidence",
  "Representing clients during arbitration hearings",
  "Reviewing and addressing arbitration awards",
];

const differencesFeatures = [
  {
    icon: ICONS.gavel,
    title: "How it differs from litigation",
    text: "Arbitration and courtroom litigation can involve many of the same fundamental elements, including legal claims, evidence, witnesses, and arguments from both sides. However, arbitration operates under its own procedural framework and may differ significantly from a traditional court case. Depending on the applicable agreement and governing rules, arbitration may offer a more streamlined process for resolving disputes and can be particularly useful when the underlying issues involve specialized financial, commercial, or industry matters.",
  },
  {
    icon: ICONS.shield,
    title: "Awards are generally final",
    text: "A significant consideration when choosing arbitration is the nature of the final decision. Arbitration awards are generally final and binding on the parties, with judicial review available only in limited circumstances established by applicable law. This means that parties should carefully consider their legal position before entering into or pursuing arbitration. Once an arbitration proceeding has concluded, the opportunity to challenge the resulting award may be considerably narrower than the appeal process available in traditional litigation.",
  },
  {
    icon: ICONS.check,
    title: "Know your rights first",
    text: "Because arbitration can involve important procedural requirements and significant legal consequences, obtaining appropriate legal guidance before filing or responding to an arbitration claim can be critical. An experienced arbitration attorney can help evaluate the underlying dispute, identify applicable arbitration provisions, explain the process, develop an appropriate case strategy, and represent your interests throughout the proceeding.",
  },
];

const disputesAccordion = [
  {
    title: "Identifying the appropriate arbitration forum",
    text: "Selecting the appropriate forum is an important part of evaluating a securities claim. The relevant self-regulatory organization and its dispute-resolution procedures may depend on the brokerage firm involved, the type of securities at issue, and where the transaction or related activity occurred. Certain rules may permit a self-regulatory organization to refer a matter to another appropriate forum when the circumstances of the transaction or the securities involved make another forum more suitable. Because jurisdiction and forum requirements can vary, investors should carefully evaluate where a claim should be filed before initiating an arbitration proceeding.",
  },
  {
    title: "Time limitations and eligibility requirements",
    text: "Securities arbitration claims may be subject to specific eligibility requirements and filing deadlines. FINRA's rules contain provisions addressing the time within which certain claims must be submitted, while applicable federal or state law may impose additional limitation periods. The expiration of an applicable deadline can have significant consequences for an investor's ability to pursue a claim. In some circumstances, a claim may be challenged or dismissed because it was not brought within the applicable period. Because the rules governing eligibility and limitations can be complex, investors who are uncertain about the timing of a potential claim should seek legal advice as soon as possible.",
  },
  {
    title: "Arbitration agreements and court proceedings",
    text: "Many brokerage account agreements contain provisions requiring certain disputes to be resolved through arbitration rather than traditional litigation in court. A customer may have questions about whether a particular dispute must be arbitrated, whether a claim can proceed in court, or whether an arbitration provision applies to the circumstances at issue. These questions can involve federal law, state law, contractual language, and applicable securities-industry rules. Once an arbitration proceeding has been initiated, attempting to move the dispute into court may not be successful. The applicable forum, arbitrators, or court may determine that the dispute remains subject to the arbitration agreement. For this reason, it is important to evaluate the arbitration provision and applicable procedural rules before deciding how and where to pursue a securities dispute.",
  },
  {
    title: "Class actions and arbitration",
    text: "Class-action proceedings present additional considerations in the securities arbitration context. Depending on the applicable rules and the circumstances of the proposed class action, a claim involving a class proceeding may be subject to different requirements from an individual investor claim. The interaction between arbitration agreements, securities-industry rules, and class-action proceedings can be complicated. Investors should obtain case-specific legal guidance before determining whether an individual arbitration claim is appropriate.",
  },
];

const arbitratorTypes = [
  {
    title: "Public arbitrators",
    text: "Public arbitrators are individuals who are independent of the securities industry and do not have a current affiliation with a brokerage firm or securities-industry organization. Their role is to provide an impartial perspective when evaluating the dispute.",
  },
  {
    title: "Industry arbitrators",
    text: "Industry arbitrators, where applicable, have professional experience within the securities or financial-services industry. Their knowledge of industry practices and standards can provide valuable context when complex financial or brokerage issues are presented.",
  },
];

const attorneyPoints = [
  {
    icon: ICONS.doc,
    title: "Notifying the arbitration forum",
    text: "Notifying the arbitration forumIf you decide to retain an attorney, the arbitration forum should be provided with the attorney's relevant contact information. This information may be included with the initial filing or submitted through a separate written notice, depending on the applicable arbitration procedures. Once representation has been properly established, communications relating to the arbitration will generally be directed to your attorney.",
  },
  {
    icon: ICONS.users,
    title: "Choosing the right representation",
    text: "The organization administering an arbitration does not act as a representative for either party and cannot select an attorney on a party's behalf. Its personnel generally cannot provide legal advice or determine what legal strategy is appropriate for an individual dispute. If you are considering arbitration, consulting an attorney with experience in the relevant area of law can help you understand your rights, evaluate your potential claims, and determine the most appropriate course of action.",
  },
];

const glossaryTerms = [
  { term: "Answer", def: "A formal written response submitted by the respondent addressing the allegations and claims made against them." },
  { term: "Arbitration Administrator", def: "The individual or administrative office responsible for managing the procedural and administrative aspects of an arbitration proceeding on behalf of the organization conducting the arbitration." },
  { term: "Arbitrator", def: "A neutral individual selected to hear the parties' positions, evaluate the evidence, and make decisions concerning the dispute." },
  { term: "Award", def: "The formal written decision issued by the arbitrator or arbitration panel at the conclusion of the proceeding." },
  { term: "Claim", def: "A formal assertion that another party is legally responsible for harm or owes relief, compensation, or another remedy." },
  { term: "Claimant", def: "The individual or entity that initiates an arbitration proceeding by bringing a claim against another party." },
  { term: "Counsel", def: "An attorney who provides legal advice and represents a party during an arbitration proceeding." },
  { term: "Counterclaim", def: "A claim asserted by a respondent against the original claimant in response to the claims brought against them." },
  { term: "Cross-Claim", def: "A claim brought by one respondent against another respondent or co-party involved in the same arbitration proceeding." },
  { term: "Filing", def: " The formal submission of a claim, pleading, motion, or other document to the appropriate arbitration administrator for inclusion in the official record of the proceeding." },
  { term: "Panel", def: "The arbitrator or group of arbitrators assigned to hear and decide a particular arbitration matter." },
  { term: "Party", def: "An individual or entity participating in an arbitration proceeding as a claimant, respondent, or other properly named participant." },
  { term: "Pleadings", def: " The formal documents through which the parties present their claims, defenses, counterclaims, cross-claims, or other related allegations in an arbitration proceeding." },
  { term: "Respondent", def: "The individual or entity against whom a claim or arbitration proceeding has been initiated." },
  { term: "Service", def: "The formal delivery of a claim, pleading, motion, notice, or other legal document to the parties entitled to receive it under the applicable arbitration rules." },
  { term: "Third-Party Claim", def: "A claim brought by a respondent against an individual or entity not originally named as a party to the arbitration." },
];

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */

const Arbitration = () => {
  const [openRow, setOpenRow] = useState(0);
  const [search, setSearch] = useState("");
  const [arbTab, setArbTab] = useState(0);

  const filteredGlossary = useMemo(
    () =>
      glossaryTerms.filter(
        (g) =>
          g.term.toLowerCase().includes(search.toLowerCase()) ||
          g.def.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">

      {/* ================= HERO — the one orchestrated moment ================= */}
      <header className="relative min-h-[430px] md:min-h-[500px] overflow-hidden bg-[#10151f]">
        <div className="absolute inset-0">
       
                 <img
                   src={bannerImg}
                   alt="Guardian Property Law Group"
                   className="h-full w-full object-cover grayscale opacity-60"
                 />
       
                 <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
       
               </div>

        <Navbar />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full min-h-[450px] px-6 lg:px-10 flex flex-col justify-end pb-14 lg:pb-20">
         

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[0.95]"
          >
            Arbitration
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

   {/* ================= INTRO ================= */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* --- TOP ROW: CONTENT & IMAGE BANNER --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* CONTENT SIDE */}
            {/* To move this to the right side, change lg:order-1 to lg:order-2 */}
            <div className="lg:col-span-7 lg:order-1 flex flex-col justify-center">
              <SectionMark label="Arbitration process" />
              <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={rise}
                className="font-serif text-3xl md:text-4xl font-bold mb-10 tracking-tight max-w-2xl leading-tight"
                style={{ color: INK }}
              >
                Resolving securities and financial disputes through arbitration
              </motion.h2>

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
                <motion.div
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={rise}
                  className="xl:col-span-4 space-y-5 text-justify leading-relaxed text-[15.5px]"
                  style={{ color: SLATE }}
                >
                  <p>
                    Most transactions involving the securities industry are completed without significant disputes. However, disagreements can arise between investors, brokerage firms, financial professionals, and other participants in the financial markets. When a dispute occurs, arbitration may provide an alternative forum for resolving the matter outside of traditional court litigation.
                  </p>
                  <p>
                    Arbitration is a formal dispute-resolution process in which an independent arbitrator or panel considers the evidence and arguments presented by the parties and issues a decision. Depending on the nature of the dispute, arbitration may be administered through an appropriate securities-industry dispute-resolution organization.
                  </p>
                </motion.div>

        
              </div>
            </div>

            {/* IMAGE BANNER SIDE */}
            {/* To move this to the left side, change lg:order-2 to lg:order-1 */}
            <div className="lg:col-span-5 lg:order-2 relative min-h-[350px] lg:min-h-full rounded-xl overflow-hidden">
              {/* Replace `YourImportedImage` with the actual variable name of your import */}
              <img 
                src={arbitration} 
                alt="Arbitration process banner" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
          </div>
          {/* --- END TOP ROW --- */}


          {/* process flow — genuinely sequential, so it earns a connected timeline */}
          {/* (Kept exactly as requested) */}
          <div className="mt-20">
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-10" style={{ color: INK }}>
              Understanding the arbitration process
            </h3>
            <motion.div
              variants={staggerParent(0.15)}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              className="relative grid grid-cols-1 md:grid-cols-3 gap-px"
              style={{ background: PAPER_DEEP }}
            >
              {understandingProcess.map((item) => (
                <LedgerCard key={item.title} icon={item.icon} title={item.title}>
                  {item.text}
                </LedgerCard>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

{/* ================= REGULATORY COMPLAINTS ================= */}
      <section className="relative py-20 px-6 md:px-12 lg:px-18 overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img 
          src={regImg} 
          alt="Regulatory complaints background" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* COLOR OVERLAY */}
        <div 
          className="absolute inset-0 z-0 opacity-90" 
          style={{ background: INK_DEEP }}
        />

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionMark label="Regulatory complaints & enforcement" dark />
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={rise}
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight max-w-4xl leading-tight"
          >
            Arbitration isn&rsquo;t the only path forward
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
            className="text-gray-400 leading-relaxed text-[15.5px] max-w-9xl"
          >
 Arbitration is not the only avenue available when an investor believes that misconduct has occurred. Depending on the circumstances, a complaint may also be submitted to an appropriate regulatory or governmental authority.         </motion.p>

          <motion.div
            variants={staggerParent(0.12)}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14"
          >
            {regulatoryBodies.map((b) => (
              <motion.div key={b.title} variants={staggerChild} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 border" style={{ borderColor: BRASS }}>
                  <Icon path={b.icon} className="w-6 h-6 text-white" style={{ color: BRASS }} />
                </div>
                <h4 className="font-bold text-white text-[15px] mb-3 max-w-[220px]">{b.title}</h4>
                <p className="text-gray-400 text-[13.5px] leading-relaxed max-w-[240px]">{b.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
            className="text-white text-[14px] leading-relaxed max-w-6xl mt-16 pl-6"
            style={{ borderLeft: `2px solid ${BRASS}` }}
          >
            A regulatory investigation and a private arbitration claim serve different purposes. Regulators generally focus on protecting the broader investing public, while arbitration provides an avenue for an individual investor to pursue relief for a particular dispute.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICES DIRECTORY =================
      <section className="py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionMark label="Services directory" />
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
            className="font-serif text-3xl md:text-4xl font-bold mb-14 tracking-tight max-w-2xl"
            style={{ color: INK }}
          >
            Where securities arbitration is administered
          </motion.h2>

          <motion.div
            variants={staggerParent(0.1)}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((item) => (
              <motion.div
                key={item.title}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                whileHover="hover"
                className="group relative bg-white overflow-hidden flex flex-col"
              >
                <div className="h-52 overflow-hidden relative flex-shrink-0">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(0.25)' }}
                  />
                  <span
                    className="absolute top-0 left-0 text-white text-[11px] font-bold tracking-widest px-4 py-2"
                    style={{ background: INK }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-1 border-t-2" style={{ borderColor: BRASS }}>
                  <h3 className="text-[16px] font-bold mb-3 leading-tight" style={{ color: INK }}>
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed flex-1" style={{ color: SLATE }}>
                    {item.description}
                  </p>
                  <motion.span
                    variants={{ hover: { x: 6 } }}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold w-fit"
                    style={{ color: BRASS }}
                  >
                    Learn more <Icon path={ICONS.arrow} className="w-4 h-4" />
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

 {/* ================= LEGAL GUIDANCE + REPRESENTATION LIST ================= */}

<section
  className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-20"
  style={{ background: PAPER_DEEP }}
>

  {/* =================================================
      TOP-RIGHT CIRCLE DECORATION
  ================================================= */}

  <div
    className="
      pointer-events-none
      absolute
      -right-24
      -top-24
      h-72
      w-72
      rounded-full
      border-[35px]
      opacity-30
      sm:-right-32
      sm:-top-32
      sm:h-96
      sm:w-96
      sm:border-[45px]
      lg:-right-40
      lg:-top-40
      lg:h-[460px]
      lg:w-[460px]
      lg:border-[52px]
    "
    style={{ borderColor: BRASS }}
  />


  {/* =================================================
      OPTIONAL INNER CIRCLE
  ================================================= */}

  <div
    className="
      pointer-events-none
      absolute
      -right-8
      -top-8
      h-40
      w-40
      rounded-full
      border-[14px]
      opacity-20
      sm:-right-12
      sm:-top-12
      sm:h-56
      sm:w-56
      sm:border-[18px]
      lg:-right-16
      lg:-top-16
      lg:h-72
      lg:w-72
      lg:border-[22px]
    "
    style={{ borderColor: BRASS }}
  />


  {/* =================================================
      YOUR EXISTING CONTENT
  ================================================= */}

  <div className="relative z-10 mx-auto max-w-6xl">

    {/* TOP SECTION: Intro & Copy */}

    <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-2">

      <div>

        <SectionMark label="Legal guidance" />

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={rise}
          className="font-serif text-3xl md:text-4xl font-bold tracking-tight leading-tight"
          style={{ color: INK }}
        >
          Legal guidance throughout the arbitration process
        </motion.h2>

      </div>


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={rise}
        className="leading-relaxed text-[15.5px] self-center"
        style={{ color: SLATE }}
      >

        <p className="mb-4">
          Securities arbitration involves specialized procedures that can
          differ substantially from traditional litigation. Understanding
          the rules, presenting evidence effectively, and anticipating
          defenses can all matter to protecting an investor&rsquo;s interests.
        </p>

        <p>
          At Guardian Property Law Group, our attorneys assist clients with
          securities-related disputes and arbitration matters, identifying
          potential claims and defenses and building a strategy tailored to
          each client&rsquo;s objectives.
        </p>

      </motion.div>

    </div>


    {/* MIDDLE SECTION: List */}

    <div className="mb-16">

      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={rise}
        className="font-serif text-xl md:text-2xl font-bold mb-8"
        style={{ color: INK }}
      >
        Our representation may include assistance with:
      </motion.h3>


      <motion.div
        variants={staggerParent(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4"
      >

        {representationList?.map((item) => (
          <CheckRow key={item} text={item} />
        ))}

      </motion.div>

    </div>


    {/* IMPORTANT LEGAL GUIDANCE */}

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mt-14 overflow-hidden rounded-sm bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
    >

      {/* Top accent */}

      <div
        className="absolute left-0 top-0 h-1 w-full"
        style={{ background: BRASS }}
      />


      <div className="relative z-10">

        {/* HEADER */}

        <div
          className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:px-8 lg:px-10"
          style={{ background: INK }}
        >

          {/* Icon */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="flex h-12 w-12 shrink-0 items-center justify-center"
            style={{ background: BRASS }}
          >

            <FiInfo className="text-xl text-white" />

          </motion.div>


          {/* Heading */}

          <div>

            <p
              className="text-[9px] font-bold uppercase tracking-[0.24em]"
              style={{ color: BRASS }}
            >
              Important Legal Guidance
            </p>


            <h3 className="mt-1 font-serif text-2xl font-bold text-white sm:text-3xl">
              An important distinction
            </h3>

          </div>

        </div>


        {/* CONTENT */}

        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Item 01 */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="border-b border-gray-200 px-6 py-7 sm:px-8 lg:border-r lg:px-10 lg:py-9"
          >

            <div className="mb-4 flex items-center gap-3">

              <span
                className="text-[10px] font-bold tracking-[0.18em]"
                style={{ color: BRASS }}
              >
                01
              </span>

              <span className="h-px w-8 bg-gray-200" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em]"style={{ color: INK }}>
                General Guidance
              </span>

            </div>


            <p className="text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
              Information concerning arbitration procedures is intended to
              provide general educational guidance. It should not be
              interpreted as legal advice or as a substitute for reviewing
              the rules applicable to a particular arbitration.
            </p>

          </motion.div>


          {/* Item 02 */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="border-b border-gray-200 px-6 py-7 sm:px-8 lg:px-10 lg:py-9"
          >

            <div className="mb-4 flex items-center gap-3">

              <span
                className="text-[10px] font-bold tracking-[0.18em]"
                style={{ color: BRASS }}
              >
                02
              </span>

              <span className="h-px w-8 bg-gray-200" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em]"style={{ color: INK }}>
                Applicable Rules
              </span>

            </div>


            <p className="text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
              The procedures governing securities arbitration can change,
              and the rules applicable to a dispute depend on the forum,
              the parties involved, the agreements between them, and the
              nature of the claims.
            </p>

          </motion.div>


          {/* Item 03 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="border-b border-gray-200 px-6 py-7 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-9"
          >

            <div className="mb-4 flex items-center gap-3">

              <span
                className="text-[10px] font-bold tracking-[0.18em]"
                style={{ color: BRASS }}
              >
                03
              </span>

              <span className="h-px w-8 bg-gray-200" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em]"style={{ color: INK }}>
                Legal Advice
              </span>

            </div>


            <p className="text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
              If you are considering arbitration or have received notice
              of an arbitration claim, obtaining advice from an attorney
              familiar with securities disputes can help you understand
              your rights, obligations, available remedies, and the
              procedural requirements that may apply to your case.
            </p>

          </motion.div>


          {/* Item 04 */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.35,
            }}
            className="px-6 py-7 sm:px-8 lg:px-10 lg:py-9"
          >

            <div className="mb-4 flex items-center gap-3">

              <span
                className="text-[10px] font-bold tracking-[0.18em]"
                style={{ color: BRASS }}
              >
                04
              </span>

              <span className="h-px w-8 bg-gray-200" />

              <span className="text-[11px] font-bold uppercase tracking-[0.18em]"style={{ color: INK }}>
                Guardian Property Law Group
              </span>

            </div>


            <p className="text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
              Guardian Property Law Group provides legal guidance and
              representation for investors involved in securities disputes
              and arbitration proceedings.
            </p>

          </motion.div>

        </div>


        {/* Bottom accent */}

        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(to right, ${BRASS} 0%, ${BRASS} 25%, transparent 25%, transparent 100%)`,
          }}
        />

      </div>

    </motion.div>

  </div>

</section>

      {/* ================= WHAT IS ARBITRATION ================= */}
      <section className="py-20 overflow-hidden w-full">
        <div className="w-full flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full">
              <div className="w-full h-2" style={{ background: BRASS }} />
              <div className="relative">
                <img src={whatPic} alt="Arbitration Process" className="w-full h-[380px] sm:h-[560px] object-cover" style={{ filter: 'grayscale(0.4)' }} />
                <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, rgba(18,32,58,0.25), transparent 60%)` }} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 mt-14 lg:mt-0"
          >
                     <h2 className="font-serif text-3xl sm:text-[2.4rem] font-bold mb-6 tracking-tight leading-tight" style={{ color: INK }}>
              What is arbitration?
            </h2>
            <p className="text-[15px] leading-relaxed mb-5 max-w-xl" style={{ color: SLATE }}>
   Arbitration is an alternative method of resolving disputes outside of traditional courtroom litigation. In an arbitration proceeding, the parties present their dispute to one or more neutral and impartial arbitrators who have experience evaluating legal, financial, or industry-specific issues relevant to the matter.
            </p>
            <p className="text-[15px] leading-relaxed mb-9 max-w-xl" style={{ color: SLATE }}>
  Arbitration is commonly used to resolve disputes involving businesses, financial professionals, brokerage firms, investors, and other parties. It can provide a structured forum for resolving complex disagreements without proceeding through the traditional court process.
            </p>
            <p className="text-[15px] leading-relaxed mb-9 max-w-xl" style={{ color: SLATE }}>
  One of the distinguishing features of arbitration is that the proceeding is governed by a specific set of procedural rules and requirements. These rules may address how a claim is initiated, how evidence and documents are exchanged, how arbitrators are selected, and how the hearing is conducted.
            </p>
             <Link to="/ContactUs">
           
                                 <motion.button
                                   whileHover={{
                                     y: -2,
                                   }}
                                   whileTap={{
                                     scale: 0.98,
                                   }}
                                   className="w-full border border-brand-yellow bg-brand-yellow px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand-yellow cursor-pointer md:w-auto"
                                 >
                                   Contact Us Today
                                 </motion.button>
           
                               </Link>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-justify sm:px-12 lg:px-16 mt-16">
          <motion.div
            variants={staggerParent(0.1)}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ background: PAPER_DEEP }}
          >
            {differencesFeatures.map((f) => (
              <LedgerCard key={f.title} icon={f.icon} title={f.title}>
                {f.text}
              </LedgerCard>
            ))}
          </motion.div>

            <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
            className="text-[14px] leading-relaxed max-w-6xl mt-10 pl-6"
            style={{ borderLeft: `2px solid ${BRASS}`, color: SLATE }}
          >
            A regulatory investigation and a private arbitration claim serve different purposes. Regulators generally focus on protecting the broader investing public, while arbitration provides an avenue for an individual investor to pursue relief for a particular dispute.
          </motion.p>
        </div>
      </section>

      {/* ================= WHAT DISPUTES ARE ELIGIBLE ================= */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20" style={{ background: INK_DEEP }}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={lawPic} alt="Reviewing arbitration documents" className="w-full h-full object-cover opacity-[0.18]" style={{ filter: 'grayscale(0.5)' }} />
        </div>

        <div className="relative z-10 text-justify max-w-9xl mx-auto">
         
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight max-w-8xl"
          >
            What types of disputes may be eligible for arbitration?
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
            className="text-gray-400 leading-relaxed text-[15px] max-w-6xl mb-12"
          >
        Determining whether a securities dispute can be resolved through arbitration requires careful consideration of the nature of the claim, the parties involved, the applicable rules, and the circumstances surrounding the underlying transaction. In many cases, investors may have the right to pursue arbitration against a brokerage firm or registered financial professional when the dispute arises from or relates to the firm's securities business or the conduct of its representatives. The availability of arbitration, however, depends on the applicable agreements, regulatory requirements, and facts of the particular dispute.
          </motion.p>
          

          <motion.div
            variants={staggerParent(0.08)}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          >
            {disputesAccordion.map((row, i) => (
              <AccordionRow
                key={row.title}
                index={i + 1}
                title={row.title}
                open={openRow === i}
                onToggle={() => setOpenRow(openRow === i ? -1 : i)}
              >
                {row.text}
              </AccordionRow>
            ))}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 p-7"
            style={{ background: 'rgba(219, 208, 186, 0.1)', border: `1px solid rgba(173,138,70,0.3)` }}
          >
            <Icon path={ICONS.scale} className="w-8 h-8 shrink-0 text-white" />
            <p className="text-gray-300 text-[14.5px] leading-relaxed">
              At Guardian Property Law Group, our attorneys evaluate securities disputes individually — reviewing agreements, account records, and communications to determine whether arbitration or another remedy fits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= WHO ARE THE ARBITRATORS ================= */}
      <section className="py-20 overflow-hidden w-full">
        <div className="w-full flex flex-col-reverse lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 px-6 sm:px-12 lg:pl-24 lg:pr-16 mt-14 lg:mt-0"
          >

            <h2 className="font-serif text-2xl sm:text-[2.4rem] font-bold mb-6 tracking-tight leading-tight" style={{ color: INK }}>
              Who are the arbitrators?
            </h2>
            <p className="text-[15px] leading-relaxed mb-8 max-w-xl" style={{ color: SLATE }}>
Arbitrators are independent professionals selected to hear and resolve disputes outside of the traditional court system. They are chosen based on their professional background, knowledge, and experience relevant to the types of disputes they may be called upon to consider.            </p>

 <p className="text-[15px] leading-relaxed mb-8 max-w-xl" style={{ color: SLATE }}>
Organizations that administer securities arbitration maintain rosters of qualified individuals who may serve as arbitrators. Although these arbitrators are selected through the administering organization, they are independent from that organization and are responsible for evaluating the evidence, considering the arguments presented by both sides, and ultimately deciding the dispute.
</p>
            {/* interactive tab switcher — earns its motion because it responds to a click */}
            <div className="max-w-xl mb-8 ">
              <div className="flex border-b" style={{ borderColor: PAPER_DEEP }}>
                {arbitratorTypes.map((t, i) => (
                  <button
                    key={t.title}
                    onClick={() => setArbTab(i)}
                    className="relative px-1 py-3 mr-8 text-[14px] font-bold transition-colors"
                    style={{ color: arbTab === i ? INK : SLATE }}
                  >
                    {t.title}
                    {arbTab === i && (
                      <motion.span
                        layoutId="arb-tab-indicator"
                        className="absolute left-0 right-0 -bottom-[1px] h-[2px]"
                        style={{ background: BRASS }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={arbTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-[14px] leading-relaxed pt-5"
                  style={{ color: SLATE }}
                >
                  {arbitratorTypes[arbTab].text}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-[14px] leading-relaxed max-w-xl" style={{ color: SLATE }}>
              Before a panel is finalized, parties may receive information on proposed arbitrators &mdash; professional background, employment history, and disclosed conflicts &mdash; and may take part in selection under the applicable rules.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="w-full h-2" style={{ background: BRASS }} />
            <img src={whoPic} alt="Who are the Arbitrators" className="w-full h-[380px] sm:h-[720px] object-cover" style={{ filter: 'grayscale(0.4)' }} />
          </motion.div>
        </div>
      </section>

      {/* ================= CAN I BE REPRESENTED BY AN ATTORNEY ================= */}
      <section className="relative w-full">
        <div className="relative flex flex-col justify-center overflow-hidden min-h-[400px] py-16 lg:py-24">
          <div className="absolute inset-0 z-0">
            <img src={tieImage} alt="Legal representation" className="w-full h-full object-cover object-[center_top]" style={{ filter: 'grayscale(0.7)' }} />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${PAPER} 40%, rgba(246,241,230,0.55) 70%, rgba(246,241,230,0.15))` }} />
          </div>

          <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto w-full">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight tracking-tight max-w-2xl"
              style={{ color: INK }}
            >
              Can I have an attorney represent me in arbitration?
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
              className="text-[15px] leading-relaxed mb-10 max-w-6xl"
              style={{ color: INK }}
            >
Yes. Parties involved in an arbitration generally have the right to retain legal counsel and may choose to be represented by an attorney throughout the arbitration process. aving legal representation can be particularly important when the opposing party is a brokerage firm, financial institution, or other sophisticated entity that is likely to have experienced counsel handling the matter. An attorney can help protect your interests, explain the applicable procedures, prepare and present your claims, respond to opposing arguments, and guide you through each stage of the proceeding.            </motion.p>

            <motion.div
              variants={staggerParent(0.1)}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 text-justify gap-6 max-w-3xl mb-10"
            >
              {attorneyPoints.map((p) => (
                <motion.div key={p.title} variants={staggerChild} className="bg-white/90 p-6 border-t-2" style={{ borderColor: BRASS }}>
                  <Icon path={p.icon} className="w-5 h-5 mb-4" style={{ color: BRASS }} />
                  <h4 className="font-bold text-sm mb-2" style={{ color: INK }}>{p.title}</h4>
                  <p className="text-[13px] leading-relaxed" style={{ color: SLATE }}>{p.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <Link to="/ContactUs" className="inline-block">
                     <button className="bg-brand-yellow text-white font-bold text-[13px] cursor-pointer uppercase tracking-widest py-4 px-10 hover:bg-white hover:text-brand-yellow hover:border-[2px] hover:border-brand-yellow hover:shadow-lg duration-300">
                       Contact Us Today
                     </button>
                   </Link>
          </div>
        </div>
      </section>

      {/* ================= GLOSSARY ================= */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <SectionMark label="Reference" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight" style={{ color: INK }}>
                Securities arbitration glossary
              </h2>
              <p className="text-sm mt-3 max-w-lg" style={{ color: SLATE }}>
                Understanding the terminology used in securities arbitration can make the process easier to navigate.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <Icon path={ICONS.search} className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: SLATE }} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search a term..."
                className="w-full border py-3 pl-11 pr-4 text-sm focus:outline-none transition-all"
                style={{ background: '#fff', borderColor: PAPER_DEEP }}
                onFocus={(e) => (e.currentTarget.style.borderColor = BRASS)}
                onBlur={(e) => (e.currentTarget.style.borderColor = PAPER_DEEP)}
              />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: PAPER_DEEP }}>
            <AnimatePresence>
              {filteredGlossary.map((g) => (
                <motion.div
                  key={g.term}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-6"
                  style={{ background: PAPER }}
                >
                  <h4 className="font-bold text-[15px] mb-2" style={{ color: INK }}>{g.term}</h4>
                  <p className="text-[13.5px] leading-relaxed" style={{ color: SLATE }}>{g.def}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredGlossary.length === 0 && (
            <p className="text-center text-sm py-16" style={{ color: SLATE }}>No terms match &ldquo;{search}&rdquo;.</p>
          )}

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}
            className="mt-14 p-8 md:p-10"
            style={{ background: INK }}
          >
            <h3 className="font-serif text-lg font-bold text-white mb-4">About this glossary</h3>
            <p className="text-sm leading-relaxed text-gray-300 mb-3">
        The terminology used in securities arbitration can vary depending on the forum and the procedural rules governing a particular dispute. This glossary is intended as a general educational resource to help investors and other parties understand commonly used arbitration terminology.
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
The definitions provided here are simplified explanations and should not be considered a substitute for the applicable arbitration rules, governing agreements, or individualized legal advice. Parties involved in an arbitration should consult the rules applicable to their proceeding and seek qualified legal counsel when appropriate.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Arbitration;