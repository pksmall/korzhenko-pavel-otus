import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: ['src/app.js'],
    output: {
        file: 'build/app.js',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        resolve(),
        babel()
    ]
};
