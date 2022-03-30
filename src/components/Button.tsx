import { signIn } from 'next-auth/react'
import React, { FC, MouseEventHandler } from 'react'
import { GithubIcon, GoogleIcon } from './Icons'
interface Props {
  name?: string
  text?: string
  type?: 'primary' | 'secondary'
  onClick?: MouseEventHandler
}
const Button: FC<Props> = ({ name, text, onClick, type }) => {
  return !!text === true ? (
    <button onClick={onClick} className={`btn-${type}`}>
      {text}
    </button>
  ) : (
    <button
      onClick={async () => await signIn(name.toLowerCase())}
      className={`group btn-${type}`}
    >
      {name === 'Google' ? <GoogleIcon /> : <GithubIcon />}
      sign in with {name}
    </button>
  )
}

export default Button
