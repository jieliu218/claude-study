import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/hooks.mdx"),
  () => import("@/content/zh/hooks.mdx")
);
