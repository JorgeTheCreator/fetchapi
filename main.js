// Replace ./data.json with your JSON feed
const fetchPeopleData = fetch('./info.json');

fetchPeopleData
  .then(response => {
    return response.json();
  })
  .then(data => {
    data.forEach(element => {
      const {
        name,
        age,
        email,
        phone,
        company,
        friends: [{ name: friend_name }]
      } = element;
      //console.log(name, age, email, phone, company);
      document.getElementById('td').innerHTML += `<tr>
      <td>${name}</td>
      <td>${age}</td>
      <td>${email}</td>
      <td>${phone}</td>
      <td>${company}</td>
      <td>${friend_name}</td>
    </tr>`;
    });
  })
  .catch(err => {
    // Do something for an error here
    console.log(err);
  });
