export const handler = async (event) => {
    const message = JSON.parse(event.body).msg
    console.log(message)
    const response = {
        statusCode: 200,
        body: JSON.stringify({
        msg: message
        }),
    };
    return response;
};