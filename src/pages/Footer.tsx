import logo from "../assets/edubuklogo.png";
import social2 from "../assets/Social/social2.png";
import social3 from "../assets/Social/social3.png";
import social4 from "../assets/Social/social4.png";
import social5 from "../assets/Social/social5.png";
import social6 from "../assets/Social/social6.png";
import { Mail, MapPin, Phone, FileText } from "lucide-react";

// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="flex flex-col bg-gradient-to-br from-[#031A2F] to-[#010922] text-white sm:px-4 gap-4 border-t border-cyan-400 pt-10 px-6 md:px-20"
      data-aos="fade-up"
    >
      {/* Top Section */}
      <div className="flex flex-wrap justify-start sm:justify-between gap-6 border-b border-white/10 pb-8">
        <img
          src={logo}
          alt="logo"
          className="md:w-[200px] md:h-[200px] w-[152px] h-[152px]"
        />
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-xl text-cyan-400 uppercase">
            Contact Us:
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Mail /> Email: support@edubukeseal.org
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Phone /> Phone: +91 9250411261
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col gap-4 sm:pl-6">
            <div className="font-semibold text-xl text-cyan-400 uppercase">
              Legals:
            </div>
            <a
            href="#"
              // to="/terms-and-conditions"
              className="flex items-center gap-2 text-white/70 hover:text-cyan-300"
            >
              <FileText /> Terms & Conditions
            </a>
            <a
            href="#"
              // to="/cancellation-policy"
              className="flex items-center gap-2 text-white/70 hover:text-cyan-300"
            >
              <FileText /> Cancellation Policy
            </a>
          </div>

          <div className="flex flex-col gap-4 sm:pl-6">
            <a
            href="#"
              // to="/refund-policy"
              className="flex items-center gap-2 text-white/70 hover:text-cyan-300"
            >
              <FileText /> Refund Policy
            </a>
            <a
            href="#"
              // to="/privacy-policy"
              className="flex items-center gap-2 text-white/70 hover:text-cyan-300"
            >
              <FileText /> Privacy Policy
            </a>
            <a
            href="#"
              // to="/contact-us"
              className="flex items-center gap-2 text-white/70 hover:text-cyan-300"
            >
              <Phone /> Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pl-6 sm:pl-6">
          <div className="font-semibold text-xl text-cyan-400 uppercase">
            Our Offices:
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin /> Hyderabad and Lucknow, India
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <MapPin /> Dubai and RAK, UAE
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center md:justify-between items-center flex-wrap-reverse py-6 gap-4">
        <p className="text-white/50 text-center w-full sm:w-auto border-t border-white/10 pt-3 sm:border-none sm:pt-0">
          © 2025 Edubuk | All Rights Reserved
        </p>
        <div className="flex items-center gap-3">
          <p className="text-white font-semibold">Follow us on:</p>
          <a href="https://www.facebook.com/edubuk.trst/" target="_blank" rel="noreferrer">
            <img src={social2} alt="facebook" className="w-5 h-5 hover:opacity-80" />
          </a>
          <a href="https://www.instagram.com/edubuk_/" target="_blank" rel="noreferrer">
            <img src={social3} alt="instagram" className="w-5 h-5 hover:opacity-80" />
          </a>
          <a href="https://www.linkedin.com/company/edubuk-ai-web3/" target="_blank" rel="noreferrer">
            <img src={social4} alt="linkedin" className="w-5 h-5 hover:opacity-80" />
          </a>
          <a href="https://x.com/edubuktrust" target="_blank" rel="noreferrer">
            <img src={social5} alt="twitter" className="w-5 h-5 hover:opacity-80" />
          </a>
          <a href="https://www.youtube.com/channel/UC4g4MH4F_JTbd1tqNS5pq1g/videos" target="_blank" rel="noreferrer">
            <img src={social6} alt="youtube" className="w-5 h-5 hover:opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
