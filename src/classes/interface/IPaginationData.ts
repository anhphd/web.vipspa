import { IPaginationItem } from './IPaginationItem';

export interface IPaginationData {
  totalItems: number;
  itemsPerPage: number;
  items: Array<IPaginationItem>;
  selectedPageIndex: number;

  initialize(configuration?: any);
  navigateToNextPage(): void;
  navigateToPreviousPage(): void;
  navigateToLastPage(): void;
  navigateToFirstPage(): void;
  navigateToPage(page: number): void;

}

