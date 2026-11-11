
import FooterSimple from "@/components/FooterSimple";

export default function SimpleLayout({ children }) {
  return (
    <>
      {children}
      <FooterSimple />
    </>
  );
}
