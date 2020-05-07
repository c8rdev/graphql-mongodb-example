import { pbkdf2Sync } from 'crypto'
import UserModel from '../../models/UserModel'
import { sign } from 'jsonwebtoken'

const signupMutation = async (_, args) => {
    args.password = pbkdf2Sync(args.password, process.env.PASSWORD_SALT, 1024, 64, 'sha512').toString('hex')
    const user = await new UserModel(args).save()
    const { _id } = user.toObject()
    
    return { token: user && sign({ _id, createdAt: new Date() }, process.env.JWT_SECRET) }
}
export default signupMutation