const createCards = employeeData => {
console.log(employeeData);

    const engineer = employeeData.engineerArr.map(function(card) {
        let engineerCard = `
        <div class='card'>
        <h2>${card.name}</h2>
        <h3>Engineer</h3>
        <p><b>ID #:</b> ${card.id}</p>
        <p><b>Email:</b> <a href='mailto:${card.email}'>${card.email}</a></p>
        <p><b>Github:</b> <a href="https://github.com/${card.github}" target="_blank">${card.github}</a></p>
        </div> `

        return engineerCard
    });

    const manager = employeeData.managerArr.map(function(card) {
        let managerCard = `
        <div class='card'>
        <h2>${card.name}</h2>
        <h3>Engineer</h3>
        <p><b>ID #:</b> ${card.id}</p>
        <p><b>Email:</b> <a href='mailto:${card.email}'>${card.email}</a></p>
        <p><b>Office #:</b> ${card.office}</p>
        </div>` 

        return managerCard
        
    })
    
    const intern = employeeData.internArr.map(function(card) {
        let internCard = `
        <div class='card'>
        <h3>${card.name}</h3>
        <h5>Intern</h5>
        <p><b>ID #:</b> ${card.id}</p>
        <p><b>Email:</b> <a href='mailto:${card.email}'>${card.email}</a></p>
        <p><b>School:</b> ${card.school}</p>
        </div>` 
        
        return internCard
    })
    return [engineer, manager, intern]
}

module.exports = htmlTemplate => {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" type="image/png" href="img/fav.png"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA==" crossorigin="anonymous" />
            <title>My Team Profile</title>
        </head>
        <body>
            <header>
            <h1 class="text-center">My Team Profile</h1>
            </header>
            ${generateCards(htmlTemplate)}
        </body>
        </html>    
    `
}


