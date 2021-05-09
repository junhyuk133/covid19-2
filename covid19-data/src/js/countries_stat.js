function loadCorona() {
    return fetch(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
        {
            method: "GET",
            headers: {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key":
                    "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53",
            },
        }
    )
        .then((response) => response.json())
        .then((stat) => {
            coronaStat(stat);
            console.log(stat);
        })

        .catch((err) => {
            console.log(err);
        });
}

let countriesStat;

function coronaStat(stat) {
    countriesStat = stat.countries_stat;
    for (i = 0; i < countriesStat.length; i++) {
        countriesStat[i].id = [i + 1];
    }
    const coronaStat = document.querySelector(".corona_stat");
    let coronaStatHTML = countriesStat
        .map((item) => {
            return `<div class="corona_conutries"> <span>${item.id}.</span> ${item.country_name}</div>
    <div class="corona_case">${item.cases}명</div>`;
        })
        .join("");
    atTime();
    coronaStat.innerHTML = coronaStatHTML;
}

loadCorona();
//https://doctorcodetutorial.blogspot.com/2020/03/create-coronavirus-tracker-in.html 출처
