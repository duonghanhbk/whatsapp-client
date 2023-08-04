'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { RouteItem } from '@/app/models/routes'

const MobileItem = ({ href, active, onClick, icon: Icon }: RouteItem) => {
    const handleClick = () => {
        if (onClick) {
            return onClick()
        }
    }
    return (
        <Link
            href={href}
            onClick={handleClick}
            className={clsx(
                'group flex w-full justify-center gap-x-3 p-4 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 hover:text-black',
                active && 'bg-gray-100 text-black'
            )}
        >
            <Icon className="h-6 w-6" />
        </Link>
    )
}

export default MobileItem
