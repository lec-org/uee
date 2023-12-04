import { useState } from 'react'
import SetMonacoEditor from './Monaco'
import styles from './index.module.scss'

export default function Editor() {
	const [code, setCode] = useState('')
	const options = {
		selectOnLineNumbers: true,
	}
	const handleCodeChange = (e: string) => {
		setCode(e)
	}
	return (
		<div className={styles['monacoEditorContainer']}>
			<SetMonacoEditor />
		</div>
	)
}
