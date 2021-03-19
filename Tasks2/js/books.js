const fieldAllBooks = document.querySelector("div.container");
const ul = document.createElement('ul');
const books = [
    {title: "Физика на бъдещето",
    author: "Мичио Каку",
    link: "https://www.ozone.bg/product/fizika-na-b-descheto/",
    img: "img/books/future.jpg",
    status: "unread"},
    {title: "Murach's JavaScript and jQuery",
    author: "Zak Ruvalcaba",
    link: "https://www.amazon.com/Murachs-JavaScript-jQuery-Zak-Ruvalcaba/dp/1890774707",
    img: "img/books/javascript.jpg",
    status: "unread"},
    {title: "Седемте навика на високо ефективните хора", 
    author: "Стивън Кови", 
    link: "https://www.book.store.bg/p31914/sedemte-navika-na-visokoefektivnite-hora-stivyn-kovi.html",
    img: "img/books/sedem_navika.jpg",
    status: "read"}, 
    {title: "5 секундното правило", 
    author: "Мел Робинс", 
    link: "https://www.book.store.bg/p259042/5-sekundnoto-pravilo-mel-robins.html",
    img: "img/books/5sec_pravilo.jpg",
    status: "read"}
];
const book = books.map(item => {
    const li = document.createElement('li');
    li.classList.add(item.status);
    
    const img = document.createElement('img');
    img.setAttribute("src", item.img);
    
    const link = document.createElement('a');
    link.setAttribute("href", item.link);
    link.setAttribute("target", "_blank");
    link.innerHTML = item.title + " - " + item.author;
    
    li.appendChild(img);
    li.appendChild(link);
    
    ul.appendChild(li);
}); 
fieldAllBooks.appendChild(ul);