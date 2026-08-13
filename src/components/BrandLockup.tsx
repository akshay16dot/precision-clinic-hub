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
        isFooter ? "flex-col items-center gap-3 text-center" : "items-center gap-2.5"
      } ${className}`}
    >
      {isFooter && (
        <img
          src="/ap-implant-mark.svg?v=13"
          alt=""
          aria-hidden="true"
          width="508"
          height="501"
          className="h-20 w-20 shrink-0 object-contain transition-all duration-500 md:h-24 md:w-24"
          style={{
            filter: inverted
              ? "none"
              : "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(1704%) hue-rotate(178deg) brightness(88%) contrast(91%)",
          }}
        />
      )}

      <span
        className={`flex min-w-0 flex-col ${
          isFooter ? "items-center" : "translate-y-0.5 items-start sm:translate-y-1"
        }`}
      >
        <img
          src={parmarWordmark}
          alt=""
          aria-hidden="true"
          width="917"
          height="440"
          className={`object-contain ${isFooter ? "object-center" : "object-left"} ${
            isFooter ? "h-10 w-40 md:h-12 md:w-52" : "h-[3.65rem] w-auto sm:h-[4.15rem]"
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
        {!isFooter && (
          <span
            className={`mt-0.5 font-body text-[6.5px] uppercase leading-[1.5] tracking-[0.12em] sm:text-[7px] sm:tracking-[0.14em] ${
              inverted ? "text-primary-foreground/70" : "text-charcoal-light/70"
            }`}
          >
            <span className="block whitespace-nowrap">Prosthodontics <span aria-hidden="true">·</span> Implants</span>
            <span className="block whitespace-nowrap">Aesthetic Reconstruction</span>
          </span>
        )}
        <span className="sr-only">Parmar Prosthodontics</span>
      </span>
    </span>
  );
};

export default BrandLockup;
