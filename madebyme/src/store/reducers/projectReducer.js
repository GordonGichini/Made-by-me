const initState = { 
    projects: [
        {id: '1', title: 'Personal Portfolio', content: 'My personal portfolio'},
        {id: '2', title: 'Egardens', content: 'Ecommerce website'},
        {id: '3', title: 'Grocery store', content: 'grocery store'}
    ]
} 

const projectReducer = (state = initState, action) => {  
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
} 

export default projectReducer