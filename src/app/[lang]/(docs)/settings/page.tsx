import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/settings.mdx"),
  () => import("@/content/zh/settings.mdx")
);
