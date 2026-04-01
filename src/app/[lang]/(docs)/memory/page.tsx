import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/memory.mdx"),
  () => import("@/content/zh/memory.mdx")
);
