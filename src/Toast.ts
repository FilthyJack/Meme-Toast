import {ToastInterface, OptionsType} from './interfaces';

export default class Toast implements ToastInterface {
    containers: Set<any>;
    constructor(){
        // Object.entries(options).forEach(([key, value])=> {
        //     this[key] = value;
        // })
        this.containers = new Set();
       
    }

    //position, message, duration, type
    toaster(options: OptionsType){
        const {position="bottom", message="Hi there Fella!", duration="2000", type="success"} = options;
        let toastContainer: Element | null = null;
        if(this.containers.has(position)){
            toastContainer = document.querySelector(`[data-position=${position}]`);
        }
        if(!toastContainer){
            toastContainer = document.createElement('div');
            toastContainer.classList.add('meme-toast-container');
            (toastContainer  as HTMLElement).dataset.position = position;
            this.containers.add(position);
        }
        window.addEventListener('unload', () => {
            if(toastContainer) {
                toastContainer.remove();
            }
        });
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

    remover(duration: string){
        const time = duration;
        if (time === 'infinite'){
            return;
        }
        setTimeout(()=>{
            const toasts = document.querySelectorAll('.meme-toast');
            toasts.forEach((toast)=>{
                if((toast as HTMLElement).dataset.duration === time){
                    const parent = toast.parentNode;
                    toast.remove();
                    if(parent && !parent.hasChildNodes()) {
                        (parent as HTMLElement).remove();
                    }
                }
            });
        }, parseInt(time));
    }
}

