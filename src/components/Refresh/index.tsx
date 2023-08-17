import React from 'react'
import type { ReactElement } from 'react'
import Link from 'next/link'
import { Button } from "@nextui-org/button";

export default function Refresh(): ReactElement {
  return (
    <Link href="/library?tag=gamesCache">
      <Button isIconOnly aria-label="Like" className="w-2 dusk-black-800">
        <svg className='dark:text-dusk-black-100 text-dusk-black-900' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px" fill="currentColor"><path d="M 16 4 C 10.886719 4 6.617188 7.160156 4.875 11.625 L 6.71875 12.375 C 8.175781 8.640625 11.710938 6 16 6 C 19.242188 6 22.132813 7.589844 23.9375 10 L 20 10 L 20 12 L 27 12 L 27 5 L 25 5 L 25 8.09375 C 22.808594 5.582031 19.570313 4 16 4 Z M 25.28125 19.625 C 23.824219 23.359375 20.289063 26 16 26 C 12.722656 26 9.84375 24.386719 8.03125 22 L 12 22 L 12 20 L 5 20 L 5 27 L 7 27 L 7 23.90625 C 9.1875 26.386719 12.394531 28 16 28 C 21.113281 28 25.382813 24.839844 27.125 20.375 Z"/></svg>
      </Button> 
    </Link>
  )
}
