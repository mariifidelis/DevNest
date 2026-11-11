
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CompleteLayout({ children }) {
  return (
    <div className="topbar">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
