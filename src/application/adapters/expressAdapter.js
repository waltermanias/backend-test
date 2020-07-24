
class ExpressAdapter {
    static adapt = router => {
        return async (req, res) => {
            const {headers, body, query, params} = req;
            const httpResponse = await router.route({method: req.method, baseUrl: req.baseUrl}, {headers, body, query, params});
            res.status(httpResponse.statusCode).json(httpResponse);
        }
    }
}

module.exports = ExpressAdapter