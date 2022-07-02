import { ToastInterface, OptionsType } from './interfaces';
export default class Toast implements ToastInterface {
    containers: Set<any>;
    constructor();
    toaster(options: OptionsType): void;
    remover(duration: string): void;
}
