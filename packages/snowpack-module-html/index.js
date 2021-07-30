module.exports = (snowpackConfig, pluginOptions) => ({
	name: 'snowpack-module-html',
	resolve: {
		input: ['.module.html'],
		output: ['.js', '.module.html'],
	},
	async load() {
		return {
			'.js': 'export default class extends HTMLElement {}',
		}
	},
})
