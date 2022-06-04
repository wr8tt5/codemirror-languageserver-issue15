import CodeMirror from '@uiw/react-codemirror'
import { Facet, Extension } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
import { languageServerWithTransport } from 'codemirror-languageserver'
import React from 'react'
import { WebSocketTransport } from '@open-rpc/client-js'

const lsOptions = {
    transport: new WebSocketTransport("ws://localhost:8000"),
    rootUri: 'file:///',
    documentUri: 'file:///myfile.ts',
    languageId: 'typescript',
    workspaceFolders: []
}

var ls: Extension[] = languageServerWithTransport({...lsOptions})

export const Editor = React.memo(function Editor() {
    //const [ value, setValue ] = React.useState('')

    //const onChange = (value: string) => {
    //    setValue(value)
    //}

    return (
        <CodeMirror
            extensions={[
                javascript({ typescript: true }),
                ls
            ]}
            //value={value}
            //onChange={onChange}
            height="200px"
        />
    )
})
