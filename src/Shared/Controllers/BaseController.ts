import { HttpParams } from '@angular/common/http';
import { APIController } from './APIController';
import { ParamsKey } from '../Utils/Network/ParamsKey';
import { Cmd } from '../Utils/Network/Cmd';

export class BaseController<T>{

    public router: string = "";
    public items: Array<T> = [];
    public editingItem: T = null;
    private _dirty: boolean = false;

    constructor(public API: APIController, public _router?: string) {
        this.setRouter(_router);
    }

    getRouter() {
        return this.router;
    }

    setRouter(router: string) {
        this.router = router;
    }


    dirty(dirty: boolean) {
        this._dirty = dirty;
    }
    isDirty() {
        return this._dirty;
    }

    closeEditing() {
        this.editingItem = null;
    }

    isEditing(): boolean {
        return this.editingItem != null;
    }

    editItem(item: T) {
        this.editingItem = item;
    }

    setItems(items: Array<T>) {
        this.items = items;
    }

    getItems(): Array<T> {
        return this.items;
    }

    loadData() {
        this.list("1", "1000").then(res => {
            if (res && res[ParamsKey.STATUS] == 1) {
                this.setItems(res[ParamsKey.CONTENT]);
            }
        }, err => { });
    }

    item(id: string) {
        let params = new HttpParams();
        params = params.append(ParamsKey.ID, id);
        return this.API.get(this.router + Cmd.ITEM, params);
    }

    list(page?: string, limit?: string) {
        let params = new HttpParams();
        params.append(ParamsKey.PAGE, page);
        params.append(ParamsKey.LIMIT, limit);
        return this.API.get(this.router + Cmd.LIST, params);
    }

    search() { }

    add(item) {
        let params = new HttpParams();
        return this.API.post(this.router + Cmd.ADD, params, item);
    }

    update(item) {
        let params = new HttpParams();
        return this.API.post(this.router + Cmd.UPDATE, params, item);
    }

    delete(item) {
        let params = new HttpParams();
        return this.API.post(this.router + Cmd.DELETE, params, item);
    }
}