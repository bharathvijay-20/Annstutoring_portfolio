export const siteConfig = {
  brand: {
    name: 'ANNS TUTORING',
    monogram: 'AT',
    tagline: 'Learn. Understand. Excel.',
    shortDesc: 'CBSE Mathematics for Classes 6–10 and Theory-focused Civil Engineering academic guidance.',
  },
  faculty: {
    name: 'Annapurani M',
    bio: 'Experienced in teaching and Civil Engineering, with a strong background in structural engineering and academic problem solving.',
  },
  contact: {
    phone: '9790735047',
    displayPhone: '+91 97907 35047',
    whatsappNumber: '6379176279',
    displayWhatsapp: '+91 63791 76279',
    whatsappCountryCode: '91',
    whatsappMessage: 'Hello ANNS TUTORING, I would like to enquire about the classes.',
    email: 'annstutoring01@gmail.com',
    location: 'Online & Classroom Guidance',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfsuVcD7UtZDo8K-j4HzhPkYLGiUm-VJL_Ztj8pUQZ_T_S3YQ/viewform?usp=publish-editor',
  },
  socials: {
    youtube: 'https://www.youtube.com/@annstutoring01',
    instagram: 'https://www.instagram.com/annstutoring01?igsh=eXJoODY0ZnJzbGdm',
  }
};

/**
 * Helper to get the formatted WhatsApp click-to-chat URL
 */
export const getWhatsAppUrl = (customMessage?: string) => {
  const fullPhone = `${siteConfig.contact.whatsappCountryCode}${siteConfig.contact.whatsappNumber}`;
  const message = customMessage || siteConfig.contact.whatsappMessage;
  return `https://wa.me/${fullPhone}?text=${encodeURIComponent(message)}`;
};

/**
 * Helper to open the Google Form in a new tab
 */
export const openGoogleForm = () => {
  window.open(siteConfig.contact.googleFormUrl, '_blank', 'noopener,noreferrer');
};
