<script>
    export let books = [];

    // $: {
    //     if (!Array.isArray(books)) {
    //         console.error('Books is not an array:', books);
    //     }
    // }
</script>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <!-- <th>Authors_name</th>
            <th>Authors_birth_year</th>
            <th>Authors_death_year</th> -->
            <th>Subjects</th>
            <!-- <th>Bookshelves</th> -->
            <th>Languages</th>
            <th>Copyright</th>
            <th>Media_Type</th>
            <th>Downloads</th>
        </tr>
    </thead>
    <tbody>
        {#each books as book}
            <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <!-- <td>{book.translators.map(t => `${t.name} ${t.birth_year} ${t.death_year}`).join(', ')}</td> -->
                <td>{(book.subjects || []).join(', ')}</td>
                <!-- <td>{(book.bookshelves || []).join(', ')}</td> -->
                <td>{(book.languages || []).join(', ')}</td>
                <td>{book.copyright}</td>
                <td>{book.media_type}</td>
                <td>{book.download_count}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        margin-top: 10px;
        height: fit-content;
        border-collapse: separate;
        border-spacing: 0;
        border: 1px solid #dadada;
        border-radius: 15px;
        overflow: hidden;
    }
    th {
        background-color: #f5f6f9;
        color: rgb(148, 148, 168);
        text-align: center;
    }

    td {
        border-bottom: 1px solid #dadada;
        padding: 15px;
        text-align: center;
    }

    table tr td:nth-child(2) {
        color: rgb(87, 161, 199);
    }

</style>
