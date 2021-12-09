// eslint-disable-next-line no-undef
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        [ 'module-resolver', {
            alias: {
                '@Dusecases': './src/data/usecases',
                '@usecases': './src/usecases',
                '@models': './src/domain/models',
                '@controllers': './src/controllers',
                '@infra': './src/infra'
            }
        } ]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}
