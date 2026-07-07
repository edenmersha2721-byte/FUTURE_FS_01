import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AmbientBackground from "@/components/shared/AmbientBackground";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <ScrollToTop />
      <Navbar />

      <main className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
