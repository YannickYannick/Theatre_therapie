/**
 * Générer plus tard avec le CLI Supabase (`supabase gen types`) une fois le schéma défini.
 * Les tables créées par Django apparaissent dans le même Postgres : lecture possible via Supabase
 * si les politiques RLS le permettent.
 */
export type Database = Record<string, never>;
