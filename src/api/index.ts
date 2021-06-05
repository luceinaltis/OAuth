import { Router } from 'express'

import AuthRoutes from './routes/auth'

export default () => {
	const app = Router()

	AuthRoutes(app)

	return app
}
