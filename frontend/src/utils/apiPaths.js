export const BASE_URL = "http://localhost:8000/";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    GET_PROFILE: "/api/auth/profile",
  },
  USERS: {
    GET_ALL_USERS: "/api/users",
    GET_USER_BY_ID: (userId) => `/api/users/${userId}`, // <-- function now
    CREATE_USER: "/api/users",
    GET_USER_DETAILS: (userId) => `/api/users/${userId}`, 
    DELETE_USER: (userId) => `/api/users/${userId}`, 
  },
  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data",
    GET_USER_DASHBOARD_DATA: (userId) => `/api/tasks/dashboard-data/${userId}`,
    GET_ALL_TASKS: "/api/tasks",
    GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`,
    CREATE_TASK: "/api/tasks",
    GET_TASK_DETAILS: (taskId) => `/api/tasks/${taskId}`,
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}`,
    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`,
    UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`,
  },
  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks",
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image", // Added leading slash for consistency
  },
};
