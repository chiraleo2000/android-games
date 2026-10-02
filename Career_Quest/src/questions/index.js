// Career Questions Master Index
// All career question exports organized by group
//
// FOLDER STRUCTURE:
// questions/
// ├── personality/     - MBTI personality test
// ├── tech/           - Technology careers
// ├── healthcare/     - Healthcare careers
// ├── business/       - Business careers
// ├── creative/       - Creative careers
// ├── education/      - Education careers
// ├── service/        - Service careers
// ├── science/        - Science careers
// └── finance/        - Finance & Commerce careers

// ============================================
// PERSONALITY TEST
// ============================================
export {
    personalityTestQuestions,
    LIKERT_SCALE,
    LIKERT_LABELS
} from './personality/personalityTest.js';

// ============================================
// TECH GROUP
// ============================================
export { softwareEngineerQuestions } from './tech/softwareEngineer.js';
export { dataScientistQuestions } from './tech/dataScientist.js';
export { cybersecurityQuestions } from './tech/cybersecurity.js';
export { mobileDeveloperQuestions } from './tech/mobileDeveloper.js';
export { gameDeveloperQuestions } from './tech/gameDeveloper.js';

// ============================================
// HEALTHCARE GROUP
// ============================================
export { doctorQuestions } from './healthcare/doctor.js';
export { nurseQuestions } from './healthcare/nurse.js';
export { pharmacistQuestions } from './healthcare/pharmacist.js';
export { physicalTherapistQuestions } from './healthcare/physicalTherapist.js';
export { dentistQuestions } from './healthcare/dentist.js';

// ============================================
// BUSINESS GROUP
// ============================================
export { entrepreneurQuestions } from './business/entrepreneur.js';
export { hrManagerQuestions } from './business/hrManager.js';
export { marketingManagerQuestions } from './business/marketingManager.js';
export { accountantQuestions } from './business/accountant.js';
export { projectManagerQuestions } from './business/projectManager.js';

// ============================================
// CREATIVE GROUP
// ============================================
export { graphicDesignerQuestions } from './creative/graphicDesigner.js';
export { contentCreatorQuestions } from './creative/contentCreator.js';
export { gameDesignerQuestions } from './creative/gameDesigner.js';
export { photographerQuestions } from './creative/photographer.js';
export { musicianQuestions } from './creative/musician.js';

// ============================================
// EDUCATION GROUP
// ============================================
export { teacherQuestions } from './education/teacher.js';
export { schoolCounselorQuestions } from './education/schoolCounselor.js';
export { librarianQuestions } from './education/librarian.js';
export { tutorQuestions } from './education/tutor.js';
export { coachQuestions } from './education/coach.js';

// ============================================
// SERVICE GROUP
// ============================================
export { firefighterQuestions } from './service/firefighter.js';
export { policeOfficerQuestions } from './service/policeOfficer.js';
export { socialWorkerQuestions } from './service/socialWorker.js';
export { lawyerQuestions } from './service/lawyer.js';
export { chefQuestions } from './service/chef.js';
export { flightAttendantQuestions } from './service/flightAttendant.js';

// ============================================
// SCIENCE GROUP
// ============================================
export { biologistQuestions } from './science/biologist.js';
export { chemistQuestions } from './science/chemist.js';
export { environmentalScientistQuestions } from './science/environmentalScientist.js';
export { geologistQuestions } from './science/geologist.js';


// ============================================
// FINANCE GROUP
// ============================================
export { merchantQuestions } from './finance/merchant.js';
export { investorQuestions } from './finance/investor.js';
export { bankerQuestions } from './finance/banker.js';
export { realEstateAgentQuestions } from './finance/realEstateAgent.js';
export { stockBrokerQuestions } from './finance/stockBroker.js';

// ============================================
// PREMIUM CAREERS
// ============================================
// Tech Premium
export { aiResearcherQuestions } from './premium/tech/aiResearcher.js';
export { cloudArchitectQuestions } from './premium/tech/cloudArchitect.js';
export { devopsEngineerQuestions } from './premium/tech/devopsEngineer.js';
// Healthcare Premium
export { medicalResearcherQuestions } from './premium/healthcare/medicalResearcher.js';
export { veterinarianQuestions } from './premium/healthcare/veterinarian.js';
export { paramedicQuestions } from './premium/healthcare/paramedic.js';
// Business Premium
export { ceoQuestions } from './premium/business/ceo.js';
export { consultantQuestions } from './premium/business/consultant.js';
// Finance Premium
export { financialAnalystQuestions } from './premium/business/financialAnalyst.js';
// Creative Premium
export { filmDirectorQuestions } from './premium/creative/filmDirector.js';
export { animatorQuestions } from './premium/creative/animator.js';
export { architectQuestions } from './premium/creative/architect.js';
// Education Premium
export { professorQuestions } from './premium/education/professor.js';
export { educationAdminQuestions } from './premium/education/educationAdmin.js';
export { curriculumDesignerQuestions } from './premium/education/curriculumDesigner.js';
// Service Premium
export { psychologistQuestions } from './premium/service/psychologist.js';
export { journalistQuestions } from './premium/service/journalist.js';
// Science Premium
export { physicistQuestions } from './premium/science/physicist.js';
export { astronomerQuestions } from './premium/science/astronomer.js';
export { forensicScientistQuestions } from './premium/science/forensicScientist.js';
export { marineBiologistQuestions } from './premium/science/marineBiologist.js';
// Trades Premium
export { constructionManagerQuestions } from './premium/trades/constructionManager.js';
export { hvacTechnicianQuestions } from './premium/trades/hvacTechnician.js';
export { pilotQuestions } from './premium/trades/pilot.js';

// ============================================
// CAREER GROUPS CONFIGURATION
// ============================================
export const careerGroups = {
    personality: ['mbti_test'],
    tech: ['software_engineer', 'data_scientist', 'cybersecurity', 'mobile_developer', 'game_developer'],
    healthcare: ['doctor', 'nurse', 'pharmacist', 'physical_therapist', 'dentist'],
    business: ['entrepreneur', 'hr_manager', 'marketing_manager', 'accountant', 'project_manager'],
    creative: ['graphic_designer', 'content_creator', 'game_designer', 'photographer', 'musician'],
    education: ['teacher', 'school_counselor', 'librarian', 'tutor', 'coach'],
    service: ['firefighter', 'police_officer', 'social_worker', 'lawyer', 'chef', 'flight_attendant'],
    science: ['biologist', 'chemist', 'environmental_scientist', 'geologist'],
    finance: ['merchant', 'investor', 'banker', 'real_estate_agent', 'stock_broker']
};

// Career ID to file mapping
export const careerFileMap = {
    // Tech
    'software_engineer': 'tech/softwareEngineer.js',
    'data_scientist': 'tech/dataScientist.js',
    'cybersecurity': 'tech/cybersecurity.js',
    'mobile_developer': 'tech/mobileDeveloper.js',
    'game_developer': 'tech/gameDeveloper.js',
    // Healthcare
    'doctor': 'healthcare/doctor.js',
    'nurse': 'healthcare/nurse.js',
    'pharmacist': 'healthcare/pharmacist.js',
    'physical_therapist': 'healthcare/physicalTherapist.js',
    'dentist': 'healthcare/dentist.js',
    // Business
    'entrepreneur': 'business/entrepreneur.js',
    'hr_manager': 'business/hrManager.js',
    'marketing_manager': 'business/marketingManager.js',
    'accountant': 'business/accountant.js',
    'project_manager': 'business/projectManager.js',
    // Creative
    'graphic_designer': 'creative/graphicDesigner.js',
    'content_creator': 'creative/contentCreator.js',
    'game_designer': 'creative/gameDesigner.js',
    'photographer': 'creative/photographer.js',
    'musician': 'creative/musician.js',
    // Education
    'teacher': 'education/teacher.js',
    'school_counselor': 'education/schoolCounselor.js',
    'librarian': 'education/librarian.js',
    'tutor': 'education/tutor.js',
    'coach': 'education/coach.js',
    // Service
    'firefighter': 'service/firefighter.js',
    'police_officer': 'service/policeOfficer.js',
    'social_worker': 'service/socialWorker.js',
    'lawyer': 'service/lawyer.js',
    'chef': 'service/chef.js',
    'flight_attendant': 'service/flightAttendant.js',
    // Science
    'biologist': 'science/biologist.js',
    'chemist': 'science/chemist.js',
    'environmental_scientist': 'science/environmentalScientist.js',
    'geologist': 'science/geologist.js',

    // Finance
    'merchant': 'finance/merchant.js',
    'investor': 'finance/investor.js',
    'banker': 'finance/banker.js',
    'real_estate_agent': 'finance/realEstateAgent.js',
    'stock_broker': 'finance/stockBroker.js'
};
