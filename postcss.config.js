const removeClasses = require('postcss-remove-classes').default;

module.exports = (ctx) => {
    // Get config from command line arguments or environment
    const configType = process.argv.find(arg => arg.startsWith('--plugins='))?.split('=')[1]
        || process.env.POSTCSS_CONFIG
        || 'theme';

    const pluginConfigs = {
        theme: [
            require('postcss-combine-duplicated-selectors'),
            require('cssnano')({
                preset: [
                    'default', { calc: false, discardComments: false }
                ],
            }),
        ],
        publish: [
            require('postcss-pseudo-is'),
            removeClasses(/markdown-source-view|is-live-preview|cm-/),
            require('postcss-combine-duplicated-selectors'),
            require('cssnano')({
                preset: [
                    'default', { calc: false }
                ],
            }),
        ],
        snippets: [
            removeClasses(/fas-/),
        ]
    }

    const selectedPlugins = pluginConfigs[configType] || pluginConfigs.theme;

    console.log(`Using PostCSS configuration: ${configType}`);

    return {
        plugins: selectedPlugins
    };
};