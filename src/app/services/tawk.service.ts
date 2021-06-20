import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { TawkUser } from "../models/tawkUser.model";

declare var Tawk_API: any;

@Injectable()
export class TawkService {

    private loaded: boolean;
    private loadSubject: Subject<boolean> = new Subject<boolean>();
    private renderer: Renderer2;

    constructor(
        private rendererFactory: RendererFactory2,
        @Inject(DOCUMENT) private _document: Document,
        ) {
            this.renderer = rendererFactory.createRenderer(null, null);
            this.load();
        }

    private load(){
        if(this.loaded)
            return;

        const s = this.renderer.createElement('script');
        s.type = 'text/javascript';
        s.text = `
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/60cf4a2465b7290ac636ec30/1f8krj8e6';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();`;
        
        this.renderer.appendChild(this._document.body,s);
        Tawk_API.onLoad = this.loadedEvent.bind(this);
    }

    private loadedEvent(){
        this.loaded = true;
        this.loadSubject.next(this.loaded);
    }

    private loadedWrapper(func: Function){ 
        if(!this.loaded){
            var sub = this.loadSubject.asObservable().subscribe({
                next: () => {
                    func();
                    sub.unsubscribe();
                },
                error: () => {}
                });
        } else {
            func();
        }
    }

    private updateAtrributes(user: TawkUser){
        Tawk_API.setAttributes({
            'name'  : `${user.firstname} ${user.surname}`,
            'email' : user.email,
            'id'  : user.id,
        }, function(error){});
    }

    public ExpandChatWindow(show: boolean = false){
        this.loadedWrapper(() => show ? Tawk_API.maximize() : Tawk_API.minimize());
    }

    public SetChatVisibility(show: boolean = false) {
        this.loadedWrapper(() => show ? Tawk_API.showWidget() : Tawk_API.hideWidget());
    }

    public UpdateTawkUser(user: TawkUser) {
        this.loadedWrapper(() => {this.updateAtrributes(user)});
    }
}