import { Base64 } from '../utils'

async function getData() {
    const db = "ventilator_db";
    const query = "_find";
    const username = "637f34a0-1b45-46ef-a656-1e7af678a2d8-bluemix";
    const password = "b121eae3baa885d70cd6706f0ae6660825b6d705124e4689f2baa29409d712f1";
    const url = `https://${username}:${password}@${username}.cloudantnosqldb.appdomain.cloud`;

    var myHeaders = new Headers({
        'Authorization': 'Basic ' + Base64.btoa(`${username}:${password}`),
        "Content-Type": "application/json"
    });

    var raw = JSON.stringify({
        "selector": {},
        "fields": [
            "_id",
            "_rev",
            "timestampCreated",
            "value"
        ],
        "sort": [
            {
                "timestampCreated": "desc"
            }
        ],
        limit: 20
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        let response = await fetch(`${url}/${db}/${query}`, requestOptions)
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

export {
    getData
}