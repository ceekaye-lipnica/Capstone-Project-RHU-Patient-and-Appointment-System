// import { UseAuthContext } from "./useAuthContext";
// import { UsePatientContext } from "./usePatientContext";

export const useLogout = () => {
    const {dispatch} = UseAuthContext()
    const {dispatch: patientDispatch} = UsePatientContext()

    const logout = () => {
        // remove user form local storage
        localStorage.removeItem('user')

        // dispatch logout action 
        dispatch({type: 'LOGOUT'})
        patientDispatch({type: 'SET_PATIENT', payload: null})
    }
    return {logout}
}