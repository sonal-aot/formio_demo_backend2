module.exports = [
  {
    questionnaireId: 12345,
    appointmentNumber: 67890,
    questionnaire: {
      components: [
        {
          label: "Full Name",
          type: "textfield",
          key: "fullName"
        },
        {
          label: "Email Address",
          type: "email",
          key: "email"
        },
        {
          label: "Phone Number",
          type: "phone",
          key: "phone"
        },
        {
          label: "Age",
          type: "number",
          key: "age"
        },
        {
          label: "Gender",
          type: "radio",
          key: "gender",
          values: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" }
          ]
        },
        {
          label: "Blood Pressure Issues",
          type: "radio",
          key: "bloodPressure",
          values: [
            { label: "High Blood Pressure", value: "high" },
            { label: "Low Blood Pressure", value: "low" },
            { label: "Normal", value: "normal" }
          ]
        },
        {
          label: "Known Medical Conditions",
          type: "checkbox",
          key: "medicalConditions",
          values: [
            { label: "Hypertension", value: "hypertension" },
            { label: "Diabetes Type 1", value: "diabetes_1" },
            { label: "Diabetes Type 2", value: "diabetes_2" },
            { label: "Asthma", value: "asthma" },
            { label: "Heart Disease", value: "heart_disease" },
            { label: "Kidney Disease", value: "kidney_disease" },
            { label: "Thyroid Problems", value: "thyroid" },
            { label: "Arthritis", value: "arthritis" }
          ]
        }
      ]
    },
    answers: {
      fullName: "Robert Johnson",
      email: "robert.j@example.com",
      phone: "555-0123",
      age: 58,
      gender: "male",
      bloodPressure: "high",
      medicalConditions: ["hypertension", "diabetes_2", "heart_disease"]
    },
    questionWithAnswers: [
      {
        key: "fullName",
        label: "Full Name",
        type: "textfield",
        answer: "Robert Johnson"
      },
      {
        key: "email",
        label: "Email Address",
        type: "email",
        answer: "robert.j@example.com"
      },
      {
        key: "phone",
        label: "Phone Number",
        type: "phone",
        answer: "555-0123"
      },
      {
        key: "age",
        label: "Age",
        type: "number",
        answer: 58
      },
      {
        key: "gender",
        label: "Gender",
        type: "radio",
        answer: "male"
      },
      {
        key: "bloodPressure",
        label: "Blood Pressure Issues",
        type: "radio",
        answer: "high"
      },
      {
        key: "medicalConditions",
        label: "Known Medical Conditions",
        type: "checkbox",
        answer: ["hypertension", "diabetes_2", "heart_disease"]
      }
    ]
  },
  {
    questionnaireId: 12346,
    appointmentNumber: 67891,
    questionnaire: {
      components: [
        {
          label: "Full Name",
          type: "textfield",
          key: "fullName"
        },
        {
          label: "Email",
          type: "email",
          key: "email"
        },
        {
          label: "Contact Number",
          type: "phone",
          key: "contactNumber"
        },
        {
          label: "Current Symptoms",
          type: "checkbox",
          key: "symptoms",
          values: [
            { label: "Fever", value: "fever" },
            { label: "Cough", value: "cough" },
            { label: "Shortness of Breath", value: "shortness_of_breath" },
            { label: "Chest Pain", value: "chest_pain" },
            { label: "Fatigue", value: "fatigue" },
            { label: "Body Aches", value: "body_aches" }
          ]
        },
        {
          label: "Symptom Duration",
          type: "radio",
          key: "duration",
          values: [
            { label: "Less than 24 hours", value: "less_24" },
            { label: "1-3 days", value: "1_3_days" },
            { label: "4-7 days", value: "4_7_days" },
            { label: "More than a week", value: "more_7_days" }
          ]
        },
        {
          label: "Pain Level (1-10)",
          type: "number",
          key: "painLevel",
          min: 1,
          max: 10
        }
      ]
    },
    answers: {
      fullName: "Sarah Williams",
      email: "sarah.w@example.com",
      contactNumber: "555-4567",
      symptoms: ["fever", "cough", "fatigue", "body_aches"],
      duration: "4_7_days",
      painLevel: 6
    },
    questionWithAnswers: [
      {
        key: "fullName",
        label: "Full Name",
        type: "textfield",
        answer: "Sarah Williams"
      },
      {
        key: "email",
        label: "Email",
        type: "email",
        answer: "sarah.w@example.com"
      },
      {
        key: "contactNumber",
        label: "Contact Number",
        type: "phone",
        answer: "555-4567"
      },
      {
        key: "symptoms",
        label: "Current Symptoms",
        type: "checkbox",
        answer: ["fever", "cough", "fatigue", "body_aches"]
      },
      {
        key: "duration",
        label: "Symptom Duration",
        type: "radio",
        answer: "4_7_days"
      },
      {
        key: "painLevel",
        label: "Pain Level (1-10)",
        type: "number",
        answer: 6
      }
    ]
  },
  {
    questionnaireId: 12347,
    appointmentNumber: 67892,
    questionnaire: {
      components: [
        {
          label: "Full Name",
          type: "textfield",
          key: "fullName"
        },
        {
          label: "Email",
          type: "email",
          key: "email"
        },
        {
          label: "Phone",
          type: "phone",
          key: "phone"
        },
        {
          label: "Allergies",
          type: "checkbox",
          key: "allergies",
          values: [
            { label: "Penicillin", value: "penicillin" },
            { label: "Sulfa Drugs", value: "sulfa" },
            { label: "Aspirin", value: "aspirin" },
            { label: "Latex", value: "latex" },
            { label: "Food Allergies", value: "food" }
          ]
        },
        {
          label: "Previous Allergic Reactions",
          type: "textarea",
          key: "reactionDescription"
        },
        {
          label: "Carries EpiPen",
          type: "radio",
          key: "epipen",
          values: [
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" }
          ]
        }
      ]
    },
    answers: {
      fullName: "Michael Chen",
      email: "michael.c@example.com",
      phone: "555-7890",
      allergies: ["penicillin", "latex", "food"],
      reactionDescription: "Severe rash and difficulty breathing with penicillin. Mild swelling with latex gloves.",
      epipen: "yes"
    },
    questionWithAnswers: [
      {
        key: "fullName",
        label: "Full Name",
        type: "textfield",
        answer: "Michael Chen"
      },
      {
        key: "email",
        label: "Email",
        type: "email",
        answer: "michael.c@example.com"
      },
      {
        key: "phone",
        label: "Phone",
        type: "phone",
        answer: "555-7890"
      },
      {
        key: "allergies",
        label: "Allergies",
        type: "checkbox",
        answer: ["penicillin", "latex", "food"]
      },
      {
        key: "reactionDescription",
        label: "Previous Allergic Reactions",
        type: "textarea",
        answer: "Severe rash and difficulty breathing with penicillin. Mild swelling with latex gloves."
      },
      {
        key: "epipen",
        label: "Carries EpiPen",
        type: "radio",
        answer: "yes"
      }
    ]
  },
  {
    questionnaireId: 12348,
    appointmentNumber: 67893,
    questionnaire: {
      components: [
        {
          label: "Full Name",
          type: "textfield",
          key: "fullName"
        },
        {
          label: "Email",
          type: "email",
          key: "email"
        },
        {
          label: "Phone",
          type: "phone",
          key: "phone"
        },
        {
          label: "Medication History",
          type: "checkbox",
          key: "medications",
          values: [
            { label: "Blood Pressure Medication", value: "bp_meds" },
            { label: "Diabetes Medication", value: "diabetes_meds" },
            { label: "Heart Medication", value: "heart_meds" },
            { label: "Cholesterol Medication", value: "cholesterol_meds" },
            { label: "Pain Medication", value: "pain_meds" }
          ]
        },
        {
          label: "Current Dosage Details",
          type: "textarea",
          key: "dosageDetails"
        },
        {
          label: "Side Effects Experienced",
          type: "checkbox",
          key: "sideEffects",
          values: [
            { label: "Nausea", value: "nausea" },
            { label: "Dizziness", value: "dizziness" },
            { label: "Fatigue", value: "fatigue" },
            { label: "Headache", value: "headache" },
            { label: "Stomach Pain", value: "stomach_pain" }
          ]
        }
      ]
    },
    answers: {
      fullName: "Patricia Martinez",
      email: "patricia.m@example.com",
      phone: "555-2468",
      medications: ["bp_meds", "cholesterol_meds"],
      dosageDetails: "Lisinopril 10mg daily, Atorvastatin 20mg daily",
      sideEffects: ["dizziness", "fatigue"]
    },
    questionWithAnswers: [
      {
        key: "fullName",
        label: "Full Name",
        type: "textfield",
        answer: "Patricia Martinez"
      },
      {
        key: "email",
        label: "Email",
        type: "email",
        answer: "patricia.m@example.com"
      },
      {
        key: "phone",
        label: "Phone",
        type: "phone",
        answer: "555-2468"
      },
      {
        key: "medications",
        label: "Medication History",
        type: "checkbox",
        answer: ["bp_meds", "cholesterol_meds"]
      },
      {
        key: "dosageDetails",
        label: "Current Dosage Details",
        type: "textarea",
        answer: "Lisinopril 10mg daily, Atorvastatin 20mg daily"
      },
      {
        key: "sideEffects",
        label: "Side Effects Experienced",
        type: "checkbox",
        answer: ["dizziness", "fatigue"]
      }
    ]
  }
];