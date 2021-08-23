const esbuild = require("esbuild");
const sveltePlugin = require("esbuild-svelte");

esbuild
  .build({
    entryPoints: ["./base.js"],
    outdir: "dist",
    format: "iife",
    minify: false,
    bundle: true,
    splitting: false,
    plugins: [sveltePlugin()],
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

esbuild
  .build({
    entryPoints: ["./addon.js"],
    outdir: "dist",
    format: "iife",
    minify: false,
    bundle: true,
    splitting: false,
    external: ["svelte"],
    inject: ["svelte-shim.js"],
    plugins: [sveltePlugin()],
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
