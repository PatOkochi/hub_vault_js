function getCreditCardToken(public_key, card_number, month, year) {
    var base_url = 'https://stage-vault.hubsynch.com';
    let card_request = {
        "card": {
            "number": card_number,
            "exp_month": month,
            "exp_year": year,
        }
    };

    let myHeaders = new Headers();

    myHeaders.append("x-api-key", public_key);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(card_request),
        redirect: 'follow'
    };

    return fetch(
            base_url + "/api/v1/tokens",
            requestOptions
        )
        .then(response => response.text())
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(error => console.log('error', error));

}