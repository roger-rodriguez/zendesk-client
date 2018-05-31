import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";
import replace from "rollup-plugin-replace";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import builtins from "rollup-plugin-node-builtins";
import pkg from "./package.json";

// order of plugins matters
const config2 = {
  input: "./src/index.js",
  output: {
    name: "Zendesk-Client",
    format: "umd"
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: /node_modules/
    }),
    babel({
      exclude: "node_modules/**"
    }),
    replace({
      exclude: "node_modules/**",
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    json(),
    builtins()
  ]
};

const config = [
  // browser-friendly UMD build
  {
    input: "src/index.js",
    output: {
      name: "Zendesk-Client",
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: "node_modules/**"
      }),
      replace({
        exclude: "node_modules/**",
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }),
      json(),
      builtins()
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/index.js",
    external: ["bluebird", "isomorphic-fetch", "warning"],
    output: [
      { name: "Zendesk-Client", file: pkg.main, format: "cjs" },
      { name: "Zendesk-Client", file: pkg.module, format: "es" }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      replace({
        exclude: "node_modules/**",
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      })
    ]
  }
];

// if (process.env.NODE_ENV === "production") {
//   config.plugins.push(uglify());
// }

export default config;
