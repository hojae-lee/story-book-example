import esbuild from "rollup-plugin-esbuild";

export default {
  input: "src/index.js",
  output: {
    file: "bundle.js",
    format: "cjs",
  },
  plugins: [
    esbuild({
      // All options are optional
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      minify: true,
      jsx: "automatic", // default, or 'preserve'
      // Like @rollup/plugin-replace
      define: {
        __VERSION__: '"x.y.z"',
      },
    }),
  ],
};
