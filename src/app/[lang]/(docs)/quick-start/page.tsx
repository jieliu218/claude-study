import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/quick-start.mdx"),
  () => import("@/content/zh/quick-start.mdx")
);
