import Inquiry from '../model/inquiry.model.js';
import nodemailer from 'nodemailer';
export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, message,service } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message || !service) {
      return res.status(400).json({ success: false, message: 'Name, Email, Phone, and Message are required.' });
    }

    // Validate phone number format
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({ success: false, message: 'Invalid phone number format.' });
    }

    // Create new inquiry
    const newInquiry = new Inquiry(req.body);

    await newInquiry.save();

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//    const mailOptions = {
//   from: process.env.EMAIL_USER,
//   to: 'suhel.codecrafter@gmail.com',
//   subject: 'Agarwal & Associates - New Website Inquiry Received',
//   html: `
//     <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; padding: 30px;">
//       <div style="max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        
//         <!-- Header -->
//         <div style="background-color: #B71C1C; padding: 20px;">
//           <h1 style="margin: 0; font-size: 22px; color: #ffffff;">Agarwal & Associates</h1>
//           <p style="margin: 5px 0 0; color: #ffcdd2;">Advocates & Legal Consultants</p>
//         </div>

//         <!-- Body -->
//         <div style="padding: 25px; color: #333333;">
//           <h2 style="color: #B71C1C;">New Inquiry Received</h2>
//           <p>Dear Director,</p>
//           <p>You have received a new inquiry from the website <a href="https://agarwal-associates.netlify.app/" target="_blank" style="color: #B71C1C;">agarwal-associates.netlify.app</a>. Below are the details:</p>
          
//           <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
//             <tr>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Name:</strong></td>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;">${name}</td>
//             </tr>
//             <tr>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Email:</strong></td>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;">${email}</td>
//             </tr>
//             <tr>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Phone:</strong></td>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;">${phone}</td>
//             </tr>
//             <tr>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Message:</strong></td>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;">${message}</td>
//             </tr>
//             <tr>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;"><strong>Service:</strong></td>
//               <td style="padding: 10px; border: 1px solid #e0e0e0;">${service}</td>
//             </tr>
//           </table>

//           <p style="margin-top: 20px;">Please respond to this inquiry as soon as possible.</p>
//         </div>

//         <!-- Footer -->
//         <div style="background-color: #f1f1f1; padding: 20px; font-size: 14px; color: #555;">
//           <p style="margin: 0 0 8px;">Kindest Regards,</p>
//           <p style="margin: 0;"><strong>Code Crafter Web Solutions</strong></p>
//           <p style="margin: 2px 0;"><strong>Phone:</strong> +91 9336969289</p>
//           <p style="margin: 2px 0;"><strong>Office:</strong> +91 8840700176</p>
//           <p style="margin: 2px 0;"><strong>Website:</strong> <a href="https://codecrafter.co.in/" style="color: #B71C1C;" target="_blank">codecrafter.co.in</a></p>
//         </div>

//       </div>
//     </div>
//   `,
// };


//     // Send email using Nodemailer
//     const info = await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: 'Inquiry submitted successfully!', inquiry: newInquiry });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Get all inquiries
export const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, inquiries });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Get a single inquiry by ID
export const getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ success: false, message: 'Inquiry not found.' });
    }
    res.status(200).json({ success: true, inquiry });
  } catch (error) {
    console.error('Error fetching inquiry:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};

// Delete an inquiry
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ success: false, message: 'Inquiry not found.' });
    }
    res.status(200).json({ success: true, message: 'Inquiry deleted successfully.' });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
};
