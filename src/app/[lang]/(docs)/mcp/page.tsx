import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/mcp.mdx"),
  () => import("@/content/zh/mcp.mdx")
);
