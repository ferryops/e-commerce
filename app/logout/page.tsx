'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const LogoutPage = () => {
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem('user')
    router.replace('/login')
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Logging out...</p>
    </div>
  )
}

export default LogoutPage
