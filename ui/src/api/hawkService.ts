import IHawk from "../models/IHawk";

const SERVICE_URL = 'http://localhost:8000';

/// Load all the hawks from the datastore
export async function loadAllHawks():Promise<IHawk[]> {
    const url:any = SERVICE_URL+'/api/hawk/list';

    // Call endpoint and get json
    let response:Response = await fetch(url);
    let json:any = await response.json();

    return json.hawks;
}

/// Save the provided Hawk info to the datastore
export async function saveHawk(hawk:IHawk):Promise<void> {
    const url:string = SERVICE_URL+'/api/hawk';

    let requestInit:RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hawk)
    }

    let response:Response = await fetch(url, requestInit);

    if (response.status != 200) {
        console.error(response.statusText);
    }

    // // Create the POST Request
    // var request = new XMLHttpRequest();
    // request.open('POST', url, true);
    // request.setRequestHeader('Content-Type', 'application/json');

    // // Send the request
    // await request.send(JSON.stringify(hawk));
}

/// Update the provided hawk
export async function updateHawk(hawk:IHawk) {
    const url:string = SERVICE_URL+'/api/hawk/' + hawk.id;

    // Create the PUT Request
    var request = new XMLHttpRequest();
    request.open('PUT', url, true);
    request.setRequestHeader('Content-Type', 'application/json');

    // Send the request
    await request.send(JSON.stringify(hawk));
}

// async function load2():Promise<IHawk[]> {
//     const url:any = SERVICE_URL+'/api/hawk/list';

//     var request = new XMLHttpRequest();
//     request.open('GET', url, true);
//     request.setRequestHeader('Content-Type', 'application/json');

//     request.onload = function(e) {
//         console.log('+++ ' + request.response.json.hawks);
//         return request.response.json.hawks;
//     };
// }