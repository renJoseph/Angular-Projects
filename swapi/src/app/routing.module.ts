import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { SearchResultsComponent } from './search-results/search-results.component';
import { ResultInfoComponent } from './result-info/result-info.component';

const routes = [
    {
        path: 'results',
        component: SearchResultsComponent
    },
    {
        path: 'info/:id',
        component: ResultInfoComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})

export class routingModule {}