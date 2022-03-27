import github from "../github";

var gh_handle = 'ishangarg9';

function githubGET(){

    let obj = github(gh_handle);
    var promise = Promise.resolve(obj);

  promise.then(function(val) {
    // contestName.push(val.contests['1']['Contest']);
    console.log(val);
    // console.log(val.contests['1']['Contest']);

    document.getElementById('gh_repo').textContent = val['0']['clone_url'];
    
    



});
}

export default githubGET;