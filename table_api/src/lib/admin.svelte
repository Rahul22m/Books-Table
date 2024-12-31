<script>
    import axios from 'axios';
    import {navigate} from 'svelte-routing';
    import CreateUser from './CreateUser.svelte';
    import GetUser from './GetUser.svelte';
    import { onMount } from "svelte";

    let users=[];
    let value="";
    let errorMessage;
    

   
    const createUser = async(event)=>{
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:3000/users', event.detail, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            users.push(response.data.data);
            getUsers();
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

    const getUsers = async()=>{
        try {
            const token = localStorage.getItem('token');
            const result =  await axios.get('http://localhost:3000/users', {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            });
            
            users = result.data.data;
            console.log(users)
        }catch(error){
            if (error.response) {
            if (error.response.status === 401) {
                alert('Session expired. Please log in again.');
                // navigate('/login');
            } else {
                errorMessage = error.response.data.error || 'Failed to load data.';
            }
            console.error(error.response.data.error);
        } else if (error.request) {
            errorMessage = 'No response received from the server.';
            console.error('No response received:', error.request);
        } else {
            errorMessage = 'Failed to load data.';
            console.error('Error setting up request:', error.message);
        }
        }
    }

    onMount(() => {
        getUsers();
    });

    const deleteUser = async(userId)=>{
        try{    
            const token = localStorage.getItem('token');
            const response = await axios.delete(`http://localhost:3000/users/${userId}`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
        });
            console.log('Delete response:', response); // Log the response

            users = users.filter(user => user.id !== userId); // Update users array
        } catch (error) {
        console.error("Error deleting user:", error); // Log the error
        }
    };
    

    // let filteredUsers = [];
    
    $: filteredUsers = value === "" ? users : users.filter(user => user.userType === value);

    const changeUser = (e) => {
        value = e.detail;
    }

    const removeUser = (event) =>{
        const userId = event.detail;
        console.log('Removing user with ID', userId);
        deleteUser(userId)
    }
    
// console.log(filteredUsers);
</script>

<GetUser {filteredUsers} on:remove={removeUser} on:filterChange={changeUser} on:userCreated={createUser}/>



