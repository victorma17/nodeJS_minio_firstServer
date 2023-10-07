const ex = require("express")
const app = ex()
const Minio = require("minio");

const minioClient = new Minio.Client({
    endPoint: "127.0.0.1",
    port: 9009,
    accessKey: "minioadmin",
    secretKey: "minioadmin",
    useSSL: false,
});


app.post("/minio/createBucket", async (req, res) => {
    try {
        await minioClient.makeBucket('req.body.nombre', 'us-east-1')
        res.status(200).send({ resultado: "hola" })
    } catch (error) {
        res.status(500).send({ error })
    }
})

app.listen(3344)