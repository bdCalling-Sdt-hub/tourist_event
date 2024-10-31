'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
        <h2 className="mt-4 text-3xl font-semibold text-white-200">Something went wrong!</h2>
        <p className="mt-2 text-lg text-gray-500">An unexpected error has occurred. Please try again.</p>
        
        <button
          onClick={() => reset()}
          className="mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-200 text-white font-medium rounded-md shadow-md transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
