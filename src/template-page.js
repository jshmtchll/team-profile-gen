const createCards = employeeData => {
console.log(employeeData);

    const engineer = employeeData.engineerArr.map(function(card) {
        let engineerCard = `
        <div class='card'>
        <h2>${card.name}</h2>
        <h5>Engineer</h5>
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
        <h5>Engineer</h5>
        <p><b>ID #:</b> ${card.id}</p>
        <p><b>Email:</b> <a href='mailto:${card.email}'>${card.email}</a></p>
        <p><b>Office #:</b> ${card.office}</p>
        </div>` 

        return managerCard
        
    })
    
    const intern = employeeData.internArr.map(function(card) {
        let internCard = `
        <div class='card'>
        <h2>${card.name}</h2>
        <h5>Intern</h5>
        <p><b>ID #:</b> ${card.id}</p>
        <p><b>Email:</b> <a href='mailto:${card.email}'>${card.email}</a></p>
        <p><b>School:</b> ${card.school}</p>
        </div>` 
        
        return internCard
    })
    return [engineer, manager, intern]
}

module.exports = createCards


