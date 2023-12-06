import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import MonacoEditor, { monaco } from 'react-monaco-editor'

import styles from './index.module.scss'

const initStr = '//请在此处书写你的代码'

export default function SetMonacoEditor(props) {
	const [code, setCode] = useState(initStr)

	return (
		<>
			<div className={styles['editorContainer']}>
				<div className='editorControler'>
					<FormControl>
						<InputLabel id='theme-select-label'>主题</InputLabel>
						<Select
							labelId='theme-select-label'
							id='theme-select'
						>
							<MenuItem value={'vs-dark'}>vs-dark</MenuItem>
							<MenuItem value={'vs-light'}>vs-light</MenuItem>
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel id='language-select-label'>语言</InputLabel>
						<Select
							labelId='language-select-label'
							id='language-select'
						>
							<MenuItem value={'vs-dark'}>JavaScript</MenuItem>
							<MenuItem value={'vs-light'}>Python</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className={styles['editor']}>
					<MonacoEditor
						width={'100%'}
						height={'100%'}
						language='javascript'
						theme='vs-dark'
						value={code}
					/>
				</div>
			</div>
		</>
	)
}
