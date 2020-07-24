const aws = require('aws-sdk');
const config = require('config');

const profile = config.get("AWSProfileName")
if (profile) {
    const credentials = new aws.SharedIniFileCredentials({profile});
    aws.config.credentials = credentials;
}
const S3 = new aws.S3();

class UploaderService {
    async upload({key, buffer}) {
        return S3.upload({
            Bucket: config.get('bucketName'),
            Key: key,
            Body: buffer
        }).promise()
    }

    async remove(key) {
        return S3.deleteObject({
            Bucket: config.get('bucketName'),
            Key: key,
        }).promise()
    }
}

module.exports = UploaderService