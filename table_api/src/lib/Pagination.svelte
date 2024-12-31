<script>
    export let page = 1;
    export let total = 0;
    export let limit = 10;
    export let changePage = (page) => {};

    $: totalPages =Math.ceil(total / limit)||1;

    function onPageChange(event) {
        const newPage = parseInt(event.target.value, 10);
        if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
            changePage(newPage);
        }
    }
</script>

<div class="pagination-controls">
    <button on:click={() => changePage(1)} disabled={page <= 1}>&laquo;</button>
    <button on:click={() => changePage(page - 1)} disabled={page <= 1}>&lt;</button>
    <span id="pageDisplay">
        Page <input id="pageInput" type="number" min="1" value={page} on:change={onPageChange}> of {totalPages}
    </span>
    <button on:click={() => changePage(page + 1)} disabled={page >= totalPages}>&gt;</button>
    <button on:click={() => changePage(totalPages)} disabled={page >= totalPages}>&raquo;</button>
</div>

<style>
    .pagination-controls {
        text-align: center;
        margin-top: 20px;
    }

    .pagination-controls button {
        margin: 0 5px;
        padding: 5px 10px;
        font-size: 1.2rem;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }

    .pagination-controls button:disabled {
        background-color: #d6d6d6;
        cursor: not-allowed;
    }

    #pageDisplay {
        margin: 0 10px;
        font-weight: bold;
    }

    #pageInput {
        width: 60px;
        text-align: center;
    }
</style>
