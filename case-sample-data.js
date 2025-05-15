const cases = [
  {
    case_id: "WP-2023-001",
    title: "State vs. Ramesh Kumar",
    description: "Allegations of improper land acquisition in Bhubaneswar.",
    case_type: "WP(CRL)",
    court: "Odisha High Court",
    filing_date: "Jun 15, 2023",
    status: "Closed",
    department: "Revenue Department",
    subject_matter: "Land Acquisition",
    petitioner: "Government of Odisha",
    respondent: "Ramesh Kumar",
    key_dates: {
      next_hearing: null,
      pwc_due_date: null,
      last_hearing: "Dec 10, 2023",
      filing_date: "Jun 15, 2023",
      closure_date: "Dec 15, 2023",
    },
    assigned_to: [
      { role: "Primary", name: "AG", title: "Advocate General" },
      { role: "Secondary", name: "GA", title: "Government Advocate" },
    ],
    actions: ["Export Details"],
    documents: [
      { name: "Petition.pdf", uploaded_on: "Jun 15, 2023" },
      { name: "Court_Order_10Dec.pdf", uploaded_on: "Dec 12, 2023" },
    ],
    hearings: [
      {
        date: "Jul 20, 2023",
        time: "11:00",
        court: "Odisha High Court",
        judge: "Justice A.K. Mishra",
        purpose: "First Hearing",
        status: "Completed",
        action: "View",
      },
      {
        date: "Sep 10, 2023",
        time: "10:30",
        court: "Odisha High Court",
        judge: "Justice A.K. Mishra",
        purpose: "Second Hearing",
        status: "Completed",
        action: "View",
      },
      {
        date: "Dec 10, 2023",
        time: "10:00",
        court: "Odisha High Court",
        judge: "Justice A.K. Mishra",
        purpose: "Final Hearing",
        status: "Completed",
        action: "View",
      },
    ],
    notes: [
      {
        title: "Initial Assessment",
        date: "Jun 16, 2023",
        content: "Need land records.",
        added_by: "Advocate General",
      },
      {
        title: "Closure Notes",
        date: "Dec 15, 2023",
        content: "Case settled with respondent agreement.",
        added_by: "Government Advocate",
      },
    ],
    history: [
      { date: "Jun 15, 2023", event: "Case Filed", by: "Admin" },
      {
        date: "Jun 16, 2023",
        event: "Assigned to Advocate General",
        by: "Admin",
      },
      { date: "Dec 15, 2023", event: "Case Closed", by: "Admin" },
    ],
  },

  // ... other cases
];
