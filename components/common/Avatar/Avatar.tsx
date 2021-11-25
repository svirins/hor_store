import { FC, useRef, useEffect } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({}) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  let { userAvatar } = useUserAvatar()

  return (
    // <div
    //   ref={ref}
    //   style={{ backgroundImage: userAvatar }}
    //   className="inline-block w-8 h-8 transition-colors ease-linear border-2 rounded-full border-primary hover:border-secondary focus:border-secondary"
    // >
    //   {/* Add an image - We're generating a gradient as placeholder  <img></img> */}
    // </div>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="var(--secondary)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z"
        fill="var(--secondary)"
      />
    </svg>
  )
}

export default Avatar
