import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({
  size: 'A4',
  margin: 0,
  info: {
    Title: 'Mohan Kumar Resume',
    Author: 'Mohan Kumar',
    Subject: 'SEO Executive Resume',
    Keywords: 'SEO, Search Engine Optimization, Resume, Mohan Kumar'
  }
});

const outputPath = path.join(process.cwd(), 'public', 'Mohan_Kumar_Resume.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Page Dimensions (A4 in points: 595.28 x 841.89)
const pageWidth = 595.28;
const pageHeight = 841.89;

// Color Palette
const primaryNavy = '#0F2537';
const headerBg = '#132E48';
const accentBlue = '#1A6DBB';
const textDark = '#1E293B';
const textMuted = '#475569';
const borderLine = '#CBD5E1';

// Top Navy Header Banner
doc.rect(0, 0, pageWidth, 100).fill(primaryNavy);

// Candidate Name
doc.fillColor('#FFFFFF')
   .font('Helvetica-Bold')
   .fontSize(26)
   .text('MOHAN KUMAR', 40, 22, { characterSpacing: 1 });

// Professional Title
doc.fillColor('#38BDF8')
   .font('Helvetica-Bold')
   .fontSize(12)
   .text('SEO EXECUTIVE', 40, 56, { characterSpacing: 1.5 });

// Contact Info Bar
doc.rect(0, 100, pageWidth, 28).fill('#E2E8F0');

doc.fillColor(textDark)
   .font('Helvetica-Bold')
   .fontSize(9);

doc.text('Phone: 8585974338', 40, 109);
doc.text('Email: mohankaka172004@gmail.com', 200, 109);
doc.text('Location: New Delhi, India', 440, 109);

// Two Column Layout Coordinates
const leftX = 35;
const leftWidth = 230;
const rightX = 285;
const rightWidth = 275;
let topY = 145;

// Helper function for Section Headings
function drawSectionHeading(text, x, y, width) {
  doc.rect(x, y, width, 20).fill(headerBg);
  doc.fillColor('#FFFFFF')
     .font('Helvetica-Bold')
     .fontSize(10)
     .text(text, x + 8, y + 5, { characterSpacing: 1 });
  return y + 26;
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
     { width: leftWidth - 4, align: 'left', lineGap: 3 }
   );

curLeftY += 82;

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
    inst: 'CBSE',
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

  curLeftY += 34;
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
  doc.fillColor(accentBlue).fontSize(9).text('•', leftX + 4, curLeftY);
  doc.fillColor(textDark).font('Helvetica').fontSize(8.5).text(skill, leftX + 14, curLeftY);
  curLeftY += 13.5;
});

curLeftY += 8;

// 4. LANGUAGES
curLeftY = drawSectionHeading('LANGUAGES', leftX, curLeftY, leftWidth);

['Hindi (Native)', 'English (Professional)'].forEach(lang => {
  doc.fillColor(accentBlue).fontSize(9).text('•', leftX + 4, curLeftY);
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
   .fontSize(10)
   .text('Divine Astro Vastu Science LLP – Acharya Ganesh', rightX + 2, curRightY);

doc.fillColor(accentBlue)
   .font('Helvetica-Bold')
   .fontSize(8.5)
   .text('SEO Executive', rightX + 2, curRightY + 13);

doc.fillColor('#64748B')
   .font('Helvetica-Bold')
   .fontSize(8)
   .text('August 2025 – August 2026', rightX + 2, curRightY + 25);

curRightY += 38;

const exp1Bullets = [
  'Handled the complete website and SEO activities.',
  'Conducted keyword research and competitor analysis.',
  'Performed regular website SEO audits.',
  'Created and optimized service pages.',
  'Worked on link-building activities.',
  'Monitored keyword rankings and website performance using Google Search Console and Google Analytics.'
];

exp1Bullets.forEach(bullet => {
  doc.fillColor(accentBlue).fontSize(9).text('•', rightX + 6, curRightY);
  doc.fillColor(textDark)
     .font('Helvetica')
     .fontSize(8.5)
     .text(bullet, rightX + 16, curRightY, { width: rightWidth - 20, lineGap: 1.5 });
  curRightY += doc.heightOfString(bullet, { width: rightWidth - 20 }) + 4;
});

curRightY += 12;

// Experience 2
doc.fillColor(textDark)
   .font('Helvetica-Bold')
   .fontSize(10)
   .text('ThinkBizz Hightech', rightX + 2, curRightY);

doc.fillColor(accentBlue)
   .font('Helvetica-Bold')
   .fontSize(8.5)
   .text('SEO Intern', rightX + 2, curRightY + 13);

doc.fillColor('#64748B')
   .font('Helvetica-Bold')
   .fontSize(8)
   .text('December 2024 – June 2025', rightX + 2, curRightY + 25);

curRightY += 38;

const exp2Bullets = [
  'Performed off-page SEO activities.',
  'Built high-quality backlinks.',
  'Conducted keyword research.'
];

exp2Bullets.forEach(bullet => {
  doc.fillColor(accentBlue).fontSize(9).text('•', rightX + 6, curRightY);
  doc.fillColor(textDark)
     .font('Helvetica')
     .fontSize(8.5)
     .text(bullet, rightX + 16, curRightY, { width: rightWidth - 20 });
  curRightY += 14;
});

curRightY += 20;

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
  curRightY += 15;
});

// Bottom Navy Banner
doc.rect(0, pageHeight - 16, pageWidth, 16).fill(primaryNavy);

doc.end();

stream.on('finish', () => {
  console.log('PDF generated successfully at:', outputPath);
});
