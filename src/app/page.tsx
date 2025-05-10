import { getTranslations } from "next-intl/server";

import { AppLanguageMessages } from "@/i18n/types";

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="container m-auto">
      <h1>{t(AppLanguageMessages.welcome)}</h1>
    </div>
  );
}
