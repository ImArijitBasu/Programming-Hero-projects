import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OnSubmitForm from './Components/FORMS/OnSubmitForm'
import State_OnChange from './Components/FORMS/State_OnChange'
import UseRefHook from './Components/FORMS/UseRefHook'
import State_CustomHookChange from './Components/FORMS/State_CustomHookChange'
import Main from './ContextComponents/Main/Main'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <OnSubmitForm></OnSubmitForm>
      <State_OnChange></State_OnChange>
      <UseRefHook></UseRefHook>
      <State_CustomHookChange></State_CustomHookChange>
      <Main></Main>
    </>
  )
}

export default App
