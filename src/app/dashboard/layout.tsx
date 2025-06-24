import React from 'react'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <div className='flex h-screen flex-col md:flex-row'>
            <div className='md:w-64 w-full flex-none p-7'>Side Bar</div>
            <div className='flex-grow p-12 border'>{children}</div>
        </div>

    </div>
  )
}
