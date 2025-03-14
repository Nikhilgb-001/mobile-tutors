import React, { useState } from "react";
import emailjs from "emailjs-com";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    degreeSubject: "",
    universityName: "",
    postcode: "",
    subjects: [],
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        subjects: checked
          ? [...prev.subjects, value]
          : prev.subjects.filter((subject) => subject !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.degreeSubject ||
      !formData.universityName ||
      !formData.postcode ||
      !formData.cv
    ) {
      alert("Please fill all required fields.");
      return;
    }
    if (formData.cv.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    // Prepare form data for EmailJS
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      degreeSubject: formData.degreeSubject,
      universityName: formData.universityName,
      postcode: formData.postcode,
      subjects: formData.subjects.join(", "),
      cv: formData.cv.name,
    };

    // Send email using EmailJS
    try {
      const serviceID = "service_tf2av8a";
      const templateID = "template_rwa90jl";
      const userID = "oVu-UA2ac_-Fw7DSE";

      await emailjs.send(serviceID, templateID, templateParams, userID);

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-32">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h1 className="text-2xl font-bold mb-6">Application Form</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-500 rounded"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-500 rounded"
              placeholder="Last Name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-bold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-500 rounded"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-500 rounded"
              placeholder="Mobile Number"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-bold mb-2">
              Degree Subject *
            </label>
            <input
              type="text"
              name="degreeSubject"
              value={formData.degreeSubject}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-500 rounded"
              placeholder="Degree Subject"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">
              Name of University *
            </label>
            <input
              type="text"
              name="universityName"
              value={formData.universityName}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-500 rounded"
              placeholder="University Name"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-bold mb-2">Postcode *</label>
          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="w-full p-2 border-2 border-yellow-500 rounded"
            placeholder="Postcode"
            required
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-bold mb-2">
            Subjects tutored:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Maths",
              "Biology",
              "Chemistry",
              "Physics",
              "English",
              "Economics",
              "MFL",
              "Geography",
              "History",
              "Philosophy",
              "Psychology",
              "Computer Science",
              "IT",
              "Business",
              "Other",
            ].map((subject) => (
              <label key={subject} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="subjects"
                  value={subject}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-yellow-600"
                />
                <span className="ml-2">{subject}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-bold mb-2">
            CV (PDF Only) *
          </label>
          <input
            type="file"
            name="cv"
            onChange={handleChange}
            className="w-full p-2 border-2 border-yellow-500 rounded"
            accept="application/pdf"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-6 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Application Form Submission</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             margin: 0;
//             padding: 0;
//         }
//         .email-container {
//             max-width: 600px;
//             margin: 20px auto;
//             background-color: #ffffff;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         .header {
//             text-align: center;
//             padding-bottom: 20px;
//             border-bottom: 2px solid #eeeeee;
//         }
//         .header h1 {
//             margin: 0;
//             font-size: 24px;
//             color: #333333;
//         }
//         .content {
//             padding: 20px 0;
//         }
//         .content h2 {
//             font-size: 20px;
//             color: #444444;
//             margin-bottom: 10px;
//         }
//         .content p {
//             font-size: 16px;
//             color: #555555;
//             line-height: 1.6;
//         }
//         .footer {
//             text-align: center;
//             padding-top: 20px;
//             border-top: 2px solid #eeeeee;
//             font-size: 14px;
//             color: #777777;
//         }
//     </style>
// </head>
// <body>
//     <div class="email-container">
//         <div class="header">
//             <h1>New Application Form Submission</h1>
//         </div>
//         <div class="content">
//             <h2>Applicant Details</h2>
//             <p><strong>First Name:</strong> {{firstName}}</p>
//             <p><strong>Last Name:</strong> {{lastName}}</p>
//             <p><strong>Email:</strong> {{email}}</p>
//             <p><strong>Mobile Number:</strong> {{mobileNumber}}</p>
//             <p><strong>Degree Subject:</strong> {{degreeSubject}}</p>
//             <p><strong>University Name:</strong> {{universityName}}</p>
//             <p><strong>Postcode:</strong> {{postcode}}</p>
//             <p><strong>Subjects Tutored:</strong> {{subjects}}</p>
//             <p><strong>CV File:</strong> {{cv}}</p>
//         </div>
//         <div class="footer">
//             <p>This is an automated message. Please do not reply directly to this email.</p>
//         </div>
//     </div>
// </body>
// </html>

// const templateParams = {
//     firstName: formData.firstName,
//     lastName: formData.lastName,
//     email: formData.email,
//     mobileNumber: formData.mobileNumber,
//     degreeSubject: formData.degreeSubject,
//     universityName: formData.universityName,
//     postcode: formData.postcode,
//     subjects: formData.subjects.join(', '),
//     cv: formData.cv.name,
//   };
  
//   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
//     .then((response) => {
//       console.log('Email sent successfully!', response.status, response.text);
//     })
//     .catch((error) => {
//       console.error('Failed to send email:', error);
//     });