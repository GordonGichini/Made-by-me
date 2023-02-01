export const CreateProject = (project) => {
    return (dispatch, getState) => { 
        // async call to database 
        dispatch({ type: 'CREATE_PROJECT', project })

    }
}