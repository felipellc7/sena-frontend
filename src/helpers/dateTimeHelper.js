export const displayTime = scheduleTime => {
  try {
    const time = new Date(scheduleTime)
    const hour = time.getUTCHours()
    const minutes = time.getUTCMinutes()
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hourFormatted = hour % 12 || 12
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes
    return `${hourFormatted}:${minutesFormatted} ${ampm}`  
  } catch (error) {
    return "N/D"
  }
}