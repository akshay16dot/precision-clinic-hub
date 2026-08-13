import parmarWordmark from "@/assets/logo-ap.png";

interface BrandLockupProps {
  inverted?: boolean;
  size?: "header" | "footer";
  className?: string;
}

const BrandLockup = ({
  inverted = false,
  size = "header",
  className = "",
}: BrandLockupProps) => {
  const isFooter = size === "footer";

  return (
    <span
      className={`inline-flex max-w-full ${
        isFooter ? "flex-col items-center gap-3 text-center" : "items-center gap-3 sm:gap-3.5"
      } ${className}`}
    >
      <img
        src="/ap-implant-mark.svg?v=13"
        alt=""
        aria-hidden="true"
        width="508"
        height="501"
        className={`shrink-0 object-contain transition-all duration-500 ${
          isFooter ? "h-20 w-20 md:h-24 md:w-24" : "h-14 w-14 sm:h-16 sm:w-16"
        }`}
        style={{
          filter: inverted
            ? "none"
            : "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(1704%) hue-rotate(178deg) brightness(88%) contrast(91%)",
        }}
      />

      <span className={`flex min-w-0 flex-col ${isFooter ? "items-center" : "items-start"}`}>
        <img
          src={parmarWordmark}
          alt=""
          aria-hidden="true"
          width="917"
          height="440"
          className={`object-contain ${isFooter ? "object-center" : "object-left"} ${
            isFooter ? "h-10 w-40 md:h-12 md:w-52" : "h-7 w-[7.75rem] sm:h-8 sm:w-[9rem]"
          }`}
          style={{
            filter: inverted
              ? "brightness(0) invert(1)"
              : "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(1704%) hue-rotate(178deg) brightness(88%) contrast(91%)",
          }}
        />
        {isFooter && (
          <span
            className={`mt-2 max-w-[17rem] whitespace-normal text-center font-body text-[8px] uppercase leading-relaxed tracking-[0.16em] md:max-w-none md:text-[9px] md:tracking-[0.2em] ${
              inverted ? "text-primary-foreground/55" : "text-charcoal-light/60"
            }`}
          >
            Prosthodontics <span aria-hidden="true">·</span> Implants <span aria-hidden="true">·</span> Aesthetic Reconstruction
          </span>
        )}
        <span className="sr-only">Parmar Prosthodontics</span>
      </span>
    </span>
  );
};

export default BrandLockup;
