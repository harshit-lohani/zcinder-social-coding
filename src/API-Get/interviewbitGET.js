import interviewbit from "../interviewbit";

var ib_handle = 'ishangarg';

function interviewbitGET(){

    let obj = interviewbit(ib_handle);
    var promise = Promise.resolve(obj);

  promise.then(function(val) {
    // contestName.push(val.contests['1']['Contest']);
    console.log(val);
    // console.log(val.contests['1']['Contest']);

    document.getElementById('ib_rank').textContent = val.rank;
    document.getElementById('ib_score').textContent = val.score;
    
    



});
}

export default interviewbitGET;