/**
 * Types minimaux pour le client Supabase. Affiner avec `supabase gen types` une fois le schéma
 * figé (table `inscriptions`, etc.).
 */
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      inscriptions: {
        Row: {
          id: string;
          created_at: string;
          prenom: string;
          nom: string;
          email: string;
          telephone: string;
          atelier: string;
          message: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          prenom: string;
          nom: string;
          email: string;
          telephone: string;
          atelier: string;
          message?: string | null;
        };
        Update: Partial<{
          prenom: string;
          nom: string;
          email: string;
          telephone: string;
          atelier: string;
          message: string | null;
        }>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
