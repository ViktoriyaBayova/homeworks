let items = document.querySelectorAll('.dropdown-item');
[].forEach.call(items, (item) => {
    item.addEventListener('click', (e) => {
        let closest = e.target.closest('.dropdown-item'); 
        closest.querySelector('.dropdown-menu').classList.toggle('d-none');
        [].forEach.call(items, (item) => {
            if(item != closest)
                item.querySelector('.dropdown-menu').classList.add('d-none');
        });
    });
});
