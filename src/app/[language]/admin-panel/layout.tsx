import { languages } from "@/services/i18n/config";
import type { Metadata } from "next";
import { getServerTranslation } from "@/services/i18n";
import ResponsiveDrawer from "@/components/drawer/drawer-component";

type Props = {
  params: Promise<{ language: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { t } = await getServerTranslation(params.language, "common");

  return {
    title: t("title"),
  };
}

export function generateStaticParams() {
  return languages.map((language) => ({ language }));
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return <ResponsiveDrawer>{children}</ResponsiveDrawer>;
}
