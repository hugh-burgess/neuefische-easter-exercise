import safe_open from '../assets/safe_open.jpg'
import safe_close from '../assets/safe_close.jpg'

export default function Safe({ password }) {
  const isOpen = password === 'easter05042021'
  return (
    <div>
      {isOpen ? (
        <img src={safe_open} alt="safe_open" />
      ) : (
        <img src={safe_close} alt="safe_close" />
      )}
    </div>
  )
}
