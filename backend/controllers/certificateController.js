import PDFDocument from 'pdfkit';
import User from '../models/User.js';

const generateCertificate = async (req, res) => {
  try {
    const { isCompleted } = req.body;
    if (typeof isCompleted !== 'boolean') {
      return res.status(400).json({ 
        message: "'isCompleted' is required and must be a boolean value." 
      });
    }

    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (!isCompleted) {
      return res.status(400).json({ 
        message: "Cannot generate certificate. Quiz is not marked as completed." 
      });
    }

    user.isCompleted = true;
    await user.save();

    // Create PDF in landscape mode with specific dimensions
    const doc = new PDFDocument({
      size: 'letter',
      layout: 'landscape',
      margin: 0
    });

    const safeFileName = user.username.replace(/[^a-zA-Z0-9]/g, '_');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="LinkedStruct_Certificate_${safeFileName}.pdf"`);

    doc.pipe(res);

    // Define dimensions
    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;
    const margin = 40;

    // Background
    doc
      .rect(0, 0, pageWidth, pageHeight)
      .fill('#ffffff');

    // Ornamental border
    doc
      .rect(margin, margin, pageWidth - (margin * 2), pageHeight - (margin * 2))
      .lineWidth(2)
      .strokeColor('#1e3a8a')
      .stroke();

    // Inner border
    doc
      .rect(margin + 10, margin + 10, pageWidth - (margin * 2 + 20), pageHeight - (margin * 2 + 20))
      .lineWidth(1)
      .strokeColor('#3b82f6')
      .stroke();

    // Top decorative bar
    doc
      .rect(0, 0, pageWidth, 60)
      .fill('#1e3a8a');

    // Organization Name at the top
    doc
      .font('Helvetica-Bold')
      .fontSize(24)
      .fillColor('#ffffff')
      .text('LinkedStruct', 0, 20, {
        align: 'center'
      });

    // Bottom decorative bar
    doc
      .rect(0, pageHeight - 30, pageWidth, 30)
      .fill('#1e3a8a');

    // Certificate title
    doc
      .font('Helvetica-Bold')
      .fontSize(42)
      .fillColor('#1e3a8a')
      .text('Certificate of Completion', 0, 100, {
        align: 'center'
      });

    // Gold line under title
    doc
      .moveTo(pageWidth / 2 - 150, 160)
      .lineTo(pageWidth / 2 + 150, 160)
      .lineWidth(3)
      .strokeColor('#d97706')
      .stroke();

    // Main text content
    doc
      .font('Helvetica')
      .fontSize(16)
      .fillColor('#1f2937')
      .text('This is to certify that', 0, 190, {
        align: 'center'
      });

    // Recipient name
    doc
      .font('Helvetica-Bold')
      .fontSize(32)
      .fillColor('#1e3a8a')
      .text(user.username, 0, 220, {
        align: 'center'
      });

    // Course completion text
    doc
      .font('Helvetica')
      .fontSize(16)
      .fillColor('#1f2937')
      .text('has successfully completed the course on', 0, 280, {
        align: 'center'
      });

    // Course name
    doc
      .font('Helvetica-Bold')
      .fontSize(24)
      .fillColor('#1e3a8a')
      .text('Data Structures: Linked Lists', 0, 310, {
        align: 'center'
      });

    // Organization context
    doc
      .font('Helvetica')
      .fontSize(14)
      .fillColor('#1f2937')
      .text('Provided by LinkedStruct Organization', 0, 350, {
        align: 'center'
      });

    // Add date
    const issueDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Signatures section
    const signatureY = 420;
    const signatureWidth = 200;
    
    // Left signature (Course Instructor)
    doc
      .moveTo(pageWidth / 3 - signatureWidth/2, signatureY)
      .lineTo(pageWidth / 3 + signatureWidth/2, signatureY)
      .strokeColor('#1f2937')
      .stroke();

    doc
      .font('Helvetica')
      .fontSize(14)
      .fillColor('#1f2937')
      .text('Course Instructor', pageWidth / 3 - signatureWidth/2, signatureY + 10, {
        width: signatureWidth,
        align: 'center'
      });

    // Right signature (Program Director)
    doc
      .moveTo((2 * pageWidth / 3) - signatureWidth/2, signatureY)
      .lineTo((2 * pageWidth / 3) + signatureWidth/2, signatureY)
      .strokeColor('#1f2937')
      .stroke();

    doc
      .fontSize(14)
      .text('Program Director', (2 * pageWidth / 3) - signatureWidth/2, signatureY + 10, {
        width: signatureWidth,
        align: 'center'
      });

    // Date
    doc
      .fontSize(14)
      .text(`Issued on: ${issueDate}`, 0, signatureY + 50, {
        align: 'center'
      });

    // Certificate ID
    const certificateId = `LS-CERT-${Date.now()}-${user._id.toString().substr(-6)}`;
    doc
      .fontSize(10)
      .fillColor('#6b7280')
      .text(`Certificate ID: ${certificateId}`, margin + 10, pageHeight - 60);

    // Decorative corners
    const cornerSize = 15;
    const corners = [
      [margin, margin],
      [pageWidth - margin - cornerSize, margin],
      [margin, pageHeight - margin - cornerSize],
      [pageWidth - margin - cornerSize, pageHeight - margin - cornerSize]
    ];

    corners.forEach(([x, y]) => {
      doc
        .moveTo(x, y)
        .lineTo(x + cornerSize, y)
        .lineTo(x, y + cornerSize)
        .fillColor('#1e3a8a')
        .fill();
    });

    doc.end();

  } catch (error) {
    console.error('Error generating certificate:', error);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default generateCertificate;