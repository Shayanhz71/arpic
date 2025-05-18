
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import ShopPage from "./pages/Shop";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import CooperationPage from "./pages/Cooperation";
import PortfolioPage from "./pages/Portfolio";
import EditRequestPage from "./pages/EditRequest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/portrait" element={<ServicesPage />} />
          <Route path="/services/wedding" element={<ServicesPage />} />
          <Route path="/services/album" element={<ServicesPage />} />
          <Route path="/services/commercial" element={<ServicesPage />} />
          <Route path="/services/wall-frame" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/edit-request" element={<EditRequestPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/albums" element={<ShopPage />} />
          <Route path="/shop/frames" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cooperation" element={<CooperationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
