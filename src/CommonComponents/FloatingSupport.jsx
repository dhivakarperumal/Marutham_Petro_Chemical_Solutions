import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import ChatBot from "./ChatBot";
import "./FloatingSupport.css";

const FloatingSupport = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname, hash } = useLocation();
  const currentRoute = hash?.startsWith("#") ? hash.slice(1) : pathname;

  const isAdmin = currentRoute === "/admin" || currentRoute.startsWith("/admin/");
  const isEmployee =
    currentRoute === "/employee" ||
    currentRoute.startsWith("/employee/") ||
    currentRoute === "/trainee" ||
    currentRoute.startsWith("/trainee/");

  // User UI pages: any page outside /admin and /employee panels (even if an admin/employee is logged in browsing the site)
  const isUserUIPage = !isAdmin && !isEmployee;

  // 1. WhatsApp, Call, and ScrollNavigator are visible on all User UI pages (including Home, About, Services, Contact, Login, etc.)
  const showUserUIWidgets = isUserUIPage;

  // Chat is intentionally hidden for this site version.
  const showChatBot = false;

  // Scroll detection for Scroll-to-Top button
  const checkScroll = useCallback(() => {
    const windowScroll =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    setShowScrollTop(windowScroll > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll, { capture: true, passive: true });
    document.addEventListener("scroll", checkScroll, { capture: true, passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll, { capture: true });
      document.removeEventListener("scroll", checkScroll, { capture: true });
    };
  }, [checkScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If neither should show on this route, render nothing
  if (!showUserUIWidgets && !showChatBot) {
    return null;
  }

  const whatsappNumber = "919597293504"; // Company WhatsApp number (+91 95972 93504)
  const phoneNumber = "+919597293504";   // Company Call line (+91 95972 93504)

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Q-Techx Solutions, I need some help!")}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {/* Floating button container – fixed to bottom right */}
      <div className="floating-support-container">
        {/* WhatsApp button - visible on all user UI pages */}
        {showUserUIWidgets && (
          <div
            className="support-item whatsapp"
            onClick={handleWhatsApp}
            title="WhatsApp (+91 95972 93504)"
          >
            <FaWhatsapp size={26} />
            <span className="tooltip">🟢 WhatsApp (+91 95972 93504)</span>
          </div>
        )}

        {/* Call button - visible on all user UI pages */}
        {showUserUIWidgets && (
          <div
            className="support-item call"
            onClick={handleCall}
            title="Call Us (+91 95972 93504)"
          >
            <Phone size={22} />
            <span className="tooltip">📞 Call (+91 95972 93504)</span>
          </div>
        )}

        {/* ScrollNavigator (Scroll-To-Top) button - placed below the Call button */}
        {showUserUIWidgets && showScrollTop && (
          <div
            className="support-item scroll-top"
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={24} strokeWidth={3} />
            <span className="tooltip">⬆ Scroll to Top</span>
          </div>
        )}

      </div>
    </>
  );
};

export default FloatingSupport;
