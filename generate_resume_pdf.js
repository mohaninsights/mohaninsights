import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({
  size: 'A4',
  margin: 0
});

const outputPath = path.join(process.cwd(), 'public', 'Mohan_Kumar_Resume.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Page Dimensions
const pageWidth = 595.28;
const pageHeight = 841.89;

// Color Palette (Navy, Slate, Dark Blue, Gray, Accent Blue)
const primaryNavy = '#0F2537';
const headerBg = '#132E48';
const accentBlue = '#1A6DBB';
const textDark = '#222222';
const textMuted = '#555555';
const lightBg = '#F8FAFC';
const borderLine = '#CBD5E1';

// Top Banner
doc.rect(0, 0, pageWidth, 110).fill(primaryNavy);

// Name
doc.fillColor('#FFFFFF')
   .font('Helvetica-Bold')
   .fontSize(28)
   .text('MOHAN KUMAR', 40, 25, { characterSpacing: 1.5 });

// Title
doc.fillColor('#38BDF8')
   .font('Helvetica-Bold')
   .fontSize(13)
   .text('SEO EXECUTIVE', 40, 60, { characterSpacing: 2 });

// Contact Info Bar Below Header
doc.rect(0, 110, pageWidth, 32).fill('#E2E8F0');

doc.fillColor(textDark)
   .font('Helvetica-Bold')
   .fontSize(9.5);

// Contact items
doc.text('📞  8585974338', 40, 121);
doc.text('✉️  mohankaka172004@gmail.com', 210, 121);
doc.text('📍  New Delhi', 470, 121);

// Two Column Setup
const leftX = 35;
const leftWidth = 230;
const rightX = 285;
const rightWidth = 275;
let topY = 160;

// Helper function for section headings
function drawSectionHeading(text, x, y, width) {
  doc.rect(x, y, width, 22).fill(headerBg);
  doc.fillColor('#FFFFFF')
     .font('Helvetica-Bold')
     .fontSize(10.5)
     .text(text, x + 10, y + 6, { characterSpacing: 1 });
  return y + 28;
}

// ==================== LEFT COLUMN ====================
let curLeftY = topY;

// 1. PROFESSIONAL SUMMARY
curLeftY = drawSectionHeading('PROFESSIONAL SUMMARY', leftX, curLeftY, leftWidth);

doc.fillColor(textMuted)
   .font('Helvetica')
   .fontSize(8.5)
   .text(
     'Results-driven SEO Executive with 1.5+ years of experience in handling websites, improving search engine rankings, and driving organic traffic. Skilled in keyword research, competitor analysis, site audits, on-page and off-page SEO, link building, and performance tracking using Google Search Console and Google Analytics.',
     leftX + 2,
     curLeftY,
     { width: leftWidth - 4, align: 'justify', lineGap: 3 }
   );

curLeftY += 85;

// 2. EDUCATION
curLeftY = drawSectionHeading('EDUCATION', leftX, curLeftY, leftWidth);

const educationList = [
  {
    title: 'Diploma in Digital Marketing',
    inst: 'Indian Institution of Computer Science',
    date: 'Completed 2024'
  },
  {
    title: 'Bachelor of Arts (BA)',
    inst: 'Delhi University',
    date: 'Graduated 2025'
  },
  {
    title: 'Senior Secondary High School',
    inst: 'Central Board of Secondary Education (CBSE)',
    date: 'Completed 2022'
  }
];

educationList.forEach(edu => {
  doc.fillColor(textDark)
     .font('Helvetica-Bold')
     .fontSize(9)
     .text(edu.title, leftX + 2, curLeftY);
  
  doc.fillColor(textMuted)
     .font('Helvetica')
     .fontSize(8)
     .text(edu.inst, leftX + 2, curLeftY + 11);
  
  doc.fillColor(accentBlue)
     .font('Helvetica-Bold')
     .fontSize(7.5)
     .text(edu.date, leftX + 2, curLeftY + 22);

  curLeftY += 36;
});

curLeftY += 5;

// 3. SKILLS
curLeftY = drawSectionHeading('SKILLS', leftX, curLeftY, leftWidth);

const skills = [
  'SEO (On-Page & Off-Page)',
  'Keyword Research',
  'Competitor Analysis',
  'Technical SEO',
  'Link Building',
  'Google Search Console',
  'Google Analytics 4',
  'SEMrush, Ahrefs, Screaming Frog',
  'WordPress',
  'Rank Math / Yoast SEO'
];

skills.forEach(skill => {
  doc.fillColor(accentBlue).fontSize(8).text('•', leftX + 4, curLeftY);
  doc.fillColor(textDark).font('Helvetica').fontSize(8.5).text(skill, leftX + 14, curLeftY);
  curLeftY += 14;
});

curLeftY += 10;

// 4. LANGUAGES
curLeftY = drawSectionHeading('LANGUAGES', leftX, curLeftY, leftWidth);

['Hindi', 'English'].forEach(lang => {
  doc.fillColor(accentBlue).fontSize(8).text('•', leftX + 4, curLeftY);
  doc.fillColor(textDark).font('Helvetica').fontSize(8.5).text(lang, leftX + 14, curLeftY);
  curLeftY += 14;
});


// ==================== RIGHT COLUMN ====================
let curRightY = topY;

// 1. WORK EXPERIENCE
curRightY = drawSectionHeading('WORK EXPERIENCE', rightX, curRightY, rightWidth);

// Experience 1
doc.fillColor(textDark)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('Divine Astro Vastu Science LLP – Acharya Ganesh', rightX + 2, curRightY);

doc.fillColor(accentBlue)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('SEO Executive', rightX + 2, curRightY + 14);

doc.fillColor('#64748B')
   .font('Helvetica-Bold')
   .fontSize(8)
   .text('📅  August 2025 – August 2026', rightX + 2, curRightY + 26);

curRightY += 40;

const exp1Bullets = [
  'Handled the complete website and SEO activities.',
  'Conducted keyword research and competitor analysis.',
  'Performed regular website SEO audits.',
  'Created and optimized service pages.',
  'Worked on link-building activities.',
  'Monitored keyword rankings and website performance using Google Search Console and Google Analytics.'
];

exp1Bullets.forEach(bullet => {
  doc.fillColor(accentBlue).fontSize(8).text('•', rightX + 6, curRightY);
  doc.fillColor(textDark)
     .font('Helvetica')
     .fontSize(8.5)
     .text(bullet, rightX + 16, curRightY, { width: rightWidth - 20, lineGap: 2 });
  curRightY += doc.heightOfString(bullet, { width: rightWidth - 20 }) + 5;
});

curRightY += 15;

// Experience 2
doc.fillColor(textDark)
   .font('Helvetica-Bold')
   .fontSize(10.5)
   .text('ThinkBizz Hightech', rightX + 2, curRightY);

doc.fillColor(accentBlue)
   .font('Helvetica-Bold')
   .fontSize(9)
   .text('SEO Intern', rightX + 2, curRightY + 14);

doc.fillColor('#64748B')
   .font('Helvetica-Bold')
   .fontSize(8)
   .text('📅  December 2024 – June 2025', rightX + 2, curRightY + 26);

curRightY += 40;

const exp2Bullets = [
  'Performed off-page SEO activities.',
  'Built high-quality backlinks.',
  'Conducted keyword research.'
];

exp2Bullets.forEach(bullet => {
  doc.fillColor(accentBlue).fontSize(8).text('•', rightX + 6, curRightY);
  doc.fillColor(textDark)
     .font('Helvetica')
     .fontSize(8.5)
     .text(bullet, rightX + 16, curRightY, { width: rightWidth - 20 });
  curRightY += 15;
});

curRightY += 25;

// 2. PERSONAL DETAILS
curRightY = drawSectionHeading('PERSONAL DETAILS', rightX, curRightY, rightWidth);

const personalDetails = [
  { label: 'Date of Birth', val: '17 August 2004' },
  { label: 'Nationality', val: 'Indian' },
  { label: 'Marital Status', val: 'Single' }
];

personalDetails.forEach(detail => {
  doc.fillColor(textDark).font('Helvetica-Bold').fontSize(8.5).text(`${detail.label} :`, rightX + 4, curRightY);
  doc.fillColor(textMuted).font('Helvetica').fontSize(8.5).text(detail.val, rightX + 100, curRightY);
  curRightY += 16;
});

// Bottom Banner
doc.rect(0, pageHeight - 16, pageWidth, 16).fill(primaryNavy);

doc.end();

stream.on('finish', () => {
  console.log('PDF generated successfully at:', outputPath);
});
