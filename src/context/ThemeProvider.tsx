import { ThemeProvider, ColorModeProvider, extendTheme } from "@chakra-ui/react"
import { ReactNode } from "react";

interface ThemeProps {
    children?: ReactNode
}

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

export const ThemeProviderGPT = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ThemeProvider>
)