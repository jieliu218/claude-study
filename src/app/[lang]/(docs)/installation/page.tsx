import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/installation.mdx"),
  () => import("@/content/zh/installation.mdx")
);
