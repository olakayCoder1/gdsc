export interface Speaker {
    image: string | StaticImageData;
    name: string;
    role: string;
    speakingType: 'speaker' | 'panelist';
    day: 'conference' | 'workshop'
}
