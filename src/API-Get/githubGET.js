import github from "../github";
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

var gh_handle = 'ishangarg9';

var repos;

async function repo_lang(url){
  let obj = null;
    
    console.log(url);
    
    try {
      obj = await (await fetch(url)).json();
    } catch(e) {
        console.log('error');
    }
    
  return obj;
}

function githubGET(){

    //getting user info

    let obj1 = github(gh_handle, '');

    var promise1 = Promise.resolve(obj1);

    promise1.then(function(val1) {

      console.log(val1);
        document.getElementById('git-followers').textContent = val1.followers;
        document.getElementById('git-following').textContent = val1.following;
        document.getElementById('git-repos').textContent = val1.public_repos;
        
  
      });

    //getting repo and their tech stacks

    

}

function githubREPO(gh_handle, repo_no){
  let obj2 = github(gh_handle, '/repos');
  var promise2 = Promise.resolve(obj2);

  

    promise2.then(function(val2) {

      console.log(val2);

      var repos = 0;

      for(var r of val2){
        repos++;
      }
      
      console.log(repos);
  
      if(repo_no < repos){
        //this repo exits
        let vv = "" + repo_no;
        console.log(val2[vv]['name']);
        

        let repo_url = val2[vv]['url'];

        let lango = repo_lang(repo_url);

        // console.log(lango);

        var promise3 = Promise.resolve(lango);

        promise3.then(function(val3) {

          console.log(val3);

          console.log(val3.language);

          document.getElementById('repo-lang').textContent = val3.language;
      
          });

          document.getElementById('git-repo-name').textContent = val2[vv]['name'];


      }
      else {
        console.log("repo does not exists");
      }
  
      });

}

export {githubGET, githubREPO};