import Safe from '../Safe'
import CloseButton from '../buttons/CloseButton'

export default function SafeRoom({ password, openSesame }) {
  return (
    <div className="SafeRoom">
      <Safe password={password} />
      <CloseButton openSesame={openSesame} />
    </div>
  )
}
