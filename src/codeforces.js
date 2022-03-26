const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


async function codeforces(handle) {
    let url = "https://competitive-coding-api.herokuapp.com/api/codeforces/ishangarg09";
    let settings = { method: "Get" };
    var rat;

    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            return json;
        });

  }





export default codeforces;