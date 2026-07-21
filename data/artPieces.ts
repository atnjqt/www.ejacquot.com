export interface ArtPieceMeta {
  id: number;
  title: string;
  altTitle?: string;
  dimensions?: string; // TODO: fill in dimensions for each piece
  imageUrl?: string;   // TODO: fill in image URL for each piece
  year: string;
  note?: string;
}

/**
 * Collage works by Etienne Philippe Jacquot.
 * Exhibited at: Philadelphia Collage Open Call — August 7, 2026
 * Venue: Collage Philadelphia (https://www.collagephiladelphia.com/)
 *        & The Arts League (https://www.theartsleague.org/)
 *
 * Submission deadlines:
 *   Due:               July 26, 2026
 *   Notice of Accept:  July 28, 2026
 *   Drop-off:          August 3, 2026
 *   Show:              August 7, 2026
 *
 * Poster: https://www.instagram.com/p/Da6IkIzCbp4/?igsh=MTN4MnRtZGxrcG1oZg==
 */
export const artPieces: ArtPieceMeta[] = [
  {
    id: 1,
    title: "Eat the Rich (Pork à l'Orange)",
    dimensions: undefined, // TODO: add dimensions
    imageUrl: "https://www.ejacquot.com/collage/1.jpg",
    year: "2026",
  },
  {
    id: 2,
    title: "Dining on the Flesh of Damien Hirst",
    dimensions: undefined, // TODO: add dimensions
    imageUrl: "https://www.ejacquot.com/collage/2.jpg",
    year: "2026",
  },
  {
    id: 3,
    title: "A Call from the Past Saying Don't!",
    altTitle: "Downtown Scuba Diver",
    dimensions: undefined, // TODO: add dimensions
    imageUrl: "https://www.ejacquot.com/collage/3.jpg",
    year: "2026",
  },
  {
    id: 4,
    title: "Poster for My Cousin's Estate Sale",
    dimensions: undefined, // TODO: add dimensions
    imageUrl: "https://www.ejacquot.com/collage/4.jpg",
    year: "2026",
  },
];
