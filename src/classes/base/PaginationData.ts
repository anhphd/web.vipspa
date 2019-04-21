import { IPaginationData } from '../interface/IPaginationData';
import { IPaginationItem } from '../interface/IPaginationItem';

export class PaginationData implements IPaginationData {
    totalItems: number = 12;
    itemsPerPage: number = 12;
    items: Array<IPaginationItem> = [];
    selectedPageIndex: number = 0;

    private _setConfig(configuration?: any) {
        if (!configuration) return;
        if ('totalItems' in configuration) this.totalItems = configuration['totalItems'];
        if ('itemsPerPage' in configuration) this.itemsPerPage = configuration['itemsPerPage'];
        if ('selectedPageIndex' in configuration) this.selectedPageIndex = configuration['selectedPageIndex'];
    }

    private _getMaxPage(): number {
        return Math.floor(this.totalItems / this.itemsPerPage);
    }

    initialize(configuration?: any) {
        this._setConfig(configuration);
        this.items = [];
        let startIndex: number = this.selectedPageIndex - 3;
        if (startIndex < 0) startIndex = 0;
        while (this.items.length < 5 && startIndex <= this._getMaxPage()) {
            this.items.push({
                val: startIndex,
                name: '' + (startIndex + 1)
            });
            startIndex++;
        }
    }

    public navigateToNextPage() {
        if (this.items.length == 0) return;
        let nextPage = this.items[this.items.length - 1].val + 1;
        if (nextPage > this._getMaxPage()) nextPage = this._getMaxPage();
        this.selectedPageIndex = nextPage;
        this.items = [];
        let startIndex = nextPage;
        if (startIndex < 0) startIndex = 0;
        while (this.items.length < 5 && startIndex <= this._getMaxPage()) {
            this.items.push({
                val: startIndex,
                name: '' + (startIndex + 1)
            });
            startIndex++;
        }
        startIndex = nextPage;
        while (this.items.length < 5 && startIndex > 0) {
            this.items.unshift({
                val: startIndex - 1,
                name: '' + (startIndex)
            });
            startIndex--;
        }

    }
    public navigateToLastPage() {
        if (this.items.length == 0) return;
        let nextPage = this._getMaxPage();
        this.selectedPageIndex = nextPage;
        this.items = [];
        let startIndex = nextPage;
        while (this.items.length < 5 && startIndex >= 0) {
            this.items.unshift({
                val: startIndex,
                name: '' + (startIndex + 1)
            });
            startIndex--;
        }
    }

    public navigateToPreviousPage() {
        if (this.items.length == 0) return;
        let startIndex = this.items[0].val - 1;
        if (startIndex < 0) startIndex = 0;
        this.selectedPageIndex = startIndex;
        this.items = [];
        while (this.items.length < 5 && startIndex >= 0) {
            this.items.unshift({
                val: startIndex,
                name: '' + (startIndex + 1)
            });
            startIndex--;
        }
        startIndex = this.selectedPageIndex + 1;
        while (this.items.length < 5 && startIndex <= this._getMaxPage()) {
            this.items.push({
                val: startIndex,
                name: '' + (startIndex + 1)
            });
            startIndex++;
        }

    }



    public navigateToFirstPage() {
        if (this.items.length == 0) return;
        this.selectedPageIndex = 0;
        this.items = [];
        let startIndex: number = 0;
        while (this.items.length < 5 && startIndex <= this._getMaxPage()) {
            this.items.push({
                val: startIndex,
                name: '' + (startIndex + 1)
            });
            startIndex++;
        }


    }


    navigateToPage(page: number) {
        if (page < 0) page = 0;
        if (page > this._getMaxPage()) page = this._getMaxPage();
        if (this.items.length > 0) {
            if (page >= this.items[0].val && page <= this.items[this.items.length - 1].val) {
                this.selectedPageIndex = page;
                return;
            }
        }
        this.selectedPageIndex = page;
        this.initialize();
    }
}