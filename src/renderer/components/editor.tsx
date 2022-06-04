import CodeMirror from '@uiw/react-codemirror'
import { Facet, Extension } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
import { languageServerWithTransport } from 'codemirror-languageserver'
import React from 'react'
import { DummyTransport } from '../dummy_transport'

const lsOptions = {
    transport: new DummyTransport(),
    rootUri: 'file:///',
    documentUri: 'file:///myfile.ts',
    languageId: 'typescript',
    workspaceFolders: []
}

var ls: Extension[] = languageServerWithTransport({...lsOptions})

export const Editor = React.memo(function Editor() {

    return (
        <CodeMirror
            extensions={[
                javascript({ typescript: true }),
                ls
            ]}
            height="200px"
        />
    )
})
