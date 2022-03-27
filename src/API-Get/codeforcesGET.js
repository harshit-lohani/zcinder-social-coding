import codeforces from "../codeforces";

var cf_handle = 'tourist';

function codeforcesGET() {

    let obj = codeforces(cf_handle);
    var promise = Promise.resolve(obj);

  promise.then(function(val) {
    // contestName.push(val.contests['1']['Contest']);
    // console.log(val);
    // console.log(val.contests['1']['Contest']);
    document.getElementById('cf_rating').textContent = val.rating;
    document.getElementById('cf_rank').textContent = val.rank;
    document.getElementById('cf_conre').textContent = val.contests['0']['Contest'];
    document.getElementById('platform').textContent = val.platform;


    //printing last 5 contests

    // document.getElementById('cf_contest_0').textContent = val.contests['0']['Contest'];
    // document.getElementById('cf_contest_1').textContent = val.contests['1']['Contest'];
    // document.getElementById('cf_contest_0').textContent = val.contests['2']['Contest'];
    // document.getElementById('cf_contest_0').textContent = val.contests['3']['Contest'];
    // document.getElementById('cf_contest_0').textContent = val.contests['4']['Contest'];
  

    val.forEach(function(dd) { console.log(dd.contests); });


});

}

export default codeforcesGET;