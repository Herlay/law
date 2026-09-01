import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiFileText,
  FiTrendingUp,
  FiAlertTriangle,
  FiGlobe,
  FiPhone,
  
} from "react-icons/fi";

import Navbar from "../components/Navbar";

import bannerImg from "../assets/practice.jpg";
import investmentImg from "../assets/Investment.jpg";
import attorneysImg from "../assets/finra1.jpg";
import coinImg from "../assets/coinbase.png";
import cybercrimeimg from "../assets/cybercrime.jpg";
import litigationImg from "../assets/legitation.jpg";
import elderlyImg from "../assets/elderly.png";
import fraudAttorneysBack from "../assets/money.jpg";
import tieImage from "../assets/tieImage.jpg";
import introImg from "../assets/joeBanner.png";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

// ============================================================
// PRACTICE AREAS
// =====================s=======================================

const INK_DEEP = "#0C1526";
const INK = "#12203A";
const BRASS = "#AD8A46";
const BRASS_LIGHT = "#C7A968";
const CREAM = "#F7F4EC";

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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
    x: -50,
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
    x: 50,
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
      staggerChildren: 0.12,
    },
  },
};

const ICONS = {
 scale: "M12 3v18M5 8l-3 6a4 4 0 0 0 6 0l-3-6zm14 0l-3 6a4 4 0 0 0 6 0l-3-6zM5 8h4M15 8h4M9 21h6",
};

// ============================================================
// PAGE
// ============================================================

const Eyebrow = ({ children, center = false }) => (
  <div className={`mb-5 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
    <span className="h-[2px] w-9 shrink-0" style={{ backgroundColor: BRASS }} />
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
      {children}
    </span>
    {center && <span className="h-[2px] w-9 shrink-0" style={{ backgroundColor: BRASS }} />}
  </div>
);

const investorIssues = [
  "Unsuitable or inappropriate investment recommendations",
  "Misrepresentation or omission of material information",
  "Investment advisor negligence",
  "Broker or brokerage firm misconduct",
  "Unauthorized trading or account activity",
  "Failure to properly supervise investment professionals",
  "Securities and investment fraud",
  "Financial misconduct and deceptive practices",
  "Consumer fraud and unfair business practices",
  "Cryptocurrency and digital-asset fraud",
];


const PracticeAreas = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* ======================================================
          HERO
      ====================================================== */}

      <header className="relative h-[360px] sm:h-[420px] w-full overflow-hidden bg-[#111111]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            alt="Guardian Property Law Group"
            className="h-full w-full object-cover object-center grayscale opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        </div>

        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full min-h-[450px] px-6 lg:px-10 flex flex-col justify-end pb-14 lg:pb-20">
                
                 <motion.h1
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                   className="font-serif text-5xl sm:text-6xl md:text-[4.25rem] font-black text-white tracking-tight drop-shadow-2xl leading-[0.95]"
                 >
                   Practice Areas
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

     {/* ======================================================
    INTRODUCTION
====================================================== */}

<section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">

  {/* Subtle background circle */}

  <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[42px] border-brand-yellow/5 sm:h-[420px] sm:w-[420px]" />

  <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">

    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">


      {/* ==================================================
          LEFT — IMAGE
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative order-2 lg:order-1"
      >

        {/* Image frame */}

        <div className="relative overflow-hidden bg-[#111827]">

          <motion.img
            initial={{
              scale: 1.08,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.3,
              ease: "easeOut",
            }}
            src={introImg}
            alt="Investment and consumer fraud legal representation"
            className="
              h-[330px]
              w-full
              object-cover
              object-center
              sm:h-[420px]
              lg:h-[500px]
            "
          />


          {/* Image overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />


          {/* Gold accent */}

          <div className="absolute left-0 top-0 h-full w-[3px] bg-brand-yellow" />


          {/* Floating information */}

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
            className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8"
          >

            <h3 className="mt-2 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
              Experienced Legal Representation
            </h3>


            <div className="mt-4 h-[2px] w-12 bg-brand-yellow" />

          </motion.div>

        </div>


        {/* Small floating badge */}

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
            delay: 0.45,
          }}
          className="
            absolute
            -bottom-4
            right-5
            bg-white
            px-5
            py-4
            shadow-[0_12px_35px_rgba(0,0,0,0.10)]
            sm:-bottom-5
            sm:right-8
          "
        >

          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
            Guardian Property Law Group
          </p>

        </motion.div>

      </motion.div>



      {/* ==================================================
          RIGHT — CONTENT
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 0.8,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="order-1 lg:order-2"
      >

        {/* Label */}

        <div className="mb-5 flex items-center gap-3">

          <span className="h-[2px] w-10 bg-brand-yellow" />

          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-500 sm:text-xs">
            Investment & Consumer Fraud
          </span>

        </div>


        {/* Heading */}

        <h2 className="
          max-w-3xl
          text-3xl
          font-black
          leading-[1.05]
          tracking-tight
          text-[#171717]
          sm:text-4xl
          lg:text-[2.9rem]
          xl:text-[1.8rem]
        ">
          Chicago Investment & Consumer Fraud Attorneys
        </h2>


        {/* Gold divider */}

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
            delay: 0.25,
          }}
          className="mt-6 h-[2px] bg-brand-yellow"
        />


        {/* Subheading */}

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
            delay: 0.3,
          }}
          className="mt-6 max-w-3xl text-lg font-bold leading-8 text-gray-900 sm:text-xl"
        >
          Experienced Legal Representation for Investment, Securities, and
          Consumer Fraud
        </motion.p>


        {/* Content */}

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
            delay: 0.4,
          }}
          className="mt-7 max-w-3xl space-y-5 text-justify text-[14px] leading-7 text-gray-700 sm:text-[15px] sm:leading-8"
        >

          <p>
            Investment fraud and financial misconduct can have serious and
            lasting consequences. When an investment advisor, brokerage firm,
            financial professional, or other entity acts negligently, makes
            material misrepresentations, fails to disclose important
            information, or engages in fraudulent conduct, investors may
            suffer significant financial losses and uncertainty about their
            financial future.
          </p>


          <p>
            At Guardian Property Law Group, our attorneys represent
            individuals and businesses facing claims involving investment
            fraud, securities misconduct, consumer fraud, and financial
            negligence. We draw on extensive experience in litigation,
            arbitration, mediation, and dispute resolution to develop focused
            legal strategies tailored to the circumstances of each case.
          </p>


          <p>
            Our attorneys understand that investment losses are about more
            than numbers. For many clients, their investments represent years
            of planning, financial security, retirement objectives, and the
            ability to provide for themselves and their families. When that
            security is compromised by misconduct or negligence, we work
            diligently to investigate what happened, identify responsible
            parties, and pursue the legal remedies available under applicable
            law.
          </p>

        </motion.div>


      </motion.div>

    </div>

  </div>

</section>

     {/* ================= PROTECTING INVESTORS ================= */}
         <section className="bg-white py-16 sm:py-20 lg:py-24">
           <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={fadeUp}
               className="mb-12 max-w-3xl"
             >
               <Eyebrow>Investor Advocacy</Eyebrow>
               <h2 className="text-3xl sm:text-4xl font-black tracking-tight" style={{ color: INK_DEEP }}>
                 Protecting Investors and Consumers
               </h2>
               <p className="mt-4 text-[15px] sm:text-base leading-7 text-gray-600">
                 Investment and securities disputes can arise in many different
                 circumstances, including:
               </p>
             </motion.div>
   
             <motion.div
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-80px" }}
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
             >
               {investorIssues.map((item, index) => (
                 <motion.div
                   key={index}
                   variants={fadeUp}
                   className="group flex items-start gap-4 border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                   style={{ borderColor: undefined }}
                   onMouseEnter={(e) => (e.currentTarget.style.borderColor = BRASS)}
                   onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                 >
                   <span
                     className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                     style={{ backgroundColor: INK }}
                   >
                     <FiCheck className="text-sm" />
                   </span>
                   <span className="text-sm font-medium leading-6 text-gray-700">{item}</span>
                 </motion.div>
               ))}
             </motion.div>
   
             <p className="mt-10 text-[15px] sm:text-base leading-7 text-gray-600 max-w-8xl">
               Our attorneys carefully examine the facts, financial records,
               communications, investment recommendations, account activity, and
               other relevant evidence to determine whether a viable claim exists
               and what legal options may be available.
             </p>
           </div>
         </section>

      {/* ================= FINANCIAL RECOVERY ================= */}
            <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: CREAM }}>
              <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeLeft}
                >
                  <Eyebrow>Financial Recovery</Eyebrow>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight" style={{ color: INK_DEEP }}>
                    Pursuing Financial Recovery
                  </h2>
      
                  <div className="mt-7 space-y-5 text-[15px] sm:text-base leading-8 text-gray-600">
                    <p>
                      Depending on the circumstances, investors who have suffered
                      losses may be entitled to pursue various forms of legal
                      relief. In investment-related disputes, damages may be based
                      on the financial losses caused by unsuitable investments,
                      fraudulent representations, omissions, negligence,
                      unauthorized conduct, or other wrongful actions.
                    </p>
                    <p>
                      Determining the appropriate measure of damages requires a
                      careful review of the investment history and the specific
                      circumstances surrounding the transaction. Our attorneys work
                      to establish the nature and extent of the loss and pursue
                      appropriate compensation through negotiation, arbitration,
                      mediation, or litigation.
                    </p>
                  </div>
                </motion.div>
      
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeRight}
                  className="relative overflow-hidden p-8 sm:p-10 lg:p-12"
                  style={{ backgroundColor: INK_DEEP }}
                >
                  <div
                    className="absolute right-0 top-0 h-32 w-32 rounded-bl-full opacity-10"
                    style={{ backgroundColor: BRASS }}
                  />
                  <FiTrendingUp className="relative mb-8 text-4xl" style={{ color: BRASS_LIGHT }} />
                  <h3 className="relative text-2xl sm:text-3xl font-bold text-white">
                    Your Financial Interests Matter
                  </h3>
                  <p className="relative mt-5 text-sm sm:text-base leading-7 text-white/70">
                    Every investment dispute is different. Our attorneys review the
                    facts, financial history, and circumstances of each matter to
                    determine the appropriate legal strategy.
                  </p>
                  <div className="relative mt-8 h-px w-16" style={{ backgroundColor: BRASS }} />
                </motion.div>
              </div>
            </section>
            
     {/* ================= EXPERIENCED ADVOCACY ================= */}
      <section className="relative min-h-[520px] sm:min-h-[600px] overflow-hidden" style={{ backgroundColor: INK_DEEP }}>
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            src={fraudAttorneysBack}
            alt="Financial dispute attorneys"
            className="h-full w-full object-cover object-center opacity-90"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(12,21,38,0.97) 0%, rgba(12,21,38,0.85) 45%, rgba(12,21,38,0.25) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1180px] items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24 min-h-[520px] sm:min-h-[600px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeLeft}
            className="w-full max-w-2xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold leading-[1.08] tracking-tight text-white">
              Experienced Advocacy in{" "}
              <span style={{ color: BRASS_LIGHT }}>Financial Disputes</span>
            </h2>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "70px", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 h-[2px]"
              style={{ backgroundColor: BRASS }}
            />

            <div className="mt-7 space-y-6 text-[14px] sm:text-[15px] leading-7 text-white/75">
              <p>
                Financial fraud cases often involve complex transactions,
                extensive documentation, sophisticated financial products, and
                opposing parties with substantial resources. Effective
                representation requires careful investigation, strong legal
                analysis, and strategic advocacy.
              </p>
              <p>
                At Guardian Property Law Group, we approach each matter with
                attention to detail and a commitment to protecting our
                clients&rsquo; legal and financial interests. When
                appropriate, we pursue negotiated resolutions; when a matter
                cannot be resolved fairly, we are prepared to advocate for our
                clients through formal dispute-resolution proceedings or
                litigation.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Link
                to="/ContactUs"
                className="group mt-8 inline-flex items-center gap-3 px-7 py-3.5 text-xs text-white font-semibold uppercase tracking-[0.14em] transition-colors duration-300"
                style={{ backgroundColor: BRASS }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRASS_LIGHT)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRASS)}
              >
                <span>Discuss Your Case</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
    CRYPTOCURRENCY + NATIONWIDE REPRESENTATION
====================================================== */}

      <section className="relative overflow-hidden bg-[#f4f4f1] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 sm:px-10 lg:grid-cols-2 lg:gap-10 lg:px-12">
          {/* ==================================================
        CRYPTOCURRENCY / COINBASE
    ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex h-full flex-col overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          >
            {/* TOP IMAGE */}

            <div className="relative h-[230px] overflow-hidden bg-[#111111] sm:h-[250px]">
              <motion.img
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                src={coinImg}
                alt="Cryptocurrency and digital asset fraud"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

              {/* Yellow Accent */}

              <div className="absolute left-0 top-0 h-full w-1 bg-brand-yellow" />

              {/* Coinbase Logo */}

              <motion.img
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                }}
                src={coinImg}
                alt="Coinbase"
                className="absolute bottom-6 left-6 w-28 object-contain brightness-0 invert sm:w-32"
              />
            </div>

            {/* CONTENT */}

            <div className="flex flex-1 flex-col px-6 py-7 sm:px-8 sm:py-8">
              {/* Label */}

              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand-yellow" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-[10px]">
                  Digital Asset Disputes
                </span>
              </div>

              {/* Heading */}

              <h2 className="text-2xl font-extrabold leading-[1.12] tracking-tight text-[#171717] sm:text-[1.5rem]">
                Cryptocurrency &{" "}
                <span className="text-brand-yellow">
                  Coinbase-Related Fraud
                </span>
              </h2>

              {/* Divider */}

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "48px" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className="mt-5 h-[2px] bg-brand-yellow"
              />

              {/* Text */}

              <div className="mt-5 space-y-4 text-[13px] leading-6 text-gray-600 sm:text-[14px] sm:leading-7">
                <p>
                  The increasing use of cryptocurrency and digital-asset
                  platforms has created new challenges for consumers and
                  investors. Unauthorized account access, fraudulent
                  transactions, scams, compromised credentials, and other forms
                  of digital-asset misconduct can result in substantial losses.
                </p>

                <p>
                  If your Coinbase account has been compromised, accessed
                  without authorization, or affected by fraudulent activity, you
                  may have legal options depending on the circumstances.
                  Guardian Property Law Group assists clients in evaluating
                  potential claims involving cryptocurrency and digital-asset
                  losses and determining appropriate legal strategies.
                </p>

                <p>
                  Our attorneys can review the circumstances surrounding the
                  incident, assess potential liability, and advise you regarding
                  available avenues for pursuing recovery.
                </p>
              </div>

              {/* Bottom Accent */}

              <div className="mt-auto pt-7">
                <div className="h-1 w-16 bg-brand-yellow sm:w-20" />
              </div>
            </div>
          </motion.div>

          {/* ==================================================
        NATIONWIDE REPRESENTATION
    ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex h-full flex-col overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          >
            {/* TOP VISUAL PANEL */}

            <div className="relative h-[230px] overflow-hidden bg-[#111111] sm:h-[250px]">
              {/* Subtle Background */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#202020] via-[#111111] to-[#050505]" />

              {/* Large Globe */}

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <FiGlobe className="text-[150px] text-white/10 transition-all duration-700 group-hover:scale-110 group-hover:text-brand-yellow/20 sm:text-[180px]" />
              </motion.div>

              {/* Decorative Circles */}

              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                }}
                className="absolute right-[-60px] top-[-60px] h-52 w-52 rounded-full border-[25px] border-brand-yellow/10"
              />

              <div className="absolute bottom-[-70px] left-[-70px] h-48 w-48 rounded-full border-[20px] border-white/5" />

              {/* Yellow Accent */}

              <div className="absolute left-0 top-0 h-full w-1 bg-brand-yellow" />

              {/* Center Globe */}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
                className="absolute bottom-6 left-6 flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-white/30 bg-black/30 backdrop-blur-sm">
                  <FiGlobe className="text-xl text-brand-yellow" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  Nationwide Reach
                </span>
              </motion.div>
            </div>

            {/* CONTENT */}

            <div className="flex flex-1 flex-col px-6 py-7 sm:px-8 sm:py-8">
              {/* Label */}

              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-brand-yellow" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 sm:text-[10px]">
                  Our Reach
                </span>
              </div>

              {/* Heading */}

              <h2 className="text-2xl font-extrabold leading-[1.12] tracking-tight text-[#171717] sm:text-[1.7rem]">
                Nationwide{" "}
                <span className="text-brand-yellow">Representation</span>
              </h2>

              {/* Divider */}

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "48px" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className="mt-5 h-[2px] bg-brand-yellow"
              />

              {/* Main Text */}

              <div className="mt-5 space-y-4 text-[13px] leading-6 text-gray-600 sm:text-[14px] sm:leading-7">
                <p>
                  Guardian Property Law Group represents clients in investment,
                  securities, consumer, and financial fraud matters across the
                  country, subject to applicable jurisdictional requirements.
                </p>

                <p>
                  In qualifying cases, the firm may offer contingency-fee
                  representation, meaning attorney fees are generally contingent
                  upon recovery. The specific terms of representation depend on
                  the circumstances of each matter and will be explained during
                  the attorney-client engagement process.
                </p>
              </div>

              {/* Bottom Accent */}

              <div className="mt-auto pt-7">
                <div className="h-1 w-16 bg-brand-yellow sm:w-20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

 {/* ======================================================
    FINAL CTA
====================================================== */}

<section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

  {/* =================================================
      SUBTLE BACKGROUND DETAILS
  ================================================= */}

  <div className="pointer-events-none absolute inset-0">

    {/* Top horizontal line */}

    <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gray-300/70" />


    {/* Bottom horizontal line */}

    <div className="absolute bottom-0 left-1/2 h-px w-[85%] -translate-x-1/2 bg-gray-300/70" />


    {/* Existing left circle */}

    <div className="absolute left-[-100px] top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-brand-yellow/10 sm:h-[350px] sm:w-[350px]" />


    {/* =================================================
        NEW TOP-RIGHT CIRCLE
    ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        -right-[110px]
        -top-[110px]
        h-[300px]
        w-[300px]
        rounded-full
        border-[28px]
        border-brand-yellow/10

        sm:-right-[145px]
        sm:-top-[145px]
        sm:h-[390px]
        sm:w-[390px]
        sm:border-[36px]

        lg:-right-[175px]
        lg:-top-[175px]
        lg:h-[480px]
        lg:w-[480px]
        lg:border-[44px]
      "
    />


    {/* Inner ring */}

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
        duration: 1,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        -right-[30px]
        -top-[30px]
        h-[170px]
        w-[170px]
        rounded-full
        border-[10px]
        border-gray-200/60

        sm:-right-[45px]
        sm:-top-[45px]
        sm:h-[230px]
        sm:w-[230px]
        sm:border-[13px]

        lg:-right-[55px]
        lg:-top-[55px]
        lg:h-[285px]
        lg:w-[285px]
        lg:border-[16px]
      "
    />

  </div>


  {/* =====================================================
      MAIN CONTENT
  ===================================================== */}

  <div className="relative z-10 mx-auto w-full max-w-[1150px] px-6 sm:px-10 lg:px-12">

    <motion.div
      initial={{
        opacity: 0,
        y: 35,
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
      className="
        relative
        border
        border-gray-200
        bg-white
        px-7
        py-10
        text-center
        shadow-[0_15px_45px_rgba(0,0,0,0.06)]
        sm:px-10
        sm:py-14
        lg:px-16
        lg:py-16
      "
    >

      {/* =================================================
          GOLD CORNER ACCENTS
      ================================================= */}

      <div className="absolute left-0 top-0 h-16 w-px bg-brand-yellow" />

      <div className="absolute left-0 top-0 h-px w-20 bg-brand-yellow" />

      <div className="absolute bottom-0 right-0 h-16 w-px bg-brand-yellow" />

      <div className="absolute bottom-0 right-0 h-px w-20 bg-brand-yellow" />


      {/* =================================================
          TOP LABEL
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
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}
        className="flex items-center justify-center gap-3"
      >

        <span className="h-[2px] w-8 bg-brand-yellow sm:w-10" />

        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 sm:text-xs">
          Legal Consultation
        </span>

        <span className="h-[2px] w-8 bg-brand-yellow sm:w-10" />

      </motion.div>


      {/* =================================================
          ICON
      ================================================= */}

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
          duration: 0.6,
          delay: 0.2,
        }}
        className="mx-auto mt-6 flex h-14 w-14 items-center justify-center border border-brand-yellow/40 bg-[#fafaf9] text-brand-yellow"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 text-brand-yellow"
        >

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={ICONS.scale}
          />

        </svg>

      </motion.div>


      {/* =================================================
          HEADING
      ================================================= */}

      <motion.h2
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
          delay: 0.25,
        }}
        className="
          mx-auto
          mt-6
          max-w-4xl
          text-3xl
          font-black
          leading-[1.08]
          tracking-tight
          text-[#171717]
          sm:text-4xl
          md:text-5xl
          lg:text-[2rem]
        "
      >

        Speak With an{" "}

        <span className="text-brand-yellow">
          Investment Fraud Attorney
        </span>

      </motion.h2>


      {/* =================================================
          GOLD DIVIDER
      ================================================= */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "70px",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.4,
        }}
        className="mx-auto mt-7 h-[2px] bg-brand-yellow"
      />


      {/* =================================================
          DESCRIPTION
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
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
          delay: 0.45,
        }}
        className="mx-auto mt-7 max-w-3xl space-y-4 text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8"
      >

        <p>
          If you believe you have suffered financial losses because of
          investment fraud, securities misconduct, consumer fraud,
          negligence, or unauthorized financial activity, it is important
          to understand your legal rights and options.
        </p>


        <p>
          Contact Guardian Property Law Group to discuss your
          circumstances with an experienced attorney and learn whether you
          may have a claim.
        </p>

      </motion.div>


      {/* =================================================
          CTA
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
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.55,
        }}
        className="mt-8 flex justify-center"
      >

        <Link
          to="/ContactUs"
          className="
            group
            inline-flex
            items-center
            gap-4
            border
            border-brand-yellow
            bg-brand-yellow
            px-7
            py-3.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-white
            transition-all
            duration-300
            hover:border-brand-yellow
            hover:bg-transparent
            hover:text-brand-yellow
            sm:px-9
            sm:py-4
            sm:text-xs
          "
        >

          <span>
            Speak With Our Legal Team
          </span>

          <FiArrowRight
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </Link>

      </motion.div>


      {/* =================================================
          BOTTOM STATEMENT
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
          delay: 0.65,
        }}
        className="mt-10 border-t border-gray-100 pt-5"
      >

        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-[10px]">
          Guardian Property Law Group.
        </p>

      </motion.div>

    </motion.div>

  </div>

</section>

      {/* ======================================================
          CONTACT + FOOTER
      ====================================================== */}

      <ContactSection />

      <Footer />
    </div>
  );
};

export default PracticeAreas;
