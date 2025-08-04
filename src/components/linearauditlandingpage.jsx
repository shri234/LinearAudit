import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FileCheck, Users, UserCheck, Archive } from "lucide-react";
import {
  ArrowRight,
  FileText,
  CheckSquare,
  CheckCircle,
  BadgeCheck,
  PackageCheck,
  ArrowDownCircle,
  Clock,
  Package,
  ArrowLeftRight,
  Coins,
  Edit,
  LineChart,
  AlignStartVertical,
  PhoneCall,
  Settings,
  HandCoins,
  FileLock,
  Check,
  TrendingDown,
  Spline,
  // LineChart,
  File,
  Pencil,
  FileDownIcon,
  FileDown,
} from "lucide-react";
import TestimonialsCarousel from "./testimonialcarouselsection";
import Footer from "./Footer";
import TopNav from "./topnav";

export default function LinearAuditLanding() {
  const navigate = useNavigate();
  // const [activeTab, setActiveTab] = useState("Registrations");

  const tabs = [
    { id: "Registrations", label: "Registrations", icon: "📝" },
    { id: "Audit & Assurance", label: "Audit & Assurance", icon: "🔍" },
    { id: "Taxation", label: "Taxation", icon: "" },
    { id: "Compliance", label: "Compliance", icon: "✅" },
    { id: "Business Advisory", label: "Business Advisory", icon: "💼" },
    { id: "Liner SBM", label: "Liner SBM", icon: "📈" },
  ];

  const services = {
    Registrations: [
      {
        icon: <FileDown className="w-8 h-8" />,
        title: "Incorporations",
        description:
          "We navigate the complexities of the incorporation process, allowing you to focus on growing your business with confidence",
        readMore: true,
      },
      {
        icon: <CheckSquare className="w-8 h-8" />,
        title: "GST Registration",
        description:
          "We navigate the complexities of the Registration process, helping your business obtain the necessary GST identification number.",
        readMore: true,
      },
      {
        icon: <BadgeCheck className="w-8 h-8" />,
        title: "Trademark",
        description:
          "This protection enhances your market presence and prevents unauthorised use of your brand, fostering trust am among customers.",
        readMore: true,
      },
      {
        icon: <PackageCheck className="w-8 h-8" />,
        title: "Essentials",
        description:
          "Registration under specialised regulatory bodied or compliance with specific requirements we ensure your business is legally sound",
        readMore: true,
      },
    ],
    "Audit & Assurance": [
      {
        icon: <Pencil className="w-8 h-8" />,
        title: "Statutory Audits",
        description:
          "Our Statutory Audits ensure compliance with laws, offering a thorough examination of financial statments for confident reporting",
        readMore: true,
      },
      {
        icon: <Edit className="w-8 h-8" />,
        title: "Internal Audits",
        description:
          "Boost control and manage risks with our streamlined internal audit service, ensuring efficient, secure business operations.",
        readMore: true,
      },
      {
        icon: <HandCoins className="w-8 h-8" />,
        title: "Process/Cost Audits",
        description:
          "Optimise Business wih our process and cost Audits for efficiency and savings, Enhancing overall performance and profitability.",
        readMore: true,
      },
      {
        icon: <File className="w-8 h-8" />,
        title: "MIS Reportings",
        description:
          "We ensure accurate and timely reports and reliable information, supporting effective decision-making at all level of your organization.",
        readMore: true,
      },
    ],
    Taxation: [
      {
        icon: <FileLock className="w-8 h-8" />,
        title: "Income Tax",
        description:
          "Our Income Tax services are designed to optimize your tax position while ensuring compliance with the ever-evolving tax regulations.",
        readMore: true,
      },
      {
        icon: <LineChart className="w-8 h-8" />,
        title: "Capital Gains",
        description:
          "Optimize capital gains tax with comprehensive expert advice on asset and investment sales, ensuring tax law compliance.",
        readMore: true,
      },
      {
        icon: <Coins className="w-8 h-8" />,
        title: "Transfer Pricing",
        description:
          "Ensure global Transfer Pricing compliance with our services, Minimize intercompany risks, adhere to international tax regulations.",
        readMore: true,
      },
      {
        icon: <Check className="w-8 h-8" />,
        title: "GST Audits",
        description:
          "Beyond compliance, our GST audit ensures accurate filings, identifies and corrects issues, and prepares your business for scrutiny.",
        readMore: true,
      },
    ],
    Compliance: [
      {
        icon: <CheckSquare className="w-8 h-8" />,
        title: "GST,TDS Returns",
        description:
          "Simplify GST compliance with our TDS Returns service. We ensure accuracy, regulatory adherence, and penalty avoidance.",
        readMore: true,
      },
      {
        icon: <ArrowLeftRight className="w-8 h-8" />,
        title: "Income Tax Returns",
        description:
          "Simplify tax filing with our Income Tax Returns service. We assist in documentation, deductions, and compliance, optimizing your tax position.",
        readMore: true,
      },
      {
        icon: <UserCheck className="w-8 h-8" />,
        title: "ROC/FEMA/RBI",
        description:
          "Navigate compliance with our ROC, FEMA, and RBI services. Ensure timely submission, keeping your business in good standing.",
        readMore: true,
      },
      {
        icon: <Archive className="w-8 h-8" />,
        title: "Annual Fillings",
        description:
          "Meet obligations with our Annual Filings service. We guide in preparing and submitting reports, ensuring legal transparency.",
        readMore: true,
      },
    ],
    "Business Advisory": [
      {
        icon: <TrendingDown className="w-8 h-8" />,
        title: "Corporate Law Advisory",
        description:
          "Navigate corporate laws confidently with our Advisory service, ensuring compliance, governance,transparency for legal standing.",
        readMore: true,
      },
      {
        icon: <Spline className="w-8 h-8" />,
        title: "Formation & Automation",
        description:
          "Optimize efficiency with Our Process Formation & Automation. Analyze, identify, and implement automation for improved productivity.",
        readMore: true,
      },
      {
        icon: <PhoneCall className="w-8 h-8" />,
        title: "ERP & Migration Support",
        description:
          "Leverage ERP with our Implementation Support & Migration Support. Ensure integration, collaboration, and better decision-making.",
        readMore: true,
      },
      {
        icon: <ArrowDownCircle className="w-8 h-8" />,
        title: "Indian Entry & Migration",
        description:
          "Explore Indian market with our Entry Strategy & Migration. Get guidance on legal, research, entry modes for a smooth transition.",
        readMore: true,
      },
    ],
    "Liner SBM": [
      {
        icon: <Settings className="w-8 h-8" />,
        title: "SB Management",
        description:
          "Full-service management for small businesses. Thrive in competition, we handle complexities, you focus on core activities.",
        readMore: true,
      },
      {
        icon: <LineChart className="w-8 h-8" />,
        title: "Linear CFO",
        description:
          "Access expert financial guidance with Linear CFO services, tailored for small businesses, driving growth and sustainability.",
        readMore: true,
      },
      {
        icon: <AlignStartVertical className="w-8 h-8" />,
        title: "Remote Bookkeeping",
        description:
          "Simplify with Linear's Remote Bookkeeping. Ensure accuracy, compliance, and real- time visibility for informed financial decisions.",
        readMore: true,
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Start-Up Consulting",
        description:
          "Our experts will guiding startup success through meticulous business planning, insightful market analysis, & strategic decision- making.",
        readMore: true,
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Registrations");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [tabs]);

  return (
    <div>
      <TopNav />
      <div className="min-h-screen">
        {/* Hero Section */}
        {/* <div className=" bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <header className="flex justify-between items-center p-6 relative z-10">
          <div className="text-white">
            <h1 className="text-xl font-bold tracking-wider">LINEARAUDIT</h1>
            <div className="text-xs opacity-80 mt-1">UNLEASHING THE TRUTH</div>
          </div>
          <button className="border border-white/30 text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors">
            Contact us
          </button>
        </header>
      </div> */}

        <div className="min-h-screen bg-[#164FBA] relative overflow-hidden">
          {/* Header */}

          {/* Main Content */}
          <main className="flex flex-col items-center justify-center min-h-[100vh] px-6 relative z-10">
            {/* Badge */}
            <div className="bg-blue-700/50 border border-blue-400/30 rounded-full px-6 py-2 mb-8">
              <span className="text-white text-sm">
                We&nbsp;&nbsp;&nbsp;&nbsp;Simplify Business Compliance
              </span>
            </div>
            {/* Main Heading */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-tight mb-6 max-w-6xl">
              Expertise You Can Trust
              <br />
              in Taxation, Auditing & Compliances
              <br />
            </h1>
            {/* Subtitle */}
            <p className="text-white/80 text-lg md:text-xl text-center max-w-3xl mb-10 leading-relaxed">
              Your trusted partner and we help businesses simplify complexity,
              <br />
              ensure compliance and unlock value
            </p>
            {/* CTA Button */}
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
              onClick={() => navigate("/contact")}
            >
              Get In Touch
            </button>

            <div className="absolute top-32 left-4 md:left-12 lg:left-20 transform -rotate-28">
              {/* Changed inline style width to Tailwind class w-1/2 for better responsiveness */}
              <img
                src="/HomeLeftPin.png"
                className="w-1/2"
                alt="Legal book icon"
              />
            </div>

            {/* Pen Icon - Top Right */}
            {/* Adjusted right positioning to use Tailwind's responsive scale */}
            <div className="absolute top-56 right-4 md:right-12 lg:right-24 transform rotate-10">
              {/* Changed inline style width to Tailwind class w-1/2 for better responsiveness */}
              <img src="/Homepinright.png" className="w-1/2" alt="Pen icon" />
            </div>

            {/* Document/Paper - Bottom Left */}
            <div className="absolute bottom-0 left-0 -rotate-3 w-1/5 sm:w-1/4 md:w-1/5 lg:w-1/6">
              <img
                src="/Homeleftbottomcorner.png"
                className="w-full h-auto"
                alt="Bottom left corner image"
              />
            </div>

            {/* Calculator/Device - Bottom Right */}
            {/* If w-80 is too small, consider w-1/4 or w-1/3 for relative sizing,
    or a larger fixed width like w-96 or w-[360px] */}
            <div className="absolute bottom-0 right-0">
              <img
                src="/Homerightbottomcorner.png"
                className="w-80 h-auto"
                alt="Bottom right corner image"
              />
            </div>
          </main>

          {/* Decorative Elements */}

          {/* Gavel/Legal Book Icon - Top Left */}
          {/* Adjusted left positioning to use Tailwind's responsive scale */}

          {/* Background Geometric Pattern (Uncomment if you want to use it) */}
          {/*
<div className="absolute inset-0 opacity-5">
    <div className="absolute top-1/4 left-1/3 w-32 h-32 border border-white rounded-full"></div>
    <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-white rotate-45"></div>
    <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded"></div>
</div>
*/}
          {/* </div> */}

          {/* About Us Section */}
          <section
            id="about-us"
            className="min-h-screen bg-gray-50 py-16 px-6 relative overflow-hidden"
          >
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-orange-500 text-sm font-semibold tracking-[0.3em] mb-8">
                  A B O U T &nbsp;&nbsp; U S
                </h2>
              </div>

              {/* Content Container */}
              <div className="relative">
                {/* Main Content */}
                <div className="text-center max-w-4xl mx-auto">
                  <p className="text-black text-xl md:text-2xl lg:text-3xl leading-relaxed mb-12 font-100">
                    Linear Audit is a management consultancy firm offering
                    services in accounting, audit, taxation, regulatory
                    compliance, and business advisory. We are committed to
                    delivering a consistent, high-quality, and high-value
                    experience in every interaction with us.
                  </p>

                  <p className="text-black text-xl md:text-2xl lg:text-3xl leading-relaxed font-100">
                    We are more than consultants — we are your trusted partners.
                    Guided by our core values of transparency, integrity, and a
                    focus on building long-term partnerships, we collaborate
                    closely with clients, offer expert guidance, design
                    innovative solutions, and deliver results with excellence.
                    Our commitment is not just in words — it's a promise you can
                    rely on.
                  </p>
                </div>

                {/* Avatar 1 - Top Right - Moved further right and up */}
                <div className="absolute top-[-58px]  lg:right-[-100px]  transform hidden sm:block">
                  <img
                    src="/aboutus_avatar-1.png"
                    style={{
                      width: "35%",
                    }}
                    alt="Avatar 1"
                  />
                </div>

                {/* Avatar 2 - Bottom Left - Moved further left and down */}
                <div className="absolute bottom-[-40px] left-[-20px] md:left-[-10px] lg:left-[20px] xl:left-[60px] transform hidden sm:block">
                  <img
                    src="/aboutus_avatar-2.png"
                    style={{
                      width: "35%",
                    }}
                    alt="Avatar 2"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Avatar Section */}
            <div className="sm:hidden flex justify-center space-x-8 mt-12">
              {/* Mobile Avatar 1 */}

              <img
                src="/aboutus_avatar-2.png"
                style={{
                  width: "35%",
                }}
                alt="Avatar 2"
              />

              <img
                src="/aboutus_avatar-1.png"
                style={{
                  width: "35%",
                }}
                alt="Avatar 1"
              />
            </div>

            {/* Mobile Avatar 2 */}
          </section>
          <section className="py-16 px-6 bg-gray-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-orange-500 text-sm font-semibold tracking-[0.3em] mb-8">
                  OUR VALUES
                </h2>
                <h3 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
                  Our identity Is built on the values we live
                </h3>
              </div>

              {/* Values Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
                {/* Transparency Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-gray-800 text-xl font-semibold">
                    Transparency
                  </h4>
                </div>

                {/* Integrity Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-gray-800 text-xl font-semibold">
                    Integrity
                  </h4>
                </div>

                {/* Long term partnership Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <UserCheck className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-gray-800 text-xl font-semibold">
                    Long term partnership
                  </h4>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Dotted border pattern */}
                <div className="absolute top-0 left-0 w-full h-2 border-t-2 border-dashed border-blue-300 opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 border-b-2 border-dashed border-blue-300 opacity-30"></div>

                {/* Background circles */}
                <div className="absolute top-20 left-10 w-24 h-24 border-2 border-gray-200 rounded-full opacity-20"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-gray-200 rounded-full opacity-20"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-gray-200 rounded-full opacity-20"></div>
                <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-gray-200 rounded-full opacity-20"></div>

                {/* Small decorative dots */}
                <div className="absolute top-32 right-1/4 w-3 h-3 bg-gray-300 rounded-full opacity-30"></div>
                <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-gray-300 rounded-full opacity-30"></div>
                <div className="absolute top-2/3 left-1/6 w-2 h-2 bg-gray-300 rounded-full opacity-30"></div>
                <div className="absolute bottom-1/4 right-1/6 w-5 h-5 bg-gray-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </section>
          <section
            id="services"
            className="py-8 px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden md:py-16 md:px-6"
          >
            <div className="max-w-7xl mx-auto">
              {/* Header Card */}
              <div className="bg-white rounded-2xl p-6 shadow-xl relative mb-4 md:p-12 md:rounded-3xl md:mb-8">
                {/* Decorative Elements (Visible on larger screens) */}
                <div className="hidden absolute top-8 left-8 md:block">
                  <img
                    src="/servicespins.png"
                    className="w-16 h-auto md:w-24"
                    alt="Service pin left"
                  />
                </div>

                <div
                  className="hidden absolute top-10 right-8 md:block"
                  style={{ transform: "rotate(90deg)" }}
                >
                  <img
                    src="/servicepins2.png"
                    className="w-16 h-auto md:w-24"
                    alt="Service pin right"
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-blue-600 text-xs font-semibold tracking-[0.3em] mb-3 md:text-sm md:mb-6">
                    WHAT WE DO
                  </h2>
                  <h3 className="text-gray-800 text-2xl font-bold leading-tight max-w-4xl mx-auto mb-6 md:text-3xl lg:text-5xl md:mb-12">
                    From Compliance to Strategy
                    <br />
                    We've got you covered
                  </h3>

                  {/* Tabs */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6 md:gap-4 md:mb-12">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 md:px-6 md:py-3 md:text-sm ${
                          activeTab === tab.id
                            ? "bg-gray-900 text-white shadow-lg"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        <span className="mr-1 md:mr-2">{tab.icon}</span>
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Services Grid */}
                  <div
                    id="services"
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8"
                  >
                    {services[activeTab].map((service, index) => (
                      <div
                        key={index}
                        className="text-left p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300 md:p-6 md:rounded-xl"
                      >
                        <div className="text-gray-700 mb-3 md:mb-4">
                          {service.icon}
                        </div>
                        <h4 className="text-gray-800 text-lg font-semibold mb-2 md:text-xl md:mb-4">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 md:mb-4">
                          {service.description}
                        </p>
                        {service.readMore && (
                          <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-700 transition-colors">
                            Read more
                            <ArrowRight className="w-3 h-3 ml-1 md:w-4 md:h-4 md:ml-2" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Founders Section */}
          <section
            id="founders"
            className="py-16 px-6 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
          >
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-10">
                <h2 className="text-orange-500 text-sm font-semibold tracking-[0.3em] mb-5">
                  FOUNDERS
                </h2>
                <h3 className="text-gray-900 text-3xl md:text-4xl font-bold mb-3">
                  Driven by minds,
                  <br />
                  Powered by values.
                </h3>
              </div>
              {/* Founders Cards */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
                {/* Founder 1 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/vishnu.png"
                    alt="R M Vishnu Kumar"
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <h4 className="text-gray-900 text-xl font-bold mb-1">
                    R M Vishnu Kumar
                  </h4>
                  <div className="text-blue-600 font-medium mb-4">Founder</div>
                  <hr className="border-gray-200 mb-4" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Expertise in accounting and taxation for organizations
                    ranging from sole proprietors to listed companies. With over
                    a decade of work experience, he has led numerous audits. His
                    accounting and taxation acumen has helped many organizations
                    establish strong process, achieve cost saving, and ensure
                    compliance. His alma mater includes Vivekananda college and
                    The Institute of Chartered Accountants of India (ICAI).
                  </p>
                  <a
                    href="https://www.linkedin.com/in/rm-vishnukumar-kumar-109b6187/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Visit LinkedIn
                  </a>
                </div>

                {/* Founder 2 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/kiruba.jpg"
                    alt="Kirubakaran B"
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <h4 className="text-gray-900 text-xl font-bold mb-1">
                    Kirubakaran B
                  </h4>
                  <div className="text-blue-600 font-medium mb-4">Founder</div>
                  <hr className="border-gray-200 mb-4" />
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    His core expertise lies in secretarial and corporate
                    compliances. He has worked with the Secretarial and Legal
                    department of the Rane Group – one of India’s Fortune 500
                    companies. Since the inception of Linear Audit, he has
                    advised many corporates, SMEs, and startups. His alma mater
                    includes Vivekananda college, Loyola college, IIM-L and The
                    Institute of Company Secretaries of India (ICSI).
                  </p>
                  <a
                    href="https://www.linkedin.com/in/kirubakaran-b-0aa321a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Visit LinkedIn
                  </a>
                </div>
              </div>
              {/* Divider Between Founders and Stats */}
              <div className="my-12 border-t border-gray-300 w-full max-w-6xl mx-auto"></div>

              {/* Stats */}
              {/* Stats Section */}
              <div className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
                {/* Background Geometric Pattern */}
                <div className="absolute inset-0">
                  {/* Geometric shapes and lines */}
                  <svg
                    className="absolute top-0 left-0 w-full h-full"
                    viewBox="0 0 1440 800"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    {/* Light blue geometric shapes */}
                    <polygon
                      points="0,100 200,50 150,200 50,180"
                      fill="rgba(59, 130, 246, 0.08)"
                    />
                    <polygon
                      points="300,0 500,80 400,150 250,100"
                      fill="rgba(59, 130, 246, 0.06)"
                    />
                    <polygon
                      points="800,50 1000,20 950,180 750,150"
                      fill="rgba(59, 130, 246, 0.08)"
                    />
                    <polygon
                      points="1200,80 1440,40 1400,220 1150,200"
                      fill="rgba(59, 130, 246, 0.06)"
                    />

                    {/* Bottom shapes */}
                    <polygon
                      points="0,600 250,550 200,750 0,800"
                      fill="rgba(59, 130, 246, 0.08)"
                    />
                    <polygon
                      points="600,650 850,600 800,800 550,800"
                      fill="rgba(59, 130, 246, 0.06)"
                    />
                    <polygon
                      points="1100,550 1440,500 1440,800 1050,800"
                      fill="rgba(59, 130, 246, 0.08)"
                    />

                    {/* Connecting lines */}
                    <line
                      x1="100"
                      y1="150"
                      x2="350"
                      y2="75"
                      stroke="rgba(59, 130, 246, 0.15)"
                      strokeWidth="2"
                    />
                    <line
                      x1="450"
                      y1="115"
                      x2="825"
                      y2="115"
                      stroke="rgba(59, 130, 246, 0.15)"
                      strokeWidth="2"
                    />
                    <line
                      x1="875"
                      y1="115"
                      x2="1175"
                      y2="140"
                      stroke="rgba(59, 130, 246, 0.15)"
                      strokeWidth="2"
                    />

                    {/* Dots */}
                    <circle
                      cx="120"
                      cy="80"
                      r="4"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="380"
                      cy="120"
                      r="3"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="650"
                      cy="90"
                      r="4"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="920"
                      cy="160"
                      r="3"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="1280"
                      cy="110"
                      r="4"
                      fill="rgba(59, 130, 246, 0.3)"
                    />

                    {/* Bottom dots */}
                    <circle
                      cx="180"
                      cy="680"
                      r="3"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="450"
                      cy="720"
                      r="4"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="720"
                      cy="650"
                      r="3"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="1050"
                      cy="700"
                      r="4"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                    <circle
                      cx="1320"
                      cy="680"
                      r="3"
                      fill="rgba(59, 130, 246, 0.3)"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Header */}
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                      Let our experties work for you
                    </h2>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
                    {/* Stat 1 */}
                    <div className="flex flex-col items-center">
                      <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-3">
                        10+
                      </div>
                      <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Year of Experience
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center">
                      <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-3">
                        25+
                      </div>
                      <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Services
                        <br />
                        Covered
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center">
                      <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-3">
                        99.98%
                      </div>
                      <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Retention
                        <br />
                        rate
                      </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex flex-col items-center">
                      <div className="text-5xl md:text-6xl font-bold text-gray-800 mb-3">
                        100%
                      </div>
                      <div className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Client satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <TestimonialsCarousel />
          <section className="bg-black py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
              {/* Text */}
              <h2 className="text-white text-3xl md:text-5xl font-light leading-snug mb-6 md:mb-0">
                Start the conversation —
                <br />
                <span className="font-bold">
                  We’re listening, and your next step begins here.
                </span>
              </h2>

              {/* Button */}
              <button className="mt-4 md:mt-0 px-6 py-3 border border-white rounded-full text-white text-lg hover:bg-white hover:text-black transition">
                Get in Touch
              </button>
            </div>

            {/* Right side subtle glow */}
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#101A3F] via-transparent to-transparent opacity-40 pointer-events-none" />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
