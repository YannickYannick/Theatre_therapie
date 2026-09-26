/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY: string;
  /** URL billetterie « Émotions » : si absente, bouton « billetterie à venir ». */
  readonly VITE_BILLETTERIE_EMOTIONS_URL?: string;
  /** Quand la billetterie Impro existera, renseigner pour activer le 2e bouton. */
  readonly VITE_BILLETTERIE_IMPRO_URL?: string;
  /** URL billetterie Jeu et création (défaut code : https://www.billetweb.fr/theatre54). */
  readonly VITE_BILLETTERIE_CREATION_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
