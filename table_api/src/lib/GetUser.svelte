<script>
    import CreateUser from './CreateUser.svelte';
    // export let users= [];
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let filteredUsers =[];
    let showModal = false;

    const handleChange = (e) => {
        dispatch('filterChange', e.target.value); // Dispatch the selected value
    }

    const remove = (userId)=>{
        dispatch('remove', userId);
    }

    const toggleModal = () => {
        showModal =!showModal;
    };

    const handleUserCreated = (event) => {
        dispatch('userCreated', event.detail);
        toggleModal(); // Close the modal after creation
    };
    
</script>

<div class="filter">
    <label for="user-filter">Filter User</label>
    <select on:change={handleChange} name="user-filter" class= "user-filter">
        <option value="">All</option>
        <option value='1'>User</option>
        <option value='2'>Guest</option>
    </select>
    <button on:click={toggleModal} class="add-button">Add User/Guest</button>
</div>

{#if showModal}
    <div class="modal">
        <div class="modal-content">
            <button class="close" on:click={toggleModal}>&times;</button>
            <CreateUser on:userCreated={handleUserCreated} />
        </div>
    </div>
{/if}

<div>
    <h1>List of Users</h1>
    {#each filteredUsers  as user, i (user.id)}
    <div class='flex'>
        <button on:click={()=>remove(user.id)} class="button">Delete</button>
        <p id="id">{i+1}</p>
        <p id="userid">{user.id}</p>
        <p id='email'>{user.email}</p>
        <p class="userType">{user.userType === '1' ? 'User' : 'Guest'}</p>
        
    </div>
    {:else}
    <p>No user Found</p>
    {/each}
</div>


<style>
    .modal {
        display: flex;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
    }
    .modal-content {
        background-color: white;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .add-button {
        float: right;
        margin-right: 15px;
        width: 12vw;
        height: 30px;
        border-radius: 8px;
        font-size: 16px;
        background-color: rgb(43, 60, 114);
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
    }
    .add-button:hover {
        background-color: rgb(31, 68, 189);
    }
    h1{
        font-size: xx-large;
        text-align: center;
        margin-top: 10;
    }
    .flex{
        display: flex;
        margin: 10px;
        border: 1px solid;
        border-radius: 10px;
        box-shadow: 5px 5px 10px;
        padding: 10px;
        background-color: white;
        cursor: pointer;
        justify-content: center;
        justify-items: center;
        position: relative;

    }
    .flex:hover{
        box-shadow: 5px 5px 10px rgb(180, 59, 59);
    }
    #email{
        width: 30vw;
        margin-left: 4px;
        margin-right: 4px;
    }
    #userid{
        width: 20vw;
        margin-left: 4px;
        margin-left: 4px;
    }
    #id{
        width: 10vw;
    }
    .userType{
        width: 30vw;
        margin-left: 4px;
        margin-right: 4px;
    }
    .filter{
        margin-top: 30px;
        margin-left: 20px;
    }
    .user-filter{
        border-radius: 8px;
        margin-left: 15px;
        font-size: 16px;
        padding-left: 4px;
        padding-right: 2px;
        cursor:pointer;
    }
    .button{
        position: absolute;
        right: 20px;
        top: 15px;
        margin-top: 8px;
        width: 8vw;
        background-color: rgb(43, 60, 114);
        color: white;
        font-size: 16px;
        border-radius: 8px;
        border: none;
        cursor: pointer;

    }
    .button:hover{
        background-color: rgb(31, 68, 189);
    }
</style>