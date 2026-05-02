import { useEffect, useState } from "react";
import { fetchApiHealth } from "@/lib/api";
import { isSupabaseConfigured } from "@/integrations/supabase/client";

export default function App() {
  const [apiStatus, setApiStatus] = useState<string>("…");

  useEffect(() => {
    let cancelled = false;
    fetchApiHealth()
      .then((data) => {
        if (!cancelled) setApiStatus(JSON.stringify(data, null, 2));
      })
      .catch(() => {
        if (!cancelled) setApiStatus("indisponible (lancer Django sur le port 8000 ?)");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="page">
      <h1>Théâtre-thérapie Paris</h1>
      <p className="lead">Frontend Vite + React — API Django + base Supabase (Postgres).</p>

      <section className="card">
        <h2>API Django</h2>
        <pre className="mono">{apiStatus}</pre>
      </section>

      <section className="card">
        <h2>Supabase (client navigateur)</h2>
        <p className="mono">
          {isSupabaseConfigured()
            ? "Variables VITE_SUPABASE_* définies — client prêt."
            : "Configurer VITE_SUPABASE_URL et VITE_SUPABASE_PUBLISHABLE_KEY dans .env.local"}
        </p>
      </section>
    </main>
  );
}
