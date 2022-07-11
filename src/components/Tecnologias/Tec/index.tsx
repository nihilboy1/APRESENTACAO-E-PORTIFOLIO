import S from './style.module.scss'

import { ReactNode } from 'react'

interface TecProps {
  children: ReactNode
  tecName: string
}

export function Tec({ children, tecName }: TecProps) {
  return (
    <div className={S.container} data-aos="zoom-in-up">
      {children}
      <p>{tecName}</p>
    </div>
  )
}
