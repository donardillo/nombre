module.exports = {
        source: ['sd-input/**/*.json'],
        fileHeader: {
            autoGenerateFileHeader: () => {
                resturn ['Donot edit diurectly, this file is real street shit nigga'];
            },
        },
        platforms: {
            CSS: {
                transformGroup: 'css',
                buidPath: 'tokens',
                prefix: 'figma',
                files:[
                    {
                        destination: 'variables.css',
                        format: 'css/variables',
                        options: {
                            fileHeader: 'autoGenerateFileHeader',
                        },
                    },
                ],
            },
        },
};
    