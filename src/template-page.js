const createCards = employeeData => {
console.log(employeeData);

    const engineer = employeeData.engineerArr.map(function(card) {
        let engineerCard = `
        <div class="card" style="width: 18rem; margin-left: 20px; border-width: 3px; color: black;">
        <h2 style="width: 18rem; margin-left: 20px;">${card.name}</h2>
        <h3 style="width: 18rem; margin-left: 20px;">Engineer <i class="fas fa-glasses"></i></h3>
        <hr style="border-top: 3px dotted black;">
        <div class="card-body">
        <p><b>ID #:</b> ${card.id}</p>
        <p><b>Email:</b> <a href='mailto:${card.email}'>${card.email}</a></p>
        <p><b>Github:</b> <a href="https://github.com/${card.github}" target="_blank">${card.github}</a></p>
        </div>
        </div> `

        return engineerCard
    });

    const manager = employeeData.managerArr.map(function(card) {
        let managerCard = `
        <div class="card" style="width: 18rem; margin-left: 20px; border-width: 3px; color: black;">
        <h2 style="width: 18rem; margin-left: 20px;">${card.name}</h2>
        <h3 style="width: 18rem; margin-left: 20px;">Manager <i class="fas fa-coffee"></i></h3>
        <hr style="border-top: 3px dotted black;">
        <div class="card-body">
        <p><b>ID #:</b> ${card.id}</p>
        <p><b>Email:</b> <a href="mailto:${card.email}">${card.email}</a></p>
        <p><b>Office #:</b> ${card.office}</p>
        </div>
        </div>`

        return managerCard
        
    })
    
    const intern = employeeData.internArr.map(function(card) {
        let internCard = `
        <div class="card" style="width: 18rem; margin-left: 20px; border-width: 3px; color: black;">
        <h2 style="width: 18rem; margin-left: 20px;">${card.name}</h2>
        <h3 style="width: 18rem; margin-left: 20px;">Intern <i class="fas fa-graduation-cap"></i></h3>
        <hr style="border-top: 3px dotted black;">
        <div class="card-body">
        <p><b>ID #:</b> ${card.id}</p>
        <p><b>Email:</b> <a href="mailto:${card.email}">${card.email}</a></p>
        <p><b>School:</b> ${card.school}</p>
        </div>
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
            <link rel="icon" type="image/png" href="../img/fav.png""/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA==" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
            <title>My Team Profile</title>
        </head>
        <body style="color: white;">
            <header>
            <h1 class="text-center" style="background: rgb(71, 131, 209); height: 100px; padding-top: 20px; color: azure;">My Team Profile <img width="50" src="../img/profile.png" alt=""></h1>
            </header>
            <div class="margin: 15px;" class="container">
            <div class="row d-flex justify-content-center" style="padding-top: 20px;">
            ${createCards(htmlTemplate)}
            </div>
            </div>
        </body>
        </html>    
    `
}


