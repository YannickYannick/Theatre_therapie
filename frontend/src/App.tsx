import { Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { HomePage } from "@/pages/HomePage";
import { BiographiePage } from "@/pages/BiographiePage";
import { WorkshopDetailPage } from "@/pages/WorkshopDetailPage";
import { InscriptionPage } from "@/pages/InscriptionPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster richColors position="top-center" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="biographie" element={<BiographiePage />} />
        <Route path="emotions" element={<WorkshopDetailPage slug="emotions" />} />
        <Route path="impro" element={<WorkshopDetailPage slug="impro" />} />
        <Route path="inscription" element={<InscriptionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
