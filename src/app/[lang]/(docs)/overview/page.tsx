import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/overview.mdx"),
  () => import("@/content/zh/overview.mdx")
);
