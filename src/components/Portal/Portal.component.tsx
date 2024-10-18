import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface PortalProps {
  children: ReactNode
}

export function Portal({ children }: PortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted) return null

  return ReactDOM.createPortal(
    children,
    document.getElementById('portal-root') as HTMLElement,
  )
}
