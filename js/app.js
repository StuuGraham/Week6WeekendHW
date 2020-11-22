document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-car-form');
    newItemForm.addEventListener('submit', handleNewCar);

    const deleteAllCars = document.querySelector('#delete-all');
    deleteAllCars.addEventListener('click', handleDeleteAllCars);
})

const handleNewCar = function (event) {
    event.preventDefault();

    const carListItem = createCarListItem(event.target);
    const carList = document.querySelector('#fave-car-list');
    carList.appendChild(carListItem);

    event.target.reset();
}

const createCarListItem = function (form) {
    const carListItem = document.createElement('li');
    carListItem.classList.add('fave-car-list-item');

    const manufacturer = document.createElement('h2');
    manufacturer.textContent = form.manufacturer.value;
    carListItem.appendChild(manufacturer);

    const model = document.createElement('h3');
    model.textContent = form.model.value;
    carListItem.appendChild(model);

    const bhp = document.createElement('p');
    bhp.textContent = form.bhp.value;
    carListItem.appendChild(bhp);

    const category = document.createElement('p');
    category.textContent = form.category.value;
    carListItem.appendChild(category);

    return carListItem;
}

const handleDeleteAllCars = function (event) {
    const carList = document.querySelector('#fave-car-list');
    carList.innerHTML = '';
}