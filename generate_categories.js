const fs = require('fs');

const categories = [
    { name: "HEALTH PRODUCTS", slug: "health-products", count: 69 },
    { name: "NOTEBOOKS", slug: "notebooks", count: 7 },
    { name: "STICKERS", slug: "stickers", count: 50 },
    { name: "TABLE DECORATIVES", slug: "table-decoratives", count: 18 },
    { name: "GIFT ITEMS", slug: "gift-items", count: 38 },
    { name: "ELECTRONIC PRODUCTS", slug: "electronic-products", count: 8 },
    { name: "VANGMAY", slug: "vangmay", count: 79 },
    { name: "MAGAZINES", slug: "magazines", count: 10 },
    { name: "BOOKS", slug: "books", count: 1262 },
    { name: "PHOTO - FRAMES", slug: "photo-frames", count: 13 },
    { name: "PUJA ACCESSORIES", slug: "puja-accessories", count: 53 },
    { name: "DAILY USE", slug: "daily-use", count: 4 },
    { name: "COMBO SET", slug: "combo-set", count: 28 },
    { name: "HANDLOOM", slug: "handloom", count: 22 },
    { name: "POSTERS", slug: "posters", count: 16 }
];

const template = fs.readFileSync('cd-dvd.html', 'utf8');

for (const cat of categories) {
    let content = template;
    
    // Replace title
    content = content.replace(/<h1 id="category-title" .*?<\/h1>/, `<h1 id="category-title" style="text-transform: capitalize;">${cat.name} Collection</h1>`);
    
    // Replace ID
    content = content.replace(/cd-dvd-product-grid/g, `${cat.slug}-product-grid`);
    content = content.replace(/cdDvdProducts/g, `${cat.slug.replace(/-/g, '')}Products`);
    
    // Replace loops
    content = content.replace(/for\(let i = 1; i <= 32; i\+\+\) \{/, `for(let i = 1; i <= ${cat.count}; i++) {`);
    
    // Replace push
    content = content.replace(/id: 'cddvd-' \+ i,/, `id: '${cat.slug}-' + i,`);
    content = content.replace(/name: 'Spiritual Discourses Volume ' \+ i,/, `name: '${cat.name} Item ' + i,`);
    content = content.replace(/description: 'Premium spiritual CD\/DVD collection item ' \+ i,/, `description: 'Premium ${cat.name} collection item ' + i,`);
    content = content.replace(/fullDesc: 'A wonderful collection of discourses that will soothe your mind and soul\. Expertly captured audio\/visuals\.'/, `fullDesc: 'High quality ${cat.name} designed to enrich your life and collection.'`);
    
    // Lazy rendering for books
    if (cat.slug === 'books') {
        const renderLoop = `
        let currentIndex = 0;
        const chunkSize = 20;

        function loadMore() {
            const fragment = document.createDocumentFragment();
            const end = Math.min(currentIndex + chunkSize, booksProducts.length);
            
            for (let i = currentIndex; i < end; i++) {
                const prod = booksProducts[i];
                const itemInCart = cart.find(item => item.name === prod.name);
                const qty = itemInCart ? itemInCart.quantity : 0;
                const hasQtyClass = qty > 0 ? "has-qty" : "";

                const card = document.createElement('div');
                card.className = 'product-card';
                card.dataset.id = prod.id;
                card.innerHTML = \`
                    <img src="\${prod.image}" alt="\${prod.name}" class="product-image clickable-product" data-id="\${prod.id}" data-name="\${prod.name}">
                    <h3 class="product-category clickable-product" data-id="\${prod.id}" data-name="\${prod.name}">\${prod.name}</h3>
                    <p class="detail-price" style="font-size: 1.2rem; color: var(--btn-buy); margin-top:0.5rem; margin-bottom: 1rem;">\${prod.price}</p>
                    <div class="card-buttons" style="gap: 10px; flex-direction: row; display: flex;">
                        <button class="btn btn-buy clickable-product" data-id="\${prod.id}" data-name="\${prod.name}" style="flex: 1;">Buy Now</button>
                        <div class="cart-interactive-box \${hasQtyClass}" data-parent-product="\${prod.name}" style="flex: 1;">
                            <button class="btn btn-cart add-to-cart-action action-btn" data-name="\${prod.name}" style="width: 100%;">Add to Cart</button>
                            <div class="qty-controls">
                                <button class="qty-btn decrement" data-name="\${prod.name}">-</button>
                                <span class="qty-val" data-name="\${prod.name}" id="qty-val-\${prod.name.replace(/\\s+/g, '-')}">\${qty}</span>
                                <button class="qty-btn increment" data-name="\${prod.name}">+</button>
                            </div>
                        </div>
                    </div>
                \`;
                fragment.appendChild(card);
            }
            grid.appendChild(fragment);
            currentIndex = end;
        }

        loadMore();

        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
                if (currentIndex < booksProducts.length) {
                    loadMore();
                }
            }
        });
        `;
        
        content = content.replace(/booksProducts\.forEach\(prod => \{[\s\S]*?\}\);/, renderLoop);
    }
    
    fs.writeFileSync(`${cat.slug}.html`, content);
}
console.log("Generated 15 category files successfully.");
