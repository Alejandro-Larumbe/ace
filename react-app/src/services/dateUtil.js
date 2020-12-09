export default function removeTimeZone (date) {
  let chunk = date.split(' ')
  return chunk.join(' ')
}
