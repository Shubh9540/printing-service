export interface HeaderContactItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  subLinks?: { id: string; label: string; url: string }[];
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  contactInfoLeft?: HeaderContactItem[];
  contactInfoRight?: HeaderContactItem[];
  navLinksLeft?: HeaderNavLink[];
  navLinksRight?: HeaderNavLink[];
  contactButton?: { text: string; url: string; icon?: string };
}

export interface TopBarData {
  phoneLabel: string;
  phoneValue: string;
  emailValue: string;
  followLabel: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface HeroSlide {
  id: string;
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  primaryButton: { text: string; url: string };
  secondaryButton?: { text: string; url: string };
}

export interface HeroData {
  subtitle?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  description?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  button?: { text: string; url: string };
  slides?: HeroSlide[];
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: { id: string; icon: string; title: string; description?: string }[];
  checklists?: string[];
  avatars?: string[];
  customersText?: string;
  videoThumbnail?: string;
  videoUrl?: string;
  videoText?: string;
  videoSubtext?: string;
  button: { text: string; url: string };
  bgImage?: string;
  imageMain: string;
  imageSmall1?: string;
  imageSmall2: string;
  imageSmall3?: string;
  badgeText1?: string;
  badgeText2?: string;
  stats?: { id: string; icon: string; number: string; label: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  url: string;
}

export interface ProcessItem {
  id: string;
  icon: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessData {
  subtitle: string;
  title1: string;
  title2: string;
  description?: string;
  bgImage: string;
  steps: ProcessItem[];
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  services: ServiceItem[];
  button: { text: string; url: string };
  featuredBlock?: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    image: string;
  };
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
}

export interface ServiceDetailProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ServiceDetailData {
  id: string;
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  imageMain: string;
  features: ServiceDetailFeature[];
  overviewTitle: string;
  overviewText: string[];
  overviewImage: string;
  processTitle: string;
  processSteps: ServiceDetailProcessStep[];
  faqTitle: string;
  faqs: { id: string; question: string; answer: string }[];
  sidebar: {
    quoteForm: {
      title: string;
      description: string;
      buttonText: string;
      servicesList: string[];
    };
    servicesList: {
      title: string;
      services: { id: string; label: string; url: string }[];
    };
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  button?: { text: string; url: string; };
  tag?: string;
  testimonials: TestimonialItem[];
}

export interface FooterData {
  logoAlt: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  features: { id: string; icon: string; title: string; color: string }[];
  quickLinksTitle?: string;
  servicesTitle?: string;
  contactTitle?: string;
  galleryTitle?: string;
  gallery: { id: string; image: string }[];
  hoursTitle: string;
  hours: string;
  hoursDays: string;
  socialLinks: { id: string; icon: string; url: string }[];
  bottomLinks: { id: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks: { id: string; label: string; url: string }[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: WhyChooseUsFeature[];
  button?: { text: string; url: string };
  imageMain: string;
  badgeTitle?: string;
  badgeText?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  category?: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  categories?: string[];
  images: GalleryItem[];
}

export interface VideoItem {
  id: string;
  thumbnail: string;
  youtubeId: string;
  duration: string;
  title: string;
}

export interface VideoGalleryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  videos: VideoItem[];
}

export interface ContactData {
  contactCards: {
    phoneTitle: string;
    phone: string;
    phoneDesc: string;
    emailTitle: string;
    email: string;
    emailDesc: string;
    addressTitle: string;
    address: string;
  };
  form: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
  };
  sidebar: {
    image: string;
    title: string;
    reasons: {
      id: string;
      title: string;
      description: string;
      icon: string;
      colorClass: string;
    }[];
  };
  mapUrl: string;
}

export interface EnquiryData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
  form: {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
    servicesList: string[];
  };
}






export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image1?: string;
  image2?: string;
  image?: string;
  faqs: FaqItem[];
}


export interface QuoteFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface MarqueeData {
  text1: string;
  text2: string;
}

export interface QuoteData {
  form: {
    title: string;
    description: string;
    buttonText: string;
  };
  sidebar: {
    whyTitle1: string;
    whyTitle2: string;
    whyDescription: string;
    features: {
      id: string;
      title: string;
      description: string;
      icon: string;
      colorClass: string;
    }[];
    contactTitle: string;
    contactDescription: string;
    contactInfo: {
      phoneTitle: string;
      phone: string;
      emailTitle: string;
      email: string;
      locationTitle: string;
      location: string;
    };
  };
}

export interface PrintingServiceTemplateData {
  common: {
    aboutBreadcrumb?: any;
    servicesBreadcrumb?: any;
    contactBreadcrumb?: any;
    enquiryBreadcrumb?: any;
    galleryBreadcrumb?: any;
    thankYouBreadcrumb?: any;
    Footer?: FooterData;
  };
  categories: {
    PrintingService: {
      templateComponents?: any;
      sections: {
        TopBar?: { variants?: { PrintingServiceTopBar1?: TopBarData } };
        Header?: { variants?: { PrintingServiceHeader1?: HeaderData } };
        Gallery?: { variants?: { PrintingServiceGallery1?: GalleryData } };
        ThankYou?: { variants?: { PrintingServiceThankYou1?: ThankYouData } };
        Hero?: { variants?: { PrintingServiceHero1?: HeroData } };
        Marquee?: { variants?: { PrintingServiceMarquee1?: MarqueeData } };
        AboutUs?: { variants?: { PrintingServiceAboutUs1?: AboutUsData } };
        Services?: { variants?: { PrintingServiceServices1?: ServicesData } };
        ServiceDetail?: { variants?: { [key: string]: ServiceDetailData } };
        Process?: { variants?: { PrintingServiceProcess1?: ProcessData } };
        Testimonials?: { variants?: { PrintingServiceTestimonials1?: TestimonialsData } };
        Faq?: { variants?: { PrintingServiceFaq1?: FaqData } };
        whyChooseUs?: { variants?: { PrintingServiceWhyChooseUs1?: WhyChooseUsData } };
        contact?: { variants?: { PrintingServiceContact1?: ContactData } };
        Quote?: { variants?: { PrintingServiceQuote1?: QuoteData } };
        enquiry?: { variants?: { PrintingServiceEnquiry1?: EnquiryData } };
      };
    };
  };
}

export interface ThankYouData {
  title1: string;
  title2: string;
  subtitle: string;
  description: string;
  button: {
    text: string;
    url: string;
  };
}
