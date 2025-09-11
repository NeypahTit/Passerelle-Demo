// http://localhost:52330/javascript_basic_syntax/014_readingurl.html?honest=false&true=true&name=Ney&type=L#groundsy
const locationObject = window.location;

console.log(locationObject);
console.log('href',locationObject.href);

// console.log('protocol',locationObject.protocol);
// console.log('hostname',locationObject.hostname);
// console.log('host',locationObject.host);
// console.log('port',locationObject.port);
// console.log('origin',locationObject.origin);
// console.log('pathname',locationObject.pathname);
// console.log('hash',locationObject.hash);
// console.log('search',locationObject.search);

const params = new URLSearchParams(window.location.search);
console.log(params);

this.onload = ()=>{
    document.querySelector('#href').innerHTML = '<b>href</b>'.toUpperCase() + ":<br>" + locationObject.href;
    document.querySelector('#protocol').innerHTML = '<b>protocol</b>'.toUpperCase() + ":<br>" + locationObject.protocol;
    document.querySelector('#hostname').innerHTML = '<b>hostname</b>'.toUpperCase() + ":<br>" + locationObject.hostname;
    document.querySelector('#host').innerHTML = '<b>host</b>'.toUpperCase() + ":<br>" + locationObject.host;
    document.querySelector('#port').innerHTML = '<b>port</b>'.toUpperCase() + ":<br>" + locationObject.port;
    document.querySelector('#origin').innerHTML = '<b>origin</b>'.toUpperCase() + ":<br>" + locationObject.origin;
    document.querySelector('#pathname').innerHTML = '<b>pathname</b>'.toUpperCase() + ":<br>" + locationObject.pathname;
    document.querySelector('#hash').innerHTML = '<b>hash</b>'.toUpperCase() + ":<br>" + locationObject.hash;
    document.querySelector('#search').innerHTML = '<b>search</b>'.toUpperCase() + ":<br>" + locationObject.search;

    // looping through entrie key->values of an iterator
    for( const [key, value] of params.entries()){
        console.log(key, value);
        const p = document.createElement('p');
        p.textContent = key + ": "+ value;
        p.innerHTML = `<em><b>${key}</b></em>: ${value}`; // expl of string interpolation
        p.style.lineHeight = "0.1rem";
        document.querySelector('#params').appendChild(p);
    }
    // getting the value when we know the key. We usually do when reading value in a url.
    console.log('the name is:',params.get('name'));
    
    const pokeName = params.get('name');
    const pokeType = params.get('type');
    console.log(pokeName, pokeType);
    
    const h2 = document.createElement('h2');
    h2.textContent = `Hello dear ${pokeName} of type ${pokeType}`;
    document.querySelector('body').appendChild(h2);
}
