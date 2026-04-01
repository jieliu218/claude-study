import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/commands.mdx"),
  () => import("@/content/zh/commands.mdx")
);
