import React from 'react'

const Login = () => {
  return (
    <div>
      {/* // Login API Call
try {
    const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
    });

    const { token, role } = response.data;

    if (token) {
        localStorage.setItem("token", token);

        // Redirect based on role
        if (role === "admin") {
            navigate("/admin/dashboard");
        } else {
            navigate("/user/dashboard");
        }
    }
} catch (error) {
    if (error.response && error.response.data.message) {
        setError(error.response.data.message);
    } else {
        setError("Something went wrong. Please try again.");
    }
} */}
    </div>
  )
}

export default Login
