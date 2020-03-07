import { TemplateRef } from '@angular/core';

export interface ToastOptions {
    text: string | TemplateRef<any>;
    classname?: string;
    delay?: number;
}