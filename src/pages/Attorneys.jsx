
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import bannerImg from "../assets/tieImage.jpg";
import joeImg from "../assets/att1.png";
import saraImg from "../assets/Sara.jpg";
import meganPic from "../assets/Megan.jpg";
import jamesPic from "../assets/James.jpg";
import davidPic from "../assets/David.jpg";

import monneyImg from "../assets/money.jpg";
import buildingImg from "../assets/building.jpg";
import metricsImg from "../assets/metrics.jpg";
import tieImage from "../assets/tieImage.jpg";


const Attorneys = () => {

  // =========================================================
  // ATTORNEY DATA
  // =========================================================
const BRASS = '#AD8A46';

  const attorneysList = [
    {
      name: "Joe Wojciechowski",
      suffix: "Attorney",
      image: joeImg,

      contact: {
        phone: "312-332-4200",
        fax: "312-332-4201",
        email: "Joe@stoltlaw.com",
        address: "161 N Clark St, 16th Floor, Chicago, Illinois 60601",
      },

      overview: [
        `Joe Wojciechowski is a licensed attorney with more than 15 years of legal experience, bringing a comprehensive background in complex litigation, client representation, legal strategy, negotiation, and law-firm leadership.`,

        `Prior to joining Guardian Property Law Group, Joe held key legal and leadership positions at reputable law firms, where he developed extensive experience managing complex legal matters and overseeing the day-to-day operations of high-performing legal practices. Throughout his career, he has represented clients in arbitration proceedings, mediation, and state and federal court matters, earning a reputation for meticulous preparation, strategic advocacy, and responsive client service.`,

        `Joe currently serves as an attorney at Guardian Property Law Group, where his practice focuses on real estate and property law. He advises and represents individuals, investors, developers, landlords, and businesses in a broad range of property-related matters, including residential and commercial real estate transactions, title review and title-related matters, contract drafting, review and negotiation, landlord-tenant matters, property disputes, land use and development issues, and real estate litigation.`,

        `Joe takes a practical, client-focused approach to every matter. He works closely with clients to understand their objectives, identify potential legal risks, and develop effective strategies designed to protect their property interests and achieve favorable outcomes.`,

        `Throughout his career, Joe has remained committed to providing responsive, results-oriented legal counsel grounded in integrity, professionalism, and attention to detail. His experience in complex litigation, negotiation, arbitration, mediation, and dispute resolution enables him to approach challenging legal matters from both a strategic and practical perspective.`,

        `At Guardian Property Law Group, Joe is dedicated to helping clients navigate complex property transactions and disputes with confidence. Whether assisting with a transaction, resolving a property-related conflict, or advocating for a client in litigation, he strives to provide clear guidance, effective representation, and solutions tailored to each client's individual needs.`,
      ],

      practiceAreas: [
        "Arbitration",
        "Investment and Securities Fraud",
        "Consumer Law",
        "Securities Law",
        "Real Estate Law",
        "Property Disputes",
        "Real Estate Litigation",
      ],

      education: [
        {
          degree: "Juris Doctor (J.D.)",
          school: "The John Marshall Law School",
          year: "2009",
        },
        {
          degree: "Bachelor of Arts (B.A.)",
          school: "Western Michigan University",
          year: "2004",
        },
      ],

      jurisdictions: [
        "State of Illinois",
        "U.S. District Court for the Northern District of Illinois",
        "U.S. District Court for the Central District of Illinois",
        "United States Tax Court",
        "U.S. Court of Appeals for the Ninth Circuit",
      ],

      memberships: [
        "PIABA — Member, Board of Directors; Chairperson, Federal Legislation Committee",
        "Chicago Bar Association — Member",
        "Association of Certified Fraud Examiners — Member",
      ],
    },
  ];


  // =========================================================
  // STAFF DATA
  // =========================================================

  const staffList = [
    {
      name: "Michelle .W.",
      role: "Partner",
      image: saraImg,
    },
    {
      name: "James Barnett",
      role: "Partner",
      image: jamesPic,
    },
    {
      name: "Megan Barry",
      role: "Partner",
      image: meganPic,
    },
    {
      name: "David Andrew",
      role: "Partner",
      image: davidPic,
    },
  ];


  // =========================================================
  // ANIMATION
  // =========================================================

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
      x: -40,
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
        duration: 0.9,
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


  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

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
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="font-serif text-5xl sm:text-6xl md:text-[4.25rem] font-black text-white tracking-tight drop-shadow-2xl leading-[0.95]"
                >
                  Attorneys
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
          ATTORNEY SECTION
      ===================================================== */}

      <main>

        <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">

          <div className="mx-auto max-w-[1380px]">

            {attorneysList.map((attorney, index) => (

              <article
                key={index}
                className="overflow-hidden border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >

                {/* =================================================
                    ATTORNEY HERO CARD
                ================================================= */}

                <div className="relative overflow-hidden bg-[#111827]">


                  {/* Background decoration */}

                  <div className="pointer-events-none absolute inset-0">

                    <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full border border-white/[0.04]" />

                    <div className="absolute right-10 top-16 h-[380px] w-[380px] rounded-full border border-brand-yellow/[0.07]" />

                    <div className="absolute right-[12%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand-yellow/[0.07] blur-[90px]" />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/95 to-[#172033]/80" />

                  </div>


                  {/* Gold bottom border */}

                  <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-brand-yellow" />


                  {/* Main layout */}

                  <div className="relative z-10 grid min-h-[560px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_480px]">


                    {/* =================================================
                        LEFT INFORMATION
                    ================================================= */}

                    <motion.div
                      variants={fadeLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      className="flex flex-col justify-center px-7 py-14 sm:px-10 md:px-14 lg:px-16 lg:py-20"
                    >

                      {/* Small heading */}

                     
                      {/* Name */}

                      <h2 className="max-w-3xl text-[2.7rem] font-medium leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[4.4rem]">
                        {attorney.name}
                      </h2>


                      {/* Title */}

                      <div className="mt-6 flex items-center gap-4">

                        <span className="h-px w-14 bg-brand-yellow sm:w-20" />

                        <span className="text-sm font-medium uppercase tracking-[0.14em] text-gray-300">
                          {attorney.suffix}
                        </span>

                      </div>


                      {/* Intro */}

                      <p className="mt-7 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                        Experienced legal counsel focused on strategic
                        representation, careful preparation, and protecting
                        the interests of every client.
                      </p>


                      {/* Contact details */}

                      <div className="mt-8 space-y-4">

                       </div>


                      {/* CTA */}

                      <div className="mt-9">

                        <Link to="/ContactUs">

                          <motion.button
                            whileHover={{
                              y: -3,
                            }}
                            whileTap={{
                              scale: 0.98,
                            }}
                            className="inline-flex items-center gap-4 border border-brand-yellow bg-brand-yellow px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer sm:px-9"
                          >
                            Contact Joe

                            <span className="text-base">
                              →
                            </span>

                          </motion.button>

                        </Link>

                      </div>

                    </motion.div>


                    {/* =================================================
                        RIGHT ATTORNEY IMAGE
                    ================================================= */}

                    <motion.div
                      variants={fadeRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      className="relative flex min-h-[430px] items-end justify-center lg:min-h-0 lg:justify-end"
                    >

                      {/* Image glow */}

                      <div className="absolute bottom-10 right-1/2 h-[340px] w-[340px] translate-x-1/2 rounded-full bg-brand-yellow/[0.10] blur-[80px] lg:right-12 lg:translate-x-0" />


                      {/* Image frame */}

                      <div className="absolute bottom-0 right-1/2 h-[390px] w-[300px] translate-x-1/2 border-x border-t border-white/[0.07] sm:h-[460px] sm:w-[360px] lg:right-8 lg:h-[500px] lg:w-[390px] lg:translate-x-0" />


                      {/* Vertical gold accent */}

                      <div className="absolute bottom-0 right-1/2 h-[70%] w-px translate-x-[180px] bg-brand-yellow/30 lg:right-8 lg:translate-x-0" />


                      {/* PNG */}

                      <img
                        src={attorney.image}
                        alt={`${attorney.name}, Attorney`}
                        className="relative z-10 max-h-[480px] w-[78%] max-w-[390px] object-contain object-bottom drop-shadow-[0_25px_45px_rgba(0,0,0,0.5)] sm:max-h-[540px] sm:w-[68%] lg:max-h-[560px] lg:w-[430px]"
                      />

                    </motion.div>

                  </div>

                </div>


                {/* =================================================
                    BIOGRAPHY
                ================================================= */}

                <section className="bg-white px-7 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20">


                    {/* Main content */}

                    <div>

                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                          amount: 0.2,
                        }}
                      >

                        <div className="mb-5 flex items-center gap-4">

                          <span className="h-[2px] w-10 bg-brand-yellow" />

                          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                            Professional Background
                          </span>

                        </div>


                        <h3 className="text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
                          Experience & Approach
                        </h3>

                      </motion.div>


                      <div className="mt-8 max-w-4xl text-justify space-y-6">

                        {attorney.overview.map((paragraph, pIndex) => (

                          <motion.p
                            key={pIndex}
                            initial={{
                              opacity: 0,
                              y: 18,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.15,
                            }}
                            transition={{
                              duration: 0.55,
                              delay: pIndex * 0.06,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-[15px] leading-[1.9] text-gray-600 sm:text-base"
                          >
                            {paragraph}
                          </motion.p>

                        ))}

                      </div>

                    </div>


                    {/* Experience summary */}

                    <motion.aside
                      variants={fadeRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                      className="h-fit border-t border-gray-200 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
                    >

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                        At a Glance
                      </p>


                      <div className="mt-7 space-y-6">

                        <div>

                          <p className="text-3xl font-semibold text-[#111827]">
                            15+
                          </p>

                          <p className="mt-1 text-sm leading-5 text-gray-500">
                            Years of legal experience
                          </p>

                        </div>


                      </div>

                    </motion.aside>

                  </div>

                </section>


                {/* =================================================
                    PROFESSIONAL DETAILS
                ================================================= */}

                <section className="border-t border-gray-200 bg-[#f7f7f5]">

                  <div className="grid grid-cols-1 md:grid-cols-2">


                    {/* =================================================
                        PRACTICE AREAS
                    ================================================= */}

                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                      className="border-b border-gray-200 p-7 sm:p-10 lg:border-r lg:p-12"
                    >

                      <div className="mb-8">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                          Legal Services
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-[#111827] sm:text-3xl">
                          Practice Areas
                        </h3>

                      </div>


                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                        {attorney.practiceAreas.map((item, i) => (

                          <motion.div
                            key={i}
                            whileHover={{
                              y: -3,
                            }}
                            className="group flex min-h-[58px] items-start gap-3 border border-gray-200 bg-white px-4 py-4 transition-all duration-300 hover:border-brand-yellow hover:shadow-md"
                          >

                            <span className="mt-0.5 text-sm font-bold text-brand-yellow">
                              →
                            </span>

                            <span className="text-sm leading-5 text-gray-700">
                              {item}
                            </span>

                          </motion.div>

                        ))}

                      </div>

                    </motion.div>


                    {/* =================================================
                        EDUCATION
                    ================================================= */}

                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.1,
                      }}
                      className="border-b border-gray-200 p-7 sm:p-10 lg:p-12"
                    >

                      <div className="mb-8">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                          Academic Background
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-[#111827] sm:text-3xl">
                          Education
                        </h3>

                      </div>


                      <div className="space-y-6">

                        {attorney.education.map((item, i) => (

                          <div
                            key={i}
                            className="relative border-l-2 border-brand-yellow pl-5"
                          >

                            <p className="text-base font-semibold text-[#111827] sm:text-lg">
                              {item.degree}
                            </p>

                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              {item.school}
                            </p>

                            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                              {item.year}
                            </p>

                          </div>

                        ))}

                      </div>

                    </motion.div>


                    {/* =================================================
                        JURISDICTIONS
                    ================================================= */}

                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                      className="border-b border-gray-200 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12"
                    >

                      <div className="mb-8">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                          Legal Admissions
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-[#111827] sm:text-3xl">
                          Jurisdictions Admitted to Practice
                        </h3>

                      </div>


                      <div className="space-y-4">

                        {attorney.jurisdictions.map((item, i) => (

                          <motion.div
                            key={i}
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay: i * 0.05,
                            }}
                            className="flex items-start gap-3"
                          >

                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />

                            <span className="text-sm leading-6 text-gray-600">
                              {item}
                            </span>

                          </motion.div>

                        ))}

                      </div>

                    </motion.div>


                    {/* =================================================
                        MEMBERSHIPS
                    ================================================= */}

                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.1,
                      }}
                      className="p-7 sm:p-10 lg:p-12"
                    >

                      <div className="mb-8">

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                          Professional Affiliations
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold text-[#111827] sm:text-3xl">
                         Professional Memberships & Leadership
                        </h3>

                      </div>


                      <div className="space-y-5">

                        {attorney.memberships.map((item, i) => (

                          <motion.div
                            key={i}
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
                              delay: i * 0.08,
                            }}
                            className="flex items-start gap-4"
                          >

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#111827] text-[10px] font-bold text-white">
                              {String(i + 1).padStart(2, "0")}
                            </span>

                            <p className="text-sm leading-6 text-gray-600">
                              {item}
                            </p>

                          </motion.div>

                        ))}

                      </div>

                    </motion.div>

                  </div>

                </section>


                {/* =================================================
                    ATTORNEY CTA
                ================================================= */}

                <motion.section
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
                    duration: 0.7,
                  }}
                  className="relative overflow-hidden bg-[#111827] px-7 py-10 sm:px-10 lg:px-16"
                >

                  <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full border border-brand-yellow/10" />

                  <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                        Schedule a Consultation
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                        Speak with Joe about your legal matter.
                      </h3>

                    </div>


                    <Link to="/ContactUs">

                      <motion.button
                        whileHover={{
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="w-full border border-brand-yellow bg-brand-yellow px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-transparent hover:text-white cursor-pointer md:w-auto"
                      >
                        Contact Our Firm
                      </motion.button>

                    </Link>

                  </div>

                </motion.section>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            STAFF
        ===================================================== */}

        <section className="bg-[#f7f7f7] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          <div className="mx-auto max-w-[1300px]">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mb-14 text-center"
            >

              <div className="mx-auto mb-5 h-[2px] w-16 bg-brand-yellow" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-yellow">
                Our Team
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#111827] sm:text-4xl md:text-5xl">
                Staff
              </h2>

            </motion.div>


            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8 lg:gap-12"
            >

              {staffList.map((staff, index) => (

                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group text-center"
                >

                  <div className="relative mx-auto mb-5 aspect-square w-full max-w-[190px] overflow-hidden rounded-full border-[5px] border-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">

                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="h-full w-full object-cover grayscale-[50%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-full bg-brand-yellow/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  </div>


                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111827] sm:text-base">
                    {staff.name}
                  </h3>


                  <p className="mt-1 text-sm font-medium text-brand-yellow sm:text-base">
                    {staff.role}
                  </p>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </section>


        {/* =====================================================
            INVESTMENT FRAUD BANNER
        ===================================================== */}

        <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

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
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative mx-auto min-h-[390px] max-w-[1380px] overflow-hidden"
          >

            <div className="absolute inset-0">

              <img
                src={bannerImg}
                alt="Chicago Investment Fraud Attorneys"
                className="h-full w-full object-cover grayscale opacity-50"
              />

              <div className="absolute inset-0 bg-[#090909]/75" />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

            </div>


            <div className="relative z-10 flex min-h-[390px] max-w-4xl flex-col justify-center px-7 py-12 sm:px-10 lg:px-14">

              <div className="mb-6 h-[2px] w-14 bg-brand-yellow" />

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-yellow">
                Investor Representation
              </p>


              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                Chicago Investment Fraud Attorneys Offering Nationwide Representation To Investors
              </h2>


              <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
                If you have suffered{" "}
                <span className="font-semibold text-brand-yellow">
                  financial losses
                </span>{" "}
                because of the negligence or fraud of your financial advisor
                or broker through unsuitable investment recommendations,
                over-concentration, churning, misrepresenting risks,
                conversion or selling away, you have legal rights and options
                to pursue recovery of those losses.
              </p>


              <Link to="/ContactUs" className="mt-8 w-fit">

                <motion.button
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="border border-brand-yellow bg-brand-yellow px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-[#111827]"
                >
                  Contact Us Today
                </motion.button>

              </Link>

            </div>

          </motion.div>

        </section>


        {/* =====================================================
            FEATURE CARDS
        ===================================================== */}

        <section className="w-full">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid grid-cols-1 md:grid-cols-3"
          >


            {/* Card 1 */}

            <motion.div
              variants={fadeUp}
              className="group relative min-h-[390px] overflow-hidden bg-brand-yellow"
            >

              <img
                src={metricsImg}
                alt="Charts"
                className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-brand-yellow/80" />


              <div className="relative z-10 flex h-full flex-col p-8 sm:p-10 lg:p-12">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Litigation
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Firms Litigated Against
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/90 sm:text-base">
                  Check out a list of all the firms we have litigated against.
                </p>


                <Link to="/ContactUs" className="mt-auto pt-8">

                  <motion.button
                    whileHover={{
                      y: -3,
                    }}
                    className="border border-white bg-[#CC0000] px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-black"
                  >
                    Learn More
                  </motion.button>

                </Link>

              </div>

            </motion.div>


            {/* Card 2 */}

            <motion.div
              variants={fadeUp}
              className="group relative min-h-[390px] overflow-hidden bg-[#f4f4f2]"
            >

              <img
                src={monneyImg}
                alt="Financial consultation"
                className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-[#f4f4f2] via-[#f4f4f2]/95 to-transparent" />


              <div className="relative z-10 flex h-full flex-col p-8 sm:p-10 lg:p-12">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
                  Client Information
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#111827] sm:text-3xl">
                  How We Are Paid
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600 sm:text-base">
                  "How will I pay my lawyer" is a common question clients ask.
                  Law firms can work on many different fee arrangements with
                  clients.
                </p>


               <Link to="/ContactUs" className="mt-auto pt-8">

                  <motion.button
                    whileHover={{
                      y: -3,
                    }}
                    className="border border-white bg-[#CC0000] px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-black"
                  >
                    Learn More
                  </motion.button>

                </Link>
              </div>

            </motion.div>


            {/* Card 3 */}

            <motion.div
              variants={fadeUp}
              className="group relative min-h-[390px] overflow-hidden bg-[#0b0b0b]"
            >

              <img
                src={buildingImg}
                alt="Courthouse"
                className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />


              <div className="relative z-10 flex h-full flex-col p-8 sm:p-10 lg:p-12">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
                  Results
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Arbitration Awards
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300 sm:text-base">
                  Check out arbitration awards. These represent only a small
                  fraction of the Awards received by our law firm.
                </p>


               <Link to="/ContactUs" className="mt-auto pt-8">

                  <motion.button
                    whileHover={{
                      y: -3,
                    }}
                    className="border border-white bg-[#CC0000] px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-black"
                  >
                    Learn More
                  </motion.button>

                </Link>

              </div>

            </motion.div>

          </motion.div>

        </section>


        {/* =====================================================
            FIRM APPROACH
        ===================================================== */}

        <section className="relative overflow-hidden">

          <div className="absolute inset-0">

            <img
              src={tieImage}
              alt="Guardian Property Law Group"
              className="h-full w-full object-cover grayscale opacity-20"
            />

            <div className="absolute inset-0 bg-white/95" />

          </div>


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
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-14 lg:py-24"
          >

            <div className="max-w-6xl">

              <div className="mb-6 h-[2px] w-14 bg-brand-yellow" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-yellow">
                Our Approach
              </p>


              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#111827] sm:text-3xl lg:text-4xl">
                Guardian Property Law Group prides itself on aggressively
                prosecuting investment fraud across the country
              </h2>


              <p className="mt-7 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                Our team of lawyers has decades of experience fighting for
                investor rights in every forum. We use a hands-on approach
                with our clients and pride ourselves on being extremely
                diligent communicators. We understand most of our clients
                have been victimized once by someone they trusted, so we
                strive to create and maintain a relationship worthy of our
                clients’ trust and confidence. If you have any issues with
                your investments, retirement accounts, IRAs, brokerage
                accounts, financial advisors, or, if you have a business
                dispute or need more general guidance with litigation, please
                contact our firm today. We offer services nationwide,
                including in Chicago, Los Angeles, New York, Seattle,
                Atlanta, Dallas, Houston, Las Vegas, Pittsburgh, San Antonio,
                Phoenix, Minneapolis, St. Louis, Indianapolis, San Francisco,
                Denver, New Orleans, and Boston.
              </p>


              <Link to="/ContactUs" className="mt-8 inline-block">

                <motion.button
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="border border-brand-yellow bg-brand-yellow px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-transparent hover:text-brand-yellow"
                >
                  Contact Us Today
                </motion.button>

              </Link>

            </div>

          </motion.div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <ContactSection />


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <Footer />

      </main>

    </div>
  );
};


export default Attorneys;
