import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true
        }
    ],
    external: [ 'react' ],
    plugins: [
        external(),
        resolve(),
        typescript({
            rollupCommonJSResolveHack: true,
            exclude: "**/__tests__/**",
            clean: true
        }),
        commonjs({
            // https://github.com/rollup/rollup-plugin-commonjs#usage-in-monorepo
            include: /node_modules/,
            namedExports: {
                // node_modules/prop-types/factoryWithTypeCheckers.js#L115
                'prop-types': [
                    'array',
                    'bool',
                    'func',
                    'number',
                    'object',
                    'string',
                    'symbol',
                    'any',
                    'arrayOf',
                    'element',
                    'elementType',
                    'instanceOf',
                    'node',
                    'objectOf',
                    'oneOf',
                    'oneOfType',
                    'shape',
                    'exact',
                ],
            },
        }),
    ]
};