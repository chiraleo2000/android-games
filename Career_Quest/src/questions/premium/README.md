# Premium Career Questions

This folder contains career-specific questions for **premium (paid)** content.

## 📁 Structure

```text
premium/
├── README.md              # This file
├── tech/                  # Premium Tech Careers
│   ├── aiResearcher.js    # AI Researcher (1 template)
│   ├── cloudArchitect.js  # Cloud Architect (1 template)
│   └── devopsEngineer.js  # DevOps Engineer (1 template)
├── healthcare/            # Premium Healthcare Careers
│   ├── medicalResearcher.js  # Medical Researcher (1 template)
│   ├── veterinarian.js       # Veterinarian (1 template)
│   └── paramedic.js          # Paramedic (1 template)
├── business/              # Premium Business Careers
│   ├── ceo.js             # CEO (1 template)
│   ├── consultant.js      # Consultant (1 template)
│   └── financialAnalyst.js # Financial Analyst (1 template)
├── creative/              # Premium Creative Careers
│   ├── filmDirector.js    # Film Director (1 template)
│   ├── architect.js       # Architect (1 template)
│   └── animator.js        # Animator (1 template)
├── education/             # Premium Education Careers
│   ├── professor.js       # Professor (1 template)
│   ├── educationAdmin.js  # Education Administrator (1 template)
│   └── curriculumDesigner.js # Curriculum Designer (1 template)
├── service/               # Premium Service Careers
│   ├── psychologist.js    # Psychologist (1 template)
│   └── journalist.js      # Journalist (1 template)
├── science/               # Premium Science Careers
│   ├── physicist.js       # Physicist (1 template)
│   ├── astronomer.js      # Astronomer (1 template)
│   ├── forensicScientist.js # Forensic Scientist (1 template)
│   └── marineBiologist.js # Marine Biologist (1 template)
└── trades/                # Premium Trades Careers
    ├── constructionManager.js # Construction Manager (1 template)
    ├── hvacTechnician.js  # HVAC Technician (1 template)
    └── pilot.js           # Pilot (1 template)
```

## 🔒 Premium Career IDs

These careers are locked in the free version and require premium purchase:

| Category | Career ID | File |
|----------|-----------|------|
| Tech | `ai_researcher` | aiResearcher.js |
| Tech | `cloud_architect` | cloudArchitect.js |
| Tech | `devops_engineer` | devopsEngineer.js |
| Healthcare | `medical_researcher` | medicalResearcher.js |
| Healthcare | `veterinarian` | veterinarian.js |
| Healthcare | `paramedic` | paramedic.js |
| Business | `ceo` | ceo.js |
| Business | `consultant` | consultant.js |
| Business | `financial_analyst` | financialAnalyst.js |
| Creative | `film_director` | filmDirector.js |
| Creative | `architect` | architect.js |
| Creative | `animator` | animator.js |
| Education | `professor` | professor.js |
| Education | `education_admin` | educationAdmin.js |
| Education | `curriculum_designer` | curriculumDesigner.js |
| Service | `psychologist` | psychologist.js |
| Service | `journalist` | journalist.js |
| Science | `physicist` | physicist.js |
| Science | `astronomer` | astronomer.js |
| Science | `forensic_scientist` | forensicScientist.js |
| Science | `marine_biologist` | marineBiologist.js |
| Trades | `construction_manager` | constructionManager.js |
| Trades | `hvac_technician` | hvacTechnician.js |
| Trades | `pilot` | pilot.js |

## 📋 Question Format

Same format as free careers:

```javascript
{
    id: 'XXX_001',
    text: { en: '...', th: '...', zh: '...' },
    options: [
        { id: 'A', text: {...}, consequence: {...}, stats: { competence, ethics, leadership, innovation } },
        { id: 'B', ... },
        { id: 'C', ... },
        { id: 'D', ... }
    ]
}
```

## 🎯 Content Guidelines

- Each premium career should have **80 unique questions**
- Questions should be **more challenging** than free careers
- Focus on **advanced scenarios** unique to senior/specialized roles
- Include ethical dilemmas specific to the profession
