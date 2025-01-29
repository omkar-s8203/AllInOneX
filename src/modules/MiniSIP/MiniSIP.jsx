import React from 'react'
import Dashboard from './Dashboard'
import ErrorBoundary from './ErrorBoundary'
import { ThemeProvider } from '../../context/ThemeContext';



export default function MiniSIP() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
    </ThemeProvider>
  )
}
