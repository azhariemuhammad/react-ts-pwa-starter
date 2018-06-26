import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Hello 
        compiler="typescript"
        framework="react"
        bundler="webpack"
      />
    </div>
  )
}