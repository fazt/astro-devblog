<script>
    function showMessage() {
        alert('Hello world!');
    }

</script>

<h1>
    Svelte component
    <button on:click={showMessage}>
        Click me
    </button>
</h1>