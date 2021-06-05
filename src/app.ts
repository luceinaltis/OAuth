import express from 'express'

import loaders from './loaders'

async function startServer() {
	const app = express()
	await loaders({ expressApp: app })

	app.listen(5000, () => {
		process.stdout.write('Server listening on port: 5000\n')
	})
}

startServer()
