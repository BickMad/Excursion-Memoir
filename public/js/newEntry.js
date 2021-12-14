function handleSubmit(){
    const Title = document.getElementById('Title').value;
    const Date = document.getElementById('Date').values;
    const Thoughts = document.getElementById('textArea').values;

    localStorage.getItem("Title", Title);
    localStorage.getItem("Date", Date);
    localStorage.getItem("Thoughts", Thoughts);

    return;
}