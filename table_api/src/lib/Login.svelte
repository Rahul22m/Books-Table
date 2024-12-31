<script>
    import axios from 'axios';
    import { navigate } from 'svelte-routing';
    
    let email = "";
    let password = "";
    let errorMessage = "";
    
    async function login(event) {
        
        // Reset error message
        errorMessage = '';

        try {
            const response = await axios.post("http://localhost:3000/login", {
                email,
                password
            }, {
                withCredentials: true, 
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log('Login Response:', response); // Log the whole response
            const data = response.data;
            localStorage.setItem('token', data.token);
            alert(data.message || 'Login successful'); // Use fallback message if data.message is undefined
            navigate("/books");
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 2xx
                const data = error.response.data;
                console.error('Error Response Data:', data); // Log the error response data
                alert(`Error: ${data.message || 'An error occurred'}`); // Use fallback message if data.message is undefined
            } else if (error.request) {
                // Request was made but no response received
                alert('No response received from the server.');
                console.error('No response received:', error.request);
            } else {
                // Error occurred in setting up the request
                alert('Failed to login.');
                console.error('Error setting up request:', error.message);
            }
        }
    }
</script>

<body>
    <div class="form-container">
        <h2>Login</h2>
        <form on:submit|preventDefault={login}>
            <div class="form-group">
                <label for="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email" 
                    placeholder="Enter your email"
                    required
                    autocomplete="off"
                    bind:value={email}  
                />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"  
                    placeholder="Password"
                    required
                    bind:value={password} 
                />
            </div>
            <button type="submit" class="submit-btn">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
</body>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
    }

    h2 {
        text-align: center;
        margin-bottom: 30px;
    }

    .form-container {
        width: 300px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .form-group input {
        width: 100%;
        padding: 8px;
        font-size: 14px;  
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    .submit-btn {
        display: block;
        width: 100%;
        padding: 10px;
        background-color: #472dbb;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .submit-btn:hover {
        background-color: #4565a0;
    }

    p {
        margin-top: 15px;
    }
</style>
