import axios from "axios";

const baseURI = 'http://localhost/api/courses';

const getCourses = async () => {
    console.log('getCourses called');
    const res = await axios.get(baseURI);
    return res.data
}

const postCourse = async (course) => {
    const res = await axios.post(baseURI, course);
    return res.data;
}

export default { getCourses, postCourse }