import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import builtins from 'rollup-plugin-node-builtins'

// order of plugins matters
const config = {
  input   : './src/index.js',
  name    : 'Zendesk',
  plugins : [
    resolve({
      jsnext  : true,
      main    : true,
      browser : true,
    }),
    commonjs({
      include : /node_modules/
    }),
    babel({
      exclude : 'node_modules/**'
    }),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    json(),
    builtins(),
  ]
};

if(process.env.NODE_ENV === 'production'){
  config.plugins.push(uglify())
}

export default config;