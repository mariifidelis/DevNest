//Ana Carolina - 10771387         |Mariana Fidelis - 10721308


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
