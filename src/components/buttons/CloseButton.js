import lock from '../../assets/lock.svg'

export default function CloseButton({ openSesame }) {
  function closeSafe() {
    openSesame('')
  }
  return (
    <button onClick={closeSafe}>
      <img src={lock} alt="lock" />
    </button>
  )
}
