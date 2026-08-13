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
      className={`inline-flex items-center ${isFooter ? "gap-4 md:gap-5" : "gap-2.5 sm:gap-3"} ${className}`}
    >
      <img
        src="/splash-icon.png?v=10"
        alt=""
        aria-hidden="true"
        width="592"
        height="534"
        className={`shrink-0 object-contain transition-all duration-500 ${
          isFooter ? "h-16 w-16 md:h-[4.75rem] md:w-[4.75rem]" : "h-10 w-10 sm:h-11 sm:w-11"
        }`}
        style={{
          filter: inverted
            ? "none"
            : "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(1704%) hue-rotate(178deg) brightness(88%) contrast(91%)",
        }}
      />

      <span className="flex min-w-0 flex-col items-start">
        <span
          className={`font-display font-medium uppercase leading-none ${
            isFooter
              ? "text-[2rem] tracking-[0.2em] md:text-[2.65rem]"
              : "text-[1.35rem] tracking-[0.18em] sm:text-[1.55rem]"
          } ${inverted ? "text-primary-foreground" : "text-navy"}`}
        >
          Parmar
        </span>
        <span
          className={`mt-1 whitespace-nowrap font-body uppercase ${
            isFooter
              ? "text-[7px] tracking-[0.2em] md:text-[8px] md:tracking-[0.23em]"
              : "text-[5.5px] tracking-[0.12em] sm:text-[6px] sm:tracking-[0.15em]"
          } ${inverted ? "text-primary-foreground/55" : "text-charcoal-light/60"}`}
        >
          Prosthodontics <span aria-hidden="true">·</span> Implants <span aria-hidden="true">·</span> Aesthetic Reconstruction
        </span>
      </span>
    </span>
  );
};

export default BrandLockup;
