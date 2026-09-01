
import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import footerImg from "../assets/foot.jpg";
import formImg from "../assets/formImage.png";


const ContactSection = () => {

  // =========================================================
  // ANIMATION
  // =========================================================

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


  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 25,
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


  return (

    <section className="relative w-full overflow-hidden bg-[#111827] pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">


      {/* =====================================================
          TOP WHITE CURVE
      ===================================================== */}

      <div className="absolute left-0 top-0 z-20 w-full overflow-hidden leading-none">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="relative block h-[55px] w-full sm:h-[75px] md:h-[100px]"
        >

          <path
            d="M0,0 L1440,0 L1440,20 Q720,120 0,20 Z"
            fill="#ffffff"
          />

        </svg>

      </div>



      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0 z-0">

        <img
          src={footerImg}
          alt="Guardian Property Law Group"
          className="h-full w-full object-cover object-center"
        />

        {/* Main dark overlay */}

        <div className="absolute inset-0 bg-[#0b1018]/80" />

        {/* Slight gold atmosphere */}

        {/* <div className="absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-brand-yellow/[0.07] blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-black/50 blur-[100px]" /> */}

      </div>



      {/* =====================================================
          DECORATIVE ELEMENTS
      ===================================================== */}

      <div className="pointer-events-none absolute right-[-160px] top-[20%] z-[1] h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

      <div className="pointer-events-none absolute right-[-80px] top-[25%] z-[1] h-[340px] w-[340px] rounded-full border border-brand-yellow/[0.06]" />



      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1450px] flex-col gap-14 px-6 sm:px-10 lg:flex-row lg:items-start lg:gap-16 lg:px-14 xl:gap-24">


        {/* =====================================================
            LEFT — FIRM INFORMATION
        ===================================================== */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="w-full lg:w-[58%]"
        >


          {/* Eyebrow */}


          {/* Main heading */}

          <h2 className="max-w-4xl text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]">

            Protecting Investors.

            <br />

            <span className="text-brand-yellow">
              Pursuing Justice.
            </span>

          </h2>



          {/* Gold divider */}

          <div className="mt-8 h-px w-full max-w-xl bg-white/10" />



          {/* =====================================================
              BODY COPY
          ===================================================== */}

          <div className="mt-9 max-w-3xl text-justify space-y-6">


            <motion.p
              variants={fadeUp}
              className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-7"
            >
              Guardian Property Law Group, P.C. is dedicated to protecting
              the rights and financial interests of investors involved in
              disputes with brokers, financial advisors, investment
              professionals, and the firms they represent. Our attorneys
              handle sophisticated investment-related lawsuits and
              arbitration matters, providing knowledgeable and strategic
              representation to clients throughout Illinois and beyond.
            </motion.p>


            <motion.p
              variants={fadeUp}
              className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-7"
            >
              Our firm was established with a clear purpose: to advocate for
              investors who have suffered financial harm as a result of
              misconduct, negligence, misrepresentation, or other improper
              conduct by trusted financial professionals. We understand that
              investment disputes can involve significant financial and
              emotional concerns, particularly when retirement savings and
              long-term financial security are at stake.
            </motion.p>


            <motion.p
              variants={fadeUp}
              className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-7"
            >
              The attorneys at Guardian Property Law Group bring substantial
              experience in investor advocacy, complex financial disputes,
              securities matters, arbitration, and litigation. We approach
              each case with careful preparation, thorough analysis, and a
              strong commitment to protecting our clients' interests.
            </motion.p>


            <motion.p
              variants={fadeUp}
              className="text-sm leading-7 text-gray-300 sm:text-base sm:leading-7"
            >
              Our focus is not simply on resolving disputes, but on
              understanding the circumstances behind each claim and pursuing
              the most appropriate legal strategy for the client. Whether
              through arbitration, negotiation, or litigation, we work
              diligently to hold responsible parties accountable and pursue
              the best possible outcome for those we represent.
            </motion.p>

          </div>



          {/* =====================================================
              CONTACT DETAILS
          ===================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="mt-10 border-t border-white/10 pt-7"
          >

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-yellow sm:text-xs">
              Speak With Our Legal Team
            </p>


            <p className="mt-3 max-w-2xl text-sm leading-7 text-white sm:text-base">
              If you believe you have suffered financial losses due to
              misconduct or improper handling of your investments, our legal
              team can help you understand your rights and available legal
              options. Contact Guardian Property Law Group to discuss
              your circumstances and learn how we may assist with your
              investment-related dispute.
            </p>


            {/* Contact links */}

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4">


              {/* <a
                href="tel:3123324200"
                className="group flex items-center gap-3 text-white transition-colors duration-300 hover:text-brand-yellow"
              >

                <span className="flex h-9 w-9 items-center justify-center border border-white/15 text-brand-yellow transition-all duration-300 group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-white">
                  ☎
                </span>

                <span className="text-sm font-semibold sm:text-base">
                  312-332-4200
                </span>

              </a> */}


              <a
                href="mailto:info@stoltlaw.com"
                className="group flex items-center gap-3 text-white transition-colors duration-300 hover:text-brand-yellow"
              >

               <span className="flex h-9 w-9 items-center justify-center border border-white/15 text-white transition-all duration-300 group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-white">
  <FiMail className="text-base" />
</span>

                <span className="break-all text-sm font-semibold sm:text-base">
                  info@gmail.com
                </span>

              </a>

            </div>

          </motion.div>

        </motion.div>



        {/* =====================================================
            RIGHT — CONTACT FORM
        ===================================================== */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="relative w-full lg:w-[42%] lg:max-w-[500px]"
        >


          {/* Gold accent behind form */}

          <div className="absolute -inset-3 -z-10 rounded-br-[4rem] bg-brand-yellow/[0.08] blur-xl" />


          {/* Form card */}

          <div className="overflow-hidden rounded-br-[3.5rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.45)]">


            {/* Form header */}

            <div className="bg-[#f7f7f5] px-6 pb-6 pt-7 sm:px-8 sm:pb-7 sm:pt-8">

              <div className="mb-3 flex items-center gap-3">

                <span className="h-[2px] w-8 bg-brand-yellow" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-yellow">
                  Get In Touch
                </span>

              </div>


              <h3 className="text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
                Speak With Our Legal Team
              </h3>


              <p className="mt-3 text-sm leading-6 text-gray-500">
                Tell us a little about your situation and our team will
                help you understand your available options.
              </p>

            </div>



            {/* Form */}

            <form className="space-y-4 px-6 pb-7 pt-6 sm:px-8 sm:pb-9">


              {/* Full name */}

              <div>

                <label
                  htmlFor="full-name"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
                >
                  Full Name
                </label>

                <input
                  id="full-name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand-yellow focus:bg-white focus:ring-1 focus:ring-brand-yellow"
                />

              </div>



              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand-yellow focus:bg-white focus:ring-1 focus:ring-brand-yellow"
                />

              </div>



              {/* Phone */}

              <div>

                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand-yellow focus:bg-white focus:ring-1 focus:ring-brand-yellow"
                />

              </div>



              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500"
                >
                  How Can We Help?
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Briefly describe your situation..."
                  className="w-full resize-none border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-brand-yellow focus:bg-white focus:ring-1 focus:ring-brand-yellow"
                />

              </div>



              {/* Submit */}

              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="flex w-full items-center justify-center gap-3 bg-brand-yellow px-6 py-4 text-xs text-white font-bold uppercase tracking-[0.17em] hover-text-brand-yellow shadow-lg transition-all duration-300 hover:bg-white hover:text-brand-yellow hover:shadow-xl sm:text-sm sm:tracking-[0.18em]"
              >

                Submit Your Inquiry

                <span className="text-base">
                  →
                </span>

              </motion.button>



              {/* Awards */}

              <div className="border-t border-gray-100 pt-4">

                <p className="mb-3 text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  Professional Recognition
                </p>

                <div className="flex w-full justify-center">

                  <img
                    src={formImg}
                    alt="Professional recognition"
                    className="max-h-[60px] w-full object-contain opacity-80"
                  />

                </div>

              </div>


              {/* Privacy note */}

              <p className="text-center text-[10px] leading-5 text-gray-400">
                Please do not include confidential or sensitive information
                in this form. Submitting this form does not create an
                attorney-client relationship.
              </p>

            </form>

          </div>

        </motion.div>

      </div>



      {/* =====================================================
          BOTTOM GOLD ACCENT
      ===================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mx-auto mt-16 h-px max-w-[1380px] origin-left bg-brand-yellow/40"
      />

    </section>
  );
};


export default ContactSection;

