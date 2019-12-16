# NgQuill

this is light version to use quill in your angular project

## How to use 

Run `npm install ng-quill-simple` from your terminal and after that import  NgQuillModule into your module 

`import { NgQuillModule } from 'ng-quill-simple'`

```
@NgModule({
    declarations: [],
    imports: [
        NgQuillModule,
    ],
    exports: []
})
```

## Right now you have 2 components 

Editor Component
```
<ng-quill-editor (onContentChange)="onChange($event)" [data]="data"> </ng-quill-editor>

```

View Component

```
<ng-quill-view [innerHTML]="content"> </ng-quill-view>
```

### domSanitizer.bypassSecurityTrustHtml(content)

I recommend to use `domSanitizer.bypassSecurityTrustHtml` in the view component 
