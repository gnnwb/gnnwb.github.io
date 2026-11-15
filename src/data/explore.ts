import type { Locale } from '../i18n';

// Area guide: used by the interactive location map and the /explore/ page.
// Coordinates come from OpenStreetMap; distances are approximate, measured from Villa Belle Helene.

export type ExploreSection = 'food' | 'drinks' | 'nearby' | 'beaches' | 'family' | 'dayTrips' | 'travel';

export const exploreSections: ExploreSection[] = ['food', 'drinks', 'nearby', 'beaches', 'family', 'dayTrips', 'travel'];

/** Marker and chip colour for each category. */
export const sectionColors: Record<ExploreSection, string> = {
  food: '#b5532f',
  drinks: '#8b3f63',
  nearby: '#6e7746',
  beaches: '#2e7f8f',
  family: '#d08a26',
  dayTrips: '#7a4e2d',
  travel: '#5f6470',
};

export interface PlaceMeta {
  id: string;
  section: ExploreSection;
  lat: number;
  lng: number;
  /** Google Maps rating when the list was made (restaurants and bars). */
  rating?: number;
}

export interface PlaceText {
  title: string;
  distance: string;
  text: string;
}

export const places: PlaceMeta[] = [
  // Food and drink: well-rated places within walking distance, picked from Google Maps (November 2026).
  { id: 'harakas', section: 'food', lat: 35.30804, lng: 25.37211, rating: 4.9 },
  { id: 'myrtios', section: 'food', lat: 35.30823, lng: 25.37237, rating: 4.5 },
  { id: 'taverna1930', section: 'food', lat: 35.30753, lng: 25.37225, rating: 4.8 },
  { id: 'sofas', section: 'food', lat: 35.30796, lng: 25.37192, rating: 4.6 },
  { id: 'gevsi', section: 'food', lat: 35.30808, lng: 25.38548, rating: 4.6 },
  { id: 'atrium', section: 'food', lat: 35.30708, lng: 25.38954, rating: 4.7 },
  { id: 'mezes', section: 'food', lat: 35.30711, lng: 25.38992, rating: 4.7 },
  { id: 'meraki', section: 'food', lat: 35.31134, lng: 25.36322, rating: 4.9 },
  { id: 'antidote', section: 'drinks', lat: 35.3085, lng: 25.38449, rating: 4.8 },
  { id: 'rahati', section: 'drinks', lat: 35.30668, lng: 25.39083, rating: 4.7 },
  { id: 'trap', section: 'drinks', lat: 35.30633, lng: 25.39252, rating: 4.8 },
  { id: 'woodstone', section: 'drinks', lat: 35.30667, lng: 25.39299, rating: 4.8 },
  { id: 'savoidakis', section: 'drinks', lat: 35.31744, lng: 25.3904, rating: 4.5 },
  { id: 'pablo', section: 'drinks', lat: 35.31727, lng: 25.39265, rating: 4.9 },
  { id: 'square', section: 'nearby', lat: 35.30817, lng: 25.37202 },
  { id: 'koutouloufari', section: 'nearby', lat: 35.3072, lng: 25.3883 },
  { id: 'harbour', section: 'nearby', lat: 35.3195, lng: 25.39 },
  { id: 'lychnostatis', section: 'nearby', lat: 35.30656, lng: 25.41108 },
  { id: 'golf', section: 'nearby', lat: 35.28797, lng: 25.35935 },
  { id: 'hersonissosBeach', section: 'beaches', lat: 35.3185, lng: 25.379 },
  { id: 'anissaras', section: 'beaches', lat: 35.33495, lng: 25.37644 },
  { id: 'malia', section: 'beaches', lat: 35.2962, lng: 25.48658 },
  { id: 'aquaPlus', section: 'family', lat: 35.28849, lng: 25.36527 },
  { id: 'aquaworld', section: 'family', lat: 35.31727, lng: 25.38951 },
  { id: 'cretaquarium', section: 'family', lat: 35.33225, lng: 25.28252 },
  { id: 'knossos', section: 'dayTrips', lat: 35.29806, lng: 25.16281 },
  { id: 'heraklion', section: 'dayTrips', lat: 35.33914, lng: 25.13742 },
  { id: 'maliaPalace', section: 'dayTrips', lat: 35.29349, lng: 25.49218 },
  { id: 'lasithi', section: 'dayTrips', lat: 35.18086, lng: 25.46785 },
  { id: 'agiosNikolaos', section: 'dayTrips', lat: 35.19059, lng: 25.71752 },
  { id: 'spinalonga', section: 'dayTrips', lat: 35.29778, lng: 25.73804 },
  { id: 'airport', section: 'travel', lat: 35.33706, lng: 25.18097 },
  { id: 'port', section: 'travel', lat: 35.34116, lng: 25.13881 },
];

type Texts = Record<string, PlaceText>;

const en: Texts = {
  harakas: { title: 'Taverna Harakas', distance: '10 min walk', text: 'Cretan cooking right on the village square, and one of the best-rated tavernas in the area. Worth booking ahead in high season.' },
  myrtios: { title: 'Myrtios Traditional Taverna', distance: '10 min walk', text: 'A traditional taverna on the square, with home-style Cretan dishes and tables out under the trees.' },
  taverna1930: { title: 'Taverna 1930', distance: '10 min walk', text: 'A taverna in the stone lanes just below the square, rated among the best in the old village.' },
  sofas: { title: 'Sofas Taverna', distance: '10 min walk', text: '“Greek creative cuisine”: Cretan classics with a modern touch, in the heart of the old village.' },
  gevsi: { title: 'Gevsi Traditional Taverna', distance: '8 min walk', text: 'The closest of the Piskopiano tavernas, an easy stroll from the villa for a relaxed Cretan dinner.' },
  atrium: { title: 'Atrium Restaurant', distance: '15 min walk', text: 'A popular restaurant in Koutouloufari for grilled meat and fish.' },
  mezes: { title: 'Mezes by Alex and Christine', distance: '15 min walk', text: 'Small Greek plates to share in Koutouloufari: order a few mezes and a carafe of local wine.' },
  meraki: { title: 'Taverna Me…Raki', distance: '5 min drive', text: 'A traditional taverna just west of the village, among the highest-rated in the whole Hersonissos area.' },
  antidote: { title: 'Antidote', distance: '8 min walk', text: 'A friendly bar and grill in Piskopiano for a cold beer or a cocktail: the nearest evening out from the villa.' },
  rahati: { title: 'Rahati café and patisserie', distance: '15 min walk', text: 'Coffee, breakfast and pastries in Koutouloufari, for a slow start to the day.' },
  trap: { title: 'The Trap', distance: '15 min walk', text: 'A cocktail bar in Koutouloufari, ideal for a drink after dinner in the village.' },
  woodstone: { title: 'Woodstone gastropub', distance: '15 min walk', text: 'Cocktails, beers and bar bites in the lanes of Koutouloufari.' },
  savoidakis: { title: 'Savoidakis bakery', distance: '2.5 km', text: 'A pastry shop and café near the harbour, for sweets, pastries and coffee by the sea.' },
  pablo: { title: 'Pablo Premium Bar', distance: '2.5 km', text: 'A stylish cocktail bar near Hersonissos harbour, for a livelier night by the sea.' },
  square: { title: 'The village square', distance: '10 min walk', text: 'The heart of Old Hersonissos: a little square under old trees, ringed with tavernas, cafés and small shops. Lively on summer evenings, never loud. Perfect for an evening stroll and dinner under the stars.' },
  koutouloufari: { title: 'Koutouloufari and Piskopiano', distance: '15 min walk', text: 'Two neighbouring hill villages with stone lanes, bougainvillea and some of the best-loved tavernas in the area, many with terraces looking out to sea.' },
  harbour: { title: 'Hersonissos harbour', distance: '2.5 km', text: 'A seafront promenade lined with fish tavernas, bakeries and bars, ending at the little chapel of Agia Paraskevi on the rocks above the water. Beautiful at sunset.' },
  lychnostatis: { title: 'Lychnostatis open-air museum', distance: '4 km', text: 'A lovingly built museum of traditional Cretan life, with a windmill, a weaver’s workshop, herb gardens, a small theatre and tastings of local raki and honey.' },
  golf: { title: 'Crete Golf Club', distance: '4 km', text: 'The island’s only 18-hole championship course, laid out across the hills just above Hersonissos, with views down to the coast.' },
  hersonissosBeach: { title: 'Hersonissos beaches', distance: '2.5 km', text: 'A string of sandy coves along the town, with sunbeds, beach bars and water sports. Easy for a quick swim before lunch.' },
  anissaras: { title: 'Anissaras and Analipsi', distance: '5 km', text: 'Wider, quieter beaches just west of Hersonissos, popular with families for their clear, shallow water and relaxed beach tavernas.' },
  malia: { title: 'Malia beach', distance: '15 min drive', text: 'A long stretch of golden sand to the east, with plenty of space even in August and a little chapel on a rocky islet just offshore.' },
  aquaPlus: { title: 'Aqua Plus water park', distance: '4 km', text: 'Slides, wave pools and lazy rivers set among palm gardens: an easy half-day out for children of every age.' },
  aquaworld: { title: 'Aquaworld aquarium', distance: '1 km', text: 'A small, friendly aquarium and reptile rescue centre in Hersonissos, perfect for an hour on a hot afternoon.' },
  cretaquarium: { title: 'Cretaquarium', distance: '20 min drive', text: 'One of the largest aquariums in the Mediterranean, at Gournes, with thousands of creatures from the seas around Crete.' },
  knossos: { title: 'Palace of Knossos', distance: '35 min drive', text: 'The heart of the Minoan civilisation and Europe’s oldest city, just outside Heraklion. Go early in the morning to beat the heat and the crowds.' },
  heraklion: { title: 'Heraklion and its Archaeological Museum', distance: '30 min drive', text: 'The island’s capital: a Venetian harbour and fortress, busy markets and one of the world’s great collections of Minoan art.' },
  maliaPalace: { title: 'Minoan palace of Malia', distance: '15 min drive', text: 'A quieter, wide-open Minoan site close to the sea, often almost empty. Combine it with a swim at Malia.' },
  lasithi: { title: 'Lasithi Plateau', distance: '1 hr drive', text: 'A green upland plain ringed by mountains, dotted with old windmills and villages, and home to the Dikteon Cave, where legend says Zeus was born.' },
  agiosNikolaos: { title: 'Agios Nikolaos', distance: '50 min drive', text: 'An elegant harbour town built around a small lake, with cafés on the water and wide views over the Bay of Mirabello.' },
  spinalonga: { title: 'Spinalonga', distance: '1 hr 15 min drive', text: 'A Venetian fortress island and former leper colony, reached by boat from Plaka or Elounda, made famous by Victoria Hislop’s novel The Island.' },
  airport: { title: 'Heraklion airport', distance: '23 km · 25 min', text: 'Nikos Kazantzakis International Airport, with direct flights from across Europe. We can arrange a transfer straight to the villa.' },
  port: { title: 'Heraklion port', distance: '26 km · 30 min', text: 'Ferries to Piraeus and the Cyclades. Transfers to and from the port are available on request.' },
};

const el: Texts = {
  harakas: { title: 'Ταβέρνα Χάρακας', distance: '10 λεπτά με τα πόδια', text: 'Κρητική κουζίνα πάνω στην πλατεία του χωριού, από τις ταβέρνες με τις καλύτερες κριτικές στην περιοχή. Καλό είναι να κλείσετε τραπέζι το καλοκαίρι.' },
  myrtios: { title: 'Παραδοσιακή ταβέρνα Μύρτιος', distance: '10 λεπτά με τα πόδια', text: 'Παραδοσιακή ταβέρνα στην πλατεία, με σπιτικά κρητικά πιάτα και τραπέζια κάτω από τα δέντρα.' },
  taverna1930: { title: 'Ταβέρνα 1930', distance: '10 λεπτά με τα πόδια', text: 'Ταβέρνα στα πέτρινα σοκάκια λίγο κάτω από την πλατεία, από τις πιο αγαπημένες του παλιού χωριού.' },
  sofas: { title: 'Ταβέρνα Σοφάς', distance: '10 λεπτά με τα πόδια', text: '«Ελληνική δημιουργική κουζίνα»: κρητικά κλασικά πιάτα με μοντέρνα πινελιά, στην καρδιά του παλιού χωριού.' },
  gevsi: { title: 'Παραδοσιακή ταβέρνα Γεύση', distance: '8 λεπτά με τα πόδια', text: 'Η πιο κοντινή ταβέρνα του Πισκοπιανού, μια σύντομη βόλτα από τη βίλα για ένα χαλαρό κρητικό δείπνο.' },
  atrium: { title: 'Εστιατόριο Atrium', distance: '15 λεπτά με τα πόδια', text: 'Αγαπημένο εστιατόριο στο Κουτουλουφάρι για ψητά κρέατα και ψάρια.' },
  mezes: { title: 'Mezes by Alex and Christine', distance: '15 λεπτά με τα πόδια', text: 'Μεζέδες για μοίρασμα στο Κουτουλουφάρι: παραγγείλτε μερικά πιάτα και ένα καραφάκι ντόπιο κρασί.' },
  meraki: { title: 'Ταβέρνα Με…Ρακί', distance: '5 λεπτά με το αυτοκίνητο', text: 'Παραδοσιακή ταβέρνα λίγο δυτικά του χωριού, από τις καλύτερες σε κριτικές σε όλη τη Χερσόνησο.' },
  antidote: { title: 'Antidote', distance: '8 λεπτά με τα πόδια', text: 'Φιλικό bar & grill στο Πισκοπιανό για μια κρύα μπίρα ή ένα κοκτέιλ: η πιο κοντινή βραδινή έξοδος από τη βίλα.' },
  rahati: { title: 'Rahati καφέ-ζαχαροπλαστείο', distance: '15 λεπτά με τα πόδια', text: 'Καφές, πρωινό και γλυκά στο Κουτουλουφάρι, για ένα αργό ξεκίνημα της μέρας.' },
  trap: { title: 'The Trap', distance: '15 λεπτά με τα πόδια', text: 'Cocktail bar στο Κουτουλουφάρι, ιδανικό για ένα ποτό μετά το φαγητό στο χωριό.' },
  woodstone: { title: 'Woodstone gastropub', distance: '15 λεπτά με τα πόδια', text: 'Κοκτέιλ, μπίρες και μεζεδάκια στα σοκάκια του Κουτουλουφαριού.' },
  savoidakis: { title: 'Ζαχαροπλαστείο Σαβοϊδάκης', distance: '2,5 χλμ.', text: 'Ζαχαροπλαστείο και καφέ κοντά στο λιμάνι, για γλυκά και καφέ δίπλα στη θάλασσα.' },
  pablo: { title: 'Pablo Premium Bar', distance: '2,5 χλμ.', text: 'Κομψό cocktail bar κοντά στο λιμάνι της Χερσονήσου, για πιο ζωντανή βραδιά δίπλα στη θάλασσα.' },
  square: { title: 'Η πλατεία του χωριού', distance: '10 λεπτά με τα πόδια', text: 'Η καρδιά της Παλιάς Χερσονήσου: μια μικρή πλατεία κάτω από αιωνόβια δέντρα, με ταβέρνες, καφέ και μαγαζάκια γύρω-γύρω. Ζωντανή τα καλοκαιρινά βράδια, ποτέ θορυβώδης. Ιδανική για βραδινή βόλτα και φαγητό κάτω από τα αστέρια.' },
  koutouloufari: { title: 'Κουτουλουφάρι και Πισκοπιανό', distance: '15 λεπτά με τα πόδια', text: 'Δύο γειτονικά ορεινά χωριά με πέτρινα σοκάκια, βουκαμβίλιες και μερικές από τις πιο αγαπημένες ταβέρνες της περιοχής, πολλές με βεράντα και θέα στη θάλασσα.' },
  harbour: { title: 'Λιμάνι Χερσονήσου', distance: '2,5 km', text: 'Παραλιακός πεζόδρομος με ψαροταβέρνες, φούρνους και μπαρ, που καταλήγει στο εκκλησάκι της Αγίας Παρασκευής πάνω στα βράχια. Πανέμορφο στο ηλιοβασίλεμα.' },
  lychnostatis: { title: 'Μουσείο Λυχνοστάτης', distance: '4 km', text: 'Υπαίθριο μουσείο της παραδοσιακής κρητικής ζωής, με ανεμόμυλο, εργαστήριο υφαντικής, κήπους με βότανα, μικρό θέατρο και γευσιγνωσία ρακής και μελιού.' },
  golf: { title: 'Crete Golf Club', distance: '4 km', text: 'Το μοναδικό γήπεδο γκολφ 18 οπών στο νησί, απλωμένο στους λόφους πάνω από τη Χερσόνησο, με θέα ως την ακτή.' },
  hersonissosBeach: { title: 'Παραλίες Χερσονήσου', distance: '2,5 km', text: 'Μια σειρά από αμμώδεις κολπίσκους κατά μήκος της πόλης, με ξαπλώστρες, beach bar και θαλάσσια σπορ. Ιδανικές για ένα γρήγορο μπάνιο πριν το μεσημεριανό.' },
  anissaras: { title: 'Ανισσαράς και Ανάληψη', distance: '5 km', text: 'Πιο φαρδιές και ήσυχες παραλίες δυτικά της Χερσονήσου, αγαπημένες των οικογενειών για τα καθαρά, ρηχά νερά και τις χαλαρές ταβέρνες τους.' },
  malia: { title: 'Παραλία Μαλίων', distance: '15 λεπτά με αυτοκίνητο', text: 'Μια μεγάλη χρυσή αμμουδιά ανατολικά, με άφθονο χώρο ακόμα και τον Αύγουστο και ένα εκκλησάκι πάνω σε βραχονησίδα λίγο μέσα στη θάλασσα.' },
  aquaPlus: { title: 'Υδάτινο πάρκο Aqua Plus', distance: '4 km', text: 'Τσουλήθρες, πισίνες με κύματα και ποτάμια μέσα σε κήπους με φοίνικες: εύκολη εκδρομή μισής μέρας για παιδιά κάθε ηλικίας.' },
  aquaworld: { title: 'Ενυδρείο Aquaworld', distance: '1 km', text: 'Ένα μικρό, φιλικό ενυδρείο και κέντρο διάσωσης ερπετών στη Χερσόνησο, ιδανικό για μια ώρα σε ένα ζεστό απόγευμα.' },
  cretaquarium: { title: 'Ενυδρείο Κρήτης (Cretaquarium)', distance: '20 λεπτά με αυτοκίνητο', text: 'Ένα από τα μεγαλύτερα ενυδρεία της Μεσογείου, στις Γούρνες, με χιλιάδες θαλάσσιους οργανισμούς από τις θάλασσες γύρω από την Κρήτη.' },
  knossos: { title: 'Ανάκτορο της Κνωσού', distance: '35 λεπτά με αυτοκίνητο', text: 'Η καρδιά του μινωικού πολιτισμού και η αρχαιότερη πόλη της Ευρώπης, λίγο έξω από το Ηράκλειο. Πηγαίνετε νωρίς το πρωί για να αποφύγετε ζέστη και κόσμο.' },
  heraklion: { title: 'Ηράκλειο και Αρχαιολογικό Μουσείο', distance: '30 λεπτά με αυτοκίνητο', text: 'Η πρωτεύουσα του νησιού: ενετικό λιμάνι και φρούριο, ζωντανές αγορές και μία από τις σημαντικότερες συλλογές μινωικής τέχνης στον κόσμο.' },
  maliaPalace: { title: 'Μινωικό ανάκτορο Μαλίων', distance: '15 λεπτά με αυτοκίνητο', text: 'Ένας πιο ήσυχος, ανοιχτός μινωικός χώρος κοντά στη θάλασσα, συχνά σχεδόν άδειος. Συνδυάστε τον με μπάνιο στα Μάλια.' },
  lasithi: { title: 'Οροπέδιο Λασιθίου', distance: '1 ώρα με αυτοκίνητο', text: 'Ένα καταπράσινο οροπέδιο ανάμεσα σε βουνά, με παλιούς ανεμόμυλους, χωριά και το Δικταίο Άντρο, όπου κατά τον μύθο γεννήθηκε ο Δίας.' },
  agiosNikolaos: { title: 'Άγιος Νικόλαος', distance: '50 λεπτά με αυτοκίνητο', text: 'Μια κομψή πόλη-λιμάνι γύρω από μια μικρή λίμνη, με καφέ πάνω στο νερό και ανοιχτή θέα στον κόλπο του Μιραμπέλλου.' },
  spinalonga: { title: 'Σπιναλόγκα', distance: '1 ώρα 15 λεπτά με αυτοκίνητο', text: 'Ενετικό νησί-φρούριο και πρώην λεπροκομείο, με καΐκι από την Πλάκα ή την Ελούντα, που έγινε γνωστό από «Το Νησί» της Βικτόρια Χίσλοπ.' },
  airport: { title: 'Αεροδρόμιο Ηρακλείου', distance: '23 km · 25 λεπτά', text: 'Διεθνής Αερολιμένας «Νίκος Καζαντζάκης», με απευθείας πτήσεις από όλη την Ευρώπη. Μπορούμε να κανονίσουμε μεταφορά μέχρι τη βίλα.' },
  port: { title: 'Λιμάνι Ηρακλείου', distance: '26 km · 30 λεπτά', text: 'Πλοία για Πειραιά και Κυκλάδες. Μεταφορά από και προς το λιμάνι κατόπιν αιτήματος.' },
};

const de: Texts = {
  harakas: { title: 'Taverna Harakas', distance: '10 Min. zu Fuß', text: 'Kretische Küche direkt am Dorfplatz und eine der am besten bewerteten Tavernen der Gegend. In der Hochsaison lohnt es sich zu reservieren.' },
  myrtios: { title: 'Traditionelle Taverne Myrtios', distance: '10 Min. zu Fuß', text: 'Eine traditionelle Taverne am Platz mit hausgemachter kretischer Küche und Tischen unter den Bäumen.' },
  taverna1930: { title: 'Taverna 1930', distance: '10 Min. zu Fuß', text: 'Eine Taverne in den Steingassen gleich unterhalb des Platzes, eine der beliebtesten im alten Dorf.' },
  sofas: { title: 'Sofas Taverna', distance: '10 Min. zu Fuß', text: '„Kreative griechische Küche“: kretische Klassiker mit moderner Note, mitten im alten Dorf.' },
  gevsi: { title: 'Traditionelle Taverne Gevsi', distance: '8 Min. zu Fuß', text: 'Die nächstgelegene Taverne in Piskopiano, ein kurzer Spaziergang von der Villa für ein entspanntes kretisches Abendessen.' },
  atrium: { title: 'Restaurant Atrium', distance: '15 Min. zu Fuß', text: 'Ein beliebtes Restaurant in Koutouloufari für gegrilltes Fleisch und Fisch.' },
  mezes: { title: 'Mezes by Alex and Christine', distance: '15 Min. zu Fuß', text: 'Kleine griechische Gerichte zum Teilen in Koutouloufari: ein paar Mezedes und eine Karaffe Landwein bestellen.' },
  meraki: { title: 'Taverna Me…Raki', distance: '5 Min. mit dem Auto', text: 'Eine traditionelle Taverne westlich des Dorfes, eine der bestbewerteten in der ganzen Gegend von Hersonissos.' },
  antidote: { title: 'Antidote', distance: '8 Min. zu Fuß', text: 'Eine freundliche Bar mit Grill in Piskopiano für ein kühles Bier oder einen Cocktail: der nächste Abendtreff von der Villa aus.' },
  rahati: { title: 'Rahati Café und Konditorei', distance: '15 Min. zu Fuß', text: 'Kaffee, Frühstück und Gebäck in Koutouloufari, für einen gemütlichen Start in den Tag.' },
  trap: { title: 'The Trap', distance: '15 Min. zu Fuß', text: 'Eine Cocktailbar in Koutouloufari, ideal für einen Drink nach dem Abendessen im Dorf.' },
  woodstone: { title: 'Woodstone Gastropub', distance: '15 Min. zu Fuß', text: 'Cocktails, Bier und kleine Snacks in den Gassen von Koutouloufari.' },
  savoidakis: { title: 'Bäckerei Savoidakis', distance: '2,5 km', text: 'Konditorei und Café nahe dem Hafen, für Süßes, Gebäck und Kaffee am Meer.' },
  pablo: { title: 'Pablo Premium Bar', distance: '2,5 km', text: 'Eine stilvolle Cocktailbar nahe dem Hafen von Hersonissos, für einen lebhafteren Abend am Meer.' },
  square: { title: 'Der Dorfplatz', distance: '10 Min. zu Fuß', text: 'Das Herz von Alt-Hersonissos: ein kleiner Platz unter alten Bäumen, umgeben von Tavernen, Cafés und kleinen Läden. An Sommerabenden lebhaft, aber nie laut – ideal für einen Abendspaziergang und ein Essen unter Sternen.' },
  koutouloufari: { title: 'Koutouloufari und Piskopiano', distance: '15 Min. zu Fuß', text: 'Zwei benachbarte Bergdörfer mit Steingassen, Bougainvillea und einigen der beliebtesten Tavernen der Gegend, viele mit Terrasse und Meerblick.' },
  harbour: { title: 'Hafen von Hersonissos', distance: '2,5 km', text: 'Eine Uferpromenade mit Fischtavernen, Bäckereien und Bars, die an der kleinen Kapelle Agia Paraskevi auf den Felsen endet. Wunderschön bei Sonnenuntergang.' },
  lychnostatis: { title: 'Freilichtmuseum Lychnostatis', distance: '4 km', text: 'Ein liebevoll gestaltetes Museum des traditionellen kretischen Lebens, mit Windmühle, Weberei, Kräutergärten, kleinem Theater und Verkostung von Raki und Honig.' },
  golf: { title: 'Crete Golf Club', distance: '4 km', text: 'Der einzige 18-Loch-Meisterschaftsplatz der Insel, in den Hügeln direkt über Hersonissos, mit Blick bis zur Küste.' },
  hersonissosBeach: { title: 'Strände von Hersonissos', distance: '2,5 km', text: 'Eine Reihe sandiger Buchten entlang des Ortes, mit Liegen, Strandbars und Wassersport. Perfekt für ein schnelles Bad vor dem Mittagessen.' },
  anissaras: { title: 'Anissaras und Analipsi', distance: '5 km', text: 'Breitere, ruhigere Strände westlich von Hersonissos, bei Familien beliebt wegen des klaren, flachen Wassers und der entspannten Strandtavernen.' },
  malia: { title: 'Strand von Malia', distance: '15 Min. mit dem Auto', text: 'Ein langer goldener Sandstrand im Osten, mit viel Platz selbst im August und einer kleinen Kapelle auf einer Felsinsel direkt vor der Küste.' },
  aquaPlus: { title: 'Wasserpark Aqua Plus', distance: '4 km', text: 'Rutschen, Wellenbecken und Flüsse zwischen Palmengärten: ein entspannter halber Tag für Kinder jeden Alters.' },
  aquaworld: { title: 'Aquarium Aquaworld', distance: '1 km', text: 'Ein kleines, freundliches Aquarium mit Reptilien-Auffangstation in Hersonissos, ideal für eine Stunde an einem heißen Nachmittag.' },
  cretaquarium: { title: 'Cretaquarium', distance: '20 Min. mit dem Auto', text: 'Eines der größten Aquarien des Mittelmeers, in Gournes, mit Tausenden Meeresbewohnern aus den Gewässern rund um Kreta.' },
  knossos: { title: 'Palast von Knossos', distance: '35 Min. mit dem Auto', text: 'Das Herz der minoischen Kultur und die älteste Stadt Europas, direkt vor Heraklion. Am besten früh morgens, vor Hitze und Andrang.' },
  heraklion: { title: 'Heraklion und das Archäologische Museum', distance: '30 Min. mit dem Auto', text: 'Die Inselhauptstadt: venezianischer Hafen und Festung, lebhafte Märkte und eine der bedeutendsten Sammlungen minoischer Kunst weltweit.' },
  maliaPalace: { title: 'Minoischer Palast von Malia', distance: '15 Min. mit dem Auto', text: 'Eine ruhigere, weitläufige minoische Stätte nahe am Meer, oft fast menschenleer. Ideal kombiniert mit einem Bad in Malia.' },
  lasithi: { title: 'Lassithi-Hochebene', distance: '1 Std. mit dem Auto', text: 'Eine grüne, von Bergen umgebene Hochebene mit alten Windmühlen, Dörfern und der Dikti-Höhle, in der der Sage nach Zeus geboren wurde.' },
  agiosNikolaos: { title: 'Agios Nikolaos', distance: '50 Min. mit dem Auto', text: 'Ein elegantes Hafenstädtchen rund um einen kleinen See, mit Cafés am Wasser und weitem Blick über die Mirabello-Bucht.' },
  spinalonga: { title: 'Spinalonga', distance: '1 Std. 15 Min. mit dem Auto', text: 'Eine venezianische Festungsinsel und einstige Leprakolonie, per Boot ab Plaka oder Elounda erreichbar – bekannt aus Victoria Hislops Roman „Insel der Vergessenen“.' },
  airport: { title: 'Flughafen Heraklion', distance: '23 km · 25 Min.', text: 'Internationaler Flughafen „Nikos Kazantzakis“ mit Direktflügen aus ganz Europa. Gern organisieren wir einen Transfer direkt zur Villa.' },
  port: { title: 'Hafen Heraklion', distance: '26 km · 30 Min.', text: 'Fähren nach Piräus und zu den Kykladen. Transfers vom und zum Hafen auf Anfrage.' },
};

const fr: Texts = {
  harakas: { title: 'Taverna Harakas', distance: '10 min à pied', text: 'Cuisine crétoise sur la place du village, et l’une des tavernes les mieux notées du coin. Mieux vaut réserver en haute saison.' },
  myrtios: { title: 'Taverne traditionnelle Myrtios', distance: '10 min à pied', text: 'Une taverne traditionnelle sur la place, avec une cuisine crétoise maison et des tables sous les arbres.' },
  taverna1930: { title: 'Taverna 1930', distance: '10 min à pied', text: 'Une taverne dans les ruelles de pierre juste sous la place, parmi les plus appréciées du vieux village.' },
  sofas: { title: 'Sofas Taverna', distance: '10 min à pied', text: '« Cuisine grecque créative » : des classiques crétois revisités, au cœur du vieux village.' },
  gevsi: { title: 'Taverne traditionnelle Gevsi', distance: '8 min à pied', text: 'La plus proche des tavernes de Piskopiano, à deux pas de la villa pour un dîner crétois sans façon.' },
  atrium: { title: 'Restaurant Atrium', distance: '15 min à pied', text: 'Un restaurant prisé de Koutouloufari pour ses viandes et poissons grillés.' },
  mezes: { title: 'Mezes by Alex and Christine', distance: '15 min à pied', text: 'Des petites assiettes grecques à partager à Koutouloufari : quelques mezzés et une carafe de vin local.' },
  meraki: { title: 'Taverna Me…Raki', distance: '5 min en voiture', text: 'Une taverne traditionnelle juste à l’ouest du village, parmi les mieux notées de toute la région d’Hersonissos.' },
  antidote: { title: 'Antidote', distance: '8 min à pied', text: 'Un bar-grill convivial à Piskopiano pour une bière fraîche ou un cocktail : la sortie la plus proche de la villa.' },
  rahati: { title: 'Rahati café-pâtisserie', distance: '15 min à pied', text: 'Café, petit-déjeuner et pâtisseries à Koutouloufari, pour bien commencer la journée.' },
  trap: { title: 'The Trap', distance: '15 min à pied', text: 'Un bar à cocktails à Koutouloufari, idéal pour un verre après le dîner au village.' },
  woodstone: { title: 'Woodstone gastropub', distance: '15 min à pied', text: 'Cocktails, bières et petites assiettes dans les ruelles de Koutouloufari.' },
  savoidakis: { title: 'Pâtisserie Savoidakis', distance: '2,5 km', text: 'Pâtisserie et café près du port, pour des douceurs et un café face à la mer.' },
  pablo: { title: 'Pablo Premium Bar', distance: '2,5 km', text: 'Un bar à cocktails élégant près du port d’Hersonissos, pour une soirée plus animée au bord de la mer.' },
  square: { title: 'La place du village', distance: '10 min à pied', text: 'Le cœur d’Old Hersonissos : une petite place à l’ombre de vieux arbres, entourée de tavernes, de cafés et de boutiques. Animée les soirs d’été, jamais bruyante – parfaite pour une promenade et un dîner sous les étoiles.' },
  koutouloufari: { title: 'Koutouloufari et Piskopiano', distance: '15 min à pied', text: 'Deux villages perchés voisins, avec leurs ruelles de pierre, leurs bougainvilliers et quelques-unes des tavernes les plus appréciées du coin, souvent avec terrasse face à la mer.' },
  harbour: { title: 'Le port d’Hersonissos', distance: '2,5 km', text: 'Une promenade en bord de mer bordée de tavernes de poisson, de boulangeries et de bars, jusqu’à la petite chapelle d’Agia Paraskevi sur les rochers. Superbe au coucher du soleil.' },
  lychnostatis: { title: 'Musée de plein air de Lychnostatis', distance: '4 km', text: 'Un musée chaleureux de la vie crétoise traditionnelle, avec moulin à vent, atelier de tissage, jardins d’herbes, petit théâtre et dégustation de raki et de miel.' },
  golf: { title: 'Crete Golf Club', distance: '4 km', text: 'Le seul parcours de championnat 18 trous de l’île, dessiné dans les collines au-dessus d’Hersonissos, avec vue jusqu’à la côte.' },
  hersonissosBeach: { title: 'Les plages d’Hersonissos', distance: '2,5 km', text: 'Une succession de criques de sable le long de la ville, avec transats, bars de plage et sports nautiques. Idéal pour une baignade avant le déjeuner.' },
  anissaras: { title: 'Anissaras et Analipsi', distance: '5 km', text: 'Des plages plus larges et plus calmes à l’ouest d’Hersonissos, appréciées des familles pour leur eau claire et peu profonde et leurs tavernes détendues.' },
  malia: { title: 'La plage de Malia', distance: '15 min en voiture', text: 'Une longue plage de sable doré à l’est, avec de la place même en août et une petite chapelle sur un îlot rocheux juste au large.' },
  aquaPlus: { title: 'Parc aquatique Aqua Plus', distance: '4 km', text: 'Toboggans, piscines à vagues et rivières au milieu des palmiers : une demi-journée facile avec des enfants de tous âges.' },
  aquaworld: { title: 'Aquarium Aquaworld', distance: '1 km', text: 'Un petit aquarium convivial et centre de sauvetage de reptiles à Hersonissos, parfait pour une heure par un après-midi chaud.' },
  cretaquarium: { title: 'Cretaquarium', distance: '20 min en voiture', text: 'L’un des plus grands aquariums de Méditerranée, à Gournes, avec des milliers d’espèces des mers qui entourent la Crète.' },
  knossos: { title: 'Palais de Knossos', distance: '35 min en voiture', text: 'Le cœur de la civilisation minoenne et la plus ancienne ville d’Europe, aux portes d’Héraklion. Allez-y tôt le matin pour éviter la chaleur et la foule.' },
  heraklion: { title: 'Héraklion et son Musée archéologique', distance: '30 min en voiture', text: 'La capitale de l’île : port et forteresse vénitiens, marchés animés et l’une des plus belles collections d’art minoen au monde.' },
  maliaPalace: { title: 'Palais minoen de Malia', distance: '15 min en voiture', text: 'Un site minoen plus calme et très ouvert, près de la mer, souvent presque désert. À combiner avec une baignade à Malia.' },
  lasithi: { title: 'Plateau du Lassithi', distance: '1 h en voiture', text: 'Un haut plateau verdoyant cerné de montagnes, parsemé de vieux moulins et de villages, avec la grotte du Dicté, où Zeus serait né selon la légende.' },
  agiosNikolaos: { title: 'Agios Nikolaos', distance: '50 min en voiture', text: 'Une élégante ville portuaire autour d’un petit lac, avec ses cafés au bord de l’eau et une vue large sur la baie de Mirabello.' },
  spinalonga: { title: 'Spinalonga', distance: '1 h 15 en voiture', text: 'Une île-forteresse vénitienne et ancienne léproserie, accessible en bateau depuis Plaka ou Elounda, rendue célèbre par le roman L’Île des oubliés de Victoria Hislop.' },
  airport: { title: 'Aéroport d’Héraklion', distance: '23 km · 25 min', text: 'Aéroport international « Nikos Kazantzakis », avec des vols directs depuis toute l’Europe. Nous pouvons organiser votre transfert jusqu’à la villa.' },
  port: { title: 'Port d’Héraklion', distance: '26 km · 30 min', text: 'Ferries vers Le Pirée et les Cyclades. Transferts depuis et vers le port sur demande.' },
};

const it: Texts = {
  harakas: { title: 'Taverna Harakas', distance: '10 min a piedi', text: 'Cucina cretese proprio sulla piazza del paese, e una delle taverne più apprezzate della zona. In alta stagione conviene prenotare.' },
  myrtios: { title: 'Taverna tradizionale Myrtios', distance: '10 min a piedi', text: 'Una taverna tradizionale sulla piazza, con piatti cretesi casalinghi e tavoli all’ombra degli alberi.' },
  taverna1930: { title: 'Taverna 1930', distance: '10 min a piedi', text: 'Una taverna nei vicoli di pietra appena sotto la piazza, tra le più amate del paese vecchio.' },
  sofas: { title: 'Sofas Taverna', distance: '10 min a piedi', text: '«Cucina greca creativa»: classici cretesi con un tocco moderno, nel cuore del paese vecchio.' },
  gevsi: { title: 'Taverna tradizionale Gevsi', distance: '8 min a piedi', text: 'La più vicina delle taverne di Piskopiano, a una breve passeggiata dalla villa per una cena cretese rilassata.' },
  atrium: { title: 'Ristorante Atrium', distance: '15 min a piedi', text: 'Un ristorante molto frequentato a Koutouloufari per carne e pesce alla griglia.' },
  mezes: { title: 'Mezes by Alex and Christine', distance: '15 min a piedi', text: 'Piccoli piatti greci da condividere a Koutouloufari: qualche mezé e una caraffa di vino locale.' },
  meraki: { title: 'Taverna Me…Raki', distance: '5 min in auto', text: 'Una taverna tradizionale appena a ovest del paese, tra le più apprezzate di tutta la zona di Hersonissos.' },
  antidote: { title: 'Antidote', distance: '8 min a piedi', text: 'Un bar con griglia accogliente a Piskopiano per una birra fresca o un cocktail: la serata fuori più vicina alla villa.' },
  rahati: { title: 'Rahati caffè e pasticceria', distance: '15 min a piedi', text: 'Caffè, colazione e dolci a Koutouloufari, per iniziare la giornata con calma.' },
  trap: { title: 'The Trap', distance: '15 min a piedi', text: 'Un cocktail bar a Koutouloufari, ideale per un drink dopo cena in paese.' },
  woodstone: { title: 'Woodstone gastropub', distance: '15 min a piedi', text: 'Cocktail, birre e stuzzichini nei vicoli di Koutouloufari.' },
  savoidakis: { title: 'Pasticceria Savoidakis', distance: '2,5 km', text: 'Pasticceria e caffè vicino al porto, per dolci e un caffè in riva al mare.' },
  pablo: { title: 'Pablo Premium Bar', distance: '2,5 km', text: 'Un elegante cocktail bar vicino al porto di Hersonissos, per una serata più vivace sul mare.' },
  square: { title: 'La piazza del paese', distance: '10 min a piedi', text: 'Il cuore di Old Hersonissos: una piccola piazza all’ombra di vecchi alberi, circondata da taverne, caffè e negozietti. Vivace nelle sere d’estate, mai rumorosa – perfetta per una passeggiata e una cena sotto le stelle.' },
  koutouloufari: { title: 'Koutouloufari e Piskopiano', distance: '15 min a piedi', text: 'Due paesi collinari vicini, con vicoli in pietra, buganvillee e alcune delle taverne più amate della zona, molte con terrazza sul mare.' },
  harbour: { title: 'Il porto di Hersonissos', distance: '2,5 km', text: 'Un lungomare con taverne di pesce, forni e bar che termina alla piccola cappella di Agia Paraskevi sugli scogli. Splendido al tramonto.' },
  lychnostatis: { title: 'Museo all’aperto di Lychnostatis', distance: '4 km', text: 'Un museo curato con amore sulla vita tradizionale cretese, con mulino a vento, laboratorio di tessitura, orti di erbe, un piccolo teatro e degustazioni di raki e miele.' },
  golf: { title: 'Crete Golf Club', distance: '4 km', text: 'L’unico campo da campionato a 18 buche dell’isola, disegnato tra le colline sopra Hersonissos, con vista fino alla costa.' },
  hersonissosBeach: { title: 'Le spiagge di Hersonissos', distance: '2,5 km', text: 'Una serie di calette sabbiose lungo la città, con lettini, beach bar e sport acquatici. Comode per un bagno prima di pranzo.' },
  anissaras: { title: 'Anissaras e Analipsi', distance: '5 km', text: 'Spiagge più ampie e tranquille a ovest di Hersonissos, amate dalle famiglie per l’acqua limpida e bassa e le taverne rilassate.' },
  malia: { title: 'Spiaggia di Malia', distance: '15 min in auto', text: 'Una lunga spiaggia dorata a est, con spazio in abbondanza anche ad agosto e una piccola cappella su un isolotto roccioso poco al largo.' },
  aquaPlus: { title: 'Parco acquatico Aqua Plus', distance: '4 km', text: 'Scivoli, piscine con onde e fiumi tra giardini di palme: mezza giornata facile con bambini di ogni età.' },
  aquaworld: { title: 'Acquario Aquaworld', distance: '1 km', text: 'Un piccolo acquario accogliente e centro di recupero per rettili a Hersonissos, perfetto per un’ora in un pomeriggio caldo.' },
  cretaquarium: { title: 'Cretaquarium', distance: '20 min in auto', text: 'Uno dei più grandi acquari del Mediterraneo, a Gournes, con migliaia di creature dei mari intorno a Creta.' },
  knossos: { title: 'Palazzo di Cnosso', distance: '35 min in auto', text: 'Il cuore della civiltà minoica e la città più antica d’Europa, appena fuori Heraklion. Andate di primo mattino per evitare caldo e folla.' },
  heraklion: { title: 'Heraklion e il Museo archeologico', distance: '30 min in auto', text: 'Il capoluogo dell’isola: porto e fortezza veneziani, mercati vivaci e una delle più grandi collezioni di arte minoica al mondo.' },
  maliaPalace: { title: 'Palazzo minoico di Malia', distance: '15 min in auto', text: 'Un sito minoico più tranquillo e arioso vicino al mare, spesso quasi deserto. Da abbinare a un bagno a Malia.' },
  lasithi: { title: 'Altopiano di Lasithi', distance: '1 ora in auto', text: 'Un verde altopiano circondato dai monti, punteggiato di vecchi mulini a vento e villaggi, con la grotta Dittea dove secondo il mito nacque Zeus.' },
  agiosNikolaos: { title: 'Agios Nikolaos', distance: '50 min in auto', text: 'Un’elegante cittadina di porto intorno a un piccolo lago, con caffè sull’acqua e un’ampia vista sulla baia di Mirabello.' },
  spinalonga: { title: 'Spinalonga', distance: '1 ora e 15 in auto', text: 'Un’isola-fortezza veneziana ed ex lebbrosario, raggiungibile in barca da Plaka o Elounda, resa famosa dal romanzo L’isola di Victoria Hislop.' },
  airport: { title: 'Aeroporto di Heraklion', distance: '23 km · 25 min', text: 'Aeroporto internazionale «Nikos Kazantzakis», con voli diretti da tutta Europa. Possiamo organizzare il transfer fino alla villa.' },
  port: { title: 'Porto di Heraklion', distance: '26 km · 30 min', text: 'Traghetti per il Pireo e le Cicladi. Transfer da e per il porto su richiesta.' },
};

export const placeTexts: Record<Locale, Texts> = { en, el, de, fr, it };

export function placesFor(locale: Locale) {
  return places.map((p) => ({ ...p, ...placeTexts[locale][p.id] }));
}

export type LocalizedPlace = ReturnType<typeof placesFor>[number];
