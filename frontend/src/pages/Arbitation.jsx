import React from 'react';
import { motion } from 'framer-motion'; 
import bannerImg from '../assets/Arbitration1.jpg';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import pic1 from '../assets/aaa.jpg';
import pic2 from '../assets/finra.jpg';
import pic3 from '../assets/JAMS.jpg';
import whatPic from '../assets/What.jpg';
import lawPic from '../assets/dispute.jpg';
import whoPic from '../assets/Who.jpg';
import tieImage from '../assets/tieimage.jpg';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Arbitration = () => {
  const services = [
    {
      title: "American Arbitration Association",
      image: pic1,
      description: "Provides a forum to resolve many types of disputes through several different sets of arbitration rules.",
    },
    {
      title: "FINRA Arbitration",
      image: pic2,
      description: "FINRA Dispute Resolution provides investors with a forum to file complaints against brokerage firms and financial advisers.",
    },
    {
      title: "Judicial Arbitration/Mediation Services (JAMS)",
      image: pic3,
      description: "JAMS is one of the most popular arbitration forums where a company may require a consumer to file their case.",
    },
  ];

  const CARD_HEIGHT = "550px";

    const bannerVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO BANNER --- */}
      <header className="relative w-full min-h-[300px] md:min-h-[100px] bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Stoltmann Law Attorneys" 
            className="w-full h-full object-cover object-[center_top] grayscale opacity-90"
          />
        </div>

        <Navbar />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full min-h-[500px] px-6 lg:px-10 flex flex-col justify-end pb-12 lg:pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-[4rem] font-black text-white tracking-tight drop-shadow-2xl mt-20"
          >
            Arbitration
          </motion.h1>
        </div>
      </header>

      {/*Arbitration Process*/}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="p-2 md:p-6 lg:p-1">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              Arbitration Process
            </motion.h2>

            <div className="space-y-3 text-gray-600 leading-relaxed text-base text-justify sm:text-2xl md:text-[17px]">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Although most business in the securities industry is completed without a problem, disputes and controversies will occasionally arise. Such disputes and controversies can be resolved by impartial arbitration at one of the organizations listed in the Services Directory. Arbitrations are conducted in accordance with the Uniform Code of Arbitration (Uniform Code) as developed by the Securities Industry Conference on Arbitration and the rules of the sponsoring organization where the claim is filed.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                There are some differences among the rules of the sponsoring organizations, such as, who may serve as public arbitrators, the availability of prior awards, and whether your name will be made publicly available. Any questions regarding arbitration may be addressed to the Directors of Arbitration or their staff at the sponsoring organizations.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                In addition to initiating an arbitration, investors may file their complaints with the appropriate regulatory authorities, such as the{" "}
                <a href="#" className="text-amber-500 font-medium hover:text-amber-600 transition-colors duration-300">
                  Securities and Exchange Commission
                </a>
                , state securities commissions, or one of the self-regulatory organizations listed in the Services Directory, when they believe there has been fraud or that other investors may be at risk. The regulatory agencies may then investigate the complaint and, if warranted, censure, fine, or suspend a wrongdoer.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
              >
                This information is designed to assist prospective parties and their attorneys by explaining arbitration procedures and is not designed to give legal advice to any party or to anyone who contemplates use of these procedures. The procedures were developed for parties who represent themselves in an arbitration proceeding as well as those represented by counsel. The information here explains the procedures set forth in the rules and answers questions regarding them but is not an interpretation of, or a substitute for, the rules. We recommend that prospective parties carefully read the rules.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES CARDS SECTION --- */}
      <section className="bg-[#f3f3f3] cursor-pointer py-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Responsive Grid Setup */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    // Stagger the animations based on the index
                    transition: { duration: 0.7, delay: index * 0.2 }, 
                  },
                }}
                whileHover={{ y: -10 }}
                className="group overflow-hidden bg-white rounded-br-[50px] shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                style={{ height: CARD_HEIGHT }}
              >
                {/* Image */}
                <div className="h-72 overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="bg-[#f6bc2f] p-10 flex flex-col flex-1">
                  <h3 className="text-[20px] font-bold text-black mb-6 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-black/85 leading-relaxed text-[16px] flex-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Arbitration?*/}
       <section className="bg-[#FDFDFD] py-16 overflow-hidden w-full">
      
      {/* 2. Replaced max-w-[1440px] mx-auto with w-full to stretch edge-to-edge */}
      <div className="w-full flex flex-col lg:flex-row items-center">

        {/* Left Side: Image with Yellow Top Bar and Curved Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative lg:pr-10"
        >
          <div className="relative w-full shadow-2xl rounded-br-[6rem] lg:rounded-br-[3rem] overflow-hidden">
            {/* The Thick Yellow Top Bar */}
            <div className="w-full h-6 bg-brand-yellow relative z-10"></div>
            
            {/* Image Wrapper with Red Overlay */}
            <div className="relative">
              {/* The Image */}
              <img 
                src={whatPic} 
                alt="Arbitration Process" 
                className="w-full h-[400px] sm:h-[650px] object-cover"
              />
              
              {/* Reddish Color Overlay */}
              <div className="absolute inset-0 bg-red-400/20 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 mt-16 lg:mt-0"
        >
          <h2 className="text-4xl sm:text-[2.5rem] font-black text-gray-900 mb-6 tracking-tight leading-tight">
          What is Arbitration?
          </h2>
          
          <p className="text-gray-500 text-[1rem] leading-relaxed mb-10 text-justify max-w-xl">
 Arbitration is a method of having a dispute between two or more parties resolved by impartial persons who are knowledgeable in the areas in controversy. Those persons are called arbitrators. Arbitration of broker/dealer disputes has long been used as an alternative to the courts because it is a prompt and inexpensive means of resolving complicated issues. There are certain laws governing the conduct of an arbitration proceeding that must be considered by those planning to use arbitration to resolve the dispute. Most importantly, perhaps, is the fact that an arbitration award is final and binding, subject to review by a court only on a very limited basis. Parties should recognize, too, that in choosing arbitration as a means of resolving a dispute, they generally give up their right to pursue the matter through the courts.
          </p>
            <Link to="/ContactUs" className="w-[250px] block no-underline">
          <button className="bg-brand-yellow text-gray-600 font-bold py-3.5 px-8 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition duration-300 text-sm tracking-wide">
           CONTACT US TODAY
          </button>
            </Link>
        </motion.div>

      </div>
    </section>

    {/*What Disputes are Eligible for Arbitration? */}
      <section className="relative py-15 px-6 md:px-12 lg:px-20 bg-gray-100">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={lawPic} 
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
            className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight"
          >
            What Disputes are Eligible for Arbitration?
          </motion.h2>

          <div className="space-y-3 text-white leading-relaxed text-sm md:text-[16px] text-justify">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
    In considering whether to initiate arbitration, it is important to keep in mind that, generally, a public customer has a right to require a broker/dealer to submit for arbitration only disputes relating to or arising out of the business activities of the broker/dealer. 
           </motion.p>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
   When deciding where to file your claim, you should determine which self-regulatory organization (SRO) supervises the markets where the transaction occurred or the securities are listed. The Uniform Code provides that an SRO may, with the consent of the claimant, refer a case to the appropriate forum where the transaction occurred or the securities are listed.
            </motion.p>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
 An additional factor to be noted is that a controversy is not eligible for submission to arbitration if six or more years have elapsed from the date of the event giving rise to the dispute. The arbitrators also may dismiss a claim barred by shorter applicable state or federal statutes of limitations. If there is a question about the statute of limitations, you should consult an attorney.
            </motion.p>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
  Even after a customer has signed the agreement to arbitrate, the customer may request either the sponsoring organization or the arbitrators to permit that customer to proceed with his or her claim in court. The customer should be aware, however, that in most cases the sponsoring organization and the arbitrators will retain jurisdiction and proceed with the arbitration.
            </motion.p>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} viewport={{ once: true }}>
 A newly adopted section of the Uniform Code states that a claim submitted as a class action shall not be eligible for arbitration. The rule also sets forth the circumstances where a claim encompassed by a putative or certified class action may or may not be eligible to be filed in arbitration. For further guidance you should refer to the rule and discuss its application to a particular case with the staff of the SRO where you intend to file your claim.
            </motion.p>
          </div>
        </motion.div>
      </section>

{/* Who are the Arbitrators */}
      <section className="bg-white py-16 overflow-hidden w-full">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center">

        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:pl-24 lg:pr-16 mt-16 lg:mt-0"
        >
          <h2 className="text-4xl sm:text-[2.5rem] font-black text-gray-900 mb-6 tracking-tight leading-tight">
      Who are the Arbitrators
          </h2>
          
          <p className="text-gray-800 text-[1rem] leading-relaxed text-justify mb-10 max-w-xl">
 Arbitrators are impartial persons who are knowledgeable in the areas in controversy. Each sponsoring organization maintains a roster of individuals whose professional qualifications and experience qualify them for service as arbitrators. The arbitrators are not employees of the sponsoring organization and they, not the sponsoring organization, will decide your dispute. The arbitrators do, however, receive an honorarium from the SROs.          
 </p>

 <p className="text-gray-800 text-[1rem] leading-relaxed mb-10 text-justify max-w-xl">
    The Director of Arbitration will appoint a panel, usually consisting of one or three arbitrators. Unless a customer elects otherwise, the majority of the members of such panels are individuals referred to as “public arbitrators” who are neither associated with nor employed by a broker/dealer or securities industry organization.
 </p>

 <p className="text-gray-800 text-[1rem] leading-relaxed mb-10 text-justify max-w-xl">
The Director of Arbitration will inform the parties of the names and business affiliations of the selected arbitrators, their employment histories for the last 10 years, as well as any conflict information disclosed pursuant to the Uniform Code. Some parties are interested in previous awards issued by prospective arbitrators. Each sponsoring organization has developed procedures to make available information on public customer awards issued since May 1989. </p>



        </motion.div>

        {/* Right Side: Image with Yellow Top Bar and Curved Bottom Left */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative lg:pl-10"
        >
         
         <div className="relative w-full rounded-bl-[6rem] lg:rounded-bl-[3rem] overflow-hidden">
  
  {/* The Thick Yellow Top Bar - Stays relative z-10 to sit on top of the image container */}
  <div className="w-full h-6 bg-brand-yellow relative z-10"></div>
  
  {/* 1. Wrapper for Image and Overlay (relative so absolute overlay fits perfectly) */}
  <div className="relative">
    <img 
      src={whoPic} 
      alt="Who are the Arbitrators" 
      className="w-full h-[400px] sm:h-[800px] object-cover"
    />

    {/* 2. The Reddish Tint Overlay */}
    <div className="absolute inset-0 bg-red-800/20 mix-blend-multiply pointer-events-none"></div>
  </div>
  
</div>
        </motion.div>

      </div>
    </section>


 {/*Can I be Represented by an Attorney?*/}
      <section className="relative w-full">
        <motion.div 
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex flex-col justify-center overflow-hidden min-h-[400px] py-16 lg:py-24"
        >
          {/* Background Image and Overlays */}
          <div className="absolute inset-0 z-0">
            <img 
              src={tieImage} 
              alt="Stoltmann Law Offices"
              className="w-full h-full object-cover object-[center_top] grayscale opacity-80"
            />
            {/* White gradients to blend the image softly */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-white/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex flex-col justify-center h-full max-w-8xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold  text-black mb-6 sm:mb-8 leading-tight tracking-tight">
     Can I be Represented by an Attorney?
            </h2>
            
            <p className="text-gray-800 text-[17px] text-base leading-relaxed mb-8  text-left md:text-justify">
  Parties have an absolute right to be represented by an attorney and may do so at any stage of the arbitration. Parties should be aware that, even if they do not elect to be represented by counsel, the other party may have an attorney, and they can assume that broker/dealers will be represented by an attorney.          
  </p>
      
            <p className="text-gray-800 text-[17px] text-base leading-relaxed mb-8  text-left md:text-justify">
 Any party represented by counsel should notify the Director of Arbitration of the counsel’s name and address either in the Statement of Claim or the Statement of Answer or by a separate written notice. After such notification, communications concerning the case will be addressed to the counsel.
  </p>
      
            <p className="text-gray-800 text-[17px] text-base leading-relaxed mb-8  text-left md:text-justify">
 The sponsoring organizations cannot recommend or provide counsel in the arbitration nor can employees of that organization provide legal advice. Parties who do not have counsel and wish to be represented may want to contact the local bar association for a referral.
  </p>

            {/* Button */}
            <Link to="/ContactUs" className="w-[250px] block no-underline">
            <button className="w-full sm:w-auto self-start bg-brand-yellow text-gray-900 px-10 py-4 rounded-sm font-extrabold text-[14px] tracking-widest uppercase hover:bg-gray-800 hover:text-white cursor-pointer transition-colors duration-300 shadow-lg">
              CONTACT US TODAY
            </button>
            </Link>
          </div>
        </motion.div>
      </section>

 {/*Glossary of Terms*/}
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-2xl font-black text-black mb-10 tracking-tight"
        >
          Glossary of Terms
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10"
        >
          {/* COLUMN 1 */}
          <div className="space-y-3 ">
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800 text-[14px]">Answer</span> – A respondent's written reply to a claim.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Arbitration/Counsel or Arbitration Administrator</span> – The person at the sponsoring organization who handles administrative matters in arbitration proceedings.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Arbitrator</span> – A person chosen to decide disputes between parties.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Award</span> – The written determination of the arbitrator(s).
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Claim</span> – A demand for money or other relief.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Claimant</span> – A person making a claim.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Counsel</span> – An attorney who advises and represents a party in an arbitration.
            </motion.p>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-3">
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Counterclaim</span> – A claim against the claimant.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Cross-Claim</span> – A claim by a respondent against a co-respondent previously named by the claimant.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Filing</span> – Delivery to the Director of Arbitration of the statement of claim or other pleadings, to be kept on file as a matter of record and reference.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Panel</span> – The arbitrator(s) who decide(s) a dispute.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Party</span> – A person or broker/dealer making or responding to a claim in an arbitration proceeding.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Pleadings</span> – The claim, answer, counterclaim, and/or third-party claim and/or cross-claim filed in an arbitration.
            </motion.p>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-3">
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Respondent</span> – The person against whom a claim is made.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Service</span> – Delivery of the statement of claim or other pleadings to those parties named in the arbitration.
            </motion.p>
            <motion.p variants={itemVariants} className="text-gray-600 text-sm md:text-[14px] leading-relaxed">
              <span className="font-bold text-gray-800">Third-Party Claim</span> – A claim by the respondent against a party not already named in the proceeding.
            </motion.p>

            {/* About This Information Sub-section */}
            <motion.div variants={itemVariants} className="pt-3">
              <h3 className="text-1xl font-bold text-black mb-4 tracking-tight">
                About This Information
              </h3>
              <p className="text-gray-600 text-sm md:text-[13px] leading-relaxed">
                This information has been prepared by the Securities Industry Conference on Arbitration (SICA), a group composed of representatives of various self-regulatory organizations, the Securities Industry Association, and public members. SICA established a uniform system for the resolution of disputes involving investors and broker/dealers, which has been adopted by each of the self-regulatory organizations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>


<ContactSection />
<Footer />
    </div>


    
  );
};

export default Arbitration;