import { useParams } from 'react-router-dom'

export default function User() {
	const { username } = useParams()
	return <div>欢迎您的登录~{username}</div>
}
