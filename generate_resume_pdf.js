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

// Colors matching reference
const navyDark = [19, 32, 67];        // #132043 Dark Navy
const titleBlue = [3, 105, 161];      // #0369A1 Sky/Navy accent
const textDark = [15, 23, 42];        // #0F172A Primary Dark Text
const textMuted = [71, 85, 105];      // #475569 Secondary Text
const lineBorder = [203, 213, 225];   // #CBD5E1 Divider Line

// 1. TOP NAVY HEADER BANNER
doc.setFillColor(navyDark[0], navyDark[1], navyDark[2]);
doc.rect(0, 0, pageWidth, 100, 'F');

// Candidate Name
doc.setTextColor(255, 255, 255);
doc.setFont('helvetica', 'bold');
doc.setFontSize(28);
doc.text('MOHAN KUMAR', 40, 48);

// Professional Title
doc.setTextColor(186, 230, 253); // Light Sky Cyan
doc.setFont('helvetica', 'bold');
doc.setFontSize(12);
doc.text('SEO EXECUTIVE', 40, 72);

// 2. CONTACT BAR BELOW HEADER
const contactY = 112;

// Phone Icon Circle + Vector Handset
doc.setFillColor(navyDark[0], navyDark[1], navyDark[2]);
doc.circle(48, contactY + 5, 9, 'F');
doc.setDrawColor(255, 255, 255);
doc.setFillColor(255, 255, 255);
doc.circle(48, contactY + 3.2, 1.5, 'F');
doc.roundedRect(46.2, contactY + 4.5, 3.6, 3.2, 0.5, 0.5, 'F');

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('8585974338', 63, contactY + 8.5);

// Mail Icon Circle + Vector Envelope
doc.setFillColor(navyDark[0], navyDark[1], navyDark[2]);
doc.circle(188, contactY + 5, 9, 'F');
doc.setDrawColor(255, 255, 255);
doc.setLineWidth(0.8);
doc.rect(184.5, contactY + 2.5, 7, 5, 'S');
doc.line(184.5, contactY + 2.5, 188, contactY + 5.2);
doc.line(191.5, contactY + 2.5, 188, contactY + 5.2);

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('mohankaka172004@gmail.com', 203, contactY + 8.5);

// Location Icon Circle + Vector Pin
doc.setFillColor(navyDark[0], navyDark[1], navyDark[2]);
doc.circle(398, contactY + 5, 9, 'F');
doc.setFillColor(255, 255, 255);
doc.circle(398, contactY + 3.8, 2, 'F');
doc.triangle(396.2, contactY + 4.5, 399.8, contactY + 4.5, 398, contactY + 8.5, 'F');

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('New Delhi, India', 413, contactY + 8.5);

// Divider Line under contact bar
doc.setDrawColor(lineBorder[0], lineBorder[1], lineBorder[2]);
doc.setLineWidth(1);
doc.line(35, 136, pageWidth - 35, 136);

// Two Column Layout Dimensions
const leftX = 35;
const leftWidth = 225;
const rightX = 280;
const rightWidth = 280;
let topY = 154;

// Helper: Vector Icon Renderer for Section Headings
function drawHeadingIcon(type, cx, cy) {
  doc.setDrawColor(19, 32, 67);
  doc.setFillColor(19, 32, 67);
  
  if (type === 'summary') {
    // Person / User Icon
    doc.circle(cx, cy - 1.8, 1.8, 'F');
    doc.roundedRect(cx - 3, cy + 0.8, 6, 2.8, 1, 1, 'F');
  } else if (type === 'education') {
    // Graduation Cap Icon
    doc.triangle(cx - 4, cy - 0.5, cx, cy - 3.2, cx + 4, cy - 0.5, 'F');
    doc.triangle(cx - 4, cy - 0.5, cx, cy + 1.2, cx + 4, cy - 0.5, 'F');
    doc.rect(cx - 2, cy + 1, 4, 1.8, 'F');
  } else if (type === 'skills') {
    // Star / Expertise Icon
    doc.setLineWidth(0.8);
    doc.circle(cx, cy, 1.2, 'F');
    doc.line(cx - 3, cy, cx + 3, cy);
    doc.line(cx, cy - 3, cx, cy + 3);
    doc.line(cx - 2, cy - 2, cx + 2, cy + 2);
    doc.line(cx - 2, cy + 2, cx + 2, cy - 2);
  } else if (type === 'languages') {
    // Globe / Language Icon
    doc.setLineWidth(0.7);
    doc.circle(cx, cy, 3, 'S');
    doc.line(cx - 3, cy, cx + 3, cy);
    doc.line(cx, cy - 3, cx, cy + 3);
  } else if (type === 'experience') {
    // Briefcase Icon
    doc.setLineWidth(0.7);
    doc.rect(cx - 1.2, cy - 3.5, 2.4, 1.2, 'S');
    doc.rect(cx - 3.5, cy - 2, 7, 4.8, 'F');
  } else if (type === 'personal') {
    // ID Card / User Badge Icon
    doc.setLineWidth(0.7);
    doc.roundedRect(cx - 3.5, cy - 3, 7, 6, 0.5, 0.5, 'S');
    doc.circle(cx - 1, cy - 0.5, 1, 'F');
    doc.line(cx + 1, cy - 1, cx + 2.8, cy - 1);
    doc.line(cx + 1, cy + 1, cx + 2.8, cy + 1);
  }
}

// Helper: Section Heading Pill Badge
function drawSectionHeading(titleText, x, y, width, iconType) {
  // Pill Badge Background
  doc.setFillColor(navyDark[0], navyDark[1], navyDark[2]);
  doc.roundedRect(x, y, width, 22, 11, 11, 'F');

  // White Icon Badge Circle inside pill
  doc.setFillColor(255, 255, 255);
  doc.circle(x + 11, y + 11, 6.5, 'F');

  // Draw crisp vector icon inside white circle
  drawHeadingIcon(iconType, x + 11, y + 11);

  // Heading Title Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text(titleText, x + 24, y + 14.5);

  // Bottom Underline
  doc.setDrawColor(lineBorder[0], lineBorder[1], lineBorder[2]);
  doc.setLineWidth(0.75);
  doc.line(x, y + 28, x + width, y + 28);

  return y + 38;
}

// Helper: Bullet Dot
function drawBullet(x, y) {
  doc.setFillColor(textDark[0], textDark[1], textDark[2]);
  doc.circle(x, y - 3, 2.2, 'F');
}

// ==================== LEFT COLUMN ====================
let curLeftY = topY;

// 1. PROFESSIONAL SUMMARY
curLeftY = drawSectionHeading('PROFESSIONAL SUMMARY', leftX, curLeftY, leftWidth, 'summary');

doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);

const summaryText = 'Results-driven SEO Executive with 1.5+ years of hands-on experience in managing website organic search, improving keyword rankings, and driving targeted traffic. Highly proficient in keyword research, competitor analysis, technical SEO site audits, on-page & off-page optimization, link building, and performance analytics using Google Search Console and Google Analytics 4.';

const summaryLines = doc.splitTextToSize(summaryText, leftWidth - 4);
doc.text(summaryLines, leftX, curLeftY);
curLeftY += summaryLines.length * 12 + 20;

// 2. EDUCATION
curLeftY = drawSectionHeading('EDUCATION', leftX, curLeftY, leftWidth, 'education');

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
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(edu.title, leftX, curLeftY);
  
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(edu.inst, leftX, curLeftY + 12);
  
  doc.setTextColor(titleBlue[0], titleBlue[1], titleBlue[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text(edu.date, leftX, curLeftY + 23);

  curLeftY += 40;
});

curLeftY += 8;

// 3. SKILLS
curLeftY = drawSectionHeading('SKILLS & EXPERTISE', leftX, curLeftY, leftWidth, 'skills');

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
  'Rank Math / Yoast SEO'
];

skills.forEach(skill => {
  drawBullet(leftX + 4, curLeftY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(skill, leftX + 14, curLeftY);
  curLeftY += 15.5;
});

curLeftY += 12;

// 4. LANGUAGES
curLeftY = drawSectionHeading('LANGUAGES', leftX, curLeftY, leftWidth, 'languages');

[
  { lang: 'Hindi', level: 'Native / Primary' },
  { lang: 'English', level: 'Professional Working' }
].forEach(item => {
  drawBullet(leftX + 4, curLeftY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text(item.lang, leftX + 14, curLeftY);
  
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text(`- ${item.level}`, leftX + 48, curLeftY);
  curLeftY += 16;
});


// ==================== RIGHT COLUMN ====================
let curRightY = topY;

// 1. WORK EXPERIENCE
curRightY = drawSectionHeading('WORK EXPERIENCE', rightX, curRightY, rightWidth, 'experience');

// Experience 1
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.text('Divine Astro Vastu Science LLP - Acharya Ganesh', rightX, curRightY);

doc.setTextColor(titleBlue[0], titleBlue[1], titleBlue[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('SEO Executive', rightX, curRightY + 14);

doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('August 2025 - August 2026  |  Full-time', rightX, curRightY + 27);

curRightY += 42;

const exp1Bullets = [
  'Managed end-to-end website SEO operations to significantly increase organic traffic and search engine rankings.',
  'Conducted detailed target keyword research and competitor benchmarking to identify high-value search opportunities.',
  'Performed regular technical SEO audits, resolving site crawl errors, broken links, and page speed bottlenecks.',
  'Created and optimized high-intent service landing pages with structured meta tags, headers, and internal linking.',
  'Executed off-page authority building and strategic link-building campaigns to boost domain rating.',
  'Monitored keyword positions, organic impressions, and click-through rates (CTR) using Google Search Console and GA4.'
];

exp1Bullets.forEach(bullet => {
  drawBullet(rightX + 4, curRightY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  
  const lines = doc.splitTextToSize(bullet, rightWidth - 16);
  doc.text(lines, rightX + 14, curRightY);
  curRightY += lines.length * 11.5 + 5;
});

curRightY += 16;

// Experience 2
doc.setTextColor(textDark[0], textDark[1], textDark[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(10);
doc.text('ThinkBizz Hightech', rightX, curRightY);

doc.setTextColor(titleBlue[0], titleBlue[1], titleBlue[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(9);
doc.text('SEO Intern', rightX, curRightY + 14);

doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.text('December 2024 - June 2025  |  Internship', rightX, curRightY + 27);

curRightY += 42;

const exp2Bullets = [
  'Executed off-page SEO strategies, web directory listings, and business citation submissions.',
  'Built high-quality contextual backlinks to improve website authority and search engine indexation.',
  'Assisted senior marketing team in keyword discovery and content optimization for landing pages.'
];

exp2Bullets.forEach(bullet => {
  drawBullet(rightX + 4, curRightY);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  
  const lines = doc.splitTextToSize(bullet, rightWidth - 16);
  doc.text(lines, rightX + 14, curRightY);
  curRightY += lines.length * 11.5 + 5;
});

curRightY += 20;

// 2. PERSONAL DETAILS
curRightY = drawSectionHeading('PERSONAL DETAILS', rightX, curRightY, rightWidth, 'personal');

const personalDetails = [
  { label: 'Date of Birth', val: '17 August 2004' },
  { label: 'Nationality', val: 'Indian' },
  { label: 'Marital Status', val: 'Single' },
  { label: 'Location', val: 'New Delhi, India' }
];

personalDetails.forEach(detail => {
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text(detail.label, rightX, curRightY);
  
  doc.text(':', rightX + 75, curRightY);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(detail.val, rightX + 85, curRightY);
  curRightY += 16;
});

// 3. BOTTOM NAVY FOOTER BANNER
doc.setFillColor(navyDark[0], navyDark[1], navyDark[2]);
doc.rect(0, pageHeight - 18, pageWidth, 18, 'F');

// Output PDF
const pdfOutput = doc.output('arraybuffer');
const outputPath = path.join(process.cwd(), 'public', 'Mohan_Kumar_Resume.pdf');
fs.writeFileSync(outputPath, Buffer.from(pdfOutput));

console.log('Full-page vector resume PDF successfully generated at:', outputPath, 'Size:', pdfOutput.byteLength);
