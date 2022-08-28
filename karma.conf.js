// karma.conf.js
module.exports = (config) => {
	config.set({
		files: [
			{type: 'module', pattern: './test/**/*.js'},
			{type: 'module', pattern: './**/*.js'},
            { pattern: 'node_modules/**/*.js', included: false },
		],
		preprocessors: {
			'test/**/*.js': ['module-resolver']
		},
		moduleResolverPreprocessor: {
			addExtension: 'js',
			customResolver: null,
			ecmaVersion: 6,
			aliases: {
				project: "./"
			}
		}
	});
};