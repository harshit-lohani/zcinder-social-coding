import leetcode from "../leetcode";

var lc_handle = 'ishangarg09';

function leetcodeGET() {

    let obj = leetcode(lc_handle);
    var promise = Promise.resolve(obj);

  promise.then(function(val) {
    // contestName.push(val.contests['1']['Contest']);
    console.log(val.status);
    // console.log(val.contests['1']['Contest']);

    document.getElementById('lc_ranking').textContent = val.ranking;
    
    



});

}

export default leetcodeGET;