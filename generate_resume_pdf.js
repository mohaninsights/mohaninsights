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

// Colors
const primaryNavy = '#0F2537';
const headerBg = '#132E48';
const accentBlue = '#0284C7';
const textDark = '#0F172A';
const textMuted = '#475569';
const borderLine = '#E2E8F0';

// 1. TOP NAVY HEADER BANNER
doc.rect(0, 0, pageWidth, 90).fill(primaryNavy);

// Candidate Name
doc.fillColor('#FFFFFF')
   .font('Helvetica-Bold')
   .fontSize(24)
   .text('MOHAN KUMAR', 40, 20, { characterSpacing: 1 });

// Professional Title
doc.fillColor('#38BDF8')
   .font('Helvetica-Bold')
   .fontSize(11)
   .text('SEO EXECUTIVE', 40, 52, { characterSpacing: 1.5 });

// 2. CONTACT BAR BELOW HEADER
doc.rect(0, 90, pageWidth, 26).fill('#F1F5F9');

doc.fillColor(textDark)
   .font('Helvetica-Bold')
   .fontSize(8.5);

doc.text('Phone: +91 8585974338', 40, 98);
doc.text('Email: mohankaka172004@gmail.com', 210, 98);
doc.text('Location: New Delhi, India', 440, 98);

// Two Column Setup
const leftX = 35;
const leftWidth = 225;
const rightX = 280;
const rightWidth = 280;
let topY = 130;

// Helper: Section Headings
function drawSectionHeading(text, x, y, width) {
  doc.rect(x, y, width, 18).fill(headerBg);
  doc.fillColor('#FFFFFF')
     .font('Helvetica-Bold')
     .fontSize(9.5)
     .text(text, x + 8, y + 4, { characterSpacing: 1 });
  return y + 24;
}

// Helper: Vector Bullet Circle
function drawBullet(x, y, color = accentBlue) {
  doc.circle(x, y, 2.5).fill(color);
}

// ==================== LEFT COLUMN ====================
let curLeftY = topY;

// 1. PROFESSIONAL SUMMARY
curLeftY = drawSectionHeading('PROFESSIONAL SUMMARY', leftX, curLeftY, leftWidth);

doc.fillColor(textMuted)
   .font('Helvetica')
   .fontSize(8)
   .text(
     'Results-driven SEO Executive with 1.5+ years of experience in managing website organic search, improving rankings, and driving target traffic. Skilled in technical SEO audits, keyword research, competitor analysis, on-page optimization, link building, and performance analytics using Google Search Console and Google Analytics 4.',
     leftX + 2,
     curLeftY,
     { width: leftWidth - 4, align: 'left', lineGap: 2.5 }
   );

curLeftY += 80;

// 2. EDUCATION
curLeftY = drawSectionHeading('EDUCATION', leftX, curLeftY, leftWidth);

const educationList = [
  {
    title: 'Diploma in Digital Marketing',
    inst: 'Indian Inst. of Computer Science',
    date: 'Completed 2024'
  },
  {
    title: 'Bachelor of Arts (BA)',
    inst: 'Delhi University',
    date: 'Graduated 2025'
  },
  {
    title: 'Senior Secondary High School',
    inst: 'CBSE Board',
    date: 'Completed 2022'
  }
];

educationList.forEach(edu => {
  doc.fillColor(textDark)
     .font('Helvetica-Bold')
     .fontSize(8.5)
     .text(edu.title, leftX + 2, curLeftY);
  
  doc.fillColor(textMuted)
     .font('Helvetica')
     .fontSize(7.5)
     .text(edu.inst, leftX + 2, curLeftY + 11);
  
  doc.fillColor(accentBlue)
     .font('Helvetica-Bold')
     .fontSize(7.5)
     .text(edu.date, leftX + 2, curLeftY + 21);

  curLeftY += 33;
});

curLeftY += 5;

// 3. SKILLS
curLeftY = drawSectionHeading('SKILLS & EXPERTISE', leftX, curLeftY, leftWidth);

const skills = [
  'SEO (On-Page & Off-Page)',
  'Keyword Research & Strategy',
  'Competitor Benchmarking',
  'Technical SEO Audits',
  'High-Quality Link Building',
  'Google Search Console',
  'Google Analytics 4 (GA4)',
  'SEMrush / Ahrefs / Frog',
  'WordPress CMS',
  'Rank Math & Yoast SEO'
];

skills.forEach(skill => {
  drawBullet(leftX + 6, curLeftY + 4, accentBlue);
  doc.fillColor(textDark).font('Helvetica').fontSize(8).text(skill, leftX + 14, curLeftY);
  curLeftY += 13;
});

curLeftY += 8;

// 4. LANGUAGES
curLeftY = drawSectionHeading('LANGUAGES', leftX, curLeftY, leftWidth);

[
  { lang: 'Hindi', proficiency: 'Native / Primary' },
  { lang: 'English', proficiency: 'Professional Working' }
].forEach(item => {
  drawBullet(leftX + 6, curLeftY + 4, accentBlue);
  doc.fillColor(textDark).font('Helvetica-Bold').fontSize(8).text(item.lang, leftX + 14, curLeftY);
  doc.fillColor(textMuted).font('Helvetica').fontSize(7.5).text(` - ${item.proficiency}`, leftX + 42, curLeftY);
  curLeftY += 14;
});


// ==================== RIGHT COLUMN ====================
let curRightY = topY;

// 1. WORK EXPERIENCE
curRightY = drawSectionHeading('WORK EXPERIENCE', rightX, curRightY, rightWidth);

// Experience 1
doc.fillColor(textDark)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('Divine Astro Vastu Science LLP – Acharya Ganesh', rightX + 2, curRightY);

doc.fillColor(accentBlue)
   .font('Helvetica-Bold')
   .fontSize(8.5)
   .text('SEO Executive', rightX + 2, curRightY + 12);

doc.fillColor('#64748B')
   .font('Helvetica')
   .fontSize(7.5)
   .text('August 2025 – August 2026  |  Full-time', rightX + 2, curRightY + 23);

curRightY += 35;

const exp1Bullets = [
  'Handled complete website SEO operations and ranking growth.',
  'Conducted in-depth keyword research and competitor analysis.',
  'Executed regular technical SEO audits and crawl fixations.',
  'Created and optimized high-converting service landing pages.',
  'Managed authority building and link-building campaigns.',
  'Monitored keyword rankings, impressions, and CTR growth using Google Search Console and GA4.'
];

exp1Bullets.forEach(bullet => {
  drawBullet(rightX + 6, curRightY + 4, accentBlue);
  doc.fillColor(textDark)
     .font('Helvetica')
     .fontSize(8)
     .text(bullet, rightX + 14, curRightY, { width: rightWidth - 18, lineGap: 1.5 });
  curRightY += doc.heightOfString(bullet, { width: rightWidth - 18 }) + 3;
});

curRightY += 10;

// Experience 2
doc.fillColor(textDark)
   .font('Helvetica-Bold')
   .fontSize(9.5)
   .text('ThinkBizz Hightech', rightX + 2, curRightY);

doc.fillColor(accentBlue)
   .font('Helvetica-Bold')
   .fontSize(8.5)
   .text('SEO Intern', rightX + 2, curRightY + 12);

doc.fillColor('#64748B')
   .font('Helvetica')
   .fontSize(7.5)
   .text('December 2024 – June 2025  |  Internship', rightX + 2, curRightY + 23);

curRightY += 35;

const exp2Bullets = [
  'Executed off-page SEO strategies and directory submissions.',
  'Built high-quality backlinks to enhance domain authority.',
  'Assisted in target keyword research and content mapping.'
];

exp2Bullets.forEach(bullet => {
  drawBullet(rightX + 6, curRightY + 4, accentBlue);
  doc.fillColor(textDark)
     .font('Helvetica')
     .fontSize(8)
     .text(bullet, rightX + 14, curRightY, { width: rightWidth - 18 });
  curRightY += 13;
});

curRightY += 18;

// 2. PERSONAL DETAILS
curRightY = drawSectionHeading('PERSONAL DETAILS', rightX, curRightY, rightWidth);

const personalDetails = [
  { label: 'Date of Birth', val: '17 August 2004' },
  { label: 'Nationality', val: 'Indian' },
  { label: 'Marital Status', val: 'Single' }
];

personalDetails.forEach(detail => {
  doc.fillColor(textDark).font('Helvetica-Bold').fontSize(8).text(`${detail.label}:`, rightX + 4, curRightY);
  doc.fillColor(textMuted).font('Helvetica').fontSize(8).text(detail.val, rightX + 90, curRightY);
  curRightY += 14;
});

// Bottom Navy Banner
doc.rect(0, pageHeight - 14, pageWidth, 14).fill(primaryNavy);

doc.end();

stream.on('finish', () => {
  console.log('PDF generated successfully at:', outputPath);
});
