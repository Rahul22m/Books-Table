<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    import {navigate} from 'svelte-routing';
    import Pagination from './Pagination.svelte';
    import Table from './Table.svelte';
    import Form from './Form.svelte';

    let books = [];
    let page = 1;
    let limit = 10;
    let total = 0;
    let errorMessage = "";

    $: totalPages = Math.ceil(total / limit);

    let id;
    let title;
    let subjects;
    let languages;
    let copyright;
    let media_type;
    let download_count;

    async function fetchData() {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:3000/books?limit=${limit}&page=${page}`,{
            headers: {
                'Authorization': `Bearer ${token}` 
            }
    });
        console.log('API Response:', response.data);
        const data = await response.data.data;
        books = data.books;
        total = data.total;
        console.log('Books', books);
        console.log('Total', total)
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) {
                alert('Session expired. Please log in again.');
                navigate('/login');
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


async function addBook(book) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:3000/books', book, {
            headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json',
            },

        });

        fetchData(); 
        console.log('Clearing form');
        clearForm(); 
    } catch (error) {
        if (error.response) {
            errorMessage = error.response.data.error || 'Failed to add book.';
            console.error(error.response.data.error);
        } else if (error.request) {
            errorMessage = 'No response received from the server.';
            console.error('No response received:', error.request);
        } else {
            errorMessage = 'Failed to add book.';
            console.error('Error setting up request:', error.message);
        }
    }
}


    function clearForm() {
        id = 0;
        title = '';
        subjects = '';
        languages = '';
        copyright = false;
        media_type='';
        download_count=0;
        console.log('Form cleared:', { id, title, subjects, languages, copyright, media_type, download_count });
    }

    function handlePageChange(newPage) {
        if (newPage < 1 || newPage > totalPages) return;
        page = newPage;
        fetchData();
    }

    onMount(() => {
        fetchData();
    });


const logout = async () => {
    try {
        const response = await axios.post('http://localhost:3000/logout', {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.status === 200) {
            localStorage.removeItem('token');
            navigate('/login');
        }
    } catch (error) {
      
        console.error('Logout error:', error);

        alert('An error occurred while logging out. Please try again.');
    }

}

const goToAdmin = async() => {
    navigate('/users'); // Adjust the path according to your routing setup
}

</script>



<div class="header">
    <h1>Books Details</h1>
    <button class="manage" on:click={goToAdmin}>Manage Users</button>
</div>


<div>
    <label for="limitInput">Limit:</label>
    <input type="number" id="limitInput" bind:value={limit} min="1">
    <button on:click={fetchData}>Submit</button>
    <button class="right" on:click={logout}>Logout</button>
    <!-- <button class="top" on:click -->
</div>




<Form id={id} title={title} subjects={subjects} languages={languages} copyright={copyright} media_type={media_type} download_count={download_count} onSubmit={addBook} onClearForm={clearForm} />

<Table {books} />

<Pagination {total} {limit} {page} changePage={handlePageChange} />


<style>
    button {
    background-color: rgb(43, 60, 114);
    color: rgb(244, 245, 249);
    border-radius: 8px;
    width: 80px;
    height: 30px;
    font-size: 20px;
    margin-bottom: 10px;
    cursor: pointer;
}
    .right{
        float: right;

    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1{
        margin:10px;
        text-align: center;
        flex-grow: 1;
        
    }
    .manage{
        width: 150px;
        height: 30px;
    }

</style>
