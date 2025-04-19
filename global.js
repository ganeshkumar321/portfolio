console.log("IT'S ALIVE!")

// function $$(selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }
// let navLinks = $$("nav a");
// let currentLink = navLinks.find(
//     (a) => a.host === location.host && a.pathname === location.pathname
// );
// currentLink?.classList.add("current");

const BASE_PATH = (location.hostname === "localhost" || location.hostname === "127.0.0.1")
? "/"              
: "/portfolio/";

let pages =[
    {url: '', title: 'Home'},
    {url: 'Contact/', title: 'Contact'},
    {url: 'Projects/', title: 'Projects'},
    {url: 'Resume/', title: 'Resume'},
    {url:  'https://github.com/ganeshkumar321', title: 'Github Profile'}
];

let nav = document.createElement('nav');
document.body.prepend(nav);
console.log("hi");

for (let p of pages){
    let url = p.url;
    let title = p.title;
    url = !url.startsWith('http') ? BASE_PATH + url : url;

    // nav.insertAdjacentHTML('beforeend', `<a href="${url}">${title}</a>`);

    let a = document.createElement('a');
    a.href = url;
    a.textContent = title;
    a.classList.toggle("current", (a.host === location.host) && (a.pathname === location.pathname));
    if (!(a.host === location.host)){
        a.target="_blank";
    }
    nav.append(a);
}

document.body.insertAdjacentHTML('afterbegin', 
    `<label class="color-scheme">
    Theme:
    <select>
        <option value="light dark">Automatic</option>
        <option value="light">light</option>
        <option value="dark">dark</option>
    </select>
    </label>`
);


let select = document.querySelector('label.color-scheme select')

if ('colorScheme' in localStorage){
    document.documentElement.style.setProperty('color-scheme', localStorage.colorScheme);
    select.value = localStorage.colorScheme;
}

select.addEventListener('input', function(event){
    console.log('color scheme changed to', event.target.value);
    document.documentElement.style.setProperty('color-scheme', event.target.value);
    localStorage.colorScheme = event.target.value;
});




         

