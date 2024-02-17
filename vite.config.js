import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import nightwatchPlugin from "vite-plugin-nightwatch";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    nightwatchPlugin(),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
  ],
});
