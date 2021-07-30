import { rm, symlink } from 'fs/promises'
import { existsSync } from 'fs'

const main = async () => {
	const sourceURL = new URL('../packages/snowpack-module-html', import.meta.url)
	const targetURL = new URL('../node_modules/snowpack-module-html', import.meta.url)

	if (!existsSync(sourceURL)) {
		console.error(`Whoops! Could not find ${sourceURL.pathname}.`)
	} else {
		await rm(targetURL, { force: true, recursive: true })

		await symlink(sourceURL, targetURL, 'dir')

		console.log(`Successfully mapped ${sourceURL.pathname}.`)
	}
}

main()
