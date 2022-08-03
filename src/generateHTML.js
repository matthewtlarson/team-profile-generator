
function generateHTMl(team) {
let array = [];
  for (let i = 0; i < team.length; i++) {
    array.push(`<div>
    <h1>${team[i].name}</h1>
    <div>
      <p>${team[i].id}</p>
      <p>${team[i].email}</p>
      <p>${team[i].github || team[i].officeNumber || team[i].school}</p>
    </div>
  </div>`)
  }

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Team</title>
  </head>
  <body>
  ${array}
  </body>
  </html>`
}

module.exports = generateHTMl;