import React from 'react'

const Avatar = ({title ,initials}) => {
  return (
    
    <abbr
      title={title}
      className="
        no-underline flex items-center justify-center
        w-7 h-7 rounded-full
        bg-secondary-500 border border-text-500/20
        font-mono text-[0.55rem] tracking-wider uppercase text-text-500/60
        -ml-2 first:ml-0
        ring-1 ring-primary-500
      "
    >
      {initials}
    </abbr>
  )
}

export default Avatar