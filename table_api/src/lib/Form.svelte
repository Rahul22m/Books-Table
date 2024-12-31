<script>
    export let id = 0;
    export let title = "";
    export let subjects = "";
    export let languages = "";
    export let copyright = false;
    export let media_type = "";
    export let download_count = 0;
    export let onSubmit = (data) => {};
    export let onClearForm = () => {};

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({
            id,
            title,
            subjects: subjects.split(",").map((s) => s.trim()),
            languages: languages.split(",").map((l) => l.trim()),
            copyright,
            media_type,
            download_count,
        });
        onClearForm();
    }
</script>

<form on:submit={handleSubmit}>
    <div class="form-container">
        <lable
            >Id
            <input type="number" placeholder="ID" bind:value={id} />
        </lable>
        <label
            >Title
            <input type="text" placeholder="Title" bind:value={title} />
        </label>
        <label
            >Subjects<input
                type="text"
                placeholder="Subjects (comma-separated)"
                bind:value={subjects}
            />
        </label>
        <label
            >Languages
            <input
                type="text"
                placeholder="Languages (comma-separated)"
                bind:value={languages}
            />
        </label>
        <label
            >Copyright
            <input
                type="checkbox"
                placeholder="Copyright"
                bind:checked={copyright}
            />
        </label>
        <label
            >Media Type
            <input
                type="text"
                placeholder="Media Type"
                bind:value={media_type}
            />
        </label>
        <label
            >Downloads
            <input
                type="number"
                placeholder="Downloads"
                bind:value={download_count}
            />
        </label>
    </div>
    <button type="submit">Add Book</button>
</form>

<style>
    .form-container {
        display: inline-block;
        flex-direction: column;
        align-items: start;
        margin-bottom: 20px;
    }

    /* .form-container input, */
    /* .form button {
        margin: 5px;
    }  */
    button {
        background-color: rgb(43, 60, 114);
        color: rgb(244, 245, 249);
        border-radius: 8px;
        width: 120px;
        height: 30px;
        font-size: 20px;
        margin-bottom: 10px;
        cursor: pointer;
    }
</style>
