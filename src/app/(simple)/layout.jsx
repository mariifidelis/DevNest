import FooterSimple from "@/components/FooterSimple";

export default function RootLayout({ children }) {
  return (
    <>
      <section>{children}</section>
      <FooterSimple />
    </>
  );
}
