import { Injectable } from '@angular/core';
import { ToastOptions } from './toast-options';

@Injectable({ providedIn: 'root' })
export class ToastService {
    toasts: ToastOptions[] = [];

    show(options: ToastOptions) {
        this.toasts.push(options);
    }

    remove(toast: ToastOptions) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
}
