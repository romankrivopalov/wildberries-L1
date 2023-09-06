const URL = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';

class Api {
  getData = () => {
    return fetch(URL)
      .then(res => {if (res.ok) return res.json()})
  }
}

export default Api
