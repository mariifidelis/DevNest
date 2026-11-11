import FooterSimple from "@/components/FooterSimple";

export default function RootLayout({ children }) {
  return (
    <>
      <section style={{ display: "contents" }}>{children}</section>
      <FooterSimple />
    </>
  );
}
