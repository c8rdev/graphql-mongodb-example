import { connect } from "mongoose"

const mongoHelper = () => connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@127.0.0.1:27017/${process.env.MONGO_DATABASE}?authSource=admin`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected')
}).catch(err => {
    console.log(err)
})

export default mongoHelper