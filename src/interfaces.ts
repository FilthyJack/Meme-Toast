export type position = "top-left" | "top" | "top-right" | "bottom";
export type type = "success" | "danger" | "message" | "warning";

export type OptionsType = {
    position: position;
    message: string;
    duration: string;
    type: type;
}

export interface ToastInterface {
    toaster: (options: OptionsType) => void;
    remover: (duration: string) => void;
}