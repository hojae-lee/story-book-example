import esbuild from "rollup-plugin-esbuild";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.exports["."].import,
      format: "esm",
    },
    {
      file: pkg.exports["."].require,
      format: "cjs",
    },
  ],
  plugins: [
    esbuild({
      // All options are optional
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      minify: true,
      jsx: "automatic", // default, or 'preserve'
    }),
  ],

  external: ["react", "react-dom", "styled-components"],
};
