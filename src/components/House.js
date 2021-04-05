import SafeRoom from './rooms/SafeRoom'
import FireWall from './Firewall'
import { useState } from 'react'

export default function House() {
  const [password, setPassword] = useState('')

  function openSesame(backupPassword) {
    setPassword(backupPassword)
  }
  return (
    <div>
      <SafeRoom openSesame={openSesame} password={password} />
      <FireWall openSesame={openSesame} />
    </div>
  )
}
