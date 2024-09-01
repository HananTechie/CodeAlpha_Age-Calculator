var btn = document.querySelector(".calculate");
var year = document.querySelector("#years");
var month = document.querySelector("#months");
var day = document.querySelector("#days");
var ageBox = document.querySelector(".age");

btn.addEventListener("click", () => {
    var date = document.querySelector("#inputDate").value;
    if(!date.trim()){
        alert("Please enter a date");
        return;
    }

    calculateAge(date);
});

var calculateAge = (date) => {
    const birthdate = new Date(date);
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (months < 0) { // Adjust months and years if necessary
        years--;
        months += 12;
    }

    if (days < 0) { // Adjust days and months if necessary
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // Ensure months are positive and adjust years if months become negative
    if (months < 0) {
        years--;
        months += 12;
    }

    year.innerHTML = years;
    month.innerHTML = months;
    day.innerHTML = days;

    ageBox.style.visibility = "visible";
};
