import SecretOpenButton from '../buttons/SecretOpenButton'

export default function SecretRoom({ openSesame }) {
  return (
    <div>
      <SecretOpenButton
        openSesame={openSesame}
        backupPassword="easter05042021"
      />
    </div>
  )
}
