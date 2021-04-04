import key from '../../assets/key.svg'

export default function SecretOpenButton() {
  return (
    <button className="SecretKeyButton">
      <img src={key} alt="key" />
    </button>
  )
}
