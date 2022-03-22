import courseService from '../services/course';

export const getAllCourses = () => {
    return async dispatch => {
        try {
            const courses = await courseService.getCourses();
            dispatch({
                type: 'ALLCOURSES',
                data: courses
            });
        } catch (error) {
            console.log(`error getting courses, ${error.message}`);
        }
    } 
}

const courseReducer = (state = null, action) => {
    switch (action.type) {
        case 'ALLCOURSES':
            console.log('setting courses');
            return action.data;
        default:
            return state;
    }
}

export default courseReducer