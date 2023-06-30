function booksFilter(...books){
    let filterResult = []
    let otherBooks = []
    for(let i = 0; i < books.length; i++) {
        if(books[i].toLowerCase().includes('у')){
            filterResult.push(books[i]);
        }else{
            otherBooks.push(books[i]);
        }
    }
    console.log(filterResult);
    console.log(otherBooks);
}