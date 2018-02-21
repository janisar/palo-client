const Api = {

    nameEndPoint: "/name",

    defaultPostHeaders: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },

    postName: (firstName, lastName, callback) => {
        fetch(Api.nameEndPoint, {
            method: 'POST',
            headers: Api.defaultPostHeaders,
            body: "firstName=" + firstName + "&lastName=" + lastName
        }).then(response => response.text())
            .then(callback)
            .catch(error => console.error(error));
    }
};

export default Api;