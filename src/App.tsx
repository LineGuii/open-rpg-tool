import RuleCard from './modules/rules/components/RuleCard'
import './App.css'
import { Router } from './config/routing'
import { Providers } from './contexts/providers'
import IRule from 'shared/types/rule.type'

function App() {
  const rule: IRule = {
    source: 'CRB',
    entries: ['Description of the Rule'],
    name: 'Combat',
    pageNumber: 1,
    title: 'Title of the Rule'
  }
  return (
    <div className="App">
      <Providers>
        <Router />
        <RuleCard rule={rule} />
      </Providers>
    </div>
  )
}

export default App
