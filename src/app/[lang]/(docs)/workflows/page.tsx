import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/workflows.mdx"),
  () => import("@/content/zh/workflows.mdx")
);
