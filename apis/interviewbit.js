// https://competitive-coding-api.herokuapp.com/api/interviewbit/ishangarg

// import fetch from 'node-fetch';

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// const response = await fetch('https://competitive-coding-api.herokuapp.com/api/interviewbit/ishangarg');
// const data = await response.json();

// console.log(data);

async function load() {
    let url = 'https://competitive-coding-api.herokuapp.com/api/interviewbit/ishangarg';
    let obj = null;
    
    try {
        obj = await (await fetch(url)).json();
    } catch(e) {
        console.log('error');
    }
    
    console.log(obj);
}

load();