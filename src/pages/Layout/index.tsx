// 导入头部组件
import { Outlet } from 'react-router-dom'
import Header from '../../components/Layout/Header'

export default function Layout() {
	return (
		<>
			{/* 固定头部栏 */}
			<Header />
			{/* 路由页面展示 */}
			<Outlet></Outlet>
		</>
	)
}
