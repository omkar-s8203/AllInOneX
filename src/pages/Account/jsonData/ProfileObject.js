const profileData = [
    {
      "profile_type": "Address",
      "data": {
        "building": "Flat 101, Sunrise Apartments",
        "block": "A Block",
        "area": "MG Road",
        "city": "Bangalore",
        "district": "Bangalore Urban",
        "region": "Karnataka",
        "pin_code": "560001",
        "country": "India",
        "landmark": "Near City Mall",
        "floor_number": "1",
        "apartment_name": "Sunrise Apartments"
      }
    },
    // {
    //   "profile_type": "Medical",
    //   "data": {
    //     "blood_group": "O+",
    //     "allergies": ["Peanuts", "Dust"],
    //     "chronic_conditions": ["Hypertension"],
    //     "medical_history": ["Appendectomy 2010", "Fracture (2015)"],
    //     "medications": ["Amlodipine 5mg", "Paracetamol 500mg"],
    //     "doctor_name": "Dr. Priya Sharma",
    //     "doctor_contact": "9876543210",
    //     "emergency_contact": {
    //       "name": "Rajesh Kumar",
    //       "relationship": "Brother",
    //       "phone_number": "9876543210"
    //     },
    //     "health_insurance_provider": "Max Health",
    //     "insurance_policy_number": "MH123456789",
    //     "emergency_medical_conditions": ["Asthma"]
    //   }
    // },
    // {
    //   "profile_type": "Education",
    //   "data": {
    //     "school_name": "St. Xavier's School",
    //     "degree_qualification": "High School",
    //     "year_of_completion": "2015",
    //     "major": "Science",
    //     "grade_percentage": "85%",
    //     "extracurricular_activities": ["Football", "Drama Club"],
    //     "certifications": ["First Aid Certification", "English Language Certificate"],
    //     "university_name": "University of Bangalore",
    //     "field_of_study": "Computer Science",
    //     "gpa_cgpa": "3.8"
    //   }
    // },
    {
      "profile_type": "Bank",
      "data": {
        "bank_name": "State Bank of India",
        "account_type": "Savings",
        "account_number": "1234567890123456",
        "ifsc_code": "SBIN0001234",
        "iban": "IN60SBI00012345678901",
        "branch_name": "MG Road Branch",
        "account_holder_name": "Amit Kumar",
        "swift_bic_code": "SBININBB",
        "branch_address": "MG Road, Bangalore",
        "routing_number": "123456789",
        "debit_credit_card_number": "4111-1111-1111-1111"
      }
    },
    {
      "profile_type": "Employment",
      "data": {
        "company_name": "Tech Innovators Pvt. Ltd.",
        "job_title": "Software Engineer",
        "employment_type": "Full-time",
        "start_date": "2021-03-15",
        "end_date": "",
        "salary": "₹1,200,000/year",
        "manager_name": "Suresh Reddy",
        "office_location": "Bangalore, India",
        "job_description": "Developing and maintaining software solutions.",
        "department": "Technology",
        "performance_review": "Exceeds expectations"
      }
    },
    // {
    //   "profile_type": "Contact",
    //   "data": {
    //     "phone_number": "9876543210",
    //     "email_address": "amit.kumar@example.com",
    //     "secondary_contact_number": "9900990099",
    //     "social_media_profiles": {
    //       "linkedin": "https://linkedin.com/in/amit-kumar",
    //       "facebook": "https://facebook.com/amit.kumar",
    //       "twitter": "https://twitter.com/amitkumar",
    //       "instagram": "https://instagram.com/amit_kumar"
    //     },
    //     "website": "https://amitkumar.com",
    //     "preferred_communication_channel": "Email"
    //   }
    // },
    // {
    //   "profile_type": "Family",
    //   "data": {
    //     "spouse_name": "Priya Sharma",
    //     "children": [
    //       {
    //         "name": "Arjun Kumar",
    //         "age": 5
    //       },
    //       {
    //         "name": "Riya Kumar",
    //         "age": 3
    //       }
    //     ],
    //     "parents": [
    //       {
    //         "name": "Ramesh Kumar",
    //         "contact_info": "9876543210"
    //       },
    //       {
    //         "name": "Sita Kumar",
    //         "contact_info": "9876543211"
    //       }
    //     ],
    //     "emergency_contact": {
    //       "name": "Rajesh Kumar",
    //       "relationship": "Brother",
    //       "phone_number": "9876543210"
    //     },
    //     "relationship_status": "Married"
    //   }
    // },
    // {
    //   "profile_type": "Financial",
    //   "data": {
    //     "income_sources": ["Salary", "Freelancing"],
    //     "assets": {
    //       "real_estate": ["2BHK Apartment in Bangalore"],
    //       "vehicles": ["Honda Civic"],
    //       "savings": ["₹500,000"],
    //       "investments": ["Mutual Funds", "Stocks"]
    //     },
    //     "liabilities": {
    //       "debts": ["Home Loan ₹500,000"],
    //       "loans": ["Car Loan ₹200,000"],
    //       "mortgages": []
    //     },
    //     "credit_score": "750",
    //     "investment_accounts": ["Nippon India Mutual Fund", "ICICI Bank Stock Account"],
    //     "tax_filing_status": "Individual",
    //     "taxpayer_identification_number": "IN-1234567890"
    //   }
    // },
    // {
    //   "profile_type": "Legal",
    //   "data": {
    //     "passport_number": "A1234567",
    //     "nationality": "Indian",
    //     "marriage_certificate": "Registered on 2020-07-15",
    //     "driving_license": "DL1234567890",
    //     "will_testament": "Available",
    //     "court_orders": []
    //   }
    // },
    // {
    //   "profile_type": "Travel",
    //   "data": {
    //     "travel_history": ["USA (2019)", "UK (2021)"],
    //     "visa_information": ["US Tourist Visa (2020)", "UK Work Visa (2021)"],
    //     "flight_information": ["Flight to USA - 2020-01-15", "Flight to UK - 2021-08-10"],
    //     "travel_preferences": {
    //       "preferred_airlines": "Emirates",
    //       "preferred_seating": "Business Class"
    //     },
    //     "accommodation_preferences": "5-star hotels",
    //     "emergency_contacts_for_travel": [
    //       {
    //         "name": "Rajesh Kumar",
    //         "relationship": "Brother",
    //         "phone_number": "9876543210"
    //       }
    //     ]
    //   }
    // },
    // {
    //   "profile_type": "Personal Preferences",
    //   "data": {
    //     "hobbies": ["Photography", "Travelling", "Cooking"],
    //     "languages_spoken": ["English", "Hindi", "Kannada"],
    //     "dietary_restrictions": ["Vegetarian"],
    //     "favorite_activities": ["Football", "Reading"],
    //     "entertainment_preferences": {
    //       "movies": "Action, Comedy",
    //       "music": "Rock, Jazz",
    //       "books": "Fiction, Mystery",
    //       "shows": "Drama, Thriller"
    //     }
    //   }
    // },
    // {
    //   "profile_type": "Social Community",
    //   "data": {
    //     "charities_volunteer_work": ["Red Cross", "Local Animal Shelter"],
    //     "memberships": ["Rotary Club", "Photography Club"],
    //     "causes_supported": ["Environmental Sustainability", "Child Education"],
    //     "political_affiliation": "Independent",
    //     "religious_affiliation": "Hindu"
    //   }
    // },
    {
      "profile_type": "Online Presence",
      "data": {
        "personal_website": "https://amitkumar.com",
        "blog": "https://amitkumar.com/blog",
        "youtube_channel": "https://youtube.com/amitkumar",
        "portfolio": "https://amitkumar.com/portfolio",
        "github_profile": "https://github.com/amitkumar"
      }
    }
  ];
  
  export default profileData;
  