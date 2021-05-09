const totalCorona = document.querySelector(".total__corona");
const newCorona = document.querySelector(".new_corona");

const totalCaseBox = document.querySelectorAll(".total_casebox");
const newCaseBox = document.querySelectorAll(".new_casebox");

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "ea86afecfbmsh9a66bb64d745e64p1bc6d7jsnad6a7be28d7a",
  },
})
  .then((response) => {
    response.json().then((data) => {
      totalCaseBox[0].innerHTML = `${data.total_cases}명`;
      totalCaseBox[1].innerHTML = `${data.total_cases_per_1m_population}(per 1m)`;
      totalCaseBox[2].innerHTML = `${data.total_deaths}명`;
      totalCaseBox[3].innerHTML = `${data.deaths_per_1m_population}(per 1m)`;
      totalCaseBox[4].innerHTML = `${data.total_recovered}명`;
      newCaseBox[0].innerHTML = `${data.active_cases}명`;
      newCaseBox[1].innerHTML = `${data.new_cases}명`;
      newCaseBox[2].innerHTML = `${data.new_deaths}명`;
      newCaseBox[3].innerHTML = `${data.serious_critical}명`;
    });
  })
  .catch((err) => {
    console.log(err);
  });
