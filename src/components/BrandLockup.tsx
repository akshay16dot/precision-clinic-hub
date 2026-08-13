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
      className={`inline-flex items-center ${isFooter ? "gap-4 md:gap-5" : "gap-3 sm:gap-3.5"} ${className}`}
    >
      <img
        src="/splash-icon.png?v=12"
        alt=""
        aria-hidden="true"
        width="488"
        height="442"
        className={`shrink-0 object-contain transition-all duration-500 ${
          isFooter ? "h-[4.75rem] w-[4.75rem] md:h-24 md:w-24" : "h-14 w-14 sm:h-16 sm:w-16"
        }`}
        style={{
          filter: inverted
            ? "none"
            : "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(1704%) hue-rotate(178deg) brightness(88%) contrast(91%)",
        }}
      />

      <span className="flex min-w-0 flex-col items-start">
        <img
          src={parmarWordmark}
          alt=""
          aria-hidden="true"
          width="917"
          height="440"
          className={`object-contain object-left ${
            isFooter ? "h-10 w-[10.5rem] md:h-12 md:w-[13rem]" : "h-7 w-[7.75rem] sm:h-8 sm:w-[9rem]"
          }`}
          style={{
            filter: inverted
              ? "brightness(0) invert(1)"
              : "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(1704%) hue-rotate(178deg) brightness(88%) contrast(91%)",
          }}
        />
        <span
          className={`mt-1.5 whitespace-nowrap font-body uppercase ${
            isFooter
              ? "text-[7.5px] tracking-[0.18em] md:text-[9px] md:tracking-[0.2em]"
              : "text-[6px] tracking-[0.08em] sm:text-[7px] sm:tracking-[0.12em]"
          } ${inverted ? "text-primary-foreground/55" : "text-charcoal-light/60"}`}
        >
          Prosthodontics <span aria-hidden="true">·</span> Implants <span aria-hidden="true">·</span> Aesthetic Reconstruction
        </span>
        <span className="sr-only">Parmar Prosthodontics</span>
      </span>
    </span>
  );
};

export default BrandLockup;
