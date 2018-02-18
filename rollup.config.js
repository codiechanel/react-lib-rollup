import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
// import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs"
  },
  // All the used libs needs to be here
  external: [
    "react",
    "react-proptypes",
    "prop-type", 
    "classnames",
    "material-ui",
    "material-ui/Progress",
    "material-ui-icons"
  ],
  plugins: [
    // resolve({
    //   // jsnext: true,
    //   // main: true,
    //   browser: true
    // }),

    // cjs({
    //   // include: [
    //   //   // "node_modules/react/**",
    //   //   // "node_modules/react-dom/**",
    //   //   // "node_modules/material-ui/**",
    //   //   "node_modules/material-ui/Progress/index.js"
    //   // ],
    //    include: ["node_modules/material-ui/Progress/CircularProgress.js"],
    //   // exclude: [ 'node_modules/**', ],
    //   namedExports: {
    //     "node_modules/material-ui/Progress/CircularProgress.js": ["CircularProgress"]
    //   }
    // }),

    // cjs({
    //   "node_modules/material-ui/Progress/index.js": ["CircularProgress"]
    // }),

    babel({
      exclude: "node_modules/**"
    }),
    resolve({ jsnext: false, module: true, modulesOnly: true }),
    // resolve(),
    // commonjs({
    //       include: [
    //     "node_modules/react-loaders/**",
    //       ], 
    //   namedExports: {
    //     "node_modules/react-loaders": ["Loader"]
    //   }
    // })
  ]
};
