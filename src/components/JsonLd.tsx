import { useEffect } from "react";

interface JsonLdProps {
  id: string;
  data: Record<string, unknown>;
}

const JsonLd = ({ id, data }: JsonLdProps) => {
  useEffect(() => {
    const scriptId = `json-ld-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.text = JSON.stringify(data);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [id, data]);

  return null;
};

export default JsonLd;
