import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FiArrowRight,
  FiShield,
  FiFileText,
  FiSearch,
  FiUsers,
  FiBriefcase,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";

import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import bannerImg from "../assets/dispute.jpg";
import bgImg from "../assets/finraAtt.jpg";
import pic1 from "../assets/roles.jpg";
import pic2 from "../assets/tieImage.jpg";
import pic3 from "../assets/invest.jpg";
import claimImg from "../assets/claim.jpg";
import brokerageImg from "../assets/brokage.jpg";
import motionImg from "../assets/motion.jpg";
import meditationImg from "../assets/meditation.jpg";
import hearingImg from "../assets/hearing.jpg";
import arbImg from "../assets/arbitrator.jpg";
import awardImg from "../assets/aaa.jpg";
import attImg from "../assets/att1.png";
import {FiInfo} from "react-icons/fi";

 
// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const BRASS = '#AD8A46';

// ============================================================
// MATTERS WE HANDLE
// ============================================================

const matters = [
  "Unauthorized trading",
  "Excessive trading and churning",
  "Unsuitable investment recommendations",
  "Broker and financial adviser misconduct",
  "Broker-dealer supervisory failures",
  "Investment and securities fraud",
  "Misrepresentation and omission",
  "Violations of FINRA rules",
  "Selling away and undisclosed outside securities activity",
  "Breaches of fiduciary or other applicable duties",
  "Investor losses arising from improper account management",
];

// ============================================================
// SERVICES
// ============================================================

const services = [
  {
    title: "Evaluating a Potential Claim",
    image: pic2,
    icon: FiSearch,
    description:
      "We evaluate the circumstances surrounding investment transactions, account activity, documentation, applicable rules, and potential defenses before a claim proceeds.",
  },

  {
    title: "Reviewing Investment Records",
    image: pic1,
    icon: FiFileText,
    description:
      "We carefully review account statements, transaction history, recommendations, communications, and other evidence to identify potential misconduct.",
  },

  {
    title: "Strategic Arbitration Representation",
    image: pic3,
    icon: FiBriefcase,
    description:
      "We help investors navigate pleadings, discovery, motions, arbitrator selection, settlement negotiations, hearings, and other stages of FINRA arbitration.",
  },
];

// ============================================================
// ARBITRATION PROCESS
// ============================================================

const processSteps = [
  {
    number: "01",
    title: "Filing a Statement of Claim",
    icon: FiFileText,
    image: claimImg,
    text:
      "The arbitration process generally begins with the filing of a Statement of Claim. The claim sets out the relevant facts, legal allegations, and relief being requested. A well-prepared Statement of Claim can establish the foundation for the entire proceeding. It should clearly identify the conduct at issue, explain how the investor was affected, and present the supporting facts and documentation in a coherent manner. Because procedural requirements can affect the presentation and viability of a claim, investors should consider obtaining legal advice before filing.",
  },

  {
    number: "02",
    title: "Responding to the Brokerage Firm",
    icon: FiBriefcase,
    image: brokerageImg,
    text:
      "After a claim is filed, the responding brokerage firm and other respondents generally have an opportunity to submit an answer addressing the allegations. The response may raise factual and legal defenses, dispute the investor's interpretation of events, or challenge the claims on procedural grounds. Understanding these defenses and responding appropriately is an important part of effective arbitration representation.",
  },

  {
    number: "03",
    title: "Arbitrator Selection",
    icon: FiUsers,
    image: arbImg,
    text:
      "Arbitrator selection is another significant component of FINRA arbitration. FINRA maintains a roster of arbitrators with varying professional backgrounds and experience. The parties participate in the process of reviewing, ranking, and challenging potential arbitrators before the panel is appointed. Because arbitrators ultimately evaluate the evidence and arguments presented by the parties, careful consideration of the panel-selection process can be an important part of case strategy.",
  },

  {
    number: "04",
    title: "Motions and Procedural Issues",
    icon: FiBriefcase,
    image: motionImg,
    text:
      "FINRA arbitration has its own procedures governing motions, including circumstances in which a claim may be challenged before the evidentiary hearing. FINRA generally limits motions seeking dismissal of an entire claim before the claimant has presented the case, subject to specific exceptions under the Customer Code. Eligibility requirements can also affect whether a claim may proceed. These issues make it important to evaluate potential procedural defenses at the earliest stage of a case.",
  },

  {
    number: "05",
    title: "Mediation and Settlement",
    icon: FiCheckCircle,
    image: meditationImg,
    text:
      "Not every securities dispute needs to proceed through a full arbitration hearing. Depending on the circumstances, mediation or settlement negotiations may provide an opportunity to resolve the dispute without completing the entire arbitration process. FINRA provides mediation services as an alternative dispute-resolution option for eligible disputes. Mediation is generally voluntary and gives the parties an opportunity to work toward a negotiated resolution with the assistance of a neutral mediator. Our attorneys evaluate settlement opportunities throughout the life of a case while keeping the client's objectives and legal position in focus.",
  },

  {
    number: "06",
    title: "The Arbitration Hearing",
    icon: FiCheckCircle,
    image: hearingImg,
    text:
      "If a matter proceeds to hearing, the parties present their evidence and legal arguments to the arbitrator or arbitration panel. This may involve documentary evidence, witness testimony, expert evidence where appropriate, and examination of witnesses. FINRA arbitration differs in important respects from traditional courtroom litigation. The rules governing evidence, discovery, procedure, and presentation are specialized, and the arbitrators play a central role in determining the outcome. Thorough preparation is therefore essential. Counsel must understand the documents, anticipate opposing arguments, prepare witnesses, and present the facts in a clear and persuasive manner.",
  },

  {
    number: "07",
    title: "The Arbitration Award",
    icon: FiCheckCircle,
    image: awardImg,
    text:
      "At the conclusion of the proceeding, the arbitrator or panel issues an award resolving the dispute. FINRA describes arbitration awards as final and binding, subject to limited circumstances in which a party may seek judicial review or other relief under applicable law. Because the opportunities to challenge an arbitration award are limited, careful preparation before and during the arbitration is critical.",
  },
];

// ============================================================
// DISCOVERY DOCUMENTS
// ============================================================

const discoveryDocuments = [
  "Account-opening documents",
  "Account statements",
  "Trade confirmations",
  "Transaction histories",
  "Investment recommendations",
  "Communications with brokers and advisers",
  "Emails and correspondence",
  "Financial records",
  "Internal brokerage records",
  "Compliance and supervisory materials",
  "Documents relating to customer complaints or disciplinary history",
];

// ============================================================
// FINRA PAGE
// ============================================================

const Finra = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-gray-900">
      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="relative min-h-[430px] overflow-hidden bg-[#111827] sm:min-h-[480px]">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="FINRA and securities attorneys"
            className="h-full w-full object-cover object-center grayscale opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>

        <Navbar />

       <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full min-h-[450px] px-6 lg:px-10 flex flex-col justify-end pb-14 lg:pb-20">
               
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="font-serif text-5xl sm:text-6xl md:text-[3.6rem] font-black text-white tracking-tight drop-shadow-2xl leading-[0.95]"
                >
                  FINRA & Securities Attorneys
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

    {/* =====================================================
    INTRODUCTION
===================================================== */}

<section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">

  {/* Subtle background accent */}

  <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full border-[45px] border-brand-yellow/5 sm:h-96 sm:w-96" />


  <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-80px",
      }}
      variants={fadeUp}
      className="w-full"
    >

    
      {/* =================================================
          MAIN HEADING
      ================================================= */}

      <h2 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight text-[#171717] sm:text-4xl lg:text-[3rem]">
        Illinois FINRA & Securities Attorneys
      </h2>


      {/* =================================================
          GOLD DIVIDER
      ================================================= */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "65px",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="mt-6 h-[2px] bg-brand-yellow"
      />


      {/* =================================================
          SUBHEADING
      ================================================= */}

      <motion.p
        initial={{
          opacity: 0,
          y: 15,
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
          delay: 0.25,
        }}
        className="mt-6 max-w-4xl text-lg font-bold leading-8 text-gray-900 sm:text-xl"
      >
        Protecting Investors in Complex Securities Disputes
      </motion.p>


      {/* =================================================
          BODY CONTENT
      ================================================= */}

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
          duration: 0.7,
          delay: 0.35,
        }}
        className="mt-7 w-full space-y-5 text-justify text-[14px] leading-7 text-gray-700 sm:text-[15px] sm:leading-8"
      >

        <p>
          Investment-related disputes can be difficult to understand and
          even more challenging to resolve. When an investor believes that
          a broker, financial adviser, or brokerage firm has acted improperly,
          determining what happened, identifying the applicable legal and
          regulatory protections, and pursuing an appropriate remedy can
          require careful legal analysis.
        </p>


        <p>
          At Guardian Property Law Group, we represent investors in
          disputes involving brokerage firms, financial professionals,
          and securities transactions. Our approach begins with a thorough
          review of the circumstances surrounding the investment, including
          account records, trading activity, communications, financial
          statements, and other relevant documentation.
        </p>


        <p>
          Where appropriate, we conduct a detailed analysis of investment
          activity to identify potential misconduct, excessive trading,
          unauthorized transactions, unsuitable recommendations,
          inadequate supervision, or other violations of applicable
          securities laws and regulatory requirements.
        </p>

      </motion.div>


      {/* =================================================
          BOTTOM ACCENT
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
          delay: 0.55,
        }}
        className="mt-8 flex items-center gap-3"
      >
      </motion.div>

    </motion.div>

  </div>

</section>

      {/* =====================================================
          MATTERS WE HANDLE
      ===================================================== */}

      <section className="bg-[#f5f5f3] py-16 sm:py-20 lg:py-10">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-10 max-w-3xl"
          >
           

            <h2 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
              Our Attorneys Handle Matters Involving
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {matters.map((matter, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -3,
                }}
                className="group flex min-h-[68px] items-start gap-4 border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-brand-yellow hover:shadow-md"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-brand-yellow text-white">
                  <FiCheckCircle className="text-sm" />
                </span>

                <span className="text-sm leading-6 text-gray-700">
                  {matter}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 max-w-5xl text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8"
          >
            Financial professionals and brokerage firms have legal and
            regulatory obligations to their customers. When those obligations
            are not met, investors may have legal options for seeking relief.
            Our attorneys evaluate the facts of each matter and develop a
            strategy designed to protect the client's interests and pursue an
            appropriate resolution.
          </motion.p>
        </div>
      </section>

{/* =====================================================
    REGULATORY PROTECTIONS
===================================================== */}

<section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

  {/* Subtle background decoration */}

  <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full border-[35px] border-brand-yellow/5 sm:h-96 sm:w-96" />


  <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">


    {/* =================================================
        HEADER
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="grid grid-cols-1 items-end gap-7 border-b border-gray-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
    >

      {/* Heading */}

      <div>

        <h2 className="max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-[#171717] sm:text-4xl lg:text-[2.9rem]">
          Regulatory Protections for{" "}
          <span className="text-brand-yellow">
            Illinois Investors
          </span>
        </h2>

      </div>


      {/* Introduction */}

      <div className="lg:border-l lg:border-gray-200 lg:pl-10">

        <p className="max-w-2xl text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
          Investors in Illinois benefit from a combination of state and
          federal securities laws, regulatory oversight, and
          investor-protection mechanisms. These safeguards are intended to
          promote transparency, deter misconduct, and provide avenues for
          addressing improper conduct in the securities industry.
        </p>

      </div>

    </motion.div>



    {/* =================================================
        REGULATORY INFORMATION
    ================================================= */}

    <div className="mt-10 overflow-hidden border border-gray-200 bg-white">


      {/* =================================================
          ROW 01
      ================================================= */}

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
        }}
        className="grid grid-cols-1 bg-[#f7f7f5] lg:grid-cols-[90px_300px_1fr]"
      >

        {/* Number */}

        <div className="flex items-center border-b border-gray-200 px-6 py-4 lg:border-b-0 lg:border-r lg:px-7">

          <span className="text-xs font-black tracking-[0.18em] text-brand-yellow">
            01
          </span>

        </div>


        {/* Title */}

        <div className="border-b border-gray-200 px-6 py-5 lg:border-b-0 lg:border-r lg:px-7 lg:py-7">

          <h3 className="text-lg font-bold leading-tight text-[#171717] sm:text-xl">
            Illinois Securities Regulators
          </h3>

          <div className="mt-3 h-[2px] w-8 bg-brand-yellow" />

        </div>


        {/* Content */}

        <div className="px-6 py-6 lg:px-8 lg:py-7">

          <p className="text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
            Illinois securities regulation provides oversight of securities
            activities conducted within the state. State regulators play an
            important role in supervising securities professionals,
            enforcing applicable securities laws, investigating potential
            misconduct, and educating investors about financial risks and
            their legal protections.
          </p>

        </div>

      </motion.div>



      {/* =================================================
          ROW 02
      ================================================= */}

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
          delay: 0.08,
        }}
        className="group grid grid-cols-1 border-t border-gray-200 transition-colors duration-300 hover:bg-[#fafaf9] lg:grid-cols-[90px_300px_1fr]"
      >

        {/* Number */}

        <div className="flex items-center border-b border-gray-200 px-6 py-4 lg:border-b-0 lg:border-r lg:px-7">

          <span className="text-xs font-black tracking-[0.18em] text-gray-400 transition-colors duration-300 group-hover:text-brand-yellow">
            02
          </span>

        </div>


        {/* Title */}

        <div className="border-b border-gray-200 px-6 py-5 lg:border-b-0 lg:border-r lg:px-7 lg:py-7">

          <h3 className="text-lg font-bold leading-tight text-[#171717] sm:text-xl">
            Illinois Attorney General — Consumer Protection
          </h3>

          <div className="mt-3 h-[2px] w-0 bg-brand-yellow transition-all duration-300 group-hover:w-8" />

        </div>


        {/* Content */}

        <div className="px-6 py-6 lg:px-8 lg:py-7">

          <p className="text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
            The Illinois Attorney General's Consumer Protection Division
            addresses deceptive and unfair practices affecting Illinois
            consumers. Depending on the circumstances, securities-related
            misconduct may also implicate broader consumer-protection laws
            and enforcement mechanisms.
          </p>

        </div>

      </motion.div>



      {/* =================================================
          ROW 03
      ================================================= */}

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
          delay: 0.16,
        }}
        className="group grid grid-cols-1 border-t border-gray-200 transition-colors duration-300 hover:bg-[#fafaf9] lg:grid-cols-[90px_300px_1fr]"
      >

        {/* Number */}

        <div className="flex items-center border-b border-gray-200 px-6 py-4 lg:border-b-0 lg:border-r lg:px-7">

          <span className="text-xs font-black tracking-[0.18em] text-gray-400 transition-colors duration-300 group-hover:text-brand-yellow">
            03
          </span>

        </div>


        {/* Title */}

        <div className="border-b border-gray-200 px-6 py-5 lg:border-b-0 lg:border-r lg:px-7 lg:py-7">

          <h3 className="text-lg font-bold leading-tight text-[#171717] sm:text-xl">
            FINRA and the SEC
          </h3>

          <div className="mt-3 h-[2px] w-0 bg-brand-yellow transition-all duration-300 group-hover:w-8" />

        </div>


        {/* Content */}

        <div className="px-6 py-6 lg:px-8 lg:py-7">

          <div className="space-y-4 text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">

            <p>
              At the federal and industry levels, the Financial Industry
              Regulatory Authority (FINRA) and the U.S. Securities and
              Exchange Commission (SEC) play important roles in regulating
              the securities industry and protecting investors.
            </p>

            <p>
              FINRA oversees member brokerage firms and registered
              representatives and operates a dispute-resolution forum for
              eligible securities-related disputes. Investors can also use
              FINRA's BrokerCheck resources to research information
              concerning brokers and brokerage firms.
            </p>

            <p>
              The SEC administers and enforces federal securities laws and
              works to promote fair and orderly securities markets while
              protecting investors.
            </p>

          </div>

        </div>

      </motion.div>



      {/* =================================================
          ROW 04
      ================================================= */}

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
          delay: 0.24,
        }}
        className="group grid grid-cols-1 border-t border-gray-200 transition-colors duration-300 hover:bg-[#fafaf9] lg:grid-cols-[90px_300px_1fr]"
      >

        {/* Number */}

        <div className="flex items-center border-b border-gray-200 px-6 py-4 lg:border-b-0 lg:border-r lg:px-7">

          <span className="text-xs font-black tracking-[0.18em] text-gray-400 transition-colors duration-300 group-hover:text-brand-yellow">
            04
          </span>

        </div>


        {/* Title */}

        <div className="border-b border-gray-200 px-6 py-5 lg:border-b-0 lg:border-r lg:px-7 lg:py-7">

          <h3 className="text-lg font-bold leading-tight text-[#171717] sm:text-xl">
            Illinois Securities Laws
          </h3>

          <div className="mt-3 h-[2px] w-0 bg-brand-yellow transition-all duration-300 group-hover:w-8" />

        </div>


        {/* Content */}

        <div className="px-6 py-6 lg:px-8 lg:py-7">

          <div className="space-y-4 text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">

            <p>
              Illinois securities laws establish requirements governing
              securities transactions and prohibit various forms of
              fraudulent and deceptive conduct. These laws provide an
              important framework for protecting investors and maintaining
              confidence in the financial markets.
            </p>

            <p>
              Regulatory investigations and enforcement proceedings,
              however, are not necessarily designed to provide an
              individual investor with a complete financial recovery.
              FINRA itself notes that regulatory action does not guarantee
              that an investor will receive compensation or recover lost
              funds.
            </p>

            <p>
              For that reason, investors who believe they have suffered
              losses because of broker or brokerage-firm misconduct may
              need to consider separate legal remedies, including arbitration
              or litigation where appropriate.
            </p>

          </div>

        </div>

      </motion.div>

    </div>


   
  </div>

</section>


      {/* =====================================================
          WHY EXPERIENCE MATTERS
      ===================================================== */}
{/* 
      <section className="bg-[#111827] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-12 max-w-3xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-brand-yellow" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-yellow sm:text-xs">
                Securities Arbitration
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              Why Experience in Securities Arbitration Matters
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-gray-400 sm:text-[15px] sm:leading-8">
              FINRA arbitration operates under a specialized set of procedural
              rules that differ from traditional courtroom litigation.
              Understanding those procedures can be critical to properly
              presenting a client's claims.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                  }}
                  className="group overflow-hidden bg-white"
                >
                  <div className="relative h-[210px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center bg-brand-yellow text-white">
                      <Icon className="text-lg" />
                    </div>
                  </div>

                  <div className="border-b-4 border-brand-yellow p-6">
                    <h3 className="text-lg font-bold leading-tight text-[#171717]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section> */}
{/* =====================================================
    EVALUATING A CLAIM (REDESIGNED)
===================================================== */}
<section className="relative overflow-hidden bg-[#f5f5f3] py-20 lg:py-28">

  {/* =================================================
      BACKGROUND ACCENTS
  ================================================= */}
  {/* Retained your favorite background with the subtle ring, just positioned smoothly */}
  <div className="pointer-events-none absolute -right-24 top-[-80px] h-72 w-72 rounded-full border-[45px] border-brand-yellow/10 sm:h-96 sm:w-96" />
  
  {/* Added a subtle secondary accent for balance */}
  <div className="pointer-events-none absolute -left-32 bottom-20 h-64 w-64 rounded-full border-[30px] border-brand-yellow/5 sm:h-80 sm:w-80" />

  <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">
    
    {/* =================================================
        1. INTRO: EVALUATING A CLAIM
    ================================================= */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 border-b border-gray-200 pb-16"
    >
      {/* Left Column: Heading */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-brand-yellow" />
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-500 sm:text-xs">
            Case Evaluation
          </span>
        </div>
        <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-[#171717] sm:text-4xl lg:text-[2.75rem]">
          Evaluating a Potential <br className="hidden lg:block" />
          <span className="text-brand-yellow">FINRA</span> Arbitration Claim
        </h2>
      </div>

      {/* Right Column: Paragraphs */}
      <div className="lg:col-span-7 space-y-6 text-[15px] leading-relaxed text-gray-600 sm:text-[16px] lg:border-l lg:border-gray-200 lg:pl-12">
        <p className="font-bold text-gray-900 text-lg">
          A securities arbitration claim begins with understanding exactly what occurred and whether the available evidence supports a legally viable claim.
        </p>
        <p>
          Brokerage firms and their representatives frequently have experienced counsel defending investor claims. Building a strong case therefore requires more than simply identifying an investment loss. An attorney must examine the circumstances surrounding the transactions, the conduct of the financial professional, the applicable rules and agreements, the documentation supporting the claim, and any defenses that may be raised.
        </p>
        <p>
          At Guardian Property Law Group, we carefully evaluate potential claims and help clients understand their legal options before proceeding.
        </p>
      </div>
    </motion.div>

    {/* =================================================
        2. MIDDLE: WHY EXPERIENCE MATTERS & BULLETS
    ================================================= */}
    <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
      
      {/* Left Column: Context */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-5 lg:sticky lg:top-32"
      >
        <h3 className="text-2xl font-bold leading-tight text-[#171717] sm:text-3xl mb-6">
          Why Experience in Securities Arbitration Matters
        </h3>
        <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 sm:text-[16px]">
          <p>
            FINRA arbitration operates under a specialized set of procedural rules that differ from traditional courtroom litigation. The process involves specific requirements concerning pleadings, arbitrator selection, discovery, motions, prehearing proceedings, and the presentation of evidence.
          </p>
          <p>
            An attorney who understands these procedures can help ensure that a client's claims are properly presented and that important procedural and evidentiary issues are addressed throughout the case.
          </p>
        </div>
      </motion.div>

      {/* Right Column: Elevated Bullet List Container */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100"
      >
        <h4 className="text-[14px] font-bold uppercase tracking-[0.2em] text-brand-yellow mb-8 border-b border-gray-100 pb-4">
          Our representation may involve:
        </h4>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
          {[
            "Evaluating potential securities claims",
            "Reviewing investment and account records",
            "Identifying potential broker misconduct",
            "Preparing and filing arbitration claims",
            "Responding to defenses raised by brokerage firms",
            "Managing discovery and document requests",
            "Evaluating and challenging discovery responses",
            "Participating in motions and prehearing proceedings",
            "Selecting and evaluating arbitrators",
            "Preparing witnesses and documentary evidence",
            "Negotiating settlements",
            "Representing clients at arbitration hearings"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-yellow shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[14px] sm:text-[15px] text-gray-700 leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

    </div>

    {/* =================================================
        3. FOOTER: PROTECT YOUR INTERESTS
    ================================================= */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="mt-20 overflow-hidden rounded-2xl bg-[#171717] shadow-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:items-stretch">
        
        {/* Icon Block */}
        <div className="flex h-full min-h-[120px] items-center justify-center bg-brand-yellow px-10 md:border-r md:border-black/10">
          <svg className="w-12 h-12 text-white" fill="red" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        {/* Content Block */}
        <div className="px-8 py-10 sm:px-12">
          <p className="text-[15px] font-bold uppercase tracking-[0.2em] text-white mb-2">
            Protect Your Investment Interests
          </p>
          <h3 className="text-2xl font-bold text-white sm:text-3xl mb-4">
            Understand Your Rights Before Moving Forward
          </h3>
          <div className="max-w-4xl space-y-4 text-[14px] leading-relaxed text-gray-300 sm:text-[15px]">
            <p>
              When substantial financial interests are involved, understanding your legal rights is essential. If you believe that a broker, investment adviser, or brokerage firm mishandled your account or provided inappropriate investment advice, an attorney can help determine whether you may have a viable claim.
            </p>
            <p>
              At Guardian Property Law Group, we provide focused legal representation for investors facing complex securities disputes. We take the time to understand each client's circumstances, investigate the available evidence, and develop a legal strategy tailored to the facts of the matter.
            </p>
          </div>
        </div>

      </div>
    </motion.div>

  </div>
</section>
     {/* =====================================================
    ARBITRATION PROCESS
===================================================== */}

<section className="relative overflow-hidden bg-[#f5f5f3] py-16 sm:py-20 lg:py-24">

  {/* =================================================
      BACKGROUND DECORATION
  ================================================= */}

  <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[45px] border-brand-yellow/5 sm:h-[420px] sm:w-[420px]" />

  <div className="pointer-events-none absolute -left-24 bottom-[-140px] h-[300px] w-[300px] rounded-full border border-gray-300/40" />


  <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">


    {/* =================================================
        SECTION INTRO
    ================================================= */}

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
        margin: "-80px",
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-5xl"
    >

      {/* Label */}

      <div className="mb-5 flex items-center gap-3">

        <span className="h-[2px] w-10 bg-brand-yellow" />

        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-500 sm:text-xs">
         FINRA Dispute-Resolution Process
        </span>

      </div>


      {/* Heading */}

      <h2 className="max-w-4xl text-3xl font-black leading-[1.05] tracking-tight text-[#171717] sm:text-4xl lg:text-[1.5rem]">
        Understanding the FINRA Dispute-Resolution Process
      </h2>


      {/* Divider */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "65px",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="mt-6 h-[2px] bg-brand-yellow"
      />


      {/* Intro paragraphs */}

      <div className="mt-7 max-w-6xl space-y-5 text-justify text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">

        <p>
          FINRA arbitration provides an alternative forum for resolving
          eligible disputes involving investors, brokerage firms, and
          associated persons. FINRA's Customer Code establishes the
          procedures governing customer arbitrations, including requirements
          concerning claims, answers, discovery, hearings, and awards.
        </p>


        <p>
          For many brokerage customers, arbitration requirements may arise
          from agreements entered into when opening or maintaining an
          investment account. The enforceability and scope of any arbitration
          provision depend on the circumstances and applicable law, making
          early legal review important.
        </p>

      </div>

    </motion.div>



    {/* =================================================
        PROCESS CARDS
    ================================================= */}

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-70px",
      }}
      className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >

      {processSteps.map((step, index) => {

        const Icon = step.icon;

        return (

          <motion.article
            key={step.number}
            variants={fadeUp}
            whileHover={{
              y: -8,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              group
              relative
              overflow-hidden
              bg-white
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
              transition-shadow
              duration-300
              hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)]
            "
          >

            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="relative h-[220px] overflow-hidden sm:h-[240px]">

              <motion.img
                src={step.image}
                alt={step.title}
                initial={{
                  scale: 1.05,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="h-full w-full object-cover"
              />


              {/* Dark overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


              {/* Gold edge */}

              <div className="absolute left-0 top-0 h-full w-[3px] bg-brand-yellow" />


              {/* Number

              <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-brand-yellow text-[10px] font-black tracking-[0.12em] text-white shadow-lg">
                {step.number}
              </div> */}


              {/* Icon

              <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/30 text-brand-yellow backdrop-blur-sm transition-all duration-300 group-hover:bg-brand-yellow group-hover:text-white">

                <Icon className="text-lg" />

              </div> */}


              {/* Image title */}

              <div className="absolute bottom-5 left-5 right-20">

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                  FINRA Process
                </p>

              </div>

            </div>



            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="relative flex flex-col p-6 sm:p-7">

              {/* Top hover line */}

              <div className="absolute left-0 top-0 h-[3px] w-0 bg-brand-yellow transition-all duration-500 group-hover:w-full" />


              <h3 className="text-xl font-black leading-tight tracking-tight text-[#171717]">
                {step.title}
              </h3>


              <p className="mt-4 text-justify text-sm leading-7 text-gray-600 sm:text-[15px]">
                {step.text}
              </p>


              {/* Bottom indicator

              <div className="mt-7 flex items-center justify-between">

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
                  Stage {step.number}
                </span>


                <span className="h-[2px] w-8 bg-gray-200 transition-all duration-300 group-hover:w-14 group-hover:bg-brand-yellow" />

              </div> */}

            </div>

          </motion.article>

        );

      })}

    </motion.div>



    {/* =================================================
        PROCESS NOTE
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
        delay: 0.25,
      }}
      className="mt-8 flex flex-col gap-4 border-l-4 border-red-800 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-7"
    >

      {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#171717] text-brand-yellow">

        <FiInfo className="text-xl" />

      </div> */}


      <p className="text-sm leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
        Because FINRA arbitration involves specialized procedures concerning
        claims, discovery, arbitrator selection, motions, hearings, and
        awards, understanding each stage of the process can be important when
        preparing and presenting an investor's case.
      </p>

    </motion.div>

  </div>

</section>

      {/* =====================================================
          DISCOVERY
      ===================================================== */}

      <section className="bg-[#f5f5f3] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <div className="mb-5 flex items-center text-justify gap-3">
              <span className="h-[2px] w-10 bg-brand-yellow" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-500 sm:text-xs">
                Evidence & Discovery
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#171717] sm:text-4xl">
              Discovery in FINRA Arbitration
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
Discovery allows the parties to obtain documents and information relevant to their 
claims and defenses. FINRA's Customer Code and Discovery Guide establish procedures for exchanging 
information and requesting additional documents.

            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {discoveryDocuments.map((document, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  x: 4,
                }}
                className="flex items-start gap-3 bg-white p-4 shadow-sm transition-all duration-300"
              >
                <FiFileText className="mt-0.5 shrink-0 text-brand-yellow" />

                <span className="text-sm leading-6 text-gray-700">
                  {document}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
 <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">

    {/* Discovery content */}

    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

      {/* Left content */}
      <div>
        {/* heading + intro */}
      </div>


      {/* Right cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

        {/* cards */}

      </div>

    </div>


    {/* Discovery disputes paragraph */}
    <p className="mt-8 w-full max-w-6xl text-[14px] leading-7 text-gray-600 sm:text-base sm:leading-8">
      Discovery disputes can arise when a party believes that relevant
      information has not been produced. Depending on the circumstances,
      an attorney may seek additional discovery or ask the arbitrators to
      compel production.
    </p>
   
    <p className="mt-1 w-full max-w-6xl text-[14px] leading-7 text-gray-600 sm:text-base sm:leading-8">
     Effective discovery requires knowing what information is relevant, 
     what documents should be requested, and how to present the request within FINRA's procedural framework.
    </p>

  </div>
      </section>


        {/* =====================================================
          FIRM EXPERIENCE
      ===================================================== */}

     <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

  {/* =====================================================
      BACKGROUND DECORATION
  ===================================================== */}

  {/* Large partial ring — top right */}
  <div
    className="
      pointer-events-none
      absolute
      -right-[90px]
      -top-[150px]
      h-[330px]
      w-[330px]
      rounded-full
      border-[34px]
      border-[#dfe3e5]
      sm:-right-[120px]
      sm:-top-[180px]
      sm:h-[420px]
      sm:w-[420px]
      sm:border-[40px]
      lg:-right-[145px]
      lg:-top-[220px]
      lg:h-[520px]
      lg:w-[520px]
      lg:border-[52px]
    "
  />

  {/* Inner ring */}
  <div
    className="
      pointer-events-none
      absolute
      -right-[35px]
      -top-[95px]
      h-[220px]
      w-[220px]
      rounded-full
      border-[18px]
      border-[#eef0f1]
      sm:-right-[55px]
      sm:-top-[120px]
      sm:h-[290px]
      sm:w-[290px]
      sm:border-[22px]
      lg:-right-[75px]
      lg:-top-[145px]
      lg:h-[360px]
      lg:w-[360px]
      lg:border-[28px]
    "
  />

  {/* Very subtle bottom-left shape */}
  <div
    className="
      pointer-events-none
      absolute
      -bottom-[180px]
      -left-[120px]
      h-[320px]
      w-[320px]
      rounded-full
      border
      border-gray-300/30
    "
  />


  {/* =====================================================
      MAIN CONTENT
  ===================================================== */}

  <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-12">


    {/* =====================================================
        CONTENT
    ===================================================== */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeLeft}
      className="relative z-10"
    >

      <div className="mb-5 flex items-center gap-3">

        <span className="h-[2px] w-10 bg-brand-yellow" />

        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-500 sm:text-xs">
          Experienced Representation
        </span>

      </div>


      <h2 className="text-3xl font-black leading-tight tracking-tight text-[#171717] sm:text-3xl">
        Experienced Representation for Securities Disputes
      </h2>


      <div className="mt-7 space-y-6 text-[14px] leading-7 text-justify text-gray-700 sm:text-[15px] sm:leading-8">

        <p>
          Securities disputes can involve complex financial records,
          regulatory requirements, contractual provisions, and specialized
          arbitration procedures. Investors should not have to navigate
          these issues without knowledgeable legal guidance.
        </p>


        <p>
          At Guardian Property Law Group, our attorneys represent
          investors in FINRA arbitration and securities-related disputes
          involving broker misconduct, unsuitable investments,
          unauthorized transactions, excessive trading, investment fraud,
          supervisory failures, and other forms of alleged securities
          wrongdoing.
        </p>


        <p>
          We approach every case with careful preparation, strategic
          analysis, and a commitment to protecting our clients' legal and
          financial interests.
        </p>

      </div>

    </motion.div>



{/* =====================================================
    ATTORNEY IMAGE / CONSULTATION PANEL
===================================================== */}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  variants={fadeRight}
  className="
    relative
    min-h-[430px]
    overflow-hidden
    bg-[#111827]
    sm:min-h-[470px]
    lg:min-h-[400px]
  "
>

  {/* =====================================================
      YELLOW LEFT ACCENT
  ===================================================== */}

  <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-[3px] bg-brand-yellow" />


  {/* =====================================================
      ATTORNEY IMAGE
      Adjust the image using:
      h-[...]
      translate-x-[...]
      translate-y-[...]
  ===================================================== */}

  <motion.div
    initial={{
      opacity: 0,
      x: 40,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      pointer-events-none
      absolute
      bottom-0
      right-0
      z-10
      flex
      h-full
      w-[45%]
      items-end
      justify-end
    "
  >

    <img
      src={attImg}
      alt="FINRA securities attorney"
      className="
        h-[96%]
        w-auto
        max-w-none
        translate-x-[0px]
        translate-y-[0px]
        object-contain
        object-bottom
        sm:h-[100%]
        lg:h-[90%]
      "
    />

  </motion.div>


  {/* =====================================================
      BOTTOM GRADIENT
  ===================================================== */}

  <div
    className="
      pointer-events-none
      absolute
      bottom-0
      left-0
      right-0
      z-20
      h-24
      bg-gradient-to-t
      from-[#111827]
      via-[#111827]/40
      to-transparent
    "
  />


  {/* =====================================================
      TEXT + BUTTON
  ===================================================== */}

  <div
    className="
      relative
      z-40
      flex
      min-h-[430px]
      w-full
      items-start
      px-7
      py-7
      sm:min-h-[470px]
      sm:px-10
      sm:py-10
      lg:min-h-[400px]
      lg:px-12
      lg:py-12
      xl:px-14
    "
  >

    <div
      className="
        w-[62%]
        max-w-[560px]
        sm:w-[60%]
        lg:w-[58%]
        xl:w-[56%]
      "
    >

      {/* =================================================
          TEXT
      ================================================= */}

      <motion.p
        initial={{
          opacity: 0,
          x: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.15,
        }}
        className="
          text-justify
          text-[14px]
          leading-7
          text-white
          sm:text-[15px]
          sm:leading-8
        "
      >
        If you believe you have suffered losses because of misconduct by a
        broker, investment adviser, or brokerage firm, contact Guardian
        Property Law Group to discuss your circumstances and determine
        whether legal representation may be appropriate.
      </motion.p>


      {/* =================================================
          BUTTON
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="mt-7"
      >

        <Link
          to="/ContactUs"
          className="
            group
            inline-flex
            cursor-pointer
            items-center
            gap-3
            border
            border-brand-yellow
            bg-brand-yellow
            px-6
            py-3.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-white
            no-underline
            transition-all
            duration-300
            hover:border-white
            hover:bg-transparent
            hover:text-white
            sm:px-7
            sm:py-4
            sm:text-xs
          "
        >

          <span>
            Discuss Your Securities Matter
          </span>

          <FiArrowRight
            className="
              text-base
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </Link>

      </motion.div>

    </div>

  </div>

</motion.div>

  </div>

</section>
     
      {/* =====================================================
          CONTACT + FOOTER
      ===================================================== */}

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Finra;
