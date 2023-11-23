import { useNavigate } from 'react-router-dom'

export default function Navs(props: { className: string }) {
	const navgateTo = useNavigate()

	return (
		<div className={props.className}>
			<span
				onClick={() => {
					navgateTo('/all')
				}}
			>
				题库
			</span>
		</div>
	)
}
