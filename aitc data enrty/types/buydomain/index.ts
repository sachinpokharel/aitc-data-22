export interface BuyDomainHero {
  title: string;
  description: string;
  bgImage: string;
}

export interface DomainCollectionsProps {
  title: string;
  description: string;
}

export type LoadDomainButtonProps = {
  visibleItems: number;
  filteredDomains: Array<{ id: number; title: string }>;
  hasMoreItems: boolean;
  isExpanded: boolean;
  currentPage: number;
  searchQuery?: string;
};

// types/domain.ts
export interface DomainItem {
  id: string;
  name: string;
  price: number;
}

export interface PaginationInfo {
  page: number | null;
  limit: number;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: DomainItem[];
  pagination: {
    total: PaginationInfo;
    next: PaginationInfo;
    prev: PaginationInfo;
  };
}
