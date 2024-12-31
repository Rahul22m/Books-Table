<script>
    import axios from 'axios';
    import {navigate} from 'svelte-routing';
    
    let userType = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let errorMessage = "";
    let successMessage = "";

    function validatePassword(password) {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);

        return password.length >= minLength && hasUppercase && hasLowercase && hasDigit;
    }

    async function signup(event) {
        event.preventDefault(); 

        errorMessage = "";
        successMessage = "";

        // Check if all fields are filled
        if (!userType|| !email || !password || !confirmPassword) {
            errorMessage = 'All fields are required.';
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            errorMessage = 'Passwords do not match';
            return;
        }

     
        if (!validatePassword(password)) {
            errorMessage = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.';
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/signup', {
                userType,
                email,
                password,
                confirmPassword
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = response.data;
            successMessage = data.message;
            setTimeout(() => {
                navigate("/login");
            }, 2000); 
        } catch (error) {
            if (error.response) {
                errorMessage = error.response.data.message || 'Signup failed. Please try again.';
            } else if (error.request) {
                errorMessage = 'No response received from the server.';
            } else {
                errorMessage = 'Signup failed. Please try again.';
            }
            console.error(error);
        }
    }
</script>


<body>
    <div class="form-container">
        <h2>Sign Up</h2>
        <form on:submit|preventDefault={signup}>
            <div class="form-group">
                <label for="userType">User Role</label>
                <select id="userType" name="userType" required bind:value={userType}>
                    <option value="">Select your role</option>
                    <option value=0>Admin</option>
                    <option value=1>User</option>
                    <option value=2>Guest</option>
                </select>
            </div>
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
                    title="Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one number."
                    required
                    bind:value={password}
                />
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    title="Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one number."
                    required
                    bind:value={confirmPassword}
                />
            </div>
            <div id="password-message">
                <h3>Password must contain:</h3>
                <p class="password-message-item">
                    At least
                    <b>one lowercase letter</b>
                </p>
                <p class="password-message-item">
                    At least
                    <b>one uppercase letter</b>
                </p>
                <p class="password-message-item">
                    At least
                    <b>one number</b>
                </p>
                <p class="password-message-item">
                    Minimum
                    <b>8 characters</b>
                </p>
            </div>
            <button type="submit" class="submit-btn">Sign Up</button>
            {#if errorMessage}
                <p class="error-message">{errorMessage}</p>
            {/if}
            {#if successMessage}
                <p class="success-message">{successMessage}</p>
            {/if}
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
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

    .error-message, .success-message {
        color: #d9534f; /* Red for errors */
        font-size: 14px;
        text-align: center;
        margin-top: 15px;
    }

    .success-message {
        color: #5bc0de; /* Light blue for success */
    }

    #password-message {
        display: block;
        background: #ffffff;
        color: #000;
        position: relative;
        padding: 20px;
        margin-top: 10px;
        text-align: left;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    #password-message h3 {
        font-size: 15px;
        margin-top: 0;
        text-transform: uppercase;
    }

    #password-message p {
        margin: 8px 0;
    }
</style>
