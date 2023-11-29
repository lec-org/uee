import { useNavigate } from 'react-router-dom'

export default function Register() {
	// 创建路由钩子
	const toPath = useNavigate()
	return (
		<>
			<div>
				<div>Register</div>
				<input type='text' />
				<input type='password' />
				<button>注册</button>
				<div>
					<span>
						<button
							onClick={() => {
								toPath('/login')
							}}
						>
							已有账号？点此登录
						</button>
					</span>
				</div>
			</div>
		</>
	)
}
