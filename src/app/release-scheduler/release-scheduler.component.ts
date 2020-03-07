import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ToastService } from '../services/toast-service';

@Component({
    selector: 'app-release-scheduler',
    templateUrl: 'release-scheduler.component.html',
    styleUrls: ['release-scheduler.component.css']
})
export class ReleaseSchedulerComponent {
    @ViewChild('modalContent') modalContentRef;
    @Input() additionalCss?: string | string[];
    environments = ['Staging', 'Budapest', 'Neumann'];
    stacks = ['Aurora', 'Redis Cache', 'Maps', 'UBI3 Enroll', 'Pushit ETL',
        'Pushit Scheduled Events', 'Monitoring Period ETL', 'ECS Capacity',
        'Nginx proxy', 'DEX', 'SQS Dog', 'Frame Loom', 'Zengage', 'Zengage Monitoring',
        'Zengage DriverSync', 'Zengage KMS', 'Zengage Elasticsearch', 'Engage3', 'History Service', 'DDS Cass',
        'UBI3', 'Bruce', 'Mobile', 'Zuul'];


    @ViewChild('selectedEnvRef', { static: true }) selectedEnvRef: NgbTypeahead;
    selectedEnvFocus$ = new Subject<string>();
    selectedEnvClick$ = new Subject<string>();
    selectedEnvironment: string;

    @ViewChild('selectedStackRef', { static: true }) selectedStackRef: NgbTypeahead;
    selectedStackFocus$ = new Subject<string>();
    selectedStackClick$ = new Subject<string>();
    @Input() selectedStack: string;

    constructor(
        private modalService: NgbModal,
        private toastService: ToastService) { }

    openModal(): void {
        this.modalService.open(this.modalContentRef, { size: 'lg' }).result.then(result => {
            this.toastService.show(
                {
                    text: `Successfully scheduled ${this.selectedStack}`,
                    classname: 'bg-success text-light',
                    delay: 2500
                });
        }, err => {
            console.log(err);
        });
    }

    searchEnvironment = (text$: Observable<string>) => {
        const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
        const clicksWithClosedPopup$ = this.selectedEnvClick$.pipe(filter(() => this.selectedEnvRef && !this.selectedEnvRef.isPopupOpen()));
        const inputFocus$ = this.selectedEnvFocus$;

        return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
            map(term => (term === '' ? this.environments
                : this.environments.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
        );
    }

    searchStack = (text$: Observable<string>) => {
        const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
        const clicksWithClosedPopup$ = this.selectedStackClick$.pipe(
            filter(() => this.selectedStackRef && !this.selectedStackRef.isPopupOpen()));
        const inputFocus$ = this.selectedStackFocus$;

        return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
            map(term => (term === '' ? this.stacks
                : this.stacks.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
        );
    }

}
