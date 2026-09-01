import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/insurance.jpg';
import attImg from '../assets/att1.png';
import arbitrationImg from '../assets/iul.jpg';
import paymentImg from '../assets/payment.jpg';
import insuranceImg from '../assets/insure.jpg';
import policyImg from '../assets/policy.jpg';
import retireImg from '../assets/retire.jpg';
import tieImg from '../assets/practice.jpg';
import salessImg from '../assets/saless.jpg';
import misleadImg from '../assets/mislead.jpg';
import policyStatementImg from '../assets/policyStatement.jpg';
import PolicyholderImg from '../assets/Policyholder.jpg';
import rolesImg from '../assets/roles.jpg';
import procedureImg from '../assets/procedure.jpg';
import futureImg from '../assets/future.jpg';
import disclosureImg from '../assets/disclosure.jpg';
import feeImg from '../assets/fees.jpg';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import {FiSearch, FiFileText, FiCheckCircle, FiArrowRight, FiInfo, FiShield   } from "react-icons/fi";

// ==========================================
// 1. ANIMATION VARIANTS
// ==========================================
const staggerContainer = {
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

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ==========================================
// 2. PAGE DATA (Extracted from Write-up)
// ==========================================
const presentations = [
  "Source of supplemental retirement income",
  "Tax-advantaged financial strategy",
  "Long-term wealth accumulation vehicle",
  "Alternative to certain traditional retirement or investment strategies",
  "Life insurance policy with market-linked cash-value growth",
  "Financial planning tool for estate or legacy objectives"
];

const unexpectedIssues = [
  "Higher-than-expected policy charges",
  "Increasing insurance costs",
  "Cash-value growth that differs substantially from projected illustrations",
  "Changes in credited interest or policy assumptions",
  "Limitations affecting potential index-linked returns",
  "Reduced policy values resulting from loans or withdrawals",
  "Concerns about the policy's ability to remain in force",
  "Unexpected premium requirements",
  "Material differences between projected and actual policy performance",
  "Risks or limitations that were not clearly explained at the time of purchase"
];

const BRASS = '#AD8A46';

const reviewItems = [
  "The original insurance application",
  "Policy illustrations and projections",
  "Sales presentations and marketing materials",
  "Communications with agents or advisers",
  "Premium and payment history",
  "Policy statements",
  "Fees, charges, and deductions",
  "Policy loans and withdrawals",
  "Representations concerning future performance",
  "Representations regarding retirement or income planning",
  "Disclosures provided during the sales process",
  "The suitability of the product for the policyholder's circumstances"
];

const misleadingPractices = [
  "Misrepresentation of policy benefits",
  "Failure to adequately disclose material risks",
  "Misleading illustrations or projections",
  "Misrepresentation of potential returns",
  "Inadequate explanation of policy charges",
  "Unsuitable recommendations",
  "Misrepresentation of tax treatment",
  "Failure to explain the consequences of policy loans or withdrawals",
  "Representations that the policy is guaranteed to produce a particular financial outcome",
  "Recommending a policy primarily for compensation or commission purposes"
];

const evaluatingItems = [
  {
    title: "The Original Insurance Application",
    image: insuranceImg,
  },
  {
    title: "Policy Illustrations and Projections",
    image: policyImg,
  },
  {
    title: "Sales Presentations and Marketing Materials",
    image: salessImg,
  },
  {
    title: "Communications with Agents or Advisers",
    image: rolesImg,
  },
  {
    title: "Premium and Payment History",
    image: paymentImg,
  },
  {
    title: "Policy Statements",
    image: policyStatementImg,
  },
  {
    title: "Fees, Charges, and Deductions",
    image: feeImg,
  },
  {
    title: "Policy Loans and Withdrawals",
    image: procedureImg,
  },
  {
    title: "Representations Concerning Future Performance",
    image: futureImg,
  },
  {
    title: "Representations Regarding Retirement or Income Planning",
    image: retireImg,
  },
  {
    title: "Disclosures Provided During the Sales Process",
    image: disclosureImg,
  },
  {
    title: "The Suitability of the Product for the Policyholder's Circumstances",
    image: PolicyholderImg,
  },
];

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
const Lawsuits = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-yellow selection:text-white">
      
      {/* --- HERO BANNER (Maintained exact structure as requested) --- */}
      <header className="relative w-full h-[400px] bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Guardian Property Law Group Attorneys" 
            className="w-full h-full object-cover object-[center_top] grayscale opacity-40"
          />
        </div>
        <Navbar />
       <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full min-h-[450px] px-6 lg:px-10 flex flex-col justify-end pb-14 lg:pb-20">
                     
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="font-serif text-5xl sm:text-6xl md:text-[3rem] font-black text-white tracking-tight drop-shadow-2xl leading-[0.95]"
                      >
                       Indexed Universal Life (IUL) Insurance Lawsuits
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

  {/* --- SECTION 1: INTRO & UNDERSTANDING IUL --- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        {/* Changed items-center to items-start so the text aligns nicely with the top of the image */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Text (Grouped animation to prevent missing text) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="text-3xl md:text-2xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              How Guardian Property Law Group Can Help When an IUL Policy Falls Short of Expectations
            </h2>
            <div className="w-20 h-1.5 bg-brand-yellow mb-8"></div>
            
            <h3 className="text-[1.15rem] font-bold text-gray-800 mb-4">
              When an Indexed Universal Life Policy Does Not Perform as Expected
            </h3>
            
            {/* Standard div wrapping the paragraphs so they are guaranteed to show */}
            <div className="space-y-5 text-gray-600 text-base text-justify leading-relaxed">
              <p>
                Indexed Universal Life insurance, commonly referred to as an IUL, is often presented as a flexible financial product that combines life insurance protection with the opportunity to accumulate cash value. In some sales presentations, prospective policyholders may be told that an IUL can provide retirement income, build long-term wealth, offer tax advantages, or provide market-linked growth while limiting exposure to market losses.
              </p>
            
              <p className="font-medium text-gray-800">
                For some policyholders, however, the actual performance and costs of the policy may differ significantly from what they understood when making the purchase.
              </p>

              <p>
                If you purchased an IUL after receiving representations that now appear inaccurate, incomplete, or misleading, Guardian Property Law Group can help you understand your legal options. Our attorneys represent policyholders who believe they may have been misled about the features, risks, costs, performance, or suitability of an insurance product.
              </p>
              
              <p>
                We carefully examine how the policy was presented, the representations made during the sales process, the policy documents, illustrations, disclosures, account activity, and the circumstances surrounding the purchase. Where appropriate, we investigate whether the conduct of an insurance agent, financial professional, broker, or other party may have violated applicable laws or regulatory obligations.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image with Hover Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            {/* The 'group' class enables the hover effects on child elements */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col justify-end min-h-[600px] group cursor-default">
              
              {/* Background Image */}
              <img 
                src={arbitrationImg} 
                alt="Reviewing IUL Documents" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Black Hover Overlay: Default gradient, turns to solid black/85 on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-colors duration-500 group-hover:bg-black/85"></div>
              
              {/* Text Container layered perfectly over the image */}
              <div className="relative z-10 p-6 md:p-10 flex flex-col gap-4">
                <h3 className="text-[22px] md:text-[26px] font-black text-white leading-tight transform transition-transform duration-500 group-hover:-translate-y-2">
                  Understanding Indexed Universal Life Insurance
                </h3>
                
                <div className="space-y-4 opacity-90 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-gray-200 text-sm md:text-[15px] text-justify leading-relaxed">
                    An Indexed Universal Life policy is a form of permanent life insurance that combines a death benefit with a cash-value component. The amount credited to the policy's cash value may be linked to the performance of a selected market index, subject to the specific terms, limitations, caps, participation rates, spreads, and other provisions contained in the policy.
                  </p>
                  <p className="text-gray-200 text-sm md:text-[15px] text-justify leading-relaxed">
                    Unlike directly investing in a market index, an IUL does not simply track the underlying index. The policy's actual performance depends on its contractual terms, insurance charges, administrative expenses, credited interest methodology, and other factors.
                  </p>
                  <p className="text-gray-200 text-sm md:text-[15px] text-justify leading-relaxed font-semibold">
                    The structure of these policies can be complex, and prospective policyholders may not always appreciate the distinction between illustrated performance and guaranteed policy values.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
          
        </div>
      </section>

      {/* --- SECTION 2: THE PRESENTATION VS REALITY --- */}
      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20 border-y border-gray-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* The Pitch */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-2xl md:text-2xl font-black text-gray-900 mb-6">
                How IUL Policies May Be Presented
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 mb-8">
       During the sales process, an IUL may be described as a potential:
              </motion.p>
             
       
              <div className="space-y-4">
                {presentations.map((item, index) => (
                  <motion.div key={index} variants={fadeUp} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="bg-green-100 text-green-600 p-2 rounded-full shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <p className="text-gray-700 font-medium pt-1">{item}</p>
                  </motion.div>
                ))}
              </div>
               <motion.p variants={fadeUp} className="text-gray-600 text-justify mt-4">
  <p>These descriptions may be appropriate in certain circumstances, but they must be considered in light of the specific policy terms, assumptions, risks, costs, and the individual circumstances of the purchaser.</p>
              </motion.p>
            </motion.div>

         {/* The Reality */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col h-full"
            >
              <h2 className="text-2xl md:text-2xl font-black text-gray-900 mb-4">
                When The Policy Does Not Match Expectations
              </h2>
              
              <div className="space-y-2 mb-6">
                <p className="text-gray-600 text-justify leading-relaxed">
                  Problems arise when a policyholder later discovers that the policy is not performing as anticipated or that important aspects of the product were not adequately explained.
                </p>
                <p className="text-gray-800 font-semibold text-justify">
                  For example, a policyholder may encounter:
                </p>
              </div>

              {/* Redesigned Grid: Warning Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {unexpectedIssues.map((issue, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl border border-red-100 hover:border-red-200 transition-colors duration-300"
                  >
                    <div className="text-red-500 shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-800 text-sm leading-snug font-medium">
                      {issue}
                    </p>
                  </div>
                ))}
              </div>
               
              {/* Highlight Callout Box (Pushed to bottom so columns align) */}
              <div className="mt-auto p-6 bg-brand-yellow/10 border-l-4 border-brand-yellow rounded-r-xl shadow-sm">
                <p className="text-sm text-gray-800 font-medium italic leading-relaxed text-justify">
                  An IUL policy is a contractual financial product. A disappointing result does not automatically establish misconduct. However, circumstances involving misleading representations, material omissions, or unsuitable recommendations may warrant further legal review.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* =====================================================
    EVALUATING POTENTIAL IUL MISREPRESENTATION
===================================================== */}

<section className="relative overflow-hidden bg-[#f5f5f3] py-16 sm:py-20 lg:py-24">

  {/* =================================================
      BACKGROUND
  ================================================= */}

  <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[45px] border-brand-yellow/5 sm:h-[420px] sm:w-[420px]" />

  <div className="pointer-events-none absolute -left-24 bottom-[-130px] h-[300px] w-[300px] rounded-full border border-gray-300/40" />


  <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-12">


    {/* =================================================
        HEADER
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mx-auto max-w-4xl text-center"
    >

      <div className="mb-5 flex items-center justify-center gap-3">

        <span className="h-[2px] w-10 bg-brand-yellow" />

        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-500 sm:text-xs">
          Comprehensive Case Review
        </span>

        <span className="h-[2px] w-10 bg-brand-yellow" />

      </div>


      <h2 className="text-3xl font-black leading-tight tracking-tight text-[#171717] sm:text-4xl lg:text-3xl">
        Evaluating Potential IUL Misrepresentation
      </h2>


      <p className="mx-auto mt-5 max-w-3xl text-[14px] leading-7 text-gray-600 sm:text-[15px] sm:leading-8">
        At Guardian Property Law Group, we look beyond the policy's current
        value. We examine the entire transaction to determine how the policy
        was marketed, recommended, and sold.
      </p>


      <div className="mx-auto mt-6 h-[2px] w-14 bg-brand-yellow" />

    </motion.div>



    {/* =================================================
        REVIEW CARDS
    ================================================= */}

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-60px",
      }}
      variants={{
        hidden: {},

        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >

      {evaluatingItems.map((item, index) => (

        <motion.article
          key={item.title}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },

            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          whileHover={{
            y: -6,
          }}
          className="group relative overflow-hidden bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
        >

          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="relative h-[210px] overflow-hidden">

            <motion.img
              src={item.image}
              alt={item.title}
              initial={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.07,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="h-full w-full object-cover"
            />


            {/* Image overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


            {/* Number */}
{/* 
            <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center bg-brand-yellow text-[10px] font-black text-white shadow-lg">
              {String(index + 1).padStart(2, "0")}
            </div> */}

          </div>



          {/* =================================================
              TEXT
          ================================================= */}

          <div className="relative p-6 sm:p-7">

            {/* Gold top line */}

            <div className="absolute left-0 top-0 h-[3px] w-0 bg-brand-yellow transition-all duration-500 group-hover:w-full" />


            <div className="flex items-start gap-4">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f5f5f3] text-brand-yellow transition-all duration-300 group-hover:bg-brand-yellow group-hover:text-white">

                <FiFileText className="text-sm" />

              </div>


              <h3 className="text-sm font-bold leading-6 text-gray-800 sm:text-[15px]">
                {item.title}
              </h3>

            </div>

          </div>

        </motion.article>

      ))}

    </motion.div>



    {/* =================================================
        CLOSING NOTE
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
      className="relative mt-10 overflow-hidden bg-[#171717]"
    >

      {/* Decorative ring */}

      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[32px] border-brand-yellow/10" />


      <div className="relative z-10 flex flex-col gap-5 px-6 py-7 sm:px-8 sm:py-8 md:flex-row md:items-center lg:px-10">

        <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand-yellow text-white">

          <FiCheckCircle className="text-xl" />

        </div>


        <div>

                    <p className="mt-2 max-w-5xl text-sm leading-7 text-gray-300 sm:text-[15px] sm:leading-8">
            This comprehensive review can help identify whether the
            policyholder's expectations were based on reasonable
            representations or whether important risks and limitations may
            have been inadequately disclosed.
          </p>

        </div>

      </div>

    </motion.div>

  </div>

</section>

{/* =====================================================
    POTENTIALLY MISLEADING IUL SALES PRACTICES (Resized & Restyled)
===================================================== */}
<section className="w-full bg-white overflow-hidden">
  {/* Added a max-width wrapper so it doesn't stretch infinitely on ultrawide screens */}
  <div className="flex flex-col lg:flex-row items-stretch w-full max-w-[1600px] mx-auto">

    {/* =================================================
        LEFT COLUMN: IMAGE (RESIZED)
    ================================================= */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // Resize: Adjusted width to 45% on large screens, and min-height to 650px
      className="w-full lg:w-[45%] relative min-h-[300px] sm:min-h-[500px] lg:min-h-[300px]"
    >
      {/* Top Yellow Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-4 bg-brand-yellow z-20" />
      
      {/* Image with bottom-right rounding */}
      <img
        src={misleadImg}
        alt="Potentially Misleading IUL Sales Practices"
        className="absolute inset-0 w-full h-full object-cover lg:rounded-br-[4rem] z-0"
      />
      
      {/* Subtle dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/10 lg:rounded-br-[4rem] z-10" />
    </motion.div>

    {/* =================================================
        RIGHT COLUMN: CONTENT (RESTYLED)
    ================================================= */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      // Resize: Adjusted width to 55% on large screens for more text breathing room
      className="w-full lg:w-[55%] px-6 py-16 md:px-12 lg:py-20 lg:px-16 xl:px-24 flex flex-col justify-center bg-white"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-[1.5rem] font-black leading-[1.1] text-gray-900 mb-6 tracking-tight">
        Potentially Misleading IUL Sales Practices
      </h2>

      {/* Intro Text */}
      <p className="text-gray-500 text-base lg:text-base text-justify leading-relaxed mb-8">
        Not every unsuccessful insurance investment is the result of wrongdoing. However, concerns may arise when a financial professional or insurance representative makes representations that are inconsistent with the actual characteristics or risks of the product. Depending on the circumstances, potential issues may include:
      </p>

      {/* Restyled Scannable List (Now a 2-Column Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-10">
        {misleadingPractices.map((practice, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (index * 0.05) }}
            className="flex items-start gap-3"
          >
            <div className="mt-1 flex-shrink-0 text-brand-yellow">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700 text-sm font-medium leading-snug">
              {practice}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Important Legal Note */}
      <div className="bg-[#fcfcfc] border-l-[3px] border-gray-300 p-5 mb-10">
        <p className="text-[14px] text-gray-500 leading-relaxed italic">
          <strong className="text-gray-700 font-semibold not-italic">Important:</strong> The legal issues depend heavily on the facts of each individual transaction. Our attorneys evaluate the available evidence and applicable law before determining whether a viable claim may exist.
        </p>
      </div>

      {/* CTA Button (Squared and styled like the screenshot) */}
      <div>
        <Link to="/ContactUs" className="inline-block">
          <button className="bg-brand-yellow text-white font-bold text-[13px] cursor-pointer uppercase tracking-widest py-4 px-10 hover:bg-white hover:text-brand-yellow hover:border-[2px] hover:border-brand-yellow hover:shadow-lg duration-300">
            Contact Us Today
          </button>
        </Link>
      </div>

    </motion.div>
  </div>
</section>

      {/* =====================================================
    PROTECTING POLICYHOLDERS' INTERESTS
===================================================== */}

<section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

  {/* =================================================
      BACKGROUND DETAILS
  ================================================= */}

  <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border-[55px] border-brand-yellow/5" />

  <div className="pointer-events-none absolute -left-24 bottom-[-140px] h-[300px] w-[300px] rounded-full border border-gray-300/40" />


  <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-12">


    {/* =================================================
        MAIN LAYOUT
    ================================================= */}

    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">


      {/* =================================================
          LEFT — MAIN CONTENT
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: -40,
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
      >

        {/* Label */}

        <div className="mb-5 flex items-center gap-3">

          <span className="h-[2px] w-10 bg-brand-yellow" />

          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-gray-500 sm:text-xs">
            Policyholder Advocacy
          </span>

        </div>


        {/* Heading */}

        <h2 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.03em] text-[#171717] sm:text-5xl lg:text-[2rem]">
          Protecting{" "}
          <span className="text-brand-yellow">
            Policyholders'
          </span>{" "}
          Interests
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
            delay: 0.25,
          }}
          className="mt-7 h-[2px] bg-brand-yellow"
        />


        {/* Text */}

        <div className="mt-8 max-w-3xl space-y-6 text-justify text-[14px] leading-7 text-gray-700 sm:text-[15px] sm:leading-8">

          <p className="text-lg font-semibold leading-8 text-gray-900 sm:text-base sm:leading-9">
            When an insurance product does not perform as represented,
            policyholders may be left questioning what went wrong and
            whether they have any available remedies.
          </p>


          <p className="text-base">
            Our attorneys provide careful, fact-based legal analysis focused
            on understanding the transaction, identifying potential
            misconduct, and protecting the legal interests of policyholders.
          </p>


          <p className="text-base">
            At Guardian Property Law Group, we understand that an IUL is more
            than a financial product—it can represent an important part of a
            person's financial planning and long-term security. When concerns
            arise about how a policy was marketed or sold, obtaining
            knowledgeable legal guidance can help you make informed decisions
            about the path forward.
          </p>

        </div>

      </motion.div>



      {/* =================================================
          RIGHT — CONSULTATION PANEL
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 40,
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
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative overflow-hidden bg-[#171717]"
      >

        {/* Decorative circle */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[32px] border-brand-yellow/10" />


        {/* Gold accent */}

        <div className="absolute left-0 top-0 h-full w-[3px] bg-brand-yellow" />


        <div className="relative z-10 flex h-full flex-col justify-between px-7 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-11">


          {/* Top */}

          <div>

            <div className="flex h-12 w-12 items-center justify-center bg-brand-yellow text-white">

              <FiShield className="text-xl" />

            </div>


            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
              Legal Guidance
            </p>


            <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              When You Need to Understand What Happened
            </h3>


            <div className="mt-6 h-[2px] w-12 bg-brand-yellow" />


            <p className="mt-6 text-[14px] leading-7 text-gray-300 sm:text-[15px] sm:leading-8">
              If you believe you were misled about an indexed universal life
              policy or its potential benefits, Guardian Property Law Group
              can review the circumstances and help you understand your legal
              options.
            </p>

          </div>


          {/* Bottom CTA */}

          <div className="mt-10">

            <Link
              to="/ContactUs"
              className="group inline-flex w-full items-center justify-center gap-3 bg-brand-yellow px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-[#171717] sm:text-xs"
            >

              Discuss Your IUL Matter

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

          </div>

        </div>


        {/* Bottom accent */}

        <div className="absolute bottom-0 right-0 h-1 w-24 bg-brand-yellow sm:w-32" />

      </motion.div>

    </div>



    {/* =================================================
        CLOSING STATEMENT
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
        delay: 0.3,
      }}
      className="mt-8 border-t border-gray-200 pt-7"
    >
    </motion.div>

  </div>

</section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Lawsuits;