
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
      closure_date: "Dec 15, 2023"
    },
    assigned_to: [
      { role: "Primary", name: "AG", title: "Advocate General" },
      { role: "Secondary", name: "GA", title: "Government Advocate" }
    ],
    documents: [
      { name: "Petition.pdf", uploaded_on: "Jun 15, 2023" },
      { name: "Court_Order_10Dec.pdf", uploaded_on: "Dec 12, 2023" }
    ],
    hearings: [
      {
        date: "Jul 20, 2023",
        time: "11:00",
        court: "Odisha High Court",
        judge: "Justice A.K. Mishra",
        purpose: "First Hearing",
        status: "Completed",
        action: "View"
      },
      {
        date: "Dec 10, 2023",
        time: "10:00",
        court: "Odisha High Court",
        judge: "Justice A.K. Mishra",
        purpose: "Final Hearing",
        status: "Completed",
        action: "View"
      }
    ],
    notes: [
      {
        title: "Initial Assessment",
        date: "Jun 16, 2023",
        content: "Case documentation complete.",
        added_by: "Advocate General"
      },
      {
        title: "Closure Notes",
        date: "Dec 15, 2023",
        content: "Case settled with respondent agreement.",
        added_by: "Government Advocate"
      }
    ],
    history: [
      { date: "Jun 15, 2023", event: "Case Filed", by: "Admin" },
      { date: "Jun 16, 2023", event: "Assigned to Advocate General", by: "Admin" },
      { date: "Dec 15, 2023", event: "Case Closed", by: "Admin" }
    ]
  },
  {
    case_id: "CRL-2024-001",
    title: "State vs. John Doe",
    description: "Criminal proceedings for cybercrime allegations",
    case_type: "Criminal",
    court: "District Court",
    filing_date: "Jan 5, 2024",
    status: "Active",
    department: "Cyber Cell",
    subject_matter: "Cybercrime",
    petitioner: "State",
    respondent: "John Doe",
    key_dates: {
      next_hearing: "May 20, 2024",
      pwc_due_date: "Apr 15, 2024",
      last_hearing: "Mar 10, 2024",
      filing_date: "Jan 5, 2024",
      closure_date: null
    },
    assigned_to: [
      { role: "Primary", name: "PP", title: "Public Prosecutor" }
    ],
    documents: [
      { name: "FIR.pdf", uploaded_on: "Jan 5, 2024" },
      { name: "Evidence_Doc.pdf", uploaded_on: "Feb 15, 2024" }
    ],
    hearings: [
      {
        date: "Mar 10, 2024",
        time: "11:30",
        court: "District Court",
        judge: "Justice P.K. Sharma",
        purpose: "Evidence Hearing",
        status: "Completed",
        action: "View"
      }
    ],
    notes: [
      {
        title: "Evidence Collection",
        date: "Feb 15, 2024",
        content: "Digital evidence collected from devices",
        added_by: "Public Prosecutor"
      }
    ],
    history: [
      { date: "Jan 5, 2024", event: "Case Filed", by: "Admin" },
      { date: "Feb 15, 2024", event: "Evidence Submitted", by: "PP" }
    ]
  },
  {
    case_id: "CIV-2024-003",
    title: "Property Dispute Case",
    description: "Dispute over ancestral property ownership",
    case_type: "Civil",
    court: "Civil Court",
    filing_date: "Feb 1, 2024",
    status: "Pending",
    department: "Civil Division",
    subject_matter: "Property",
    petitioner: "Singh Family",
    respondent: "Gupta Family",
    key_dates: {
      next_hearing: "Jun 5, 2024",
      pwc_due_date: "May 1, 2024",
      last_hearing: null,
      filing_date: "Feb 1, 2024",
      closure_date: null
    },
    assigned_to: [
      { role: "Primary", name: "LR", title: "Legal Representative" }
    ],
    documents: [
      { name: "Property_Deed.pdf", uploaded_on: "Feb 1, 2024" }
    ],
    hearings: [],
    notes: [
      {
        title: "Initial Review",
        date: "Feb 2, 2024",
        content: "Documentation verification pending",
        added_by: "Legal Representative"
      }
    ],
    history: [
      { date: "Feb 1, 2024", event: "Case Filed", by: "Admin" }
    ]
  },
  {
    case_id: "FAM-2023-005",
    title: "Custody Case",
    description: "Child custody dispute",
    case_type: "Family",
    court: "Family Court",
    filing_date: "Nov 15, 2023",
    status: "In Mediation",
    department: "Family Division",
    subject_matter: "Child Custody",
    petitioner: "Jane Smith",
    respondent: "Mike Smith",
    key_dates: {
      next_hearing: "Apr 30, 2024",
      pwc_due_date: "Apr 1, 2024",
      last_hearing: "Feb 20, 2024",
      filing_date: "Nov 15, 2023",
      closure_date: null
    },
    assigned_to: [
      { role: "Primary", name: "FM", title: "Family Mediator" }
    ],
    documents: [
      { name: "Custody_Petition.pdf", uploaded_on: "Nov 15, 2023" },
      { name: "Mediation_Report_1.pdf", uploaded_on: "Mar 1, 2024" }
    ],
    hearings: [
      {
        date: "Feb 20, 2024",
        time: "10:00",
        court: "Family Court",
        judge: "Justice R.K. Patel",
        purpose: "Mediation Session",
        status: "Completed",
        action: "View"
      }
    ],
    notes: [
      {
        title: "Mediation Progress",
        date: "Mar 1, 2024",
        content: "Parties showing willingness to negotiate",
        added_by: "Family Mediator"
      }
    ],
    history: [
      { date: "Nov 15, 2023", event: "Case Filed", by: "Admin" },
      { date: "Feb 20, 2024", event: "Mediation Started", by: "FM" }
    ]
  },
  {
    case_id: "ENV-2024-002",
    title: "Environmental Protection Case",
    description: "Industrial pollution violation",
    case_type: "Environmental",
    court: "Green Tribunal",
    filing_date: "Jan 20, 2024",
    status: "Under Investigation",
    department: "Environmental Division",
    subject_matter: "Pollution Control",
    petitioner: "Environmental NGO",
    respondent: "Industrial Corp",
    key_dates: {
      next_hearing: "May 15, 2024",
      pwc_due_date: "Apr 30, 2024",
      last_hearing: null,
      filing_date: "Jan 20, 2024",
      closure_date: null
    },
    assigned_to: [
      { role: "Primary", name: "EL", title: "Environmental Lawyer" }
    ],
    documents: [
      { name: "Pollution_Report.pdf", uploaded_on: "Jan 20, 2024" }
    ],
    hearings: [],
    notes: [
      {
        title: "Site Inspection",
        date: "Feb 28, 2024",
        content: "Inspection scheduled for next month",
        added_by: "Environmental Lawyer"
      }
    ],
    history: [
      { date: "Jan 20, 2024", event: "Case Filed", by: "Admin" },
      { date: "Feb 28, 2024", event: "Investigation Initiated", by: "EL" }
    ]
  },
  {
    case_id: "TAX-2023-010",
    title: "Tax Evasion Case",
    description: "Corporate tax evasion investigation",
    case_type: "Tax",
    court: "Tax Tribunal",
    filing_date: "Dec 1, 2023",
    status: "Under Review",
    department: "Tax Department",
    subject_matter: "Tax Evasion",
    petitioner: "Income Tax Department",
    respondent: "XYZ Corporation",
    key_dates: {
      next_hearing: "May 10, 2024",
      pwc_due_date: "Apr 15, 2024",
      last_hearing: "Feb 15, 2024",
      filing_date: "Dec 1, 2023",
      closure_date: null
    },
    assigned_to: [
      { role: "Primary", name: "TR", title: "Tax Representative" }
    ],
    documents: [
      { name: "Tax_Assessment.pdf", uploaded_on: "Dec 1, 2023" },
      { name: "Financial_Records.pdf", uploaded_on: "Jan 15, 2024" }
    ],
    hearings: [
      {
        date: "Feb 15, 2024",
        time: "14:00",
        court: "Tax Tribunal",
        judge: "Justice M.K. Gupta",
        purpose: "Initial Hearing",
        status: "Completed",
        action: "View"
      }
    ],
    notes: [
      {
        title: "Document Analysis",
        date: "Mar 1, 2024",
        content: "Financial records under scrutiny",
        added_by: "Tax Representative"
      }
    ],
    history: [
      { date: "Dec 1, 2023", event: "Case Filed", by: "Admin" },
      { date: "Jan 15, 2024", event: "Documents Submitted", by: "TR" }
    ]
  },
  {
    case_id: "LAB-2024-004",
    title: "Labor Dispute",
    description: "Unfair termination complaint",
    case_type: "Labor",
    court: "Labor Court",
    filing_date: "Feb 10, 2024",
    status: "Active",
    department: "Labor Division",
    subject_matter: "Employment",
    petitioner: "Workers Union",
    respondent: "ABC Company",
    key_dates: {
      next_hearing: "Apr 20, 2024",
      pwc_due_date: "Apr 1, 2024",
      last_hearing: "Mar 5, 2024",
      filing_date: "Feb 10, 2024",
      closure_date: null
    },
    assigned_to: [
      { role: "Primary", name: "LO", title: "Labor Officer" }
    ],
    documents: [
      { name: "Termination_Notice.pdf", uploaded_on: "Feb 10, 2024" },
      { name: "Employee_Records.pdf", uploaded_on: "Feb 20, 2024" }
    ],
    hearings: [
      {
        date: "Mar 5, 2024",
        time: "11:00",
        court: "Labor Court",
        judge: "Justice S.K. Roy",
        purpose: "First Hearing",
        status: "Completed",
        action: "View"
      }
    ],
    notes: [
      {
        title: "Union Representation",
        date: "Feb 25, 2024",
        content: "Union submitted additional evidence",
        added_by: "Labor Officer"
      }
    ],
    history: [
      { date: "Feb 10, 2024", event: "Case Filed", by: "Admin" },
      { date: "Mar 5, 2024", event: "First Hearing Completed", by: "LO" }
    ]
  },
  {
    case_id: "IPR-2023-008",
    title: "Patent Infringement",
    description: "Technology patent violation case",
    case_type: "Intellectual Property",
    court: "IP Court",
    filing_date: "Nov 30, 2023",
    status: "Discovery Phase",
    department: "IP Division",
    subject_matter: "Patent Rights",
    petitioner: "Tech Innovations Inc",
    respondent: "Competitor Corp",
    key_dates: {
      next_hearing: "May 5, 2024",
      pwc_due_date: "Apr 20, 2024",
      last_hearing: "Feb 10, 2024",
      filing_date: "Nov 30, 2023",
      closure_date: null
    },
    assigned_to: [
      { role: "Primary", name: "IP", title: "IP Lawyer" }
    ],
    documents: [
      { name: "Patent_Docs.pdf", uploaded_on: "Nov 30, 2023" },
      { name: "Technical_Analysis.pdf", uploaded_on: "Jan 20, 2024" }
    ],
    hearings: [
      {
        date: "Feb 10, 2024",
        time: "15:00",
        court: "IP Court",
        judge: "Justice D.K. Mehta",
        purpose: "Technical Review",
        status: "Completed",
        action: "View"
      }
    ],
    notes: [
      {
        title: "Technical Assessment",
        date: "Mar 1, 2024",
        content: "Expert witness statements collected",
        added_by: "IP Lawyer"
      }
    ],
    history: [
      { date: "Nov 30, 2023", event: "Case Filed", by: "Admin" },
      { date: "Jan 20, 2024", event: "Technical Analysis Submitted", by: "IP" }
    ]
  },
  {
    case_id: "CON-2024-005",
    title: "Constitutional Rights Case",
    description: "Civil rights violation petition",
    case_type: "Constitutional",
    court: "Supreme Court",
    filing_date: "Feb 15, 2024",
    status: "Pending",
    department: "Constitutional Division",
    subject_matter: "Civil Rights",
    petitioner: "Rights Organization",
    respondent: "State Government",
    key_dates: {
      next_hearing: "Jun 1, 2024",
      pwc_due_date: "May 15, 2024",
      last_hearing: null,
      filing_date: "Feb 15, 2024",
      closure_date: null
    },
    assigned_to: [
      { role: "Primary", name: "CL", title: "Constitutional Lawyer" }
    ],
    documents: [
      { name: "Rights_Petition.pdf", uploaded_on: "Feb 15, 2024" }
    ],
    hearings: [],
    notes: [
      {
        title: "Initial Review",
        date: "Mar 1, 2024",
        content: "Constitutional implications being studied",
        added_by: "Constitutional Lawyer"
      }
    ],
    history: [
      { date: "Feb 15, 2024", event: "Case Filed", by: "Admin" },
      { date: "Mar 1, 2024", event: "Initial Review Started", by: "CL" }
    ]
  },
  {
    case_id: "MED-2023-012",
    title: "Medical Negligence",
    description: "Hospital negligence claim",
    case_type: "Medical",
    court: "Civil Court",
    filing_date: "Dec 20, 2023",
    status: "Evidence Collection",
    department: "Medical Division",
    subject_matter: "Medical Negligence",
    petitioner: "Patient Family",
    respondent: "City Hospital",
    key_dates: {
      next_hearing: "Apr 25, 2024",
      pwc_due_date: "Apr 10, 2024",
      last_hearing: "Feb 28, 2024",
      filing_date: "Dec 20, 2023",
      closure_date: null
    },
    assigned_to: [
      { role: "Primary", name: "ML", title: "Medical Law Expert" }
    ],
    documents: [
      { name: "Medical_Records.pdf", uploaded_on: "Dec 20, 2023" },
      { name: "Expert_Opinion.pdf", uploaded_on: "Feb 15, 2024" }
    ],
    hearings: [
      {
        date: "Feb 28, 2024",
        time: "12:00",
        court: "Civil Court",
        judge: "Justice N.K. Singh",
        purpose: "Evidence Hearing",
        status: "Completed",
        action: "View"
      }
    ],
    notes: [
      {
        title: "Expert Consultation",
        date: "Feb 15, 2024",
        content: "Medical expert review completed",
        added_by: "Medical Law Expert"
      }
    ],
    history: [
      { date: "Dec 20, 2023", event: "Case Filed", by: "Admin" },
      { date: "Feb 15, 2024", event: "Expert Opinion Received", by: "ML" }
    ]
  }
];
