
const TitleInput = document.getElementById("Title");
const DateInput = document.getElementById("Date");
const ThoughtsInput = document.getElementById("Thoughts");
const displayTable = document.getElementById("mainTable");
const img = document.getElementById("happy");

document.getElementById("button").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})

window.onload=function(){
    const TitleInStorage = localStorage.getItem("Title");
    const DateInStorage = localStorage.getItem("Date");
    const ThoughtsInStorage = localStorage.getItem("Thoughts");
    const data = {
        Title: TitleInStorage,
        Date: DateInStorage,
        Thoughts: ThoughtsInStorage
    }
    template(data);
}

document.getElementById("popupSubmit").addEventListener("click", function(event){
    const Title = TitleInput.value;
    const Date = DateInput.value;
    const Thoughts = ThoughtsInput.value;

    localStorage.setItem("Title", Title);
    localStorage.setItem("Date", Date);
    localStorage.setItem("Thoughts", Thoughts);
    
    let allData = [];

    

    const data = {
        Title: Title,
        Date: Date,
        Thoughts: Thoughts
    }
    
    
    event.preventDefault();


    template(data);

    document.querySelector(".popup").style.display = "none";
});

function template(data){
    displayTable.insertAdjacentHTML("beforeend", `
    <tr>
        <th>Title: ${data.Title}</th>
        <th>Date: ${data.Date}</th> 
        <td id="userInput">My Thoughts: <br> ${data.Thoughts}</td>
        <td><img src = "../public/img/HappyFace.png"/></td>
    </tr>
    `)


}



