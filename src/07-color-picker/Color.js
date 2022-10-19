export default function Color ({ hex, name, handleChange }) {
  return (
    <button
      className='color-square'
      onClick={() => handleChange(hex)}
      style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </button>
  )
}
