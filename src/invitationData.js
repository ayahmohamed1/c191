/**
 * =========================================================================
 * ملف بيانات وتفاصيل دعوة الخطوبة (بيانات العروسين أحمد ومرام)
 * INVITATION CONFIGURATION FILE
 * =========================================================================
 * يمكنك تغيير أي صورة بكل سهولة إما:
 * 1) استبدال ملف الصورة مباشرة في مجلد public (مثل: couple.jpg أو children.png أو gallery2.jpg أو gallery3.jpg)
 * 2) أو تعديل المسار هنا في هذا الملف مباشرة.
 * =========================================================================
 */

export const INVITATION_DATA = {
  // =========================================================================
  // 📸 قسم الصور (جميع الصور موجودة في مجلد public ويمكن استبدالها وتغييرها بسهولة)
  // =========================================================================
  images: {
    // 1. صورة العروسين الرئيسية (الصورة 1 في معرض الصور)
    couple: "/couple.jpg",

    // 2. صور معرض الصور الإضافية (الصورة 2 و 3)
    gallery1: "/couple.jpg",
    gallery2: "/gallery_rings.jpg",
    gallery3: "/gallery_sunset.jpg",

    // 3. صورة الأطفال في أسفل الدعوة
    children: "/children.png",

    // 4. صورة الظرف الملكي (شاشة البداية)
    envelope: "/envelope.png",

    // 5. صورة الستارة المخملية (أعلى البطاقة)
    curtain: "/curtain.png",

    // 6. صورة باقة الورد (أعلى اليمين)
    bouquet: "/bouquet.png",

    // 7. صورة الحمامة الطائرة
    dove: "/dove.png",
  },

  // ترويسة الغلاف والظرف
  envelopeHeader: "We're getting engaged",

  // الاسمان بالخط الإنجليزي المائل (مثل الصورة المرجعية تماماً)
  scriptNames: "Ahmed & Maram",

  // ترويسة الدعوة
  headerTitleEn: "THE engagement OF OUR CHILDREN",
  headerTitleAr: "حفل خطوبة مبارك",

  // بيانات العريس
  groom: {
    name: "Ahmed",
    nameAr: "أحمد",
    subtitle: "GROOM"
  },

  // بيانات العروس
  bride: {
    name: "Maram",
    nameAr: "مرام",
    subtitle: "BRIDE"
  },

  // عبارة الدعوة الترحيبية بالإنجليزية
  welcomeMessage: "We would love to have you with us as we celebrate the beginning of our forever.",

  // معرض الصور (3 صور مع العنوان PHOTO GALLERY)
  gallery: {
    title: "PHOTO GALLERY",
    photos: [
      { id: 1, src: "/couple.jpg", fallback: "/gallery1.jpg", alt: "صورة العروسين الملكية" },
      { id: 2, src: "/gallery_rings.jpg", fallback: "/gallery2.jpg", alt: "دبل وخواتم الخطوبة" },
      { id: 3, src: "/gallery_sunset.jpg", fallback: "/gallery3.jpg", alt: "لحظات رومانسية عند الغروب" },
    ],
    photoMainPortrait: "/couple.jpg",
  },

  // تفاصيل الموعد والوقت (العد التنازلي)
  schedule: {
    headingEn: "THE ENGAGEMENT PARTY WILL TAKE PLACE AT:",
    timeDisplay: "4:00 PM",
    dateDayName: "FRIDAY",
    dateDayNameAr: "الجمعة",
    dateDayNumber: "4",
    dateMonthYear: "DECEMBER 2026",
    dateMonthYearAr: "ديسمبر ٢٠٢٦",
    // تاريخ ووقت الحفل لحساب العد التنازلي: 4 ديسمبر 2026 الساعة 4:00 عصراً
    targetDateTime: "2026-12-04T16:00:00"
  },

  // تفاصيل المكان وخريطة Google Maps
  location: {
    title: "LOCATION",
    venueName: "",
    venueNameAr: "",
    address: "",
    addressAr: "",
    // رابط خريطة Google Maps المرسل من المستخدم
    googleMapsUrl: "https://maps.app.goo.gl/ekVGxxoVgWndd1LcA?g_st=ic",
    // يتم عرض اللوكيشن فقط من زر Google Maps
    mapEmbedIframe: ""
  },

  // دريس كود الحفل وألوان الملابس المقترحة
  dressCode: {
    title: "DRESS CODE",
    subtitle: "WE WOULD LOVE TO SEE YOU IN SHADES OF:",
    colors: [
      { id: 1, name: "Burgundy", nameAr: "نبيتي", hex: "#800020" },
      { id: 2, name: "Navy", nameAr: "كحلي", hex: "#000080" },
      { id: 3, name: "Brown", nameAr: "بني", hex: "#8B4513" },
      { id: 4, name: "Black", nameAr: "أسود", hex: "#000000" },
    ]
  },

  // تأكيد الحضور ورسائل التهنئة للعروسين (RSVP)
  rsvp: {
    title: "RSVP",
    subtitle: "PLEASE CONFIRM YOUR ATTENDANCE",
    namePlaceholder: "Name",
    messagePlaceholder: "Leave a message for Ahmed & Maram...",
    submitText: "SEND RSVP",
    successHeading: "THANK YOU!",
    successMessage: "Your message has been received with love for Ahmed & Maram ❤️"
  },

  // مسار ملف الموسيقى الرومانسية
  audioTrack: "/song.mp3"
};

