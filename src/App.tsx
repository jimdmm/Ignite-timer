import { ThemeProvider } from 'styled-components'

import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <Button />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
