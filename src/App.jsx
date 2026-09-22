import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./CommonComponents/Navbar";
import TopHeader from "./CommonComponents/TopHeader";
import Footer from "./CommonComponents/Footer";


import ScrollToTop from "./CommonComponents/ScrollToTop";
// import FloatingSupport from "./CommonComponents/FloatingSupport";
import Loader from "./CommonComponents/Loader";



function App() {
  const [loading] = useState(false);

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="print:hidden">
        <TopHeader />
      </div>
      <Navbar />
      <div className="print:hidden">
        <ScrollToTop />
      </div>
   
      <Outlet />
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ zIndex: 999999 }}
        toastOptions={{
          style: {
            zIndex: 999999,
          },
        }}
      />
      <Footer />
    </section>
  );
}

export default App;
