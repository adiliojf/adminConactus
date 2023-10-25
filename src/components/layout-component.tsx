'use client'
import { Nav } from "@/components/nav";
  

type PropsLayout = {
  children: React.ReactNode
}

export default function LayoutComponent({children}: PropsLayout) {
  return (
    <div className="bg-blue-100 min-h-screen flex">
      <Nav />
      <div className="bg-gray-50 flex-grow p-6">
        <div className="font-sans font-bold p-4">
          {children}          
        </div>
      </div>
    </div>

  )
}