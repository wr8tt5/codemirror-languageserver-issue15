import { createRoot } from 'react-dom/client'
import { Editor } from './components/editor'

function render() {
    const container = document.getElementById("root")
    const root = createRoot(container!)
    root.render(<Editor/>)
}

render()