<style>
  form {
    display: flex;
    padding: 8px;
  }

  input {
    background: black;
    border-radius: 2px;
    color: #ccc;
    border: 0;
    margin-right: 8px;
    text-indent: 8px;
    width: 400px;
    font-size: 16px;
  }

  input::placeholder {
    font-style: italic;
  }

  button {
    background: #e1017a;
    border: 0;
    border-radius: 2px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    padding: 4px 10px;
  }
</style>

<form>
  <input type="text" placeholder="Search for a song..." />
  <button type="submit">Search</button>
</form>
