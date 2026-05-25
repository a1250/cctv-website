"use client";

const WA_URL =
  "https://wa.me/972543454955?text=Hi,%20I'm%20interested%20in%20a%20luxury%20integration%20project.";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "rgba(0,0,0,0.60)",
        border: "0.5px solid rgba(222,194,155,0.30)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(222,194,155,0.08) inset",
        textDecoration: "none",
        transition: "transform 0.3s cubic-bezier(.2,.7,.2,1), box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      className="wa-float-btn"
    >
      {/* Ping ring */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          border: "1px solid rgba(222,194,155,0.22)",
          animation: "waPing 2.4s cubic-bezier(0,0,0.2,1) infinite",
          pointerEvents: "none",
        }}
      />

      {/* WhatsApp SVG */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
          fill="#dec29b"
        />
        <path
          d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.052 21.5a.5.5 0 00.608.61l4.42-1.355A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 01-4.076-1.12l-.292-.174-3.03.928.965-2.944-.19-.303A7.96 7.96 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
          fill="rgba(222,194,155,0.70)"
        />
      </svg>

      <style>{`
        .wa-float-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 12px 40px rgba(0,0,0,0.65), 0 0 24px rgba(222,194,155,0.18), 0 0 0 1px rgba(222,194,155,0.14) inset !important;
          border-color: rgba(222,194,155,0.55) !important;
        }
        @keyframes waPing {
          0%   { transform: scale(1);    opacity: 0.7; }
          70%  { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @media (max-width: 480px) {
          .wa-float-btn { bottom: 20px !important; right: 20px !important; width: 50px !important; height: 50px !important; }
        }
      `}</style>
    </a>
  );
}
