import React from 'react'
import { render } from 'react-dom'
// import { Button, CurrentProvider } from '../../node_modules/@avairain/test-btt'
// import { Button, CurrentProvider } from '../../lib/dist/bundle'
import { Button, CurrentProvider } from '../../src'
console.log('%c 🍔 Button: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', Button);

const App = () => <CurrentProvider value={{theme: 'dark'}}><Button>123123</Button></CurrentProvider>
render(<App />, document.getElementById('root'))