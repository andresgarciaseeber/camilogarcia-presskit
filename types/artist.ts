export interface SocialLinks {
  spotify: string;
  soundcloud: string;
  instagram: string;
  drive: string;
}

export interface GalleryImage {
  id: number;
  url: string;
}

export interface Images {
  cover: string;
  gallery: GalleryImage[];
}

export interface Release {
  id: string;
  title: string;
  artist: string;
  label: string;
  year: number;
  type: 'Original' | 'Remix';
  spotifyUrl: string;
}

export interface Remix {
  id: string;
  title: string;
  artist: string;
  plays: string;
  soundcloudUrl: string;
}

export interface Music {
  sectionTitle: string;
  sectionSubtitle: string;
  featuredReleases: Release[];
  remixes: Remix[];
  labels: string[];
  platforms: string[];
}

export interface Bio {
  paragraphs: string[];
  quote: string;
  origin: string;
  styles: string;
  supportArtists: string[];
}

export interface Gallery {
  title: string;
  subtitle: string;
  ctaText: string;
  disclaimer: string;
}

export interface RiderSetup {
  title: string;
  items: string[];
}

export interface RiderSection {
  title: string;
  setup?: RiderSetup;
}

export interface RiderCatering {
  title: string;
  items: string[];
}

export interface RiderBackstage {
  title: string;
  items: string[];
}

export interface RiderHospitality {
  title: string;
  backstage: RiderBackstage;
  catering: RiderCatering;
}

export interface Rider {
  title: string;
  subtitle: string;
  technical: RiderSection;
  hospitality: RiderHospitality;
  disclaimer: string;
}

export interface BookingContact {
  title: string;
  name?: string;
  phone?: string;
  email?: string;
}

export interface BookingSocialMedia {
  title: string;
  instagram: string;
  soundcloud: string;
  spotify: string;
}

export interface Booking {
  title: string;
  subtitle: string;
  management: BookingContact;
  bookingPromo: BookingContact;
  socialMedia: BookingSocialMedia;
}

export interface UINav {
  bio: string;
  music: string;
  gallery: string;
  rider: string;
  contact: string;
}

export interface UI {
  nav: UINav;
  downloadEPK: string;
  listenOnSpotify: string;
  listenOnSoundcloud: string;
  alsoAvailableOn: string;
  recordLabels: string;
  streaming: string;
  featuredReleases: string;
  remixesCollaborations: string;
  supportArtists: string;
  origin: string;
  styles: string;
  biography: string;
}

export interface LanguageContent {
  tagline: string;
  subtitle: string;
  description: string;
  specialMention: string;
  genres: string[];
  bio: Bio;
  music: Music;
  gallery: Gallery;
  rider: Rider;
  booking: Booking;
  ui: UI;
}

export interface ArtistContent {
  es: LanguageContent;
  en: LanguageContent;
  [key: string]: LanguageContent;
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  birthYear: number;
  birthPlace: string;
  languages: string[];
  defaultLanguage: string;
  location: string;
  social: SocialLinks;
  images: Images;
  content: ArtistContent;
}

export interface ArtistsData {
  artists: {
    [key: string]: Artist;
  };
}
