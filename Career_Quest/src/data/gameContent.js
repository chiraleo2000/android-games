/**
 * Game Content - Career Groups and Career Data
 * This file provides the structure for career selection
 * and imports questions from the questions folder
 */

// Career group definitions with careers
// Only including careers that have actual question files present
export const gameContent = {
    groups: [
        {
            id: 'tech',
            emoji: '💻',
            title: {
                en: 'Technology',
                th: 'เทคโนโลยี',
                zh: '技术'
            },
            description: {
                en: 'Software, IT, and digital innovation careers',
                th: 'อาชีพด้านซอฟต์แวร์ ไอที และนวัตกรรมดิจิทัล',
                zh: '软件、IT和数字创新职业'
            },
            careers: [
                { id: 'ai-researcher', emoji: '🤖', title: { en: 'AI Researcher (Premium)', th: 'นักวิจัย AI', zh: 'AI研究员' }, questionsFile: 'aiResearcher', isPremium: true },
                { id: 'cloud-architect', emoji: '☁️', title: { en: 'Cloud Architect (Premium)', th: 'สถาปนิกคลาวด์', zh: '云架构师' }, questionsFile: 'cloudArchitect', isPremium: true },
                { id: 'devops-engineer', emoji: '♾️', title: { en: 'DevOps Engineer (Premium)', th: 'วิศวกร DevOps', zh: 'DevOps工程师' }, questionsFile: 'devopsEngineer', isPremium: true },
                { id: 'software-engineer', emoji: '👨‍💻', title: { en: 'Software Engineer', th: 'วิศวกรซอฟต์แวร์', zh: '软件工程师' }, questionsFile: 'softwareEngineer' },
                { id: 'data-scientist', emoji: '📊', title: { en: 'Data Scientist', th: 'นักวิทยาศาสตร์ข้อมูล', zh: '数据科学家' }, questionsFile: 'dataScientist' },
                { id: 'cybersecurity', emoji: '🔒', title: { en: 'Cybersecurity Analyst', th: 'นักวิเคราะห์ความปลอดภัยไซเบอร์', zh: '网络安全分析师' }, questionsFile: 'cybersecurity' },
                { id: 'game-developer', emoji: '🎮', title: { en: 'Game Developer', th: 'นักพัฒนาเกม', zh: '游戏开发者' }, questionsFile: 'gameDeveloper' },
                { id: 'mobile-developer', emoji: '📱', title: { en: 'Mobile Developer', th: 'นักพัฒนาแอปมือถือ', zh: '移动开发者' }, questionsFile: 'mobileDeveloper' }
            ]
        },
        {
            id: 'healthcare',
            emoji: '🏥',
            title: {
                en: 'Healthcare',
                th: 'สาธารณสุข',
                zh: '医疗保健'
            },
            description: {
                en: 'Medical and healthcare professional careers',
                th: 'อาชีพด้านการแพทย์และสาธารณสุข',
                zh: '医疗卫生专业职业'
            },
            careers: [
                { id: 'veterinarian', emoji: '🐕', title: { en: 'Veterinarian (Premium)', th: 'สัตวแพทย์', zh: '兽医' }, questionsFile: 'veterinarian', isPremium: true },
                { id: 'paramedic', emoji: '🚑', title: { en: 'Paramedic (Premium)', th: 'นักปฏิบัติการฉุกเฉินการแพทย์', zh: '护理人员' }, questionsFile: 'paramedic', isPremium: true },
                { id: 'medical-researcher', emoji: '🔬', title: { en: 'Medical Researcher (Premium)', th: 'นักวิจัยทางการแพทย์', zh: '医学研究员' }, questionsFile: 'medicalResearcher', isPremium: true },
                { id: 'doctor', emoji: '👨‍⚕️', title: { en: 'Doctor', th: 'แพทย์', zh: '医生' }, questionsFile: 'doctor' },
                { id: 'nurse', emoji: '👩‍⚕️', title: { en: 'Nurse', th: 'พยาบาล', zh: '护士' }, questionsFile: 'nurse' },
                { id: 'pharmacist', emoji: '💊', title: { en: 'Pharmacist', th: 'เภสัชกร', zh: '药剂师' }, questionsFile: 'pharmacist' },
                { id: 'physical-therapist', emoji: '🏃', title: { en: 'Physical Therapist', th: 'นักกายภาพบำบัด', zh: '物理治疗师' }, questionsFile: 'physicalTherapist' },
                { id: 'dentist', emoji: '🦷', title: { en: 'Dentist', th: 'ทันตแพทย์', zh: '牙医' }, questionsFile: 'dentist' }
            ]
        },
        {
            id: 'business',
            emoji: '💼',
            title: {
                en: 'Business',
                th: 'ธุรกิจ',
                zh: '商业'
            },
            description: {
                en: 'Business, finance, and management careers',
                th: 'อาชีพด้านธุรกิจ การเงิน และการจัดการ',
                zh: '商业、金融和管理职业'
            },
            careers: [
                { id: 'ceo', emoji: '👔', title: { en: 'CEO (Premium)', th: 'ประธานบริษัท', zh: '首席执行官' }, questionsFile: 'ceo', isPremium: true },
                { id: 'consultant', emoji: '🤝', title: { en: 'Business Consultant (Premium)', th: 'ที่ปรึกษาทางธุรกิจ', zh: '商业顾问' }, questionsFile: 'consultant', isPremium: true },
                { id: 'entrepreneur', emoji: '🚀', title: { en: 'Entrepreneur', th: 'ผู้ประกอบการ', zh: '企业家' }, questionsFile: 'entrepreneur' },
                { id: 'marketing-manager', emoji: '📢', title: { en: 'Marketing Manager', th: 'ผู้จัดการการตลาด', zh: '营销经理' }, questionsFile: 'marketingManager' },
                { id: 'hr-manager', emoji: '👥', title: { en: 'HR Manager', th: 'ผู้จัดการฝ่ายบุคคล', zh: '人力资源经理' }, questionsFile: 'hrManager' },
                { id: 'accountant', emoji: '🧮', title: { en: 'Accountant', th: 'นักบัญชี', zh: '会计师' }, questionsFile: 'accountant' },
                { id: 'project-manager', emoji: '📋', title: { en: 'Project Manager', th: 'ผู้จัดการโครงการ', zh: '项目经理' }, questionsFile: 'projectManager' }
            ]
        },
        {
            id: 'creative',
            emoji: '🎨',
            title: {
                en: 'Creative',
                th: 'สร้างสรรค์',
                zh: '创意'
            },
            description: {
                en: 'Art, design, and creative professional careers',
                th: 'อาชีพด้านศิลปะ การออกแบบ และความคิดสร้างสรรค์',
                zh: '艺术、设计和创意专业职业'
            },
            careers: [
                { id: 'director', emoji: '🎬', title: { en: 'Film Director (Premium)', th: 'ผู้กำกับภาพยนตร์', zh: '电影导演' }, questionsFile: 'filmDirector', isPremium: true },
                { id: 'animator', emoji: '🦸', title: { en: 'Animator (Premium)', th: 'แอนิเมเตอร์', zh: '动画师' }, questionsFile: 'animator', isPremium: true },
                { id: 'architect', emoji: '📐', title: { en: 'Architect (Premium)', th: 'สถาปนิก', zh: '建筑师' }, questionsFile: 'architect', isPremium: true },
                { id: 'graphic-designer', emoji: '🖌️', title: { en: 'Graphic Designer', th: 'นักออกแบบกราฟิก', zh: '平面设计师' }, questionsFile: 'graphicDesigner' },
                { id: 'photographer', emoji: '📷', title: { en: 'Photographer', th: 'ช่างภาพ', zh: '摄影师' }, questionsFile: 'photographer' },
                { id: 'content-creator', emoji: '📹', title: { en: 'Content Creator', th: 'คอนเทนต์ครีเอเตอร์', zh: '内容创作者' }, questionsFile: 'contentCreator' },
                { id: 'musician', emoji: '🎵', title: { en: 'Musician', th: 'นักดนตรี', zh: '音乐家' }, questionsFile: 'musician' },
                { id: 'game-designer', emoji: '🎲', title: { en: 'Game Designer', th: 'นักออกแบบเกม', zh: '游戏设计师' }, questionsFile: 'gameDesigner' }
            ]
        },
        {
            id: 'education',
            emoji: '📚',
            title: {
                en: 'Education',
                th: 'การศึกษา',
                zh: '教育'
            },
            description: {
                en: 'Teaching and educational careers',
                th: 'อาชีพด้านการสอนและการศึกษา',
                zh: '教学和教育职业'
            },
            careers: [
                { id: 'professor', emoji: '🎓', title: { en: 'Professor (Premium)', th: 'ศาสตราจารย์', zh: '教授' }, questionsFile: 'professor', isPremium: true },
                { id: 'education-admin', emoji: '🏫', title: { en: 'Education Admin (Premium)', th: 'ผู้บริหารการศึกษา', zh: '教育管理员' }, questionsFile: 'educationAdmin', isPremium: true },
                { id: 'curriculum-designer', emoji: '📚', title: { en: 'Curriculum Designer (Premium)', th: 'นักออกแบบหลักสูตร', zh: '课程设计师' }, questionsFile: 'curriculumDesigner', isPremium: true },
                { id: 'teacher', emoji: '👨‍🏫', title: { en: 'Teacher', th: 'ครู', zh: '教师' }, questionsFile: 'teacher' },
                { id: 'school-counselor', emoji: '🤝', title: { en: 'School Counselor', th: 'ที่ปรึกษาโรงเรียน', zh: '学校辅导员' }, questionsFile: 'schoolCounselor' },
                { id: 'librarian', emoji: '📖', title: { en: 'Librarian', th: 'บรรณารักษ์', zh: '图书管理员' }, questionsFile: 'librarian' },
                { id: 'tutor', emoji: '📝', title: { en: 'Tutor', th: 'ติวเตอร์', zh: '家教' }, questionsFile: 'tutor' },
                { id: 'coach', emoji: '🧢', title: { en: 'Coach', th: 'โค้ช', zh: '教练' }, questionsFile: 'coach' }
            ]
        },
        {
            id: 'finance',
            emoji: '💰',
            title: {
                en: 'Finance',
                th: 'การเงิน',
                zh: '金融'
            },
            description: {
                en: 'Financial services and investment careers',
                th: 'อาชีพด้านบริการทางการเงินและการลงทุน',
                zh: '金融服务和投资职业'
            },
            careers: [
                { id: 'financial-analyst', emoji: '📉', title: { en: 'Financial Analyst (Premium)', th: 'นักวิเคราะห์การเงิน', zh: '金融分析师' }, questionsFile: 'financialAnalyst', isPremium: true },
                { id: 'banker', emoji: '🏦', title: { en: 'Banker', th: 'นายธนาคาร', zh: '银行家' }, questionsFile: 'banker' },
                { id: 'investor', emoji: '📈', title: { en: 'Investor', th: 'นักลงทุน', zh: '投资者' }, questionsFile: 'investor' },
                { id: 'stock-broker', emoji: '📉', title: { en: 'Stock Broker', th: 'นายหน้าค้าหุ้น', zh: '股票经纪人' }, questionsFile: 'stockBroker' },
                { id: 'real-estate-agent', emoji: '🏠', title: { en: 'Real Estate Agent', th: 'นายหน้าอสังหาริมทรัพย์', zh: '房地产经纪人' }, questionsFile: 'realEstateAgent' },
                { id: 'merchant', emoji: '🛍️', title: { en: 'Merchant', th: 'พ่อค้า', zh: '商人' }, questionsFile: 'merchant' }
            ]
        },
        {
            id: 'science',
            emoji: '🔬',
            title: {
                en: 'Science',
                th: 'วิทยาศาสตร์',
                zh: '科学'
            },
            description: {
                en: 'Scientific research and engineering careers',
                th: 'อาชีพด้านการวิจัยทางวิทยาศาสตร์และวิศวกรรม',
                zh: '科学研究和工程职业'
            },
            careers: [
                { id: 'astronomer', emoji: '🔭', title: { en: 'Astronomer (Premium)', th: 'นักดาราศาสตร์', zh: '天文学家' }, questionsFile: 'astronomer', isPremium: true },
                { id: 'marine-biologist', emoji: '🐠', title: { en: 'Marine Biologist (Premium)', th: 'นักชีววิทยาทางทะเล', zh: '海洋生物学家' }, questionsFile: 'marineBiologist', isPremium: true },
                { id: 'physicist', emoji: '⚛️', title: { en: 'Physicist (Premium)', th: 'นักฟิสิกส์', zh: '物理学家' }, questionsFile: 'physicist', isPremium: true },
                { id: 'forensic-scientist', emoji: '🕵️', title: { en: 'Forensic Scientist (Premium)', th: 'นักนิติวิทยาศาสตร์', zh: '法医科学家' }, questionsFile: 'forensicScientist', isPremium: true },
                { id: 'biologist', emoji: '🧬', title: { en: 'Biologist', th: 'นักชีววิทยา', zh: '生物学家' }, questionsFile: 'biologist' },
                { id: 'chemist', emoji: '⚗️', title: { en: 'Chemist', th: 'นักเคมี', zh: '化学家' }, questionsFile: 'chemist' },
                { id: 'environmental-scientist', emoji: '🌍', title: { en: 'Environmental Scientist', th: 'นักวิทยาศาสตร์สิ่งแวดล้อม', zh: '环境科学家' }, questionsFile: 'environmentalScientist' },
                { id: 'geologist', emoji: '🪨', title: { en: 'Geologist', th: 'นักธรณีวิทยา', zh: '地质学家' }, questionsFile: 'geologist' }
            ]
        },
        {
            id: 'service',
            emoji: '🤝',
            title: {
                en: 'Service',
                th: 'บริการ',
                zh: '服务'
            },
            description: {
                en: 'Public service and community careers',
                th: 'อาชีพด้านบริการสาธารณะและชุมชน',
                zh: '公共服务和社区职业'
            },
            careers: [
                { id: 'journalist', emoji: '🎤', title: { en: 'Journalist (Premium)', th: 'นักข่าว', zh: '记者' }, questionsFile: 'journalist', isPremium: true },
                { id: 'psychologist', emoji: '🧠', title: { en: 'Psychologist (Premium)', th: 'นักจิตวิทยา', zh: '心理学家' }, questionsFile: 'psychologist', isPremium: true },
                { id: 'lawyer', emoji: '⚖️', title: { en: 'Lawyer', th: 'ทนายความ', zh: '律师' }, questionsFile: 'lawyer' },
                { id: 'police-officer', emoji: '👮', title: { en: 'Police Officer', th: 'ตำรวจ', zh: '警察' }, questionsFile: 'policeOfficer' },
                { id: 'firefighter', emoji: '🚒', title: { en: 'Firefighter', th: 'นักดับเพลิง', zh: '消防员' }, questionsFile: 'firefighter' },
                { id: 'social-worker', emoji: '💝', title: { en: 'Social Worker', th: 'นักสังคมสงเคราะห์', zh: '社会工作者' }, questionsFile: 'socialWorker' },
                { id: 'chef', emoji: '👨‍🍳', title: { en: 'Chef', th: 'เชฟ', zh: '厨师' }, questionsFile: 'chef' },
                { id: 'flight-attendant', emoji: '✈️', title: { en: 'Flight Attendant', th: 'พนักงานต้อนรับบนเครื่องบิน', zh: '空乘人员' }, questionsFile: 'flightAttendant' }
            ]
        },
        {
            id: 'trades',
            emoji: '🛠️',
            title: {
                en: 'Skilled Trades',
                th: 'งานช่างฝีมือ',
                zh: '技术工种'
            },
            description: {
                en: 'Hands-on technical and construction careers',
                th: 'อาชีพด้านเทคนิคและการก่อสร้าง',
                zh: '技术和建筑职业'
            },
            careers: [
                { id: 'pilot', emoji: '✈️', title: { en: 'Pilot (Premium)', th: 'นักบิน', zh: '飞行员' }, questionsFile: 'pilot', isPremium: true },
                { id: 'construction-manager', emoji: '🏗️', title: { en: 'Construction Manager (Premium)', th: 'ผู้จัดการการก่อสร้าง', zh: '建筑经理' }, questionsFile: 'constructionManager', isPremium: true },
                { id: 'hvac-technician', emoji: '❄️', title: { en: 'HVAC Technician (Premium)', th: 'ช่างเทคนิค HVAC', zh: '暖通空调技术员' }, questionsFile: 'hvacTechnician', isPremium: true }
            ]
        },

    ]
};

// Helper to load career questions dynamically
// Changed to STATIC imports from index to ensure stability in Android builds
import * as allQuestions from '../questions/index.js';

export const loadCareerQuestions = async (questionsFile) => {
    // Map of questionsFile key to the actual exported object from index.js
    const questionMap = {
        // Tech
        'softwareEngineer': allQuestions.softwareEngineerQuestions,
        'dataScientist': allQuestions.dataScientistQuestions,
        'cybersecurity': allQuestions.cybersecurityQuestions,
        'gameDeveloper': allQuestions.gameDeveloperQuestions,
        'mobileDeveloper': allQuestions.mobileDeveloperQuestions,

        // Healthcare
        'doctor': allQuestions.doctorQuestions,
        'nurse': allQuestions.nurseQuestions,
        'pharmacist': allQuestions.pharmacistQuestions,
        'physicalTherapist': allQuestions.physicalTherapistQuestions,
        'dentist': allQuestions.dentistQuestions,

        // Business
        'entrepreneur': allQuestions.entrepreneurQuestions,
        'marketingManager': allQuestions.marketingManagerQuestions,
        'hrManager': allQuestions.hrManagerQuestions,
        'accountant': allQuestions.accountantQuestions,
        'projectManager': allQuestions.projectManagerQuestions,

        // Creative
        'graphicDesigner': allQuestions.graphicDesignerQuestions,
        'photographer': allQuestions.photographerQuestions,
        'contentCreator': allQuestions.contentCreatorQuestions,
        'musician': allQuestions.musicianQuestions,
        'gameDesigner': allQuestions.gameDesignerQuestions,

        // Education
        'teacher': allQuestions.teacherQuestions,
        'schoolCounselor': allQuestions.schoolCounselorQuestions,
        'librarian': allQuestions.librarianQuestions,
        'tutor': allQuestions.tutorQuestions,
        'coach': allQuestions.coachQuestions,

        // Finance
        'banker': allQuestions.bankerQuestions,
        'investor': allQuestions.investorQuestions,
        'stockBroker': allQuestions.stockBrokerQuestions,
        'realEstateAgent': allQuestions.realEstateAgentQuestions,
        'merchant': allQuestions.merchantQuestions,

        // Science
        'biologist': allQuestions.biologistQuestions,
        'chemist': allQuestions.chemistQuestions,
        'environmentalScientist': allQuestions.environmentalScientistQuestions,
        'geologist': allQuestions.geologistQuestions,

        // Service
        'lawyer': allQuestions.lawyerQuestions,
        'policeOfficer': allQuestions.policeOfficerQuestions,
        'firefighter': allQuestions.firefighterQuestions,
        'socialWorker': allQuestions.socialWorkerQuestions,
        'chef': allQuestions.chefQuestions,
        'flightAttendant': allQuestions.flightAttendantQuestions,

        // ========== PREMIUM CAREERS ==========
        // Tech Premium
        'aiResearcher': allQuestions.aiResearcherQuestions,
        'cloudArchitect': allQuestions.cloudArchitectQuestions,
        'devopsEngineer': allQuestions.devopsEngineerQuestions,
        // Healthcare Premium
        'medicalResearcher': allQuestions.medicalResearcherQuestions,
        'veterinarian': allQuestions.veterinarianQuestions,
        'paramedic': allQuestions.paramedicQuestions,
        // Business Premium
        'ceo': allQuestions.ceoQuestions,
        'consultant': allQuestions.consultantQuestions,
        // Finance Premium
        'financialAnalyst': allQuestions.financialAnalystQuestions,
        // Creative Premium
        'filmDirector': allQuestions.filmDirectorQuestions,
        'animator': allQuestions.animatorQuestions,
        'architect': allQuestions.architectQuestions,
        // Education Premium
        'professor': allQuestions.professorQuestions,
        'educationAdmin': allQuestions.educationAdminQuestions,
        'curriculumDesigner': allQuestions.curriculumDesignerQuestions,
        // Service Premium
        'psychologist': allQuestions.psychologistQuestions,
        'journalist': allQuestions.journalistQuestions,
        // Science Premium
        'physicist': allQuestions.physicistQuestions,
        'astronomer': allQuestions.astronomerQuestions,
        'forensicScientist': allQuestions.forensicScientistQuestions,
        'marineBiologist': allQuestions.marineBiologistQuestions,
        // Trades Premium
        'constructionManager': allQuestions.constructionManagerQuestions,
        'hvacTechnician': allQuestions.hvacTechnicianQuestions,
        'pilot': allQuestions.pilotQuestions,
    };

    const questions = questionMap[questionsFile];

    if (!questions) {
        console.warn(`Questions not found for key: ${questionsFile}`);
        return [];
    }

    return questions;
};

export default gameContent;
