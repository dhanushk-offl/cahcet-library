export const libraryData = {
  statistics: {
    totalBooks: 25000,
    totalJournals: 500,
    totalEBooks: 10000,
    dailyVisitors: 350,
  },
  announcements: [
    {
      title: "Library Timings Extended During Exams",
      content: "The library will remain open until 10 PM during the examination period from May 15 to June 10.",
      date: "May 5, 2023",
    },
    {
      title: "New Database Subscription",
      content: "We are pleased to announce that our library has subscribed to the JSTOR Arts & Sciences Collection.",
      date: "April 20, 2023",
    },
    {
      title: "Book Donation Drive",
      content:
        "Donate your gently used books to help expand our collection. Collection boxes are available at the library entrance.",
      date: "March 15, 2023",
    },
  ],
  hours: [
    { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" },
    { day: "Holidays", time: "10:00 AM - 2:00 PM" },
  ],
  about: {
    history:
      "Established in 1985, our college library has grown from a small collection of 5,000 books to a comprehensive resource center with over 25,000 books, 500 journals, and 10,000 e-books. The library building was renovated in 2010 to include modern facilities such as computer labs, discussion rooms, and multimedia resources. Over the years, we have continuously evolved to meet the changing needs of our academic community, embracing digital technologies while maintaining our commitment to traditional library services.",
    mission:
      "Our mission is to support the educational and research needs of our college community by providing access to diverse information resources, fostering information literacy, and creating an environment conducive to learning and knowledge creation.",
    vision:
      "To be a leading academic library that empowers users with knowledge and information, fostering intellectual growth, critical thinking, and lifelong learning.",
    staff: [
      { name: "Dr. Sarah Johnson", position: "Chief Librarian" },
      { name: "Mr. Robert Chen", position: "Assistant Librarian" },
      { name: "Ms. Emily Rodriguez", position: "Technical Services Librarian" },
      { name: "Mr. David Kim", position: "Digital Resources Specialist" },
      { name: "Ms. Priya Patel", position: "Circulation Supervisor" },
      { name: "Mr. James Wilson", position: "Reference Librarian" },
    ],
    facilities: [
      {
        name: "Reading Rooms",
        description:
          "Spacious reading areas with seating capacity for 200 students, equipped with comfortable furniture and proper lighting.",
      },
      {
        name: "Computer Lab",
        description: "30 computer workstations with internet access and essential software for academic work.",
      },
      {
        name: "Discussion Rooms",
        description: "5 soundproof rooms for group discussions and collaborative projects.",
      },
      {
        name: "Multimedia Section",
        description: "Audio-visual resources and equipment for multimedia learning.",
      },
      {
        name: "Periodicals Section",
        description: "Dedicated area for browsing current journals and magazines.",
      },
      {
        name: "Reference Section",
        description:
          "Comprehensive collection of reference materials including encyclopedias, dictionaries, and handbooks.",
      },
    ],
  },
  rules: {
    general: [
      "Library cards are mandatory for entry and borrowing books.",
      "Maintain silence in the library premises.",
      "Mobile phones must be kept on silent mode.",
      "Food and beverages are not allowed inside the library.",
      "Personal belongings should be kept at the property counter.",
      "Library materials must be handled with care.",
      "Users are responsible for any damage to library materials.",
      "Library staff should be treated with respect.",
    ],
    borrowing: [
      "Undergraduate students can borrow up to 3 books for 14 days.",
      "Postgraduate students can borrow up to 5 books for 21 days.",
      "Faculty members can borrow up to 10 books for 30 days.",
      "Reference books, rare books, and periodicals cannot be borrowed.",
      "Books can be renewed once if there is no reservation for them.",
      "Borrowed items must be returned on or before the due date.",
      "A valid ID card must be presented when borrowing materials.",
      "Books on high demand may have restricted loan periods.",
    ],
    computerUsage: [
      "Computer usage is limited to academic purposes only.",
      "Users must log out after completing their session.",
      "Downloading unauthorized software is prohibited.",
      "Viewing inappropriate content is strictly forbidden.",
      "Computer sessions are limited to 2 hours during peak times.",
      "Save your work regularly as computers are reset daily.",
      "Report any technical issues to the library staff.",
      "Do not attempt to modify computer settings.",
    ],
    fines: [
      {
        violation: "Overdue Books",
        penalty: "$0.50 per day per book up to a maximum of the book's value.",
      },
      {
        violation: "Damaged Books",
        penalty: "Cost of repair or replacement plus a processing fee of $10.",
      },
      {
        violation: "Lost Books",
        penalty: "Replacement cost plus a processing fee of $15.",
      },
      {
        violation: "Violation of Computer Usage Policy",
        penalty: "Suspension of library privileges for up to 30 days.",
      },
      {
        violation: "Disturbance in Library",
        penalty: "Warning for first offense, temporary suspension for repeated offenses.",
      },
    ],
  },
  syllabi: {
    undergraduate: [
      {
        name: "Department of Computer Science",
        description: "Courses in programming, algorithms, databases, and more",
        years: [
          {
            year: "2023-2024",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "CS101",
                    name: "Introduction to Programming",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#cs101-fall-2023",
                  },
                  {
                    code: "CS102",
                    name: "Data Structures",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs102-fall-2023",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "CS201",
                    name: "Database Management Systems",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#cs201-spring-2024",
                  },
                  {
                    code: "CS202",
                    name: "Computer Networks",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs202-spring-2024",
                  },
                ],
              },
            ],
          },
          {
            year: "2022-2023",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "CS101",
                    name: "Introduction to Programming",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#cs101-fall-2022",
                  },
                  {
                    code: "CS102",
                    name: "Data Structures",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs102-fall-2022",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "CS201",
                    name: "Database Management Systems",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#cs201-spring-2023",
                  },
                  {
                    code: "CS202",
                    name: "Computer Networks",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs202-spring-2023",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Department of Business Administration",
        description: "Courses in management, finance, marketing, and more",
        years: [
          {
            year: "2023-2024",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "BA101",
                    name: "Principles of Management",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#ba101-fall-2023",
                  },
                  {
                    code: "BA102",
                    name: "Financial Accounting",
                    credits: 3,

                    name: "Financial Accounting",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#ba102-fall-2023",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "BA201",
                    name: "Marketing Management",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#ba201-spring-2024",
                  },
                  {
                    code: "BA202",
                    name: "Human Resource Management",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#ba202-spring-2024",
                  },
                ],
              },
            ],
          },
          {
            year: "2022-2023",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "BA101",
                    name: "Principles of Management",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#ba101-fall-2022",
                  },
                  {
                    code: "BA102",
                    name: "Financial Accounting",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#ba102-fall-2022",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "BA201",
                    name: "Marketing Management",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#ba201-spring-2023",
                  },
                  {
                    code: "BA202",
                    name: "Human Resource Management",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#ba202-spring-2023",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Department of English",
        description: "Courses in literature, writing, linguistics, and more",
        years: [
          {
            year: "2023-2024",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "ENG101",
                    name: "English Literature",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#eng101-fall-2023",
                  },
                  {
                    code: "ENG102",
                    name: "Creative Writing",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#eng102-fall-2023",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "ENG201",
                    name: "American Literature",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#eng201-spring-2024",
                  },
                  {
                    code: "ENG202",
                    name: "Literary Criticism",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#eng202-spring-2024",
                  },
                ],
              },
            ],
          },
          {
            year: "2022-2023",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "ENG101",
                    name: "English Literature",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#eng101-fall-2022",
                  },
                  {
                    code: "ENG102",
                    name: "Creative Writing",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#eng102-fall-2022",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "ENG201",
                    name: "American Literature",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#eng201-spring-2023",
                  },
                  {
                    code: "ENG202",
                    name: "Literary Criticism",
                    credits: 3,
                    type: "Core",
                    pdfLink: "#eng202-spring-2023",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    postgraduate: [
      {
        name: "Department of Computer Science",
        description: "Advanced courses in computing, AI, and software engineering",
        years: [
          {
            year: "2023-2024",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "CS501",
                    name: "Advanced Algorithms",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs501-fall-2023",
                  },
                  {
                    code: "CS502",
                    name: "Machine Learning",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs502-fall-2023",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "CS601",
                    name: "Artificial Intelligence",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs601-spring-2024",
                  },
                  {
                    code: "CS602",
                    name: "Cloud Computing",
                    credits: 4,
                    type: "Elective",
                    pdfLink: "#cs602-spring-2024",
                  },
                ],
              },
            ],
          },
          {
            year: "2022-2023",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "CS501",
                    name: "Advanced Algorithms",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs501-fall-2022",
                  },
                  {
                    code: "CS502",
                    name: "Machine Learning",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs502-fall-2022",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "CS601",
                    name: "Artificial Intelligence",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#cs601-spring-2023",
                  },
                  {
                    code: "CS602",
                    name: "Cloud Computing",
                    credits: 4,
                    type: "Elective",
                    pdfLink: "#cs602-spring-2023",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Department of Business Administration",
        description: "Advanced courses in business strategy and management",
        years: [
          {
            year: "2023-2024",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "MBA501",
                    name: "Strategic Management",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#mba501-fall-2023",
                  },
                  {
                    code: "MBA502",
                    name: "Business Analytics",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#mba502-fall-2023",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "MBA601",
                    name: "International Business",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#mba601-spring-2024",
                  },
                  {
                    code: "MBA602",
                    name: "Entrepreneurship",
                    credits: 4,
                    type: "Elective",
                    pdfLink: "#mba602-spring-2024",
                  },
                ],
              },
            ],
          },
          {
            year: "2022-2023",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "MBA501",
                    name: "Strategic Management",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#mba501-fall-2022",
                  },
                  {
                    code: "MBA502",
                    name: "Business Analytics",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#mba502-fall-2022",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "MBA601",
                    name: "International Business",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#mba601-spring-2023",
                  },
                  {
                    code: "MBA602",
                    name: "Entrepreneurship",
                    credits: 4,
                    type: "Elective",
                    pdfLink: "#mba602-spring-2023",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Department of English",
        description: "Advanced courses in literature and linguistics",
        years: [
          {
            year: "2023-2024",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "ENG501",
                    name: "Postcolonial Literature",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#eng501-fall-2023",
                  },
                  {
                    code: "ENG502",
                    name: "Comparative Literature",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#eng502-fall-2023",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "ENG601",
                    name: "Modern Poetry",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#eng601-spring-2024",
                  },
                  {
                    code: "ENG602",
                    name: "Linguistics",
                    credits: 4,
                    type: "Elective",
                    pdfLink: "#eng602-spring-2024",
                  },
                ],
              },
            ],
          },
          {
            year: "2022-2023",
            semesters: [
              {
                name: "Fall Semester",
                courses: [
                  {
                    code: "ENG501",
                    name: "Postcolonial Literature",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#eng501-fall-2022",
                  },
                  {
                    code: "ENG502",
                    name: "Comparative Literature",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#eng502-fall-2022",
                  },
                ],
              },
              {
                name: "Spring Semester",
                courses: [
                  {
                    code: "ENG601",
                    name: "Modern Poetry",
                    credits: 4,
                    type: "Core",
                    pdfLink: "#eng601-spring-2023",
                  },
                  {
                    code: "ENG602",
                    name: "Linguistics",
                    credits: 4,
                    type: "Elective",
                    pdfLink: "#eng602-spring-2023",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  eResources: {
    delnet: {
      ipRange: "192.168.1.1 - 192.168.1.255",
    },
    nlist: {
      ipRange: "192.168.1.1 - 192.168.1.255",
    },
    other: [
      {
        name: "IEEE Xplore",
        description:
          "Digital library providing access to technical literature in engineering, computer science, and related technologies.",
      },
      {
        name: "ScienceDirect",
        description: "Platform offering access to a large database of scientific and medical research.",
      },
      {
        name: "ProQuest",
        description: "Database of journals, newspapers, reports, dissertations, and other publications.",
      },
      {
        name: "EBSCO Host",
        description: "Research platform with full-text databases, subject indexes, and digital collections.",
      },
      {
        name: "Springer Link",
        description:
          "Online collection of scientific, technological, and medical journals, books, and reference works.",
      },
      {
        name: "Oxford Academic Journals",
        description: "Collection of academic and research journals published by Oxford University Press.",
      },
    ],
    accessInstructions: [
      "Connect to the college Wi-Fi network or use computers in the library.",
      "For DELNET and N-LIST, access is restricted to the college IP range.",
      "For remote access, use the VPN service provided by the college IT department.",
      "Log in with your college credentials when prompted.",
      "For assistance, contact the Digital Resources Specialist at the library.",
      "Training sessions on using e-resources are conducted monthly. Check the library notice board for schedules.",
    ],
  },
  gallery: {
    facilities: [
      {
        title: "Main Reading Hall",
        description: "Spacious reading area with seating for 100 students",
      },
      {
        title: "Computer Lab",
        description: "Modern lab with 30 workstations",
      },
      {
        title: "Discussion Rooms",
        description: "Soundproof rooms for group study",
      },
      {
        title: "Periodicals Section",
        description: "Area dedicated to journals and magazines",
      },
      {
        title: "Reference Section",
        description: "Collection of reference materials",
      },
      {
        title: "Digital Resource Center",
        description: "Access to online databases and e-resources",
      },
    ],
    events: [
      {
        title: "Book Exhibition 2023",
        description: "Annual exhibition featuring new acquisitions",
      },
      {
        title: "Author Talk Series",
        description: "Renowned authors sharing their experiences",
      },
      {
        title: "Library Week Celebration",
        description: "Various activities promoting reading culture",
      },
      {
        title: "Research Workshop",
        description: "Training on research methodologies",
      },
      {
        title: "Information Literacy Program",
        description: "Sessions on effective use of library resources",
      },
      {
        title: "Book Club Meeting",
        description: "Monthly discussions on selected books",
      },
    ],
    collections: [
      {
        title: "Rare Books Collection",
        description: "Valuable and historical books preserved in special conditions",
      },
      {
        title: "Thesis Collection",
        description: "Research works by college alumni",
      },
      {
        title: "Local History Collection",
        description: "Materials documenting local history and culture",
      },
      {
        title: "Special Collections",
        description: "Donated collections from notable personalities",
      },
      {
        title: "Multimedia Collection",
        description: "Audio-visual materials for educational purposes",
      },
      {
        title: "Archive Collection",
        description: "Historical documents and records of the college",
      },
    ],
  },
  books: [
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      subject: "Computer Science",
      isbn: "9780262033848",
      status: "Available",
    },
    {
      title: "Principles of Economics",
      author: "N. Gregory Mankiw",
      subject: "Economics",
      isbn: "9781305585126",
      status: "Checked Out",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      subject: "Literature",
      isbn: "9780061120084",
      status: "Available",
    },
    {
      title: "The Elements of Style",
      author: "William Strunk Jr.",
      subject: "Language",
      isbn: "9780205309023",
      status: "Available",
    },
    {
      title: "Organic Chemistry",
      author: "Paula Yurkanis Bruice",
      subject: "Chemistry",
      isbn: "9780134042282",
      status: "Checked Out",
    },
    {
      title: "Calculus: Early Transcendentals",
      author: "James Stewart",
      subject: "Mathematics",
      isbn: "9781285741550",
      status: "Available",
    },
    {
      title: "Psychology",
      author: "David G. Myers",
      subject: "Psychology",
      isbn: "9781464140815",
      status: "Available",
    },
    {
      title: "World History",
      author: "William J. Duiker",
      subject: "History",
      isbn: "9781305091207",
      status: "Checked Out",
    },
    {
      title: "Biology",
      author: "Neil A. Campbell",
      subject: "Biology",
      isbn: "9780321775658",
      status: "Available",
    },
    {
      title: "Physics for Scientists and Engineers",
      author: "Raymond A. Serway",
      subject: "Physics",
      isbn: "9781133947271",
      status: "Available",
    },
  ],
  recentlyAdded: [
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell and Peter Norvig",
      dateAdded: "May 10, 2023",
    },
    {
      title: "Clean Code: A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      dateAdded: "May 5, 2023",
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      dateAdded: "April 28, 2023",
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      dateAdded: "April 20, 2023",
    },
    {
      title: "The Innovators",
      author: "Walter Isaacson",
      dateAdded: "April 15, 2023",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      dateAdded: "April 10, 2023",
    },
  ],
  ebooks: {
    academic: [
      {
        title: "Digital Signal Processing",
        author: "John G. Proakis",
        description: "Comprehensive guide to digital signal processing principles and applications.",
        format: "PDF",
      },
      {
        title: "Fundamentals of Database Systems",
        author: "Ramez Elmasri",
        description: "Introduction to database design, implementation, and management.",
        format: "EPUB",
      },
      {
        title: "Molecular Biology of the Cell",
        author: "Bruce Alberts",
        description: "Detailed exploration of cell biology at the molecular level.",
        format: "PDF",
      },
      {
        title: "Linear Algebra and Its Applications",
        author: "Gilbert Strang",
        description: "Clear explanation of linear algebra concepts with applications.",
        format: "PDF",
      },
    ],
    reference: [
      {
        title: "The Chicago Manual of Style",
        author: "University of Chicago Press",
        description: "Comprehensive style guide for writers and editors.",
        format: "PDF",
      },
      {
        title: "Oxford Dictionary of English",
        author: "Oxford University Press",
        description: "Authoritative dictionary of the English language.",
        format: "EPUB",
      },
      {
        title: "Encyclopedia of Mathematics",
        author: "Michiel Hazewinkel",
        description: "Comprehensive reference work covering all areas of mathematics.",
        format: "PDF",
      },
      {
        title: "The Cambridge History of Science",
        author: "Cambridge University Press",
        description: "Multi-volume history of science from ancient times to the present.",
        format: "PDF",
      },
    ],
    fiction: [
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "Classic novel of manners set in early 19th-century England.",
        format: "EPUB",
      },
      {
        title: "1984",
        author: "George Orwell",
        description: "Dystopian novel about totalitarianism and surveillance.",
        format: "EPUB",
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Novel exploring themes of decadence and idealism in the Jazz Age.",
        format: "EPUB",
      },
      {
        title: "To the Lighthouse",
        author: "Virginia Woolf",
        description: "Modernist novel examining the complexities of human relationships.",
        format: "EPUB",
      },
    ],
    accessInstructions: [
      "Log in to the library portal using your college credentials.",
      "Navigate to the E-Books section.",
      "Search for the desired e-book by title, author, or subject.",
      "Click on the e-book to view details and access options.",
      "Choose to read online or download (if available).",
      "Downloaded e-books may require specific software like Adobe Digital Editions.",
      "E-books have a loan period of 14 days, after which access will expire.",
      "For technical issues, contact the Digital Resources Specialist.",
    ],
    platforms: [
      {
        name: "EBSCOhost eBooks",
        description: "Collection of academic e-books across various disciplines.",
      },
      {
        name: "ProQuest Ebook Central",
        description: "Platform offering access to scholarly e-books from leading publishers.",
      },
      {
        name: "Oxford Scholarship Online",
        description: "E-books published by Oxford University Press covering multiple subjects.",
      },
      {
        name: "SpringerLink",
        description: "E-books in science, technology, medicine, and humanities.",
      },
    ],
  },
  policy: {
    vision:
      "To be a leading academic library that empowers users with knowledge and information, fostering intellectual growth, critical thinking, and lifelong learning.",
    mission:
      "Our mission is to support the educational and research needs of our college community by providing access to diverse information resources, fostering information literacy, and creating an environment conducive to learning and knowledge creation.",
    coreValues: [
      {
        name: "Access",
        description: "We are committed to providing equitable access to information resources for all users.",
      },
      {
        name: "Excellence",
        description: "We strive for excellence in all our services and resources.",
      },
      {
        name: "Innovation",
        description: "We embrace new technologies and innovative approaches to enhance library services.",
      },
      {
        name: "Collaboration",
        description: "We work collaboratively with faculty, students, and other stakeholders.",
      },
      {
        name: "Diversity",
        description: "We value diversity of thought, perspective, and experience.",
      },
      {
        name: "User-Centered",
        description: "We prioritize the needs and experiences of our users in all decisions.",
      },
    ],
    policies: [
      {
        title: "Collection Development Policy",
        subtitle: "Guidelines for building and maintaining the library collection",
        sections: [
          {
            heading: "Selection Criteria",
            content:
              "Materials are selected based on relevance to curriculum, faculty recommendations, quality of content, cost, and format accessibility.",
          },
          {
            heading: "Acquisition Process",
            content:
              "Requests for new materials can be submitted by faculty, staff, and students. The library committee reviews requests quarterly.",
          },
          {
            heading: "Weeding and Deselection",
            content:
              "Materials that are outdated, damaged, or no longer relevant to the curriculum may be removed from the collection following established guidelines.",
          },
        ],
      },
      {
        title: "Circulation Policy",
        subtitle: "Rules for borrowing and returning library materials",
        sections: [
          {
            heading: "Loan Periods",
            content:
              "Undergraduate students: 14 days, Postgraduate students: 21 days, Faculty: 30 days. Special collections may have different loan periods.",
          },
          {
            heading: "Renewals",
            content:
              "Materials can be renewed once if there are no holds. Renewals can be done in person, by phone, or online through the library portal.",
          },
          {
            heading: "Overdue Fines",
            content:
              "$0.50 per day per item, up to the replacement cost of the item. Borrowing privileges are suspended when fines exceed $10.",
          },
        ],
      },
      {
        title: "Digital Resources Policy",
        subtitle: "Guidelines for accessing and using electronic resources",
        sections: [
          {
            heading: "Authorized Users",
            content:
              "Current students, faculty, and staff are authorized to access digital resources. Remote access is provided through institutional authentication.",
          },
          {
            heading: "Acceptable Use",
            content:
              "Digital resources are for educational, research, and personal use only. Systematic downloading, distribution, or commercial use is prohibited.",
          },
          {
            heading: "Copyright Compliance",
            content:
              "Users must comply with copyright laws and license agreements when using digital resources. Fair use principles apply.",
          },
        ],
      },
    ],
    strategicPlan: [
      {
        year: "2023-2024",
        goals: [
          {
            title: "Enhance Digital Infrastructure",
            description: "Upgrade library management system and improve digital resource access.",
          },
          {
            title: "Expand Information Literacy Program",
            description: "Develop new workshops and online tutorials to improve student research skills.",
          },
          {
            title: "Increase Collaboration with Faculty",
            description: "Establish regular meetings with academic departments to better support curriculum needs.",
          },
        ],
      },
      {
        year: "2024-2025",
        goals: [
          {
            title: "Redesign Library Spaces",
            description: "Create more collaborative and individual study spaces to meet diverse user needs.",
          },
          {
            title: "Develop Special Collections",
            description: "Build unique collections that support specialized research areas.",
          },
          {
            title: "Implement Assessment Framework",
            description: "Develop metrics to evaluate library services and their impact on student success.",
          },
        ],
      },
      {
        year: "2025-2026",
        goals: [
          {
            title: "Expand Digital Scholarship Services",
            description: "Provide support for digital publishing, data management, and visualization.",
          },
          {
            title: "Enhance Outreach Programs",
            description: "Develop new initiatives to engage with the broader community.",
          },
          {
            title: "Pursue External Funding",
            description: "Identify and apply for grants to support library initiatives.",
          },
        ],
      },
    ],
  },
  journals: {
    print: [
      {
        title: "Journal of Higher Education",
        publisher: "Ohio State University Press",
        frequency: "Bimonthly",
        subject: "Education",
        availableIssues: "2010-Present",
      },
      {
        title: "American Economic Review",
        publisher: "American Economic Association",
        frequency: "Monthly",
        subject: "Economics",
        availableIssues: "2005-Present",
      },
      {
        title: "Nature",
        publisher: "Springer Nature",
        frequency: "Weekly",
        subject: "Science",
        availableIssues: "2000-Present",
      },
      {
        title: "Harvard Law Review",
        publisher: "Harvard Law Review Association",
        frequency: "Monthly",
        subject: "Law",
        availableIssues: "2008-Present",
      },
      {
        title: "Journal of Marketing Research",
        publisher: "American Marketing Association",
        frequency: "Bimonthly",
        subject: "Marketing",
        availableIssues: "2010-Present",
      },
    ],
    electronic: [
      {
        title: "Journal of Computer Science",
        publisher: "Science Publications",
        subject: "Computer Science",
        access: "Full-text",
      },
      {
        title: "International Journal of Psychology",
        publisher: "Wiley",
        subject: "Psychology",
        access: "Full-text",
      },
      {
        title: "Journal of Business Ethics",
        publisher: "Springer",
        subject: "Business",
        access: "Full-text",
      },
      {
        title: "Environmental Science & Technology",
        publisher: "American Chemical Society",
        subject: "Environmental Science",
        access: "Full-text",
      },
      {
        title: "Journal of English Literature",
        publisher: "Oxford University Press",
        subject: "Literature",
        access: "Full-text",
      },
      {
        title: "International Journal of Nursing Studies",
        publisher: "Elsevier",
        subject: "Nursing",
        access: "Full-text",
      },
    ],
    databases: [
      {
        name: "JSTOR",
        description: "Digital library of academic journals, books, and primary sources.",
        coverage: "Various disciplines",
      },
      {
        name: "Web of Science",
        description: "Citation indexing service that provides comprehensive citation search.",
        coverage: "Science, social sciences, arts, and humanities",
      },
      {
        name: "PubMed",
        description: "Database of references and abstracts on life sciences and biomedical topics.",
        coverage: "Medicine and life sciences",
      },
      {
        name: "IEEE Xplore",
        description:
          "Research database for discovery and access to journal articles, conference proceedings, technical standards, and related materials.",
        coverage: "Engineering, computer science, and electronics",
      },
    ],
    accessGuide: [
      "For print journals, check the library catalog to find the location and availability.",
      "Current issues of print journals are displayed in the Periodicals Section.",
      "Older issues may be in the stacks or archives; ask at the circulation desk.",
      "For electronic journals, access through the library portal using your college credentials.",
      "Use the A-Z journal list to find specific journal titles.",
      "Many journals can be accessed through databases; check the database list for coverage.",
      "For articles not available in our collection, use the interlibrary loan service.",
      "Citation management tools like Zotero and Mendeley are available for organizing references.",
    ],
  },
}

