import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'p',
  unit: 'pt',
  format: 'a4'
});

// A4 dimensions in points: 595.28 x 841.89
const pageWidth = 595.28;
const pageHeight = 841.89;

// Colors
const primaryNavy = [11, 25, 44];       // #0B192C Deep Midnight
const secondaryNavy = [30, 42, 56];     // #1E2A38
const accentCyan = [0, 180, 216];       // #00B4D8 Bright Cyan
const accentBlue = [2, 132, 199];       // #0284C7 Sky Blue
const textDark = [15, 23, 42];          // #0F172A Main Text
const textMuted = [71, 85, 105];        // #475569 Secondary Text
const bgContact = [241, 245, 249];      // #F1F5F9 Soft Light Gray
const bgBadge = [238, 242, 255];        // #EEEFF

// ==================== 1. TOP HEADER BANNER ====================
// Deep Navy Background
doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
doc.rect(0, 0, pageWidth, 90, 'F');

// Top Accent Stripe (Cyan)
doc.setFillColor(accentCyan[0], accentCyan[1], accentCyan[2]);
doc.rect(0, 0, pageWidth, 4, 'F');

// Candidate Name
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(24);
doc.text('MOHAN KUMAR', 36, 42);

// Professional Title & Tagline
doc.setTextColor(accentCyan[0], accentCyan[1], accentCyan[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(10.5);
doc.text('SEO EXECUTIVE | DIGITAL MARKETING SPECIALIST', 36, 62);

// ==================== 2. CONTACT BAR BELOW HEADER ====================
doc.setFillColor(bgContact[0], bgContact[1], bgContact[2]);
doc.rect(0, 90, pageWidth, 28, 'F');

doc.setDrawColor(226, 232, 240);
doc.setLineWidth(0.5);
doc.line(0, 118, pageWidth, 118);

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);

doc.text('Phone: +91 8585974338', 36, 107);
doc.text('Email: mohankaka172004@gmail.com', 215, 107);
doc.text('Location: New Delhi, India', 445, 107);

// Two Column Setup
const leftX = 36;
const leftWidth = 220;
const rightX = 275;
const rightWidth = 284;
let topY = 135;

// Helper: Elegant Section Heading
function drawSectionHeading(titleText, x, y, width) {
  // Accent Vertical Bar
  doc.setFillColor(accentCyan[0], accentCyan[1], accentCyan[2]);
  doc.rect(x, y, 3.5, 16, 'F');
  
  // Subtle Background Pill
  doc.setFillColor(bgBadge[0], bgBadge[1], bgBadge[2]);
  doc.rect(x + 5, y, width - 5, 16, 'F');

  // Section Heading Text
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(titleText, x + 12, y + 11);

  return y + 24;
}

// Helper: Bullet Circle
function drawBullet(x, y) {
  doc.setFillColor(accentBlue[0], accentBlue[1], accentBlue[2]);
  doc.circle(x, y - 2.5, 2.2, 'F');
}

// ==================== LEFT COLUMN ====================
let curLeftY = topY;

// 1. PROFESSIONAL SUMMARY
curLeftY = drawSectionHeading('PROFESSIONAL SUMMARY', leftX, curLeftY, leftWidth);

doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);

const summaryText = 'Results-driven SEO Executive with 1.5+ years of hands-on experience managing website organic growth, improving search engine rankings, and driving targeted traffic. Skilled in technical SEO audits, keyword research, competitor analysis, on-page & off-page optimization, link building, and analytics with Google Search Console & GA4.';

const summaryLines = doc.splitTextToSize(summaryText, leftWidth - 6);
doc.text(summaryLines, leftX + 4, curLeftY);
curLeftY += summaryLines.length * 11 + 14;

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
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text(edu.title, leftX + 4, curLeftY);
  
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text(edu.inst, leftX + 4, curLeftY + 11);
  
  doc.setTextColor(accentBlue[0], accentBlue[1], accentBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text(edu.date, leftX + 4, curLeftY + 21);

  curLeftY += 33;
});

curLeftY += 6;

// 3. SKILLS & EXPERTISE
curLeftY = drawSectionHeading('SKILLS & EXPERTISE', leftX, curLeftY, leftWidth);

const skills = [
  'SEO (On-Page & Off-Page)',
  'Keyword Research & Strategy',
  'Competitor Benchmarking',
  'Technical SEO Audits',
  'High-Quality Link Building',
  'Google Search Console',
  'Google Analytics 4 (GA4)',
  'SEMrush / Ahrefs / Screaming Frog',
  'WordPress CMS & Optimization',
  'Rank Math & Yoast SEO'
];

skills.forEach(skill => {
  drawBullet(leftX + 8, curLeftY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(skill, leftX + 16, curLeftY);
  curLeftY += 13.5;
});

curLeftY += 8;

// 4. LANGUAGES
curLeftY = drawSectionHeading('LANGUAGES', leftX, curLeftY, leftWidth);

[
  { lang: 'Hindi', proficiency: 'Native / Primary' },
  { lang: 'English', proficiency: 'Professional Working' }
].forEach(item => {
  drawBullet(leftX + 8, curLeftY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text(item.lang, leftX + 16, curLeftY);
  
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text(` - ${item.proficiency}`, leftX + 44, curLeftY);
  curLeftY += 14;
});


// ==================== RIGHT COLUMN ====================
let curRightY = topY;

// 1. WORK EXPERIENCE
curRightY = drawSectionHeading('WORK EXPERIENCE', rightX, curRightY, rightWidth);

// Experience 1
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.text('Divine Astro Vastu Science LLP - Acharya Ganesh', rightX + 4, curRightY);

doc.setTextColor(accentBlue[0], accentBlue[1], accentBlue[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('SEO Executive', rightX + 4, curRightY + 12);

// Clean formatted date with explicit "to" keyword
doc.setTextColor(100, 116, 139);
doc.setFont('helvetica', 'bold');
doc.setFontSize(7.5);
doc.text('August 2025 to August 2026 | Full-time', rightX + 4, curRightY + 23);

curRightY += 36;

const exp1Bullets = [
  'Handled complete website SEO operations and organic ranking growth.',
  'Conducted in-depth keyword research and competitor benchmarking.',
  'Executed regular technical SEO audits and crawl error resolution.',
  'Created and optimized high-converting service landing pages.',
  'Managed authority building and link-building campaigns.',
  'Monitored keyword rankings, organic traffic, and CTR growth using Google Search Console & GA4.'
];

exp1Bullets.forEach(bullet => {
  drawBullet(rightX + 8, curRightY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  
  const lines = doc.splitTextToSize(bullet, rightWidth - 20);
  doc.text(lines, rightX + 16, curRightY);
  curRightY += lines.length * 10.5 + 3.5;
});

curRightY += 12;

// Experience 2
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.text('ThinkBizz Hightech', rightX + 4, curRightY);

doc.setTextColor(accentBlue[0], accentBlue[1], accentBlue[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('SEO Intern', rightX + 4, curRightY + 12);

// Clean formatted date with explicit "to" keyword
doc.setTextColor(100, 116, 139);
doc.setFont('helvetica', 'bold');
doc.setFontSize(7.5);
doc.text('December 2024 to June 2025 | Internship', rightX + 4, curRightY + 23);

curRightY += 36;

const exp2Bullets = [
  'Executed off-page SEO strategies and citation directory submissions.',
  'Built high-quality backlinks to enhance domain authority and keyword position.',
  'Assisted senior team in target keyword research and content mapping.'
];

exp2Bullets.forEach(bullet => {
  drawBullet(rightX + 8, curRightY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  
  const lines = doc.splitTextToSize(bullet, rightWidth - 20);
  doc.text(lines, rightX + 16, curRightY);
  curRightY += lines.length * 10.5 + 3.5;
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
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text(`${detail.label}:`, rightX + 6, curRightY);
  
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(detail.val, rightX + 90, curRightY);
  curRightY += 15;
});

// ==================== BOTTOM FOOTER STRIPE ====================
doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
doc.rect(0, pageHeight - 16, pageWidth, 16, 'F');

doc.setFillColor(accentCyan[0], accentCyan[1], accentCyan[2]);
doc.rect(0, pageHeight - 16, pageWidth, 2, 'F');

// Output PDF
const pdfOutput = doc.output('arraybuffer');
const outputPath = path.join(process.cwd(), 'public', 'Mohan_Kumar_Resume.pdf');
fs.writeFileSync(outputPath, Buffer.from(pdfOutput));

console.log('jsPDF resume successfully generated at:', outputPath, 'Size:', pdfOutput.byteLength);
