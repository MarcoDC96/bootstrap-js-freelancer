let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function submitForm(event) {
    event.preventDefault();
    let userHours = document.getElementById("hours").value;
    let typeWork = document.getElementById("type-of-work").value;
    let userDiscount = document.getElementById("discount-code").value;

    let price = 0;
    if (typeWork == "backend") {
        price = userHours * 20.5;
        typeWork = "Backend Development"
    } else if (typeWork == "frontend") {
        price = userHours * 15.3;
        typeWork = "Frontend Development"
    } else if (typeWork == "analysis") {
        price = userHours * 33.6;
        typeWork = "Project Analysis"
    }


}