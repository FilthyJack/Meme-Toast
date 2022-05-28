export default class Toast {
    constructor(){
        // Object.entries(options).forEach(([key, value])=> {
        //     this[key] = value;
        // })
        this.containers = new Set();
       
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
        toast.addEventListener('click', (e) => {
            toast.remove();
        });
        toastContainer.appendChild(toast);
        document.body.appendChild(toastContainer);
        //appendchild is synchronous
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
}

