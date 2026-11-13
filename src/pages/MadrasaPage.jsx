import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, BookOpen, Compass, UserCheck, Calculator, Laptop, 
  Languages, MapPin, CheckCircle2, ChevronRight, Scale, 
  HeartHandshake, MessageSquare, Trees, Globe, 
  Monitor, Activity, Building, Users, Library, ClipboardList, 
  PenTool, Calendar, ShieldCheck, Trophy, Sparkles, Check, 
  Clock, Shirt, PhoneCall, Mail, QrCode, FileText, X,
  GraduationCap, BookMarked, Layers, HeartPulse, Zap,
  Coffee, School, ArrowRight, ExternalLink
} from 'lucide-react';

// Fee Data from Prospectus Page 4
const FEE_DATA = {
  play: { name: 'Play Group', admission: 5000, service: 2000, tuition: 1200 },
  nursery: { name: 'Nursery', admission: 5000, service: 2000, tuition: 1200 },
  g1: { name: '1st Grade (Class 1)', admission: 5000, service: 2000, tuition: 1300 },
  g2: { name: '2nd Grade (Class 2)', admission: 5000, service: 2000, tuition: 1300 },
  g3: { name: '3rd Grade (Class 3)', admission: 6000, service: 2000, tuition: 1400 },
  g4: { name: '4th Grade (Class 4)', admission: 6000, service: 2000, tuition: 1400 },
  g5: { name: '5th Grade (Class 5)', admission: 6000, service: 2000, tuition: 1500 },
  g6: { name: '6th Grade (Class 6)', admission: 6000, service: 2000, tuition: 1600 },
  g7: { name: '7th Grade (Class 7)', admission: 6000, service: 2000, tuition: 1600 },
};

// 14 Faculty Profiles from Prospectus Page 6
const TEACHERS_DATA = [
  {
    id: 1,
    name: 'Md. Ismail Bari',
    role: 'Head Teacher / Principal',
    degree: 'Kamil, Masters',
    category: 'leadership',
    image: '/assets/images/madrasa_prospectus/teacher_1_ismail_bari.jpg'
  },
  {
    id: 2,
    name: 'Mahmudur Rahman Faisal',
    role: 'Assistant Head Teacher / Vice Principal',
    degree: 'Hafez, Kamil, Masters',
    category: 'leadership',
    image: '/assets/images/madrasa_prospectus/teacher_2_mahmudur_rahman.jpg'
  },
  {
    id: 3,
    name: 'Samiul Islam',
    role: 'Assistant Teacher (Arabic)',
    degree: 'Hafez, Mufti',
    category: 'islamic',
    image: '/assets/images/madrasa_prospectus/teacher_3_samiul_islam.jpg'
  },
  {
    id: 4,
    name: 'Mazharul Islam',
    role: 'Assistant Teacher (Hifz)',
    degree: 'Hafez, Kamil, Masters',
    category: 'islamic',
    image: '/assets/images/madrasa_prospectus/teacher_4_mazharul_islam.jpg'
  },
  {
    id: 5,
    name: 'Imran Hossain Jahangir',
    role: 'Assistant Teacher (Fiqh)',
    degree: 'Hafez, Dawra-e-Hadith',
    category: 'islamic',
    image: '/assets/images/madrasa_prospectus/teacher_5_imran_hossain.jpg'
  },
  {
    id: 6,
    name: 'K. M. Safayet Hasan',
    role: 'Assistant Teacher (Science)',
    degree: 'B.Sc in EEE',
    category: 'general',
    image: '/assets/images/madrasa_prospectus/teacher_6_safayet_hasan.jpg'
  },
  {
    id: 7,
    name: 'Shawkat Hossain',
    role: 'Assistant Teacher (General)',
    degree: 'Kamil, Masters',
    category: 'general',
    image: '/assets/images/madrasa_prospectus/teacher_7_shawkat_hossain.jpg'
  },
  {
    id: 8,
    name: 'Salah Uddin',
    role: 'Assistant Teacher (Noorani)',
    degree: 'Hafez, Mufti',
    category: 'islamic',
    image: '/assets/images/madrasa_prospectus/teacher_8_salah_uddin.jpg'
  },
  {
    id: 9,
    name: 'Ayesha Zaman',
    role: 'Assistant Teacher (English)',
    degree: 'Kamil, Masters in English',
    category: 'lang',
    image: '/assets/images/madrasa_prospectus/teacher_9_ayesha_zaman.jpg'
  },
  {
    id: 10,
    name: 'Parveen Akhter',
    role: 'Assistant Teacher (Mathematics)',
    degree: 'M.Sc in Statistics',
    category: 'general',
    image: '/assets/images/madrasa_prospectus/teacher_10_parveen_akhter.jpg'
  },
  {
    id: 11,
    name: 'Tania Sultana',
    role: 'Assistant Teacher (Mathematics)',
    degree: 'M.Sc in Mathematics',
    category: 'general',
    image: '/assets/images/madrasa_prospectus/teacher_11_tania_sultana.jpg'
  },
  {
    id: 12,
    name: 'Hamida Khatun',
    role: 'Assistant Teacher (Bangla)',
    degree: 'B.A',
    category: 'lang',
    image: '/assets/images/madrasa_prospectus/teacher_12_hamida_khatun.jpg'
  },
  {
    id: 13,
    name: 'Marium Akhter',
    role: 'Assistant Teacher (Bangla)',
    degree: 'Masters in Bangla',
    category: 'lang',
    image: '/assets/images/madrasa_prospectus/teacher_13_marium_akhter.jpg'
  },
  {
    id: 14,
    name: 'Mahmud Hasan Rubel',
    role: 'Accountant & Administrative Officer',
    degree: 'B.B.A, M.B.A',
    category: 'lang',
    image: '/assets/images/madrasa_prospectus/teacher_14_mahmud_hasan.jpg'
  }
];

// 8 Campus Activities from Prospectus Page 7
const ACTIVITIES_DATA = [
  {
    id: 1,
    title: 'Computer & IT Class',
    desc: 'Students actively practicing digital literacy, typing, and essential computing skills in the modern IT laboratory.',
    image: '/assets/images/madrasa_prospectus/activity_computer_lab.jpg'
  },
  {
    id: 2,
    title: 'Daily Student Assembly',
    desc: 'Morning parade, national anthem, ethical pledges, and physical drills on the spacious green campus grounds.',
    image: '/assets/images/madrasa_prospectus/activity_daily_assembly.jpg'
  },
  {
    id: 3,
    title: 'Classroom Learning Activities',
    desc: 'Interactive, student-centric academic instruction with individualized teacher guidance in modern classrooms.',
    image: '/assets/images/madrasa_prospectus/activity_classroom_learning.jpg'
  },
  {
    id: 4,
    title: 'Noorani Quran Learning Program',
    desc: 'Rigorous Makhraj articulation and Tajweed rules training under certified Huffaz for authentic recitation.',
    image: '/assets/images/madrasa_prospectus/activity_quran_learning.jpg'
  },
  {
    id: 5,
    title: 'Student Drawing Competition',
    desc: 'Cultivating fine motor coordination, artistic expression, and visual creativity through structured competitions.',
    image: '/assets/images/madrasa_prospectus/activity_art_competition.jpg'
  },
  {
    id: 6,
    title: 'Naat-e-Rasool Recitation Competition',
    desc: 'Inspiring heartfelt love for the Prophet ﷺ while fostering public speaking, elocution, and recitation talents.',
    image: '/assets/images/madrasa_prospectus/activity_recitation_competition.jpg'
  },
  {
    id: 7,
    title: 'Parents Gathering & Discussion Meeting',
    desc: 'Open discussion assemblies between guardians and faculty discussing academic progress, discipline, and moral development.',
    image: '/assets/images/madrasa_prospectus/activity_parents_meeting.jpg'
  },
  {
    id: 8,
    title: 'Annual Sports Prize Distribution Ceremony',
    desc: 'Celebrating athletic achievements, track and field excellence, sportsmanship, and teamwork across all age groups.',
    image: '/assets/images/madrasa_prospectus/activity_sports_awards.jpg'
  }
];

export default function MadrasaPage() {
  // State for Fee Calculator
  const [selectedGrade, setSelectedGrade] = useState('g3');
  const [includeHifz, setIncludeHifz] = useState(false);

  // State for Program Filters
  const [programFilter, setProgramFilter] = useState('all');

  // State for Faculty Filter
  const [teacherFilter, setTeacherFilter] = useState('all');

  // State for Document Checklist
  const [checklist, setChecklist] = useState({
    form: false,
    photo: false,
    nid: false,
    birthCert: false,
    bloodReport: false,
    feesReady: false
  });

  // State for Lightbox Modal
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Fee calculation helper
  const currentFee = FEE_DATA[selectedGrade] || FEE_DATA.g3;
  const hifzAmount = includeHifz ? 1000 : 0;
  const totalAdmission = currentFee.admission + currentFee.service + currentFee.tuition + hifzAmount;
  const recurringMonthly = currentFee.tuition + hifzAmount;

  // Checklist helper
  const checkedCount = Object.values(checklist).filter(Boolean).length;

  const toggleChecklistItem = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Filtered teachers
  const filteredTeachers = TEACHERS_DATA.filter(t => {
    if (teacherFilter === 'all') return true;
    return t.category === teacherFilter;
  });

  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      
      {/* ==================== STICKY QUICK SUB-NAV ==================== */}
      <div className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-sage-border py-2.5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-0.5 text-xs font-semibold">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'about', label: 'About' },
              { id: 'vision', label: 'Vision' },
              { id: 'why-choose', label: 'Why Choose Us' },
              { id: 'programs', label: 'Programs' },
              { id: 'facilities', label: 'Facilities' },
              { id: 'admission', label: 'Admission' },
              { id: 'fees', label: 'Fee Calculator' },
              { id: 'schedule', label: 'Timetable' },
              { id: 'uniform', label: 'Uniform' },
              { id: 'faculty', label: 'Faculty' },
              { id: 'exams', label: 'Examinations' },
              { id: 'gallery', label: 'Activities' },
              { id: 'guidelines', label: 'Parent Guide' },
              { id: 'contact', label: 'Contact' },
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-emerald/5 hover:bg-emerald hover:text-white text-emerald-deep border border-emerald/15 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== 1. PREMIUM HERO SECTION ==================== */}
      <section id="overview" className="relative bg-gradient-to-br from-emerald-dark via-emerald-deep to-emerald text-white pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 islamic-pattern-dark pointer-events-none opacity-30"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-light/15 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/95 backdrop-blur-md">
                  <Award className="w-3.5 h-3.5 text-gold-light" />
                  Bangladesh Madrasah Education Board Curriculum
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/95 backdrop-blur-md">
                  <BookOpen className="w-3.5 h-3.5 text-gold-light" />
                  Play Group to Grade 7
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Where Islamic Values Meet <span className="text-gold-light italic">Modern Education</span>
              </h1>

              <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                WAMY Model Madrasah is an exemplary educational institution dedicated to nurturing knowledgeable, disciplined, morally responsible, and capable students through the harmonious synthesis of Islamic teachings and contemporary academic education.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#programs"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-antique to-gold text-emerald-dark font-bold text-sm shadow-lg hover:shadow-gold-glow transition-all flex items-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  Explore Our Programs
                </a>
                <a
                  href="#admission"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold transition-all backdrop-blur-md flex items-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  Admission Guide
                </a>
                <a
                  href="#fees"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold transition-all backdrop-blur-md flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  Fee Calculator
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
                <div>
                  <div className="font-serif text-2xl font-bold text-gold-light">Play – 7th</div>
                  <div className="text-xs text-white/70">Academic Range</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-gold-light">Dual Track</div>
                  <div className="text-xs text-white/70">Board & Hifz Focus</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-gold-light">10+ Amenities</div>
                  <div className="text-xs text-white/70">Modern Facilities</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-gold-light">14 Faculty</div>
                  <div className="text-xs text-white/70">Scholars & Teachers</div>
                </div>
              </div>
            </div>

            {/* Campus Building Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-emerald-dark aspect-[4/3]">
                <img
                  src="/assets/images/madrasa_prospectus/madrasa_campus_building.jpg"
                  alt="WAMY Model Madrasah Campus Building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-3 bottom-3 p-3.5 bg-emerald-dark/85 backdrop-blur-md rounded-xl border border-gold-light/30 flex items-center gap-3 text-xs text-white">
                  <MapPin className="w-4 h-4 text-gold-light shrink-0" />
                  <span>Independent Campus · Safipur, Kaliakair, Gazipur</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-ivory" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}></div>
      </section>

      {/* ==================== 2. ABOUT INSTITUTION ==================== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep text-xs font-bold uppercase tracking-wider">
                Institutional Introduction · Prospectus Page 2
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep leading-tight">
                Nurturing an Enlightened Generation Grounded in <span className="text-gold italic">Faith & Excellence</span>
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full"></div>

              <p className="text-emerald-deep/90 text-base leading-relaxed font-medium">
                Embracing the divine revelation <em>"Read! In the name of your Lord who created..."</em>, WAMY Model Madrasah moves forward with an unwavering commitment to shaping an enlightened generation.
              </p>

              <blockquote className="p-4 rounded-xl bg-sage-soft border-l-4 border-gold text-emerald-deep/95 italic text-sm leading-relaxed">
                "Our mission is to enrich every student with knowledge, moral integrity, humanitarian values, and practical life skills by seamlessly integrating authentic Islamic values with contemporary academic education."
              </blockquote>

              <p className="text-charcoal-muted text-sm leading-relaxed">
                Alongside profound Quranic and Sunnah education, we are firmly committed to making students proficient in practical Arabic and English language communication, as well as competent in science, mathematics, and modern information technology.
              </p>

              <p className="text-charcoal-muted text-sm leading-relaxed">
                WAMY Model Madrasah is a premier institution dedicated to developing ideal, honest, morally upright, patriotic, and highly capable citizens grounded in the classical triad: <strong>Ilm (Knowledge)</strong>, <strong>Amal (Devotional Practice)</strong>, and <strong>Akhlaq (Noble Character)</strong>.
              </p>

              <div className="pt-2">
                <p className="text-xs font-semibold text-emerald-deep uppercase tracking-wider">
                  ✦ Conscientious Guardian Invitation: Partner with us on this blessed journey toward building a noble future for your beloved child.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              {[
                { title: 'Integrated Dual Curriculum', desc: 'Madrasah Education Board syllabus enriched with STEM, languages, and IT.', icon: Scale, color: 'bg-emerald/10 text-emerald-deep' },
                { title: 'Character Building (Tarbiyah)', desc: 'Cultivating Adab, honesty, empathy, civic responsibility, and moral etiquette.', icon: HeartHandshake, color: 'bg-gold-pale text-gold-dark' },
                { title: 'Practical Language Mastery', desc: 'Communicative fluency in functional Arabic and conversational English.', icon: MessageSquare, color: 'bg-sky-50 text-sky-700' },
                { title: 'Caring Natural Campus', desc: 'Controlled seat capacity in a serene lakeside setting for individualized attention.', icon: Trees, color: 'bg-rose-50 text-rose-700' }
              ].map((pillar, i) => (
                <div key={i} className="p-4 rounded-xl border border-sage-border bg-ivory hover:shadow-md transition-all flex gap-4 items-start">
                  <div className={`w-11 h-11 rounded-lg ${pillar.color} flex items-center justify-center shrink-0`}>
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-deep text-sm">{pillar.title}</h4>
                    <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 3. OUR EDUCATIONAL VISION ==================== */}
      <section id="vision" className="py-20 bg-sage-soft/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
              Documented Core Vision · Page 2
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Four Pillars of Our Educational Vision
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              The four foundational cornerstones documented in our prospectus that govern academic design and student development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Practical Arabic & English', desc: 'Special emphasis on practical and communicative language education in both Arabic and English.', icon: Globe },
              { num: '02', title: 'Authentic Quran Learning', desc: 'Quality Nazera Tilawat and sound Quranic memorization adhering to precise Tajweed and Makhraj.', icon: BookOpen },
              { num: '03', title: 'Class-Based Computer Education', desc: 'Hands-on IT syllabus structured grade by grade in a dedicated modern computer laboratory.', icon: Monitor },
              { num: '04', title: 'Spacious Open Playground', desc: 'Wide green sports field for physical fitness, mental vigor, team drills, and recreation.', icon: Activity }
            ].map((v, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-sage-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-emerald/10 text-emerald-deep font-bold text-xs flex items-center justify-center font-serif">
                      {v.num}
                    </span>
                    <v.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-emerald-deep mb-2">{v.title}</h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">{v.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-sage-border text-[11px] font-semibold text-emerald">
                  Core Documented Vision ✦
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. WHY CHOOSE US ==================== */}
      <section id="why-choose" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep text-xs font-bold uppercase tracking-wider">
              12 Core Characteristics · Page 3
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Why Choose WAMY Model Madrasah?
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              Twelve institutional advantages that set our madrasah apart for excellence in knowledge and character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Independent Dedicated Campus', desc: 'Self-contained Islamic institution located on its own dedicated grounds in Safipur, Gazipur.', icon: Building },
              { title: 'Qualified & Experienced Faculty', desc: 'Passionate instruction led by experienced Islamic scholars (Kamil, Mufti) and university graduates.', icon: Users },
              { title: 'Computer Lab & Rich Library', desc: 'Modern practical computing facilities and an enriched library supporting academic studies.', icon: Library },
              { title: 'Continuous Assessment System', desc: 'Regular weekly assessments, monthly reviews, tutorials, and structured term examinations.', icon: ClipboardList },
              { title: 'Specialized Handwriting Training', desc: 'Dedicated training sessions to build neat, legible, and artistic Arabic, English, and Bengali penmanship.', icon: PenTool },
              { title: 'Structured Lesson Plans', desc: 'Strict implementation of structured daily lesson plans aligned with the annual academic calendar.', icon: Calendar },
              { title: 'Direct WhatsApp Communication', desc: 'Continuous guardian-teacher communication and progress updates via dedicated class WhatsApp groups.', icon: MessageSquare },
              { title: 'Moral Motivation & Counseling', desc: 'Inspiring character development programs, moral orientation talks, and ethical counseling.', icon: HeartHandshake },
              { title: 'Sports, Culture & Study Tours', desc: 'Annual sports competitions, Islamic cultural gatherings, educational study tours, and healthy recreation.', icon: Trophy },
              { title: 'Merit Scholarships & Awards', desc: 'Generous merit-based scholarship awards and honors recognizing outstanding academic students.', icon: Sparkles },
              { title: 'Controlled Seating Capacity', desc: 'Capped student seats per classroom ensuring personalized teacher mentorship in serene surroundings.', icon: CheckCircle2 },
              { title: 'Scenic Lake & Open Grounds', desc: 'Scenic lakeside view and expansive open green playground for student recreation and physical well-being.', icon: Trees },
            ].map((feat, i) => (
              <div key={i} className="p-5 rounded-xl border border-sage-border bg-ivory hover:border-emerald/40 hover:shadow-md transition-all flex gap-3.5 items-start">
                <div className="w-9 h-9 rounded-lg bg-emerald/10 text-emerald-deep flex items-center justify-center shrink-0 mt-0.5">
                  <feat.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-emerald-deep">{feat.title}</h4>
                  <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. ACADEMIC PROGRAMS ==================== */}
      <section id="programs" className="py-20 bg-sage-soft/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
              Educational Departments · Pages 1, 2, 4
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Academic Programs & Departments
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              Documented curriculum pathways from early childhood through 7th Grade, integrating general schooling with Quranic memorization.
            </p>

            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'All Programs' },
                { id: 'early', label: 'Early Foundation' },
                { id: 'general', label: 'Madrasah Board (Gr 1-7)' },
                { id: 'hifz', label: 'Pre-Hifz & Hifz' },
                { id: 'tech', label: 'Computer Education' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setProgramFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    programFilter === tab.id
                      ? 'bg-emerald text-white shadow-md'
                      : 'bg-white text-charcoal-muted border border-sage-border hover:border-emerald'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'early',
                badge: 'Early Foundation',
                title: 'Play Group & Nursery',
                desc: 'Nurturing early childhood curiosity through play-based phonics, foundational values, and early Arabic alphabet recognition.',
                points: ['Basic Arabic & English alphabet phonics', 'Daily oral Duas & Islamic manners', 'Fine motor skills & creative drawing', 'Loving and child-friendly care'],
                meta: 'Ages: 3.5 – 5 Years · Morning Shift'
              },
              {
                category: 'general',
                badge: 'Primary Madrasah',
                title: 'Primary Education (Grades 1 – 5)',
                desc: 'Official Bangladesh Madrasah Education Board curriculum coupled with intensive English, Mathematics, and Arabic foundation.',
                points: ['Madrasah Board syllabus & textbooks', 'Spoken English & practical Arabic drills', 'General Science & Mental Mathematics', 'Daily handwriting practice sessions'],
                meta: 'Grades: 1st to 5th · Morning & Day Shifts'
              },
              {
                category: 'general',
                badge: 'Junior Secondary',
                title: 'Middle School (Grades 6 & 7)',
                desc: 'Advanced academic preparation bridging traditional Islamic knowledge with modern scientific inquiry and technology.',
                points: ['Arabic grammar, Quranic study & Hadith', 'Advanced Mathematics & General Science', 'English communicative writing & debate', 'ICT & digital curriculum'],
                meta: 'Grades: 6th & 7th · Day Shift'
              },
              {
                category: 'hifz',
                badge: 'Preparatory Track',
                title: 'Pre-Hifz Department (Qaida & Ampara)',
                desc: 'Specialized preparatory track teaching authentic Makhraj, Tajweed rules, and complete mastery of the 30th Para (Ampara).',
                points: ['Noorani Qaida with precise Makhraj', 'Complete Tajweed rules & vocal tuning', 'Fluent recitation of Juz Amma', 'Seamless transition to Full Hifz'],
                meta: 'Scope: Qaida & Ampara · Certified Huffaz'
              },
              {
                category: 'hifz',
                badge: 'Sacred Memorization',
                title: 'Full Hifz-ul-Quran Department',
                desc: 'Comprehensive Quran memorization program for selected students conducted without sacrificing core general academic subjects.',
                points: ['Daily Sabak, Sabki & Daur revision cycles', 'Qualified and experienced Hafez instructors', 'Individualized pace & retention tracking', 'Balanced with academic classes'],
                meta: 'Optional Fee: ৳1,000 / month'
              },
              {
                category: 'tech',
                badge: 'Digital Competence',
                title: 'Class-Based Computer Education',
                desc: 'Compulsory practical ICT curriculum equipping every child with essential modern computer skills and ethical digital awareness.',
                points: ['Hands-on practical lab sessions', 'Touch-typing in English & Bengali', 'Office applications & presentation skills', 'Safe and purposeful computing'],
                meta: 'Dedicated Modern Computer Lab'
              }
            ]
              .filter(p => programFilter === 'all' || p.category === programFilter)
              .map((prog, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-sage-border shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep font-bold text-[11px] uppercase tracking-wider">
                      {prog.badge}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-emerald-deep mt-3 mb-2">{prog.title}</h3>
                    <p className="text-xs text-charcoal-muted leading-relaxed mb-4">{prog.desc}</p>
                    <ul className="space-y-1.5 text-xs text-charcoal border-t border-sage-border pt-3">
                      {prog.points.map((pt, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-5 pt-3 border-t border-sage-border text-[11px] font-bold text-gold-dark flex items-center justify-between">
                    <span>{prog.meta}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. CAMPUS FACILITIES ==================== */}
      <section id="facilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep text-xs font-bold uppercase tracking-wider">
              Documented Infrastructure · Pages 3 & 8
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Modern Campus Facilities
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              Ten institutional facilities designed to ensure student safety, wholesome nutrition, uninterrupted study, and recreational balance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { title: 'Computer Laboratory', desc: 'Dedicated computing lab with networked terminals and specialized educational software.', icon: Monitor },
              { title: '24/7 Silent Generator', desc: 'Guaranteed uninterrupted electricity across all classrooms and offices via silent backup generator.', icon: Zap },
              { title: 'Comprehension Learning', desc: 'Understanding-driven, joyful instructional methods replacing mechanical rote cramming.', icon: BookMarked },
              { title: 'Round-the-Clock Safety', desc: 'Gated campus access, attentive supervision, and complete student security protocols.', icon: ShieldCheck },
              { title: 'Parents Waiting Lounge', desc: 'Comfortable covered pavilion and recreation shed for visiting parents and young siblings.', icon: Coffee },
              { title: 'Hygienic Canteen', desc: 'Wholesome, healthy, and hygienic meals and snacks prepared under sanitary oversight.', icon: Coffee },
              { title: 'Handwriting & Masnoon Duas', desc: 'Daily sessions dedicated to penmanship and memorization of daily prophetic Hadith and Duas.', icon: PenTool },
              { title: 'Remedial Academic Support', desc: 'Specialized subject coaching and extra guidance for students requiring remedial assistance.', icon: GraduationCap }
            ].map((fac, i) => (
              <div key={i} className="p-5 rounded-xl border border-sage-border bg-ivory hover:shadow-md transition-all">
                <fac.icon className="w-7 h-7 text-emerald mb-3" />
                <h4 className="font-bold text-sm text-emerald-deep">{fac.title}</h4>
                <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>

          {/* Spotlight Facility: Shaded Waiting Lounge & Play Zone (Page 8 Photo) */}
          <div className="rounded-2xl border border-sage-border bg-sage-soft/40 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 h-64 sm:h-80 lg:h-full">
              <img
                src="/assets/images/madrasa_prospectus/facility_playzone_waiting.jpg"
                alt="Parents Waiting Area and Children Play Zone"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
              <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
                Prospectus Page 8 Feature
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-deep">
                Parents' Waiting Lounge & Children's Play Zone
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                A dedicated shaded pavilion situated in the campus courtyard, offering comfortable seating for visiting parents while providing younger children with a safe, joy-filled play zone.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-deep">
                  <CheckCircle2 className="w-4 h-4 text-emerald" />
                  <span>Covered shaded shelter</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-deep">
                  <CheckCircle2 className="w-4 h-4 text-emerald" />
                  <span>Child-safe play equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. ADMISSION PROCESS & CHECKLIST ==================== */}
      <section id="admission" className="py-20 bg-sage-soft/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep text-xs font-bold uppercase tracking-wider">
              Step-by-Step Guide · Page 4
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Admission Process & Requirements
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              Everything parents need to complete official admission as documented on page 4 of the prospectus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Timeline Steps */}
            <div className="lg:col-span-7 space-y-4">
              {[
                { step: '01', title: 'Complete Official Admission Form', desc: 'Obtain and fill out the prescribed admission form from the madrasah administrative office.' },
                { step: '02', title: '1 Passport-Size Student Photograph', desc: 'Attach 1 clear recent passport-size photograph of the student.' },
                { step: '03', title: 'Parents National ID Photocopies', desc: 'Provide photocopies of the National ID cards (NID) of both father and mother/guardian.' },
                { step: '04', title: 'Digital Birth Registration Certificate', desc: 'Submit an official photocopy of the student’s digital Birth Registration Certificate.' },
                { step: '05', title: 'Medical Blood Group Report', desc: 'Provide an authorized medical diagnostic laboratory report verifying the student’s blood group.' },
                { step: '06', title: 'Payment of Dues & Confirmation', desc: 'Clear the Admission Fee, annual Service Charge, and January Monthly Tuition with an official cash memo.' },
              ].map((st, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-sage-border flex gap-4 items-start shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-emerald/10 text-emerald-deep font-bold font-serif text-xs flex items-center justify-center shrink-0">
                    {st.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-emerald-deep">{st.title}</h4>
                    <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Document Checklist */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border-2 border-gold/30 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-emerald-deep">
                <ClipboardList className="w-5 h-5 text-gold" />
                <h3 className="font-serif font-bold text-lg">Interactive Document Checklist</h3>
              </div>
              <p className="text-xs text-charcoal-muted">
                Click each document as you gather your papers to track enrollment readiness:
              </p>

              <div className="space-y-2 pt-1">
                {[
                  { key: 'form', label: 'Completed Official Admission Form' },
                  { key: 'photo', label: '1 Copy Passport-Size Student Photo' },
                  { key: 'nid', label: 'Father & Mother NID Photocopies' },
                  { key: 'birthCert', label: 'Digital Birth Registration Certificate' },
                  { key: 'bloodReport', label: 'Medical Blood Group Report' },
                  { key: 'feesReady', label: 'Admission Fee & January Tuition Prepared' },
                ].map(item => (
                  <label
                    key={item.key}
                    onClick={() => toggleChecklistItem(item.key)}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                      checklist[item.key]
                        ? 'bg-emerald/10 border-emerald text-emerald-deep line-through font-semibold'
                        : 'bg-ivory border-sage-border text-charcoal hover:bg-sage-soft'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      onChange={() => {}}
                      className="rounded text-emerald focus:ring-0"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>

              <div className="pt-3 border-t border-sage-border flex items-center justify-between text-xs font-bold text-emerald-deep">
                <span>Readiness Progress:</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald text-white text-[11px]">
                  {checkedCount} of 6 Completed
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 8. ADMISSION FEES & TUITION CALCULATOR ==================== */}
      <section id="fees" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
              Fee Table & Estimator · Page 4
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Admission Fees & Tuition Information
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              Exact fees transcribed from page 4 of the prospectus. Amounts shown in Bangladeshi Taka (৳).
            </p>
          </div>

          {/* Fee Table */}
          <div className="overflow-x-auto rounded-2xl border border-sage-border shadow-sm mb-12">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-emerald-deep text-white">
                <tr>
                  <th className="p-3.5 sm:p-4 font-semibold">Class / Program</th>
                  <th className="p-3.5 sm:p-4 font-semibold">Admission Fee (One-Time)</th>
                  <th className="p-3.5 sm:p-4 font-semibold">Service Charge (Annual)</th>
                  <th className="p-3.5 sm:p-4 font-semibold">Monthly Tuition</th>
                  <th className="p-3.5 sm:p-4 font-semibold">Hifz Fee (Where Applicable)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sage-border bg-white text-charcoal">
                {Object.entries(FEE_DATA).map(([k, row]) => (
                  <tr key={k} className="hover:bg-sage-soft/30 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-emerald-deep">{row.name}</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-gold-dark">৳{row.admission.toLocaleString()}</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-emerald">৳{row.service.toLocaleString()}</td>
                    <td className="p-3.5 sm:p-4">৳{row.tuition.toLocaleString()} / mo</td>
                    <td className="p-3.5 sm:p-4 text-charcoal-muted">৳1,000 / mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interactive Fee Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Calculator Card */}
            <div className="lg:col-span-6 p-6 rounded-2xl border-2 border-gold/30 bg-ivory space-y-4 shadow-sm">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-gold" />
                <h3 className="font-serif font-bold text-xl text-emerald-deep">Interactive Fee Estimator</h3>
              </div>
              <p className="text-xs text-charcoal-muted">
                Select your student's intended class and optional Hifz enrollment to preview initial vs. recurring costs:
              </p>

              <div>
                <label className="block text-xs font-bold text-emerald-deep uppercase tracking-wider mb-1">
                  Select Grade / Class:
                </label>
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-sage-border bg-white text-xs font-semibold text-emerald-deep focus:ring-1 focus:ring-emerald outline-none"
                >
                  {Object.entries(FEE_DATA).map(([key, item]) => (
                    <option key={key} value={key}>{item.name}</option>
                  ))}
                </select>
              </div>

              <label className="flex items-center gap-3 p-3 rounded-lg border border-sage-border bg-white cursor-pointer text-xs font-semibold text-emerald-deep">
                <input
                  type="checkbox"
                  checked={includeHifz}
                  onChange={(e) => setIncludeHifz(e.target.checked)}
                  className="rounded text-emerald focus:ring-0"
                />
                <span>Enroll in Hifz Department (+৳1,000 / month)</span>
              </label>

              {/* Result Summary */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-dark to-emerald-deep text-white space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">One-Time Admission Fee:</span>
                  <span className="font-bold">৳{currentFee.admission.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Annual Service Charge:</span>
                  <span className="font-bold">৳{currentFee.service.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">January Tuition Fee:</span>
                  <span className="font-bold">৳{currentFee.tuition.toLocaleString()}</span>
                </div>
                {includeHifz && (
                  <div className="flex justify-between text-gold-light">
                    <span>Hifz Department Fee:</span>
                    <span className="font-bold">৳1,000</span>
                  </div>
                )}
                <div className="pt-2 border-t border-white/20 flex justify-between text-sm font-bold text-gold-light">
                  <span>Total Due at Initial Admission:</span>
                  <span>৳{totalAdmission.toLocaleString()}</span>
                </div>
                <div className="pt-1 border-t border-white/10 flex justify-between text-xs text-emerald-light font-semibold">
                  <span>Monthly Recurring Fee Thereafter:</span>
                  <span>৳{recurringMonthly.toLocaleString()} / month</span>
                </div>
              </div>
            </div>

            {/* Inclusions & Other Fees */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl border border-sage-border bg-white shadow-sm space-y-3">
                <h4 className="font-bold text-sm text-emerald-deep">Services Covered by Service Charge (10 Items):</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-charcoal-muted">
                  {[
                    'Computer Lab Access', 'Software & Digital Services',
                    'Student Official ID Card', 'Printed Academic Syllabus',
                    'Enriched Library Access', '24/7 Silent Generator Power',
                    'Emergency First Aid Health', 'Term Result Cards',
                    'Printed Academic Calendar', 'Sports Equipment & Gear'
                  ].map((srv, i) => (
                    <div key={i} className="flex items-center gap-1.5 p-1.5 rounded bg-sage-soft/40">
                      <Check className="w-3.5 h-3.5 text-emerald shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-sage-border bg-sage-soft/30 space-y-2 text-xs">
                <h5 className="font-bold text-gold-dark uppercase tracking-wider">Other Payable Items (As Applicable):</h5>
                <p className="text-charcoal-muted">
                  Examination Fees, Annual Sports Competition, Observance Days & Cultural Events, Annual Educational Study Tour, Medical Services, and Official Testimonials.
                </p>
                <p className="text-[11px] text-charcoal/60 italic pt-1">
                  * All figures based on the official prospectus and subject to confirmation with the madrasah accounts office.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 9. DAILY CLASS SCHEDULE ==================== */}
      <section id="schedule" className="py-20 bg-sage-soft/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep text-xs font-bold uppercase tracking-wider">
              Shift Timetable · Page 5
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Daily Class Schedule & Timing
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              Punctual academic routine for Morning and Day shifts from page 5 of the prospectus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Morning Shift */}
            <div className="rounded-2xl border border-sage-border bg-white overflow-hidden shadow-sm">
              <div className="p-5 bg-gradient-to-r from-emerald-deep to-emerald text-white">
                <span className="text-[11px] font-bold uppercase text-gold-light tracking-wider">Morning Shift</span>
                <h3 className="font-serif text-xl font-bold">Play Group to 2nd Grade</h3>
                <p className="text-xs text-white/80">Tailored for younger children with focused morning attention</p>
              </div>
              <div className="p-6 divide-y divide-sage-border text-xs sm:text-sm">
                {[
                  { act: 'Arrival at Madrasah', time: '06:55 AM' },
                  { act: 'Student Assembly & Parade', time: '07:00 AM' },
                  { act: 'Classes Begin', time: '07:15 AM' },
                  { act: 'Tiffin / Mid-Session Break', time: '08:45 AM' },
                  { act: 'Dismissal & Departure', time: '10:30 AM' }
                ].map((row, i) => (
                  <div key={i} className="py-3 flex justify-between items-center">
                    <span className="font-medium text-emerald-deep">{row.act}</span>
                    <span className="font-serif font-bold text-emerald px-2.5 py-1 rounded bg-sage-soft">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day Shift */}
            <div className="rounded-2xl border border-sage-border bg-white overflow-hidden shadow-sm">
              <div className="p-5 bg-gradient-to-r from-charcoal to-emerald-dark text-white">
                <span className="text-[11px] font-bold uppercase text-gold-light tracking-wider">Day Shift</span>
                <h3 className="font-serif text-xl font-bold">3rd Grade to 7th Grade</h3>
                <p className="text-xs text-white/80">Structured for senior students with Zuhr prayer in congregation</p>
              </div>
              <div className="p-6 divide-y divide-sage-border text-xs sm:text-sm">
                {[
                  { act: 'Arrival at Madrasah', time: '10:40 AM' },
                  { act: 'Student Assembly & Parade', time: '10:45 AM' },
                  { act: 'Classes Begin', time: '11:00 AM' },
                  { act: 'Zuhr Prayer & Tiffin Break', time: '01:00 PM' },
                  { act: 'Dismissal & Departure', time: '02:30 PM' }
                ].map((row, i) => (
                  <div key={i} className="py-3 flex justify-between items-center">
                    <span className="font-medium text-emerald-deep">{row.act}</span>
                    <span className="font-serif font-bold text-gold-dark px-2.5 py-1 rounded bg-gold-pale">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 10. STUDENT UNIFORM ==================== */}
      <section id="uniform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
              Documented Attire · Page 5
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Student Uniform Specifications
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              Featuring authentic photographs of boys' and girls' official dress codes from page 5 of the prospectus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Boys' Uniform */}
            <div className="p-6 rounded-2xl border border-sage-border bg-ivory shadow-sm flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-36 h-56 rounded-xl overflow-hidden bg-emerald/5 shrink-0 border-2 border-sage-border shadow-sm">
                <img
                  src="/assets/images/madrasa_prospectus/uniform_boys.jpg"
                  alt="Boys Official Uniform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald/10 text-emerald-deep font-bold text-[11px] uppercase">
                  Boys' Dress Code
                </span>
                <h3 className="font-serif font-bold text-xl text-emerald-deep">Formal Islamic Attire</h3>
                <ul className="space-y-1.5 text-charcoal">
                  <li><strong>Cap (টুপি):</strong> Clean White</li>
                  <li><strong>Panjabi (পাঞ্জাবী):</strong> Modest White</li>
                  <li><strong>Pajama (পায়জামা):</strong> Standard White</li>
                  <li><strong>Shoes (জুতা):</strong> Formal Black Shoes</li>
                  <li><strong>Socks (মোজা):</strong> Pure White</li>
                  <li><strong>Winter Wear:</strong> Navy Blue Cardigan</li>
                </ul>
              </div>
            </div>

            {/* Girls' Uniform */}
            <div className="p-6 rounded-2xl border border-sage-border bg-ivory shadow-sm flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-36 h-56 rounded-xl overflow-hidden bg-emerald/5 shrink-0 border-2 border-sage-border shadow-sm">
                <img
                  src="/assets/images/madrasa_prospectus/uniform_girls.jpg"
                  alt="Girls Official Uniform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3 text-xs sm:text-sm">
                <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-gold-dark font-bold text-[11px] uppercase">
                  Girls' Dress Code
                </span>
                <h3 className="font-serif font-bold text-xl text-emerald-deep">Modest Abaya & Hijab</h3>
                <ul className="space-y-1.5 text-charcoal">
                  <li><strong>Hijab (হিজাব):</strong> Modest White</li>
                  <li><strong>Gown (গাউন):</strong> Dignified Black Abaya</li>
                  <li><strong>Shoes (জুতা):</strong> Formal White Shoes</li>
                  <li><strong>Socks (মোজা):</strong> Pure White</li>
                  <li><strong>Winter Wear:</strong> Navy Blue Cardigan</li>
                  <li><strong>Values:</strong> Complete modesty & neatness</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 11. EXPERIENCED TEACHERS ==================== */}
      <section id="faculty" className="py-20 bg-sage-soft/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep text-xs font-bold uppercase tracking-wider">
              Faculty Directory · Page 6
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Respected Teachers & Academic Leadership
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              All 14 academic and administrative faculty members documented on page 6 of the prospectus, with verified names, designations, and degrees.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'All Faculty (14)' },
                { id: 'leadership', label: 'Leadership' },
                { id: 'islamic', label: 'Islamic & Arabic' },
                { id: 'general', label: 'General & STEM' },
                { id: 'lang', label: 'Languages & Admin' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setTeacherFilter(f.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    teacherFilter === f.id
                      ? 'bg-emerald text-white shadow-md'
                      : 'bg-white text-charcoal-muted border border-sage-border hover:border-emerald'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredTeachers.map(t => (
              <div
                key={t.id}
                className="p-4 rounded-xl bg-white border border-sage-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-center flex flex-col items-center"
              >
                <div className="w-24 h-28 rounded-lg overflow-hidden bg-sage-soft border border-sage-border mb-3 shadow-inner">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h4 className="font-bold text-sm text-emerald-deep leading-snug">{t.name}</h4>
                <span className="text-[11px] font-semibold text-emerald bg-emerald/5 px-2 py-0.5 rounded-full mt-1 mb-1">
                  {t.role}
                </span>
                <span className="text-[11px] text-charcoal/60">{t.degree}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 12. EXAMINATION & EVALUATION SYSTEM ==================== */}
      <section id="exams" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
              Academic Assessment · Page 6
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Examination & Evaluation Schedule
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              Documented on page 6 of the prospectus: Continuous weekly and monthly assessments combined with 2 Term Evaluations and 1 Annual Final Evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-2xl border border-sage-border bg-ivory text-center space-y-3 shadow-sm">
              <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep font-bold text-[11px] uppercase">
                1st Term Evaluation
              </span>
              <h3 className="font-serif font-bold text-xl text-emerald-deep">First Term Examination</h3>
              <div className="text-lg font-serif font-bold text-gold-dark py-2 px-4 rounded-xl bg-gold-pale/50 inline-block">
                Last Week of April
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Covers the first trimester syllabus, assessing reading, handwriting, Tajweed, and mathematical logic.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-sage-border bg-ivory text-center space-y-3 shadow-sm">
              <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep font-bold text-[11px] uppercase">
                2nd Term Evaluation
              </span>
              <h3 className="font-serif font-bold text-xl text-emerald-deep">Second Term Examination</h3>
              <div className="text-lg font-serif font-bold text-gold-dark py-2 px-4 rounded-xl bg-gold-pale/50 inline-block">
                Second Week of August
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Mid-year summative examination reviewing mid-term progress, language skills, scientific comprehension, and Quranic recitation.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-sage-border bg-ivory text-center space-y-3 shadow-sm">
              <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark font-bold text-[11px] uppercase">
                Annual Evaluation
              </span>
              <h3 className="font-serif font-bold text-xl text-emerald-deep">Annual Final Examination</h3>
              <div className="text-lg font-serif font-bold text-emerald py-2 px-4 rounded-xl bg-emerald/10 inline-block">
                Second Week of December
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Annual culmination determining grade promotion, merit awards, and academic recognition for the upcoming academic year.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-dark to-emerald-deep text-white grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs">
            <div>
              <h4 className="font-bold text-sm text-gold-light mb-1">Weekly Tests</h4>
              <p className="text-white/80">Continuous formative assessments to track immediate lesson retention.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gold-light mb-1">Monthly Reviews</h4>
              <p className="text-white/80">Structured monthly evaluations ensuring learning gaps are remedied immediately.</p>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gold-light mb-1">Result Cards</h4>
              <p className="text-white/80">Official academic report cards presented during parent-teacher evaluation assemblies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 13. CAMPUS ACTIVITIES & GALLERY ==================== */}
      <section id="gallery" className="py-20 bg-sage-soft/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-bold uppercase tracking-wider">
              Life at Madrasah · Page 7
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Campus Activities & Photo Gallery
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              All 8 authentic photo moments extracted from page 7 of the prospectus, displaying real student engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ACTIVITIES_DATA.map(act => (
              <div
                key={act.id}
                onClick={() => setActiveModalItem(act)}
                className="group rounded-xl overflow-hidden bg-white border border-sage-border shadow-sm hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal/10">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-emerald-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5" /> View Larger
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-bold text-sm text-emerald-deep group-hover:text-emerald transition-colors">
                    {act.title}
                  </h4>
                  <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 14. PARENT GUIDELINES ==================== */}
      <section id="guidelines" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep text-xs font-bold uppercase tracking-wider">
              Guardian Responsibilities · Page 5
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-deep">
              Guidelines & Responsibilities for Parents
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
            <p className="text-sm text-charcoal-muted">
              Nine essential commitments documented on page 5 of the prospectus ensuring home-madrasah cooperation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { num: '01', title: 'Punctual Attendance', desc: 'Ensure your child arrives at and departs from the madrasah precisely according to the shift timetable.' },
              { num: '02', title: 'Prescribed School Uniform', desc: 'Send your child to the institution dressed neatly in the official, clean, and complete madrasah uniform every day.' },
              { num: '03', title: 'Home Study Supervision', desc: 'Take active personal responsibility at home to supervise, review, and support daily academic study routines.' },
              { num: '04', title: 'Prior Written Leave Applications', desc: 'Whenever leave of absence is required, always submit a formal written application in advance for official approval.' },
              { num: '05', title: 'WhatsApp Group & Diary Review', desc: 'Check the official class WhatsApp group and student diary daily to stay informed about lessons and announcements.' },
              { num: '06', title: 'Inspect H.W & C.W Notebooks', desc: 'Inspect and sign your child’s daily Homework (H.W) and Classwork (C.W) exercise books every single evening.' },
              { num: '07', title: 'Encourage Salah & Islamic Adab', desc: 'Actively guide and inspire your child at home to pray the five daily prayers and observe noble Islamic manners.' },
              { num: '08', title: 'Tuition Fee Payment by 10th', desc: 'Clear all monthly tuition fees and institutional dues promptly within the 10th day of every calendar month.' },
              { num: '09', title: 'Official Cash Memos Only', desc: 'Never make any financial transaction with the institution without receiving an authorized printed cash memo.' }
            ].map((g, i) => (
              <div key={i} className="p-5 rounded-xl border border-sage-border bg-ivory flex gap-4 items-start hover:shadow-sm transition-all">
                <span className="w-8 h-8 rounded-full bg-emerald/10 text-emerald-deep font-bold font-serif text-xs flex items-center justify-center shrink-0">
                  {g.num}
                </span>
                <div>
                  <h4 className="font-bold text-sm text-emerald-deep">{g.title}</h4>
                  <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 15. CONTACT & CAMPUS DESK ==================== */}
      <section id="contact" className="py-20 bg-sage-soft/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Prophetic Hadith Banner (From Prospectus Page 8) */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-emerald-dark to-emerald-deep text-white text-center space-y-4 shadow-lg border-2 border-gold-light/30">
            <div className="text-gold-light font-serif text-lg sm:text-xl leading-loose" dir="rtl">
              «مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ»
            </div>
            <p className="font-serif italic text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed">
              The Messenger of Allah ﷺ said: "Whoever travels a path in search of knowledge, Allah will make easy for him the path to Paradise."
            </p>
            <span className="text-xs font-semibold text-gold-light uppercase tracking-wider block">
              — Jami` at-Tirmidhi, Hadith: 2646
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Direct Hotlines Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald/10 text-emerald-deep text-xs font-bold uppercase tracking-wider">
                Direct Contact Desk · Page 8
              </span>
              <h2 className="font-serif text-3xl font-bold text-emerald-deep">
                Institutional Contact & Hotlines
              </h2>
              <div className="w-16 h-1 bg-gold rounded-full"></div>
              <p className="text-xs text-charcoal-muted">
                Direct phone numbers printed in the official prospectus for immediate admissions and departmental inquiries:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { role: 'Principal', name: 'Janab Md. Ismail Bari', phone: '01915-800880', tel: '01915800880' },
                  { role: 'Vice Principal', name: 'Mahmudur Rahman Faisal', phone: '01741-163277', tel: '01741163277' },
                  { role: 'Hifz Department', name: 'Janab Mazharul Islam', phone: '01627-323044', tel: '01627323044' },
                  { role: 'Central Hotline', name: 'Madrasah Admissions Desk', phone: '+8801355-465726', tel: '+8801355465726' }
                ].map((hl, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-sage-border shadow-sm hover:border-emerald transition-all">
                    <span className="text-[11px] font-bold uppercase text-gold-dark tracking-wider block">{hl.role}</span>
                    <h4 className="font-bold text-sm text-emerald-deep mt-0.5">{hl.name}</h4>
                    <a
                      href={`tel:${hl.tel}`}
                      className="font-serif font-bold text-base text-emerald hover:text-emerald-dark mt-2 inline-flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-4 h-4 text-gold" />
                      {hl.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Address & Facebook QR */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-sage-border shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-xl text-emerald-deep">Campus Location & Community</h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-charcoal-muted">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-deep block">WAMY Model Madrasah</strong>
                    <span>WAMY Center, Safipur, Kaliakair, Gazipur, Bangladesh.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-deep block">Official Email</strong>
                    <a href="mailto:wamymodelmadrasah@gmail.com" className="text-emerald hover:underline">
                      wamymodelmadrasah@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-deep block">Office Hours</strong>
                    <span>Sunday – Thursday: 8:00 AM – 3:30 PM</span>
                  </div>
                </div>
              </div>

              {/* QR Code Scan Card */}
              <div className="p-4 rounded-xl bg-sage-soft border border-sage-border flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-white p-1 shrink-0 border border-sage-border shadow-sm">
                  <img
                    src="/assets/images/madrasa_prospectus/qr_facebook.jpg"
                    alt="Facebook Page QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="font-bold text-emerald-deep">Scan to Connect</h4>
                  <p className="text-charcoal-muted leading-relaxed">
                    Scan with your mobile camera to join the official Facebook page for daily notices and gallery updates.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== REACT LIGHTBOX MODAL ==================== */}
      {activeModalItem && (
        <div
          onClick={() => setActiveModalItem(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-red-600 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[60vh] bg-charcoal flex items-center justify-center overflow-hidden">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-contain max-h-[60vh]"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif font-bold text-xl text-emerald-deep">{activeModalItem.title}</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">{activeModalItem.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
