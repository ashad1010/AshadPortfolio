/* --- Blocky pixel-grid icons, Hobbies page only -------------------
   Deliberately kept to this one page so the 8-bit touch reads as
   intentional rather than scattered everywhere. Add more patterns
   here if you want more devices in the rig list.
------------------------------------------------------------------- */

const PATTERNS = {
  gamepad: [
    '00000000',
    '00111100',
    '01111110',
    '11111111',
    '11111111',
    '10111101',
    '00000000',
    '00000000',
  ],
  laptop: [
    '00000000',
    '01111110',
    '01000010',
    '01000010',
    '01111110',
    '11111111',
    '00000000',
    '00000000',
  ],
  house: [
    '00011000',
    '00111100',
    '01111110',
    '01111110',
    '01100110',
    '01100110',
    '01111110',
    '00000000',
  ],
}

export default function PixelIcon({ name, size = 28, className = '' }) {
  const grid = PATTERNS[name]
  if (!grid) return null
  const n = grid.length

  return (
    <svg
      viewBox={`0 0 ${n} ${n}`}
      width={size}
      height={size}
      className={`pixel-icon ${className}`}
      aria-hidden="true"
    >
      {grid.map((row, y) =>
        row.split('').map((cell, x) =>
          cell === '1' ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null
        )
      )}
    </svg>
  )
}