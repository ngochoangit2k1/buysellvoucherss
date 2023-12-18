import useRouteElements from './useRouteElement'
import ScrollToTop from './components/scrollTop/scrollTop'

function App() {
  const routeElements = useRouteElements()
  return (
    <>
      <ScrollToTop></ScrollToTop>
      {routeElements}
    </>
  )
}

export default App
