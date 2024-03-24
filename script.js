const links = document.querySelectorAll('ul li');
const box = document.querySelector('.box');

links.forEach((link)=> {
    link.addEventListener('mouseenter', function() {
        box.style.opacity = 1;
        box.style.height = '400px';

        if(link.textContent === "Store") {
            box.innerHTML = `<div>
            <p>kaufen</p>
            <li>Das Neuste Kaufen</li>
            <li>Mac</li>
            <li>Ipad</li>
            <li>Iphone</li>
            <li>Apple Watch</li>
            <li>Zübehör</li>
        </div>
        <div>
            <p>Quick links</p>
            <li>Blabalabal</li>
            <li>Blabalabal</li>
            <li>Blabalabal</li>
            <li>Blabalabal</li>
        </div>
        <div>
            <p>Spezielle Stores</p>
            <li>Blabalabal</li>
            <li>Blabalabal</li>
            <li>Blabalabal</li>
            <li>Blabalabal</li>
        </div>`
        }
    
        if(link.textContent === 'Mac') {
            box.innerHTML = `<div>
            <p>kaufen 2</p>
            <li>Das Neuste Kaufen 2</li>
            <li>Mac 2</li>
            <li>Ipad 2</li>
            <li>Iphone 2</li>
            <li>Apple Watch 2</li>
            <li>Zübehör 2</li>
        </div>
        <div>
            <p>Quick links 2</p>
            <li>Blabalabal 2</li>
            <li>Blabalabal 2</li>
            <li>Blabalabal 2</li>
            <li>Blabalabal 2</li>
        </div>
        <div>
            <p>Spezielle Stores 2</p>
            <li>Blabalabal 2</li>
            <li>Blabalabal 2</li>
            <li>Blabalabal 2</li>
            <li>Blabalabal 2</li>
        </div>`
        }
    
        if(link.textContent === 'iPad') {
            box.innerHTML = `<div>
                <p>iPad Content</p>
                <li>iPad Item 1</li>
                <li>iPad Item 2</li>
                <li>iPad Item 3</li>
                <li>iPad Item 4</li>
            </div>
            <div>
                <p>iPad Content</p>
                <li>iPad Item 1</li>
                <li>iPad Item 2</li>
                <li>iPad Item 3</li>
                <li>iPad Item 4</li>
            </div>
            <div>
                <p>iPad Content</p>
                <li>iPad Item 1</li>
                <li>iPad Item 2</li>
                <li>iPad Item 3</li>
                <li>iPad Item 4</li>
            </div>
            `;
        }
    
        if(link.textContent === 'iPhone') {
            box.innerHTML = `<div>
                <p>iPhone Content</p>
                <li>iPhone Item 1</li>
                <li>iPhone Item 2</li>
                <li>iPhone Item 3</li>
                <li>iPhone Item 4</li>
            </div>
            <div>
                <p>iPhone Content</p>
                <li>iPhone Item 1</li>
                <li>iPhone Item 2</li>
                <li>iPhone Item 3</li>
                <li>iPhone Item 4</li>
            </div>
            <div>
                <p>iPhone Content</p>
                <li>iPhone Item 1</li>
                <li>iPhone Item 2</li>
                <li>iPhone Item 3</li>
                <li>iPhone Item 4</li>
            </div>
            `;
        }
        if(link.textContent === 'Watch') {
            box.innerHTML = `<div>
                <p>Apple Watch Content</p>
                <li>Apple Watch Item 1</li>
                <li>Apple Watch Item 2</li>
                <li>Apple Watch Item 3</li>
                <li>Apple Watch Item 4</li>
            </div>`;
        }
        
        if(link.textContent === 'AirPods') {
            box.innerHTML = `<div>
                <p>AirPods Content</p>
                <li>AirPods Item 1</li>
                <li>AirPods Item 2</li>
                <li>AirPods Item 3</li>
                <li>AirPods Item 4</li>
            </div>`;
        }
        
        if(link.textContent === 'TV & Home') {
            box.innerHTML = `<div>
                <p>TV & Home Content</p>
                <li>TV & Home Item 1</li>
                <li>TV & Home Item 2</li>
                <li>TV & Home Item 3</li>
                <li>TV & Home Item 4</li>
            </div>`;
        }
        
        if(link.textContent === 'Entertainment') {
            box.innerHTML = `<div>
                <p>Entertainment Content</p>
                <li>Entertainment Item 1</li>
                <li>Entertainment Item 2</li>
                <li>Entertainment Item 3</li>
                <li>Entertainment Item 4</li>
            </div>`;
        }
        
        if(link.textContent === 'Zubehör') {
            box.innerHTML = `<div>
                <p>Zubehör Content</p>
                <li>Zubehör Item 1</li>
                <li>Zubehör Item 2</li>
                <li>Zubehör Item 3</li>
                <li>Zubehör Item 4</li>
            </div>`;
        }
        
        if(link.textContent === 'Support') {
            box.innerHTML = `<div>
                <p>Support Content</p>
                <li>Support Item 1</li>
                <li>Support Item 2</li>
                <li>Support Item 3</li>
                <li>Support Item 4</li>
            </div>`;
        }
    })
})

box.addEventListener('mouseleave', function() {
    box.style.opacity = 0;
    box.style.height = '0px';
})