import key from '../../assets/key.svg'

export default function SecretOpenButton({ backupPassword, openSesame }) {
  function openSafe() {
    openSesame(backupPassword)
  }

  return (
    <button onClick={openSafe} className="SecretKeyButton">
      <img src={key} alt="key" />
    </button>
  )
}
