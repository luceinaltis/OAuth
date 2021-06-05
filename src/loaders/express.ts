import express, { NextFunction, Request, Response, Errback } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routes from '../api'

export default ({ app }: { app: express.Application }) => {
	app.use(morgan('dev'))
	app.use(cors())

	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	app.use('/', routes())

	app.use((req: Request, res: Response, next: NextFunction) => {
		const err = new Error('Not Found')
		err['status'] = 404
		next(err)
	})

	app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		console.error(`😡 error: %s`, err.message)

		res.json({
			errors: {
				status: err['status'] || 500,
				message: err.message,
			},
		})
	})
}
