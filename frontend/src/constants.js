export const BASE_URL =
process.env.NODE_ENV === 'develeopment' ? 'http://localhost:5000' : '/';
// export const BASE_URL = 'http://localhost:5000';
export const QUESTIONS_URL = '/api/questions';
export const RESULTS_URL = '/api/results';
export const USERS_URL = '/api/users';
export const SUBJECTS_URL = '/api/subjects';
export const PRACTICES_URL = '/api/practices';
export const TOPICS_URL = '/api/topics';
export const SUBJECTSEXAM_URL = '/api/subjectExams';
export const PRACTICESEXAM_URL = '/api/practicesExams';

// export const UPLOAD_URL = '/api/upload';

console.log(BASE_URL)