import { FC } from 'react'

interface IArrowUpRightIcon {
  className?: string
}

export const ArrowUpRightIcon: FC<IArrowUpRightIcon> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3369 3.66108C12.6298 3.95397 12.6298 4.42884 12.3369 4.72174L4.71783 12.3408C4.42494 12.6337 3.95006 12.6337 3.65717 12.3408C3.36428 12.0479 3.36428 11.573 3.65717 11.2801L11.2762 3.66108C11.5691 3.36818 12.044 3.36818 12.3369 3.66108Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.4375 4.19141C3.4375 3.77719 3.77329 3.44141 4.1875 3.44141H11.8065C12.2208 3.44141 12.5565 3.77719 12.5565 4.19141V11.8105C12.5565 12.2247 12.2208 12.5605 11.8065 12.5605C11.3923 12.5605 11.0565 12.2247 11.0565 11.8105V4.94141H4.1875C3.77329 4.94141 3.4375 4.60562 3.4375 4.19141Z"
      />
    </svg>
  )
}
