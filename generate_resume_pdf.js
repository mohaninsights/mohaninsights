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

// Color Palette (RGB)
const primaryNavy = [15, 37, 55];       // #0F2537
const headerBg = [19, 46, 72];         // #132E48
const accentSky = [2, 132, 199];        // #0284C7
const titleCyan = [56, 189, 248];       // #38BDF8
const textDark = [15, 23, 42];          // #0F172A
const textMuted = [71, 85, 105];        // #475569
const bgContact = [241, 245, 249];      // #F1F5F9

// 1. TOP NAVY HEADER BANNER
doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
doc.rect(0, 0, pageWidth, 85, 'F');

// Candidate Name
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.text('MOHAN KUMAR', 35, 38);

// Professional Title
doc.setTextColor(titleCyan[0], titleCyan[1], titleCyan[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.text('SEO EXECUTIVE', 35, 58);

// 2. CONTACT BAR BELOW HEADER
doc.setFillColor(bgContact[0], bgContact[1], bgContact[2]);
doc.rect(0, 85, pageWidth, 28, 'F');

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);

doc.text('Phone: +91 8585974338', 35, 102);
doc.text('Email: mohankaka172004@gmail.com', 210, 102);
doc.text('Location: New Delhi, India', 440, 102);

// Two Column Coordinates
const leftX = 35;
const leftWidth = 225;
const rightX = 280;
const rightWidth = 280;
let topY = 130;

// Helper: Section Headings
function drawSectionHeading(text, x, y, width) {
  doc.setFillColor(headerBg[0], headerBg[1], headerBg[2]);
  doc.rect(x, y, width, 18, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(text, x + 8, y + 12);
  
  return y + 25;
}

// Helper: Bullet Circle
function drawBullet(x, y) {
  doc.setFillColor(accentSky[0], accentSky[1], accentSky[2]);
  doc.circle(x, y - 2.5, 2.5, 'F');
}

// ==================== LEFT COLUMN ====================
let curLeftY = topY;

// 1. PROFESSIONAL SUMMARY
curLeftY = drawSectionHeading('PROFESSIONAL SUMMARY', leftX, curLeftY, leftWidth);

doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);

const summaryText = 'Results-driven SEO Executive with 1.5+ years of experience in managing website organic search, improving rankings, and driving target traffic. Skilled in technical SEO audits, keyword research, competitor analysis, on-page optimization, link building, and performance analytics using Google Search Console and Google Analytics 4.';

const summaryLines = doc.splitTextToSize(summaryText, leftWidth - 4);
doc.text(summaryLines, leftX + 2, curLeftY);
curLeftY += summaryLines.length * 11 + 12;

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
  doc.text(edu.title, leftX + 2, curLeftY);
  
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text(edu.inst, leftX + 2, curLeftY + 11);
  
  doc.setTextColor(accentSky[0], accentSky[1], accentSky[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text(edu.date, leftX + 2, curLeftY + 21);

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
  drawBullet(leftX + 6, curLeftY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(skill, leftX + 14, curLeftY);
  curLeftY += 13;
});

curLeftY += 8;

// 4. LANGUAGES
curLeftY = drawSectionHeading('LANGUAGES', leftX, curLeftY, leftWidth);

[
  { lang: 'Hindi', proficiency: 'Native / Primary' },
  { lang: 'English', proficiency: 'Professional Working' }
].forEach(item => {
  drawBullet(leftX + 6, curLeftY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text(item.lang, leftX + 14, curLeftY);
  
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.text(` - ${item.proficiency}`, leftX + 42, curLeftY);
  curLeftY += 14;
});


// ==================== RIGHT COLUMN ====================
let curRightY = topY;

// 1. WORK EXPERIENCE
curRightY = drawSectionHeading('WORK EXPERIENCE', rightX, curRightY, rightWidth);

// Experience 1
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('Divine Astro Vastu Science LLP – Acharya Ganesh', rightX + 2, curRightY);

doc.setTextColor(accentSky[0], accentSky[1], accentSky[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('SEO Executive', rightX + 2, curRightY + 12);

doc.setTextColor(100, 116, 139);
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.text('August 2025 – August 2026  |  Full-time', rightX + 2, curRightY + 23);

curRightY += 35;

const exp1Bullets = [
  'Handled complete website SEO operations and organic ranking growth.',
  'Conducted in-depth keyword research and competitor analysis.',
  'Executed regular technical SEO audits and crawl error resolution.',
  'Created and optimized high-converting service landing pages.',
  'Managed authority building and link-building campaigns.',
  'Monitored keyword rankings, impressions, and CTR growth using Google Search Console and GA4.'
];

exp1Bullets.forEach(bullet => {
  drawBullet(rightX + 6, curRightY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  
  const lines = doc.splitTextToSize(bullet, rightWidth - 18);
  doc.text(lines, rightX + 14, curRightY);
  curRightY += lines.length * 10 + 3;
});

curRightY += 10;

// Experience 2
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('ThinkBizz Hightech', rightX + 2, curRightY);

doc.setTextColor(accentSky[0], accentSky[1], accentSky[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('SEO Intern', rightX + 2, curRightY + 12);

doc.setTextColor(100, 116, 139);
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.text('December 2024 – June 2025  |  Internship', rightX + 2, curRightY + 23);

curRightY += 35;

const exp2Bullets = [
  'Executed off-page SEO strategies and directory submissions.',
  'Built high-quality backlinks to enhance domain authority.',
  'Assisted in target keyword research and content mapping.'
];

exp2Bullets.forEach(bullet => {
  drawBullet(rightX + 6, curRightY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  
  const lines = doc.splitTextToSize(bullet, rightWidth - 18);
  doc.text(lines, rightX + 14, curRightY);
  curRightY += lines.length * 10 + 3;
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
  doc.text(`${detail.label}:`, rightX + 4, curRightY);
  
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(detail.val, rightX + 90, curRightY);
  curRightY += 14;
});

// Bottom Navy Banner
doc.setFillColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
doc.rect(0, pageHeight - 14, pageWidth, 14, 'F');

// Output PDF
const pdfOutput = doc.output('arraybuffer');
const outputPath = path.join(process.cwd(), 'public', 'Mohan_Kumar_Resume.pdf');
fs.writeFileSync(outputPath, Buffer.from(pdfOutput));

console.log('jsPDF resume successfully generated at:', outputPath, 'Size:', pdfOutput.byteLength);
