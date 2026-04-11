const fs = require('fs');

const extendedCategories = [
    { name: "Life Management", slug: "life-management", count: 190 },
    { name: "Self Help", slug: "self-help", count: 239 },
    { name: "Philosophy", slug: "philosophy", count: 48 },
    { name: "Social Improvements", slug: "social-improvements", count: 102 },
    { name: "Gayatri Pariwar", slug: "gayatri-pariwar", count: 79 },
    { name: "Indian Culture", slug: "indian-culture", count: 353 },
    { name: "Parenting Relation", slug: "parenting-relation", count: 182 },
    { name: "Constructing Era", slug: "constructing-era", count: 259 },
    { name: "Yoga Pranayam", slug: "yoga-pranayam", count: 77 },
    { name: "Science Spirituality", slug: "science-spirituality", count: 255 },
    { name: "Childrens", slug: "childrens", count: 136 },
    { name: "Teens Students", slug: "teens-students", count: 88 },
    { name: "Spirituality", slug: "spirituality", count: 376 },
    { name: "Health Fitness", slug: "health-fitness", count: 164 },
    { name: "Bhajan Sangeet", slug: "bhajan-sangeet", count: 23 }
];

const template = fs.readFileSync('books.html', 'utf8');

for (const cat of extendedCategories) {
    let content = template;
    
    // Replace title
    content = content.replace(/<h1 id="category-title" .*?<\/h1>/, `<h1 id="category-title" style="text-transform: capitalize;">${cat.name} Collection</h1>`);
    
    // Replace ID
    content = content.replace(/books-product-grid/g, `${cat.slug}-product-grid`);
    content = content.replace(/booksProducts/g, `${cat.slug.replace(/-/g, '')}Products`);
    
    // Replace loops limit
    content = content.replace(/for\(let i = 1; i <= 1262; i\+\+\) \{/, `for(let i = 1; i <= ${cat.count}; i++) {`);
    
    // Replace push
    content = content.replace(/id: 'books-' \+ i,/, `id: '${cat.slug}-' + i,`);
    content = content.replace(/name: 'BOOKS Item ' \+ i,/, `name: '${cat.name} Item ' + i,`);
    content = content.replace(/description: 'Premium BOOKS collection item ' \+ i,/, `description: 'Premium ${cat.name} collection item ' + i,`);
    content = content.replace(/fullDesc: 'High quality BOOKS designed to enrich your life and collection\.'/, `fullDesc: 'High quality ${cat.name} designed to enrich your life and collection.'`);
    
    fs.writeFileSync(`${cat.slug}.html`, content);
}
console.log("Generated 15 horizontal category files successfully.");
