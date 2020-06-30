export const formatDate = date => {
  let diffInSecond = (Date.now() - new Date(date)) / 1000;
  let diff;
  //year 60*60*24*365
  diff = Math.floor(diffInSecond / 31536000);
  // console.log(diff);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'years' : 'year'} ago`;
  }
  //month 60*60*24*30
  diff = Math.floor(diffInSecond / 2592000);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'months' : 'month'} ago`;
  }
  //day 60*60*24
  diff = Math.floor(diffInSecond / 86400);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'days' : 'day'} ago`;
  }
  //minutes 60*60
  diff = Math.floor(diffInSecond / 3600);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'minutes' : 'minute'} ago`;
  }
  //second 60
  diff = Math.floor(diffInSecond / 60);
  if (diff >= 1) {
    return `${diff} ${diff > 1 ? 'seconds' : 'second'} ago`;
  }
};
