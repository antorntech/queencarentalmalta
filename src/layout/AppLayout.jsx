import React, { useEffect } from "react";
import Header from "../shared/Header";
import AppRoutes from "../routes/AppRoutes";
import Loader from "../loaders/Loader";
import GoToTop from "../components/GoToTop/GoToTop";
import Footer from "../shared/Footer";

const AppLayout = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <GoToTop />
          <Header />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default AppLayout;
