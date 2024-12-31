<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    // let id;
    let userType;
    let email;
    let password;
    let confirmPassword;
    let errorMessage;
    let successMessage;

    function validatePassword(password) {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);

        return password.length >= minLength && hasUppercase && hasLowercase && hasDigit;
    }


    function handleSubmit(event) {
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

        dispatch('userCreated', { userType, email, password, confirmPassword });

        // Clear the form
        email = '';
        password = '';
        confirmPassword = '';
        userType = '';
        successMessage = 'User created successfully!';
}
</script>

<body>
    <div class="form-container">
        <form on:submit|preventDefault={handleSubmit}>
            <div class="form-group">
                <label for="userType">User Role</label>
                <select id="userType" name="userType" required bind:value={userType}>
                    <option value="">Select your role</option>
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
            <button type="submit" class="submit-btn">Create User/Guest</button>
            {#if errorMessage}
                <p class="error-message">{errorMessage}</p>
            {/if}
            {#if successMessage}
                <p class="success-message">{successMessage}</p>
            {/if}
        </form>
        <!-- <p>Already have an account? <a href="/login">Login</a></p> -->
    </div>
</body>

<style>
     .form-container {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background-color: #f9f9f9;
    }
    .form-group {
        margin-bottom: 15px;
    }
    /* .form-container {
        display: inline-block;
        flex-direction: column;
        align-items: start;
        margin-bottom: 20px;
    } */

    /* .form-container input, */
    /* .form button {
        margin: 5px;
    }  */
    button {
        background-color: rgb(43, 60, 114);
        color: rgb(244, 245, 249);
        border-radius: 8px;
        width: 190px;
        height: 30px;
        font-size: 20px;
        margin-bottom: 10px;
        cursor: pointer;
    }
</style>
