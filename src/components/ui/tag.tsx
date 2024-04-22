import type { FC, PropsWithChildren } from 'react'

interface TagProps extends PropsWithChildren {
  className?: string
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'destructive' | 'success' | 'warning'
  textColor?: string
  backgroundColor?: string

  disabled?: boolean
  onClick?: () => void
}

const Tag: FC<TagProps> = ({
  className = '',
  size = 'medium',
  variant = 'primary',
  textColor = 'text-white',
  backgroundColor = 'bg-gray-500',
  disabled = false,
  onClick,
  children
}: TagProps) => {
  const sizeMap = {
    small: 'h-4 px-2 text-xs',
    medium: 'h-6 px-3 text-sm',
    large: 'h-8 px-4 text-lg'
  }
  const variantMap = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    destructive: 'bg-red-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500'
  }

  const disabledMap = {
    true: 'opacity-50 cursor-not-allowed',
    false: 'cursor-pointer'
  }
  return (
    <div
      className={`inline-flex items-center justify-center rounded-md p-2 ${
        sizeMap[size]
      } ${variantMap[variant]} ${
        disabled ? disabledMap.true : disabledMap.false
      } ${textColor} ${backgroundColor} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Tag
