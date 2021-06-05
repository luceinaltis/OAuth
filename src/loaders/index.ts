import express from 'express'
import expressLoader from './express'

export default async ({
	expressApp,
}: {
	expressApp: express.Application
}): Promise<void> => {
	await expressLoader({ app: expressApp })
	console.log('✅ Express loaded')
}
