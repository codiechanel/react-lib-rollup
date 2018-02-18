import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

  export default {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    // All the used libs needs to be here
  external: [
      'react', 
      'react-proptypes', 
      "material-ui"
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }