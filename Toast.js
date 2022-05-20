export default class Toast {
    constructor(){
        // Object.entries(options).forEach(([key, value])=> {
        //     this[key] = value;
        // })
        this.containers = new Set();
       
    }

    set position(value) {
        console.log(value);
    }

    //position, message, duration, type
    toaster(options){
        const {position="bottom", message="Hi there Fella!", duration="2000", type="success"} = options;
        let toastContainer;
        if(this.containers.has(position)){
            toastContainer = document.querySelector(`[data-position=${position}]`);
        }
        if(!toastContainer){
            toastContainer = document.createElement('div');
            toastContainer.classList.add('meme-toast-container');
            toastContainer.dataset.position = position;
            this.containers.add(position);
        }
        const toast = document.createElement('div');
        toast.classList.add('meme-toast');
        toast.classList.add(type);
        toast.dataset.duration = duration;
        const pTag = document.createElement('p');
        pTag.innerText = message;
        toast.appendChild(pTag);

        toastContainer.appendChild(toast);
        document.body.appendChild(toastContainer);
        this.remover(duration);
    }

    remover(duration){
        const time = duration;
        if (time === 'infinite'){
            return;
        }
        setTimeout(()=>{
            const toasts = document.querySelectorAll('.meme-toast');
            toasts.forEach((toast)=>{
                if(toast.dataset.duration === time){
                    const parent = toast.parentNode;
                    toast.remove();
                    if(!parent.hasChildNodes()) {
                        parent.remove();
                    }
                }
            });
        }, parseInt(time));
    }

    toast(options) {
        const {position="bottom", message="Hi there Fella!", duration="2000", type="success"} = options;
        let toastContainer = document.querySelector('.meme-toast-container');
        if(toastContainer === undefined || toastContainer === null) {
            toastContainer = document.createElement('div');
            toastContainer.classList.add('meme-toast-container');
        }

        const toast = document.createElement('div');
        toast.classList.add('meme-toast');
        toast.classList.add(type);
        toast.dataset.duration = duration;
        const pTag = document.createElement('p');
        pTag.innerText = message;
        toast.appendChild(pTag);
        toast.dataset.position = position;

        toastContainer.appendChild(toast);
        document.body.appendChild(toastContainer);
        this.remove(duration);
    }

    remove(duration) {
        const time = duration;
        if (time === 'infinite'){
            return;
        }
        setTimeout(()=>{
            const container = document.querySelector('.meme-toast-container');
            const toasts = container.querySelectorAll('.meme-toast');
            toasts.forEach((toast)=>{
                if(toast.dataset.duration === time){
                    console.log('here');
                    toast.remove();
                }
            });
            if(container.querySelectorAll('.meme-toast').length === 0){
                container.remove();
            }
        }, parseInt(time));
    }
}

