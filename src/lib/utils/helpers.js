const progressPct =(done, total) => {
  return Math.round((done / total) * 100);
}


export {
    progressPct
}