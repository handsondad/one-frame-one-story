import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // 相对路径：部署在 GitHub Pages 的 /<仓库名>/ 子路径下也能找到资源（路由用的是 hash，不受影响）
  base: "./",
  plugins: [react()],
  // npm run font 写字体缓存时文件被占用，Windows 上监听会 EBUSY 把开发服务器弄崩
  server: { watch: { ignored: ["**/tools/.cache/**", "**/snapshots/**"] } }
});
