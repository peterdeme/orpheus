import { Component, TemplateRef, HostBinding } from '@angular/core';
import { ToastService } from '../services/toast-service';
import { ToastOptions } from '../services/toast-options';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.css']
})
export class ToastContainerComponent {
  @HostBinding('class.ngb-toasts') ngbToasts = true;

  constructor(public toastService: ToastService) { }

  isTemplate(toast: ToastOptions) {
    return toast.text instanceof TemplateRef;
  }
}

