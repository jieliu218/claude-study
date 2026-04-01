import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/configuration.mdx"),
  () => import("@/content/zh/configuration.mdx")
);
