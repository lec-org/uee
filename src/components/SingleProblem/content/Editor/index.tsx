import { useState } from 'react'
import MonacoEditor from 'react-monaco-editor'

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
			<MonacoEditor
				width={'100%'}
				height={'100%'}
				language='javascript'
				theme='vs-dark'
				value={code}
				options={options}
				onChange={handleCodeChange}
			/>
		</div>
	)
}
