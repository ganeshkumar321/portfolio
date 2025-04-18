console.log("IT'S ALIVE!")

function $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

// let navLinks = $$("nav a");
// let currentLink = navLinks.find(
//     (a) => a.host === location.host && a.pathname === location.pathname
// );
// currentLink?.classList.add("current");

const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
? "/"              
: "/website/";

let pages =[
    {url: '', title: 'Home'},
    {url: 'Contact/', title: 'Contact'},
    {url: 'Projects/', title: 'Projects'},
    {url: 'Resume/', title: 'Resume'},
    {url:  'https://github.com/ganeshkumar321', title: 'Github Profile'}
];

let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages){
    let url = p.url;
    let title = p.title;
    url = !url.startsWith('http') ? BASE_PATH + url : url;

    nav.insertAdjacentHTML('beforeend', `<a href="${url}">${title}</a>`);

    // let a = document.createElement('a');
    // a.href = url;
    // a.textContent = title;
    // a.classList.toggle("current", (a.host === location.host) && (a.pathname === location.pathname));
    // nav.append(a);
}

         

