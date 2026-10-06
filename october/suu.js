function getHouseSelection() {
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

    const houseSelect = document.getElementById("hogwartsHouse");

    for (let i = 0; i < houses.length; i++) {
        const option = document.createElement("option");
        option.value = houses[i];
        option.textContent = houses[i];
        houseSelect.appendChild(option);
    }
}
getHouseSelection();