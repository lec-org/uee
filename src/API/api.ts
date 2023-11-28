import request from './index'

interface LoginAPIReq {
	username: string
	password: string
}

interface LoginAPIRes {
	code: number
	t: { null: null }
}
export const userLogin = (params: LoginAPIReq): Promise<LoginAPIRes> =>
	request.post('/user/login', params)
