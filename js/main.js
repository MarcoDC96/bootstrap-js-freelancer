let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calculateOffer(event) {
    event.preventDefault();
    let userHours = document.getElementById("hours").value;
    let typeWork = document.getElementById("type-of-work").value;
    let userDiscount = document.getElementById("discount-code").value;

    let prezzo = 0;
    prezzo = parseFloat(prezzo);
    if (typeWork == "backend") {
        prezzo = userHours * 20.5;
        typeWork = "Backend Development"
    } else if (typeWork == "frontend") {
        prezzo = userHours * 15.3;
        typeWork = "Frontend Development"
    } else if (typeWork == "projectAnalysis") {
        prezzo = userHours * 33.6;
        typeWork = "Project Analysis"
    }

    if (discountCodes.includes(userDiscount)) {
        prezzo = prezzo / 100 * 75;
    }

    else if (userDiscount.length >= 1 && !discountCodes.includes(userDiscount)) {
        document.getElementById("discountError").classList.remove("d-none");
        return false;
    }

    document.getElementById("priceId").innerHTML = "The Price is: " + prezzo.toFixed(2) + " €";
    document.getElementById("hoursId").innerHTML = "Hours requested: " + userHours;
    document.getElementById("workId").innerHTML = "Type of work: " + typeWork;
}
