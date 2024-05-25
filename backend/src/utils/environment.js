export function getEnvVariable(n) {
  const variable = process.env[n]
  if (!variable) return console.log(`>>>>>>>>>>>>>> Variable ${n} - NOT FOUND <<<<<<<<<<<<<<`)
  return variable
}