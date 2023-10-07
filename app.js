const ex = require('express')
const app = ex()
const Minio = require('minio');

const minioClient = new Minio.Client({
    endPoint: "localhost",
    port: 9009,
    accessKey: "minioadmin",
    secretKey: "minioadmin",
    useSSL: false,
});

app.listen(9009)

app.post("/ficheros/createBucket", async (req, res) => {
        try {
            await minioClient.makeBucket(req.body.nombre, 'us-east-1')
            res.send({ res: "00", description: "OK", data: { bucket: req.body.nombre } })
        } catch (error) {
            res.status(500).send({
                error: error, res: "500", description: "ERR",
                data: { bucket: req.body.nombre }
            })
        }
    });