const doc = document;
const result = doc.getElementById("result");

const api = () => {
  fetch("http://api.citybik.es/v2/networks")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      result.innerHTML = `
        <table class="table" id="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Country</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            ${data.networks.map((item) => {
              return `<tr> 
                <td><span class="id" id=${item.id}> ${item.name}</span></td>
                <td>${item.company}</td>
                <td>${
                  item.location.country.toLowerCase().charAt(0).toUpperCase() +
                  item.location.country.toLowerCase().slice(1)
                }</td>
                <td>${item.location.city}</td>
              </tr>`;
            })}
          </tbody>
        </table>
        `;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

doc.addEventListener("DOMContentLoaded", api);
