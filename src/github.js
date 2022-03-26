const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function github(handle) {


    let url = 'https://api.github.com/users/';
    url = url.concat(handle);
    url = url.concat('/repos')
    let obj = null;
    
    
    try {
      obj = await (await fetch(url)).json();
    } catch(e) {
        console.log('error');
    }
    
    return obj;
  }
 
export default github;