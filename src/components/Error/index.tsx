import React from 'react'

const ErrorScreen = () => {
  return (
    <div
    data-testid="error"
    className="absolute w-[100%] h-[100vh] bg-primary flex items-center justify-center flex-col font-primary transition ease-in-out delay-150 duration-300"
  >
    <p className="text-[24px] mb-[1.5em]">Could not load assets</p>
  </div>
  )
}

export default ErrorScreen