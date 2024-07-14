import React from 'react'
import NavMenu from '../components/menu/NavMenu'

export default function SponsorsPage() {
    return (
        <div className="flex flex-col min-h-[500px] w-full pb-20 px-10 lg:px-0">
            <div className="lg:min-w-[1200px] mx-auto flex justify-center">
                <NavMenu currentPath={'sponsors'} />
            </div>
        </div>
  )
}
