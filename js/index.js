document.addEventListener("DOMContentLoaded", function() {
    //
    const bookList = document.getElementById('list');

    fetch('http://localhost:3000/books').then((response)=>response.json()).then((data)=>{
        data.map((book)=>{
            const bookData = document.createElement('li');
            bookData.innerHTML=`
                <span>${book.title}</span>
            `
            bookData.addEventListener('click',()=>{
                document.getElementById("show-panel").innerHTML=`
                    <img src="${book.img_url}" alt="book image"/>
                    <p><strong>${book.title}</strong></p>
                    <p><strong>${book.subtitle}</strong></p>
                    <p><strong>${book.author}</strong></p>
                    <p>${book.description}</p>
                    <ul>
                        ${book.users.map((user)=>{
                            return `<li>${user.username}</li>`
                        })}
                    </ul>
                `
            })
            bookList.appendChild(bookData)
        })
    }).catch((err)=>{console.error(err)})
});
