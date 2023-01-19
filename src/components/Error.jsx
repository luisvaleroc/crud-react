import React from 'react'

const Error = ({children}) => {
  return (
    <div role="alert mb-20">
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Error
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    {children}
  </div>
</div>
  )
}

export default Error
