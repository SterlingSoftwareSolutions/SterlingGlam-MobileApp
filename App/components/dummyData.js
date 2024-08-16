export const servicesData = {
  // Haircut and Styling
  haircutStyling: {
    headerImage: require('../resources/service7.png'),
    headerTitle: 'HAIRCUT AND STYLING',
    headerSubtitle: 'Get the perfect haircut and styling to suit your personality and occasion.',
    services: [
      { id: 1, name: 'Classic Haircut', description: 'Standard haircut for all hair types.', price: 'Rs. 2500.00' },
      { id: 2, name: 'Layered Cut', description: 'Haircut that adds volume and shape.', price: 'Rs. 3000.00' },
      { id: 3, name: 'Bob Cut', description: 'A chic, short hairstyle that’s always in trend.', price: 'Rs. 3500.00' },
      { id: 4, name: 'Blowout', description: 'A blow-dry service for a sleek finish.', price: 'Rs. 1500.00' },
    ],
    specialists: [
      { id: 1, name: 'Alice', rating: '4.5', image: require('../resources/specialist1.jpeg') },
      { id: 2, name: 'Sophia', rating: '4.7', image: require('../resources/specialist2.jpeg') },
      { id: 3, name: 'Ava', rating: '4.6', image: require('../resources/specialist3.jpeg') },
    ],
  },

  // Hair Coloring
  hairColoring: {
    headerImage: require('../resources/service2.png'),
    headerTitle: 'HAIR COLORING',
    headerSubtitle: 'Add some flair to your hair with professional coloring services.',
    services: [
      { id: 1, name: 'Full Hair Color', description: 'Complete hair color change.', price: 'Rs. 6000.00' },
      { id: 2, name: 'Highlights', description: 'Add highlights to brighten your hair.', price: 'Rs. 4000.00' },
      { id: 3, name: 'Balayage', description: 'A natural-looking, hand-painted hair color technique.', price: 'Rs. 7000.00' },
      { id: 4, name: 'Root Touch-up', description: 'Touch up your roots for a seamless look.', price: 'Rs. 2500.00' },
    ],
    specialists: [
      { id: 1, name: 'Ella', rating: '4.7', image: require('../resources/specialist1.jpeg') },
      { id: 2, name: 'Chloe', rating: '4.6', image: require('../resources/specialist2.jpeg') },
      { id: 3, name: 'Isla', rating: '4.8', image: require('../resources/specialist3.jpeg') },
    ],
  },

  // Hair Treatments
  hairTreatments: {
    headerImage: require('../resources/service4.png'),
    headerTitle: 'HAIR TREATMENTS',
    headerSubtitle: 'Nourish and repair your hair with specialized treatments.',
    services: [
      { id: 1, name: 'Keratin Treatment', description: 'A smoothing treatment to reduce frizz and add shine.', price: 'Rs. 8000.00' },
      { id: 2, name: 'Deep Conditioning', description: 'Intensive treatment to hydrate and repair hair.', price: 'Rs. 3500.00' },
      { id: 3, name: 'Scalp Treatment', description: 'A treatment to nourish and invigorate the scalp.', price: 'Rs. 4000.00' },
      { id: 4, name: 'Hair Mask', description: 'Rich treatment to strengthen and moisturize hair.', price: 'Rs. 3000.00' },
    ],
    specialists: [
      { id: 1, name: 'Emma', rating: '4.6', image: require('../resources/specialist1.jpeg') },
      { id: 2, name: 'Lily', rating: '4.5', image: require('../resources/specialist2.jpeg') },
      { id: 3, name: 'Harper', rating: '4.8', image: require('../resources/specialist3.jpeg') },
    ],
  },

  // Manicure and Pedicure
  manicurePedicure: {
    headerImage: require('../resources/service5.png'),
    headerTitle: 'MANICURE AND PEDICURE',
    headerSubtitle: 'Pamper your hands and feet with our luxurious manicure and pedicure services.',
    services: [
      { id: 1, name: 'Classic Manicure', description: 'A traditional manicure including nail shaping and polish.', price: 'Rs. 2000.00' },
      { id: 2, name: 'Gel Manicure', description: 'A manicure with long-lasting gel polish.', price: 'Rs. 3000.00' },
      { id: 3, name: 'Classic Pedicure', description: 'A traditional pedicure with exfoliation and nail care.', price: 'Rs. 2500.00' },
      { id: 4, name: 'Spa Pedicure', description: 'A luxurious pedicure with a foot massage.', price: 'Rs. 3500.00' },
    ],
    specialists: [
      { id: 1, name: 'Mia', rating: '4.6', image: require('../resources/specialist1.jpeg') },
      { id: 2, name: 'Grace', rating: '4.5', image: require('../resources/specialist2.jpeg') },
      { id: 3, name: 'Zoe', rating: '4.7', image: require('../resources/specialist3.jpeg') },
    ],
  },

  // Eyebrow Threading
  eyebrowThreading: {
    headerImage: require('../resources/service3.png'),
    headerTitle: 'EYEBROW THREADING',
    headerSubtitle: 'Get perfectly shaped eyebrows with our threading services.',
    services: [
      { id: 1, name: 'Basic Threading', description: 'Quick and precise eyebrow shaping.', price: 'Rs. 1000.00' },
      { id: 2, name: 'Full Face Threading', description: 'Threading service for the entire face.', price: 'Rs. 2000.00' },
      { id: 3, name: 'Eyebrow Tinting', description: 'Tint your eyebrows for a fuller look.', price: 'Rs. 1500.00' },
      { id: 4, name: 'Brow Lamination', description: 'Smoothes and lifts brows for a fuller look.', price: 'Rs. 2500.00' },
    ],
    specialists: [
      { id: 1, name: 'Ella', rating: '4.7', image: require('../resources/specialist1.jpeg') },
      { id: 2, name: 'Isabella', rating: '4.6', image: require('../resources/specialist2.jpeg') },
      { id: 3, name: 'Ava', rating: '4.8', image: require('../resources/specialist3.jpeg') },
    ],
  },

  // Waxing Services
  waxingServices: {
    headerImage: require('../resources/service6.png'),
    headerTitle: 'WAXING SERVICES',
    headerSubtitle: 'Smooth and hair-free skin with our professional waxing services.',
    services: [
      { id: 1, name: 'Full Body Wax', description: 'Complete hair removal from all areas of the body.', price: 'Rs. 8000.00' },
      { id: 2, name: 'Brazilian Wax', description: 'Hair removal from the bikini area.', price: 'Rs. 5000.00' },
      { id: 3, name: 'Leg Wax', description: 'Hair removal from the legs.', price: 'Rs. 3000.00' },
      { id: 4, name: 'Underarm Wax', description: 'Hair removal from the underarms.', price: 'Rs. 1500.00' },
    ],
    specialists: [
      { id: 1, name: 'Sophia', rating: '4.7', image: require('../resources/specialist1.jpeg') },
      { id: 2, name: 'Mila', rating: '4.5', image: require('../resources/specialist2.jpeg') },
      { id: 3, name: 'Olivia', rating: '4.8', image: require('../resources/specialist3.jpeg') },
    ],
  },

  // Hair Extensions
  hairExtensions: {
    headerImage: require('../resources/service8.png'),
    headerTitle: 'HAIR EXTENSIONS',
    headerSubtitle: 'Enhance the length and volume of your hair with our premium hair extensions.',
    services: [
      { id: 1, name: 'Clip-In Extensions', description: 'Temporary extensions for added length and volume.', price: 'Rs. 12000.00' },
      { id: 2, name: 'Tape-In Extensions', description: 'Semi-permanent extensions that are taped to your natural hair.', price: 'Rs. 15000.00' },
      { id: 3, name: 'Sew-In Extensions', description: 'Extensions that are sewn into braids for a more permanent solution.', price: 'Rs. 18000.00' },
      { id: 4, name: 'Keratin Fusion Extensions', description: 'Long-lasting extensions bonded with keratin for a natural look.', price: 'Rs. 22000.00' },
    ],
    specialists: [
      { id: 1, name: 'Hannah', rating: '4.7', image: require('../resources/specialist1.jpeg') },
      { id: 2, name: 'Charlotte', rating: '4.6', image: require('../resources/specialist2.jpeg') },
      { id: 3, name: 'Ella', rating: '4.8', image: require('../resources/specialist3.jpeg') },
    ],
  },

   // Fillers
   fillers: {
    headerImage: require('../resources/service15.jpg'),
    headerTitle: 'FILLERS',
    headerSubtitle: 'Enhance your features and reduce wrinkles with our range of filler treatments.',
    services: [
      { id: 1, name: 'Lip Fillers', description: 'Add volume and shape to your lips with our high-quality lip fillers.', price: 'Rs. 15000.00' },
      { id: 2, name: 'Cheek Fillers', description: 'Accentuate and define your cheekbones with our dermal fillers.', price: 'Rs. 20000.00' },
      { id: 3, name: 'Under-Eye Fillers', description: 'Smooth out dark circles and hollows under the eyes.', price: 'Rs. 18000.00' },
      { id: 4, name: 'Nose Fillers', description: 'Non-surgical rhinoplasty to reshape and contour your nose.', price: 'Rs. 25000.00' },
    ],
    specialists: [
      { id: 1, name: 'Natalie', rating: '4.9', image: require('../resources/specialist1.jpeg') },
      { id: 2, name: 'Olivia', rating: '4.8', image: require('../resources/specialist2.jpeg') },
      { id: 3, name: 'Amelia', rating: '4.7', image: require('../resources/specialist3.jpeg') },
    ],
  },
// Facial Treatments
facialTreatments: {
  headerImage: require('../resources/service8.png'),
  headerTitle: 'FACIAL TREATMENTS',
  headerSubtitle: 'Rejuvenate your skin with our luxurious facial treatments.',
  services: [
    { id: 1, name: 'Deep Cleansing Facial', description: 'A thorough cleansing treatment that removes impurities and revitalizes the skin.', price: 'Rs. 3500.00' },
    { id: 2, name: 'Anti-Aging Facial', description: 'A rejuvenating treatment that reduces the appearance of fine lines and wrinkles.', price: 'Rs. 4500.00' },
    { id: 3, name: 'Hydrating Facial', description: 'A nourishing facial that hydrates and refreshes dry skin.', price: 'Rs. 3000.00' },
    { id: 4, name: 'Acne Treatment Facial', description: 'A targeted facial to treat and prevent acne breakouts.', price: 'Rs. 4000.00' },
  ],
  specialists: [
    { id: 1, name: 'Emma', rating: '4.9', image: require('../resources/specialist3.jpeg') },
    { id: 2, name: 'Isabella', rating: '4.6', image: require('../resources/specialist1.jpeg') },
    { id: 3, name: 'Lily', rating: '4.7', image: require('../resources/specialist2.jpeg') },
  ],
},

// Bridal Services
bridalServices: {
  headerImage: require('../resources/service1.png'),
  headerTitle: 'BRIDAL SERVICES',
  headerSubtitle: 'Make your special day perfect with our premium bridal services.',
  services: [
    { id: 1, name: 'Bridal Makeup', description: 'Full bridal makeup with high-quality products.', price: 'Rs. 12000.00' },
    { id: 2, name: 'Bridal Hair Styling', description: 'Elegant and long-lasting bridal hair styling.', price: 'Rs. 8000.00' },
    { id: 3, name: 'Pre-Wedding Facial', description: 'Specialized facial treatment to prepare your skin for the big day.', price: 'Rs. 5000.00' },
    { id: 4, name: 'Bridal Mehndi', description: 'Intricate henna designs for the bride.', price: 'Rs. 6000.00' },
  ],
  specialists: [
    { id: 1, name: 'Ava', rating: '4.8', image: require('../resources/specialist3.jpeg') },
    { id: 2, name: 'Mia', rating: '4.7', image: require('../resources/specialist2.jpeg') },
    { id: 3, name: 'Charlotte', rating: '4.9', image: require('../resources/specialist1.jpeg') },
  ],
},

// Beard Trim
beardTrim: {
  headerImage: require('../resources/service11.jpg'),
  headerTitle: 'BEARD TRIM',
  headerSubtitle: 'Achieve a sharp and clean look with our expert beard trimming services.',
  services: [
    { id: 1, name: 'Full Beard Trim', description: 'Comprehensive beard trimming and shaping.', price: 'Rs. 2000.00' },
    { id: 2, name: 'Goatee Trim', description: 'Precise trimming and shaping of your goatee.', price: 'Rs. 1500.00' },
    { id: 3, name: 'Mustache Trim', description: 'Expert trimming and styling of your mustache.', price: 'Rs. 1000.00' },
    { id: 4, name: 'Beard Line-Up', description: 'Sharp and defined beard lines for a clean look.', price: 'Rs. 1200.00' },
  ],
  specialists: [
    { id: 1, name: 'Ava', rating: '4.8', image: require('../resources/specialist3.jpeg') },
    { id: 2, name: 'Mia', rating: '4.7', image: require('../resources/specialist2.jpeg') },
    { id: 3, name: 'Charlotte', rating: '4.9', image: require('../resources/specialist1.jpeg') },
  ],
},

// Shaving
shaving: {
  headerImage: require('../resources/service10.png'),
  headerTitle: 'SHAVING SERVICES',
  headerSubtitle: 'Enjoy a smooth and clean shave with our professional shaving services.',
  services: [
    { id: 1, name: 'Classic Shave', description: 'Traditional shave using a razor for a close and comfortable finish.', price: 'Rs. 1500.00' },
    { id: 2, name: 'Hot Towel Shave', description: 'Relaxing shave with a hot towel treatment to soften the beard.', price: 'Rs. 2000.00' },
    { id: 3, name: 'Luxury Shave', description: 'Premium shave experience with additional moisturizing and aftercare.', price: 'Rs. 2500.00' },
    { id: 4, name: 'Beard Shaping and Shave', description: 'Shaping of the beard followed by a clean shave for a well-groomed look.', price: 'Rs. 1800.00' },
  ],
  specialists: [
    { id: 1, name: 'Ava', rating: '4.8', image: require('../resources/specialist3.jpeg') },
    { id: 2, name: 'Mia', rating: '4.7', image: require('../resources/specialist2.jpeg') },
    { id: 3, name: 'Charlotte', rating: '4.9', image: require('../resources/specialist1.jpeg') },
  ],
},

  
};