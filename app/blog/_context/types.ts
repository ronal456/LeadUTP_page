export type CategorySlug =
    | 'excelencia-academica'
    | 'desarrollo-capitulo'
    | 'liderazgo'
    | 'lead-academia'
    | 'excelencia-femenina'
    | 'Lead UTP'
    | 'desarrollo-profesional';

export interface Articles {
    id: number;
    title: string;
    category: CategorySlug;
    categoryLabel: string;
    excerpt: string;
    author: string;
    authorRole: string;
    date: string;
    readTime: string;
    image: string;
    portrait: string;
    content: string;
}
