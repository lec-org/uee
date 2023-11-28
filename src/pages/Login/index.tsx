import { useRef } from 'react'
import { userLogin } from '../../API/api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const ToNav = useNavigate()
	// 定义ref获取DOM, 其current属性即为该DOM节点
	const uname = useRef(null)
	const pwd = useRef(null)

	// 定义处理登录的函数
	const handleLogin = async (username: string, password: string) => {
		// 鉴定是否为空
		if (!username.trim() || !password.trim()) {
			alert('请输入用户名和密码')
			return
		}

		const params = {
			username,
			password,
		}

		const res = await userLogin(params)

		if (res.code) {
			console.log('登陆成功')
			console.log('3s后即将跳转首页')
			let i = 3
			const alertLogin = setTimeout(() => {
				if (!i) {
					clearTimeout(alertLogin)
					ToNav('/')
				}
				console.log(i--)
			}, 1000)
		}
	}

	return (
		<>
			用户名:{' '}
			<input
				type='text'
				ref={uname}
			/>
			密码:{' '}
			<input
				type='password'
				ref={pwd}
			/>
			<button
				onClick={() => {
					handleLogin(uname.current.value, pwd.current.value)
				}}
			>
				登录
			</button>
		</>
	)
}
