class Product {
    constructor(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card" style="width: 300px;">
            <div class="card-section">
            <p><strong>Product name:</strong> ${product.name}</p>
            <p><strong>Product price:</strong> ${product.price}</p>
            <p><strong>Product type:</strong> ${product.type}</p>
            <a href="#" class="alert button" name="delete">Delete</a>
            </div>
        </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessages('Product deleted successfully', 'alert');
        }
    }

    showMessages(message, cssClass) {
        const div = document.createElement('div');
        div.className = `callout ${cssClass}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.grid-container');
        const app = document.querySelector('#app');

        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.callout').remove();
        }, 1500);
    }
}

//DOM Events
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const type = document.getElementById('type').value;

    const product = new Product(name, price, type);

    const ui = new UI();

    if(name === '' || price === '' || type === '') {
        return ui.showMessages('Please, you need fill the fields', 'warning');
    }

    ui.addProduct(product);
    ui.resetForm(e.target);
    ui.showMessages('Product added successfully', 'success');

});

document.getElementById('product-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
})