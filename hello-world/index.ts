import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

const configureResponse = (statusCode = 200 | 500, message: { [Key in string]: unknown }) => ({
    isBase64Encoded: false,
    headers: {
        'content-type': 'application/json',
    },
    statusCode,
    body: JSON.stringify(message),
});

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const result = configureResponse(200, { message: 'hello world' });
    console.log(result);
    return result;
};
