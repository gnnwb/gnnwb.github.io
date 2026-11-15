// Guest reviews, copied from each villa's Airbnb listing (shortened where long).
// Airbnb has no public reviews API, so update this file by hand from time to time:
// open the listing, click "reviews", and copy the score, the count and any new favourites.

export interface Review {
  name: string;
  /** Where the guest is from, or how long they have been on Airbnb. */
  from?: string;
  /** "YYYY-MM": shown as a localized month and year. */
  date: string;
  rating: number;
  text: string;
}

export interface ReviewSet {
  rating: number;
  count: number;
  guestFavourite: boolean;
  superhost: boolean;
  /** "Top 5% of homes" on Airbnb. */
  topPercent?: number;
  scores: {
    cleanliness: number;
    accuracy: number;
    checkIn: number;
    communication: number;
    location: number;
    value: number;
  };
  /** Snapshot date, "YYYY-MM-DD". */
  updated: string;
  items: Review[];
}

export const reviews: Record<string, ReviewSet> = {
  'belle-helene': {
    rating: 4.98,
    count: 42,
    guestFavourite: true,
    superhost: true,
    topPercent: 5,
    scores: { cleanliness: 5.0, accuracy: 5.0, checkIn: 5.0, communication: 5.0, location: 5.0, value: 4.9 },
    updated: '2026-11-15',
    items: [
      {
        name: 'Erin',
        date: '2026-08',
        rating: 5,
        text: 'We had such a wonderful stay at Villa Belle Helene. It was spotlessly clean, there was plenty of space for our whole family, and the villa was actually much bigger than the photos suggest. The views were absolutely stunning and made every morning and evening feel special.',
      },
      {
        name: 'Simon',
        date: '2026-09',
        rating: 5,
        text: 'Lovely spacious well kept villa, beautiful pool, private and quiet surroundings. Short walk or drive into local villages with shops and restaurants. Perfect for a family. A wonderful experience and everything we hoped for, including value for money.',
      },
      {
        name: 'Olivia',
        date: '2026-08',
        rating: 5,
        text: 'Eleni was amazing, very approachable, lots of help for local requests and overall a fantastic host. There’s nothing she hasn’t thought of. The outside space is stunning, so much so that you end up spending loads of time at the villa: barbecue, outdoor cinema area with a fridge. We loved it.',
      },
      {
        name: 'Barbara',
        date: '2026-06',
        rating: 5,
        text: 'This villa is a 10 out of 10 for everything. The villa and outdoor area are so beautiful and the views were stunning. Very comfortable beds, so we slept really well. Absolutely loved it.',
      },
      {
        name: 'Nicola',
        date: '2024-08',
        rating: 5,
        text: 'Eleni’s villa exceeded all our expectations. The pictures did not truly show what a beautiful place it is, both inside and out. The pool, with a kid-friendly section, was perfect and the outdoor living space gorgeous. Eleni went above and beyond to make us feel welcome.',
      },
      {
        name: 'Sam',
        date: '2024-08',
        rating: 5,
        text: 'Truly beautiful villa! The photos simply do not do this place justice. My family felt immediately at home and relaxed. We enjoyed a barbecue at the villa, eating outside under a full moon. The mountain, the sea view and the sunsets are absolutely stunning.',
      },
      {
        name: 'Scott',
        from: 'Carmel, Indiana',
        date: '2024-05',
        rating: 5,
        text: 'The house is huge, with lots of room to spread out and relax, and very peaceful. We spent every morning drinking our coffee next to the pool under the covered porch, with a cool morning breeze and a beautiful view of the sea.',
      },
      {
        name: 'Sitara',
        date: '2025-08',
        rating: 5,
        text: 'An absolutely stunning villa! Eleni showed us around when we arrived and had stocked up the fridge and pantry, which made life a lot easier. The outside space and views are truly beautiful and the inside is spacious and well maintained.',
      },
      {
        name: 'Nish',
        date: '2026-07',
        rating: 5,
        text: 'Eleni’s villa was simply amazing. We felt right at home because of Eleni and her family’s friendly and approachable nature. The villa was stunning, exceptionally clean and in a fantastic location. We will certainly be returning!',
      },
      {
        name: 'Kate',
        date: '2024-07',
        rating: 5,
        text: 'Wonderful stay at this beautiful villa. Eleni is a fabulous host and was so helpful and considerate. The villa is immaculate and the pool is an absolute dream. We also loved the outdoor pavilion.',
      },
    ],
  },
};
