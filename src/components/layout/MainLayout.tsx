import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="w-full flex-1 pt-20 bg-gray-950">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
