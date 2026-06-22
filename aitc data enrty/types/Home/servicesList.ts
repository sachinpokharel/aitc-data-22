export interface ServicesListdto {
  title: string;
  imageUrl: string;
  services: Service[];
}

export interface Service {
  title: string;
  description: string;
  slug: string;
  subServices: SubService[];
  clientSlug: string;
  image: string;
}

export interface SubService {
  title: string;
  slug: string;
}
