import signupMutation from './mutations/signupMutation'
import loginMutation from './mutations/loginMutation'
import UserModel from '../models/UserModel';

const Query = {
    getUsers: () => UserModel.find({})
}
const Mutation = {
    signup: signupMutation,
    login: loginMutation,

}

export default { Query, Mutation };