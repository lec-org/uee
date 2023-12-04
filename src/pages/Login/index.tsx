import { useRef } from 'react'
import { userLogin } from '../../API/api'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.scss'
import { Input } from '@mui/material'

export default function Login() {
	const toPath = useNavigate()
	// 定义ref获取DOM, 其current属性即为该DOM节点
	const uname = useRef(null)
	const pwd = useRef(null)

	// 定义处理登录的函数
	const handleLogin = async (username: string, password: string) => {
		// 鉴定是否为空
		if (!username?.trim() || !password?.trim()) {
			alert('请输入用户名和密码')
			return
		}
		console.log(username, password)

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
					toPath('/')
				}
				console.log(i--)
			}, 1000)
		}
	}

	return (
		<>
			<div className={styles['card']}>
				<div className={styles['title']}>Login</div>
				{/* 用户名:{' '} */}
				<Input
					type='text'
					ref={uname}
					placeholder='请输入用户名'
				/>
				{/* 密码:{' '} */}
				<Input
					type='password'
					ref={pwd}
					placeholder='请输入密码'
				/>
				<button
					onClick={() => {
						handleLogin(uname.current.value, pwd.current.value)
					}}
				>
					登录
				</button>
				<div className={styles['info']}>
					<span>
						<button
							onClick={() => {
								toPath('/register')
							}}
						>
							还没有账号？点此去注册
						</button>
					</span>
				</div>
			</div>
		</>
	)
}
