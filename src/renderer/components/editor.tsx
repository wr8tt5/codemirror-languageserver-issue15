import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import React from 'react'

export const Editor = React.memo(function Editor() {

    return (
        <CodeMirror
            extensions={[
                javascript({ typescript: true }),
            ]}
            height="200px"
        />
    )
})
