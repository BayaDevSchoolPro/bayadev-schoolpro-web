
import { BayadevejemplotemplateBreadcrumbService } from './bayadevejemplotemplate.breadcrumb.service';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/primeng';
import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'bayadevejemplotemplate-breadcrumb',
    templateUrl: './bayadevejemplotemplate.breadcrumb.component.html'
})
export class BayadevejemplotemplateBreadcrumbComponent implements OnDestroy {

    subscription: Subscription;

    items: MenuItem[];

    constructor(public breadcrumbService: BayadevejemplotemplateBreadcrumbService) {
        this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
            this.items = response;
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
