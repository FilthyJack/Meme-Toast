export default class Toast {
    constructor(){
        // Object.entries(options).forEach(([key, value])=> {
        //     this[key] = value;
        // })
    }

    set position(value) {
        console.log(value);
    }

    toast(options) {
        const {position="bottom", message="Hi there!"} = options;
        const toastContainer = document.createElement('div');
        toastContainer.classList.add('meme-toast-container');
        const toast = document.createElement('div');
        toast.classList.add('meme-toast');
        toast.innerText = message;
        toastContainer.dataset.position = position;

        toastContainer.appendChild(toast);
        document.body.appendChild(toastContainer);
        this.remove();
    }

    remove() {
        setTimeout(()=>{
            const container = document.querySelector('.meme-toast-container');
            container.remove();
        }, 3000);
    }
}

