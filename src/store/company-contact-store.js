import actions from '../store/actions/company-contact-actions'
import getters from '../store/getters/company-contact-getters'
import mutations from '../store/mutations/company-contact-mutations'

export default{
    namespaced:true,
    state(){
        return{
            companyContacts:{},
        }
    },
    actions:{
        ...actions
    },
    getters:{
        ...getters
    },
    mutations:{
        ...mutations
    }
}