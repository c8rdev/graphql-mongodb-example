import { pbkdf2Sync, randomBytes } from 'crypto'
import { sign } from "jsonwebtoken"
import UserModel from '../../models/UserModel'

const loginMutation = async (_, args) => {
    args.password = pbkdf2Sync(args.password, process.env.PASSWORD_SALT, 1024, 64, 'sha512').toString('hex')
    const user = await UserModel.findOne(args)
    if (user) {
        const { _id } = user.toObject()
        return { token: user && sign({ _id, createdAt: new Date() }, process.env.JWT_SECRET) }
    }
}

export default loginMutation