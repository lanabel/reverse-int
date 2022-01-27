module.exports = function reverse (n) {

  let nar= n.toString().split('')
  let arn= nar.reverse()
  const revN= parseFloat(arn.join(''))
  console.log(revN +'revN')
  return revN 

}
