import { makeMdxPage } from "@/lib/make-mdx-page";

export default makeMdxPage(
  () => import("@/content/en/troubleshooting.mdx"),
  () => import("@/content/zh/troubleshooting.mdx")
);
