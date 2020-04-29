import { Base64 } from '../utils'

async function getData() {
    const db = "ventilator_db";
    const query = "_find";
    const username = "c612a48e-6c75-40f8-b275-f9958a5e1317-bluemix";
    const password = "346a8f8b4a86fab70993f3ba0a434d1b6d7ead444a387e6bcb651a4750b420f9";
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