import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/headless.mdx"),
  () => import("@/content/zh/headless.mdx")
);
