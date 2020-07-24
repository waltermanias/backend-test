class BaseRouter {
    async route({baseUrl, method}, {headers, body, query, params}) {
        let logEntry = {request: {headers, body, query, params}}
        let response
        try {
            response = await this.onRoute({headers, body, query, params})
        } catch (err) {
            response = {
                statusCode: 500,
                data: {
                    message: err.message,
                    trace: err.trace
                }
            }
        } finally {
            logEntry = {...logEntry, baseUrl, method, timestamp: new Date(), response};
            console.log(JSON.stringify(logEntry));
            return response;
        }
    }

    async onRoute({headers, body, query, params}) {
        throw new Error("This method has not a default implementation.")
    }
}

module.exports = BaseRouter