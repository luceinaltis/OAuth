import { NextFunction, Request, Response, Router } from 'express'

const route = Router()

export default (app: Router) => {
	app.use('/auth', route)

	route.get('/kakao', (req: Request, res: Response, next: NextFunction) => {
		const kakao = {
			clientID: 'e38ed3684570397a6c1ece130d9c5de1',
			clientSecret: '6RFgiZV6uMEd0M0rnNZdiSXBr2Tw9Hmu',
			redirectUri: 'http://localhost:5000/auth/kakao/callback',
		}

		const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=account_email`

		return res.redirect(kakaoAuthUrl)
	})

	route.get(
		'/kakao/callback',
		(req: Request, res: Response, next: NextFunction) => {
			return res.json({
				session: req['session'],
				query: req.query,
			})
		}
	)
}
