// Replace ./data.json with your JSON feed
const fetchPeopleData = fetch('./info.json');

fetchPeopleData
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    const res = data[0];
    console.log('---------------');
    const { name, email, phone, age, address } = res;

    //const y = Object.values(res).map(e => `<td>${e}<td>`);
    Object.keys(res).map(e => console.log(e));
    const myValues = res;
    // console.log(myValues);
    const htmlOutPut = `<td>${name}</td>
    <td>${email}</td><td>${phone}</td><td>${age}</td>
    <td>${address}</td>
    `;

    document.getElementById('td').innerHTML = htmlOutPut;
  })
  .catch(err => {
    // Do something for an error here
    console.log(err);
  });
