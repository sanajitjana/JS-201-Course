function timeToString(duration) {
  let milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  if (hours == 0 && minutes == 0) {
    if (milliseconds >= 1) {
      return `${seconds} seconds`;
    } else {
      return `${seconds} second`;
    }
  } else if (hours == 0 && seconds == 0) {
    if (seconds >= 1) {
      return `${minutes} minutes`;
    } else {
      return `${minutes} minute`;
    }
  } else {
    if (hours >= 1) {
      if (minutes >= 1) {
        if (seconds >= 1) {
          return `${hours} hours ${minutes} minutes ${seconds} seconds`;
        } else {
          return `${hours} hours ${minutes} minutes`;
        }
      } else {
        if (seconds >= 1) {
          return `${hours} hours ${seconds} seconds`;
        } else {
          return `${hours} hours ${seconds} second`;
        }
      }
    } else {
      if (minutes >= 1) {
        if (seconds >= 1) {
          return `${minutes} minutes ${seconds} seconds`;
        } else {
          return `${minutes} minutes`;
        }
      } else {
        if (seconds >= 1) {
          return `${seconds} seconds`;
        } else {
          return `${seconds} second`;
        }
      }
    }
  }
}

export default timeToString;
