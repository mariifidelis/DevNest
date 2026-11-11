import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <section style={{ display: "contents" }}>{children}</section>
      <Footer />
    </>
  );
}
