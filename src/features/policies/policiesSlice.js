import { createSlice } from '@reduxjs/toolkit';

// Sample initial policies for development
// Sample initial policies for development
const initialPolicies = [
  {
    id: '1',
    title: 'Universal Healthcare Coverage',
    category: 'healthcare',
    problemStatement: 'Millions of citizens lack adequate healthcare coverage, leading to delayed care and preventable suffering.',
    proposedSolution: 'Implement a universal healthcare system covering all citizens with basic medical services.',
    expectedOutcomes: 'Reduced healthcare costs, improved public health, and elimination of medical bankruptcies.',
    potentialChallenges: 'Significant upfront costs and resistance from established healthcare industry.',
    upvotes: 42,
    downvotes: 12,
    dateSubmitted: '2025-04-15T10:30:00.000Z',
    author: 'healthpolicy123',
    comments: [
      {
        id: '101',
        text: 'This would transform healthcare access for the most vulnerable in our society. The long-term savings from preventative care alone make this worthwhile.',
        type: 'pro',
        author: 'MedicareAdvocate',
        timestamp: '2025-04-16T14:20:00.000Z',
        upvotes: 15,
        downvotes: 3,
        parentId: null,
        evidenceLinks: [
          {
            id: '501',
            url: 'https://www.healthaffairs.org/universal-coverage-analysis',
            title: 'Health Affairs: Economic Analysis of Universal Coverage',
            description: 'Peer-reviewed study showing long-term cost savings from universal healthcare implementation',
            addedAt: '2025-04-16T14:25:00.000Z'
          }
        ]
      },
      {
        id: '102',
        text: 'While the goal is admirable, the transition costs would be enormous. We need a more gradual approach that doesn\'t disrupt the existing system so dramatically.',
        type: 'con',
        author: 'FiscalFocus',
        timestamp: '2025-04-17T09:15:00.000Z',
        upvotes: 8,
        downvotes: 6,
        parentId: null,
        evidenceLinks: []
      },
      {
        id: '103',
        text: 'I\'d like to see more details about how this would be funded. Without a clear financing mechanism, this remains just an aspiration rather than a viable policy.',
        type: 'neutral',
        author: 'PolicyWonk42',
        timestamp: '2025-04-18T16:30:00.000Z',
        upvotes: 12,
        downvotes: 2,
        parentId: null,
        evidenceLinks: []
      },
      {
        id: '104',
        text: 'Actually, the proposal does outline funding through a combination of progressive taxation and redirection of current healthcare spending. The savings from administrative simplification alone would cover a significant portion.',
        type: 'pro',
        author: 'EconAnalyst',
        timestamp: '2025-04-19T10:45:00.000Z',
        upvotes: 17,
        downvotes: 4,
        parentId: '103',
        evidenceLinks: [
          {
            id: '502',
            url: 'https://www.healthfinancing.org/administrative-savings',
            title: 'Administrative Savings Under Unified Health Financing',
            description: 'Research demonstrating 15-20% administrative savings potential under a unified system',
            addedAt: '2025-04-19T10:50:00.000Z'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Green Energy Transition Fund',
    category: 'environment',
    problemStatement: 'Climate change threatens long-term sustainability while fossil fuel dependency continues.',
    proposedSolution: 'Create a federal fund to subsidize transition to renewable energy sources across all sectors.',
    expectedOutcomes: 'Reduced carbon emissions, new green jobs, and increased energy independence.',
    potentialChallenges: 'Transition costs and opposition from fossil fuel industry stakeholders.',
    upvotes: 38,
    downvotes: 8,
    dateSubmitted: '2025-04-10T14:15:00.000Z',
    author: 'greenplanet',
    comments: [
      {
        id: '201',
        text: 'This is exactly the kind of bold investment we need. The job creation potential in renewable sectors would help fossil fuel workers transition to new careers.',
        type: 'pro',
        author: 'SolarFuture',
        timestamp: '2025-04-11T08:30:00.000Z',
        upvotes: 21,
        downvotes: 3,
        parentId: null,
        evidenceLinks: []
      },
      {
        id: '202',
        text: 'Market forces should determine energy transitions, not government subsidies. This would create inefficient allocation of resources.',
        type: 'con',
        author: 'FreeMarketEnergy',
        timestamp: '2025-04-12T16:45:00.000Z',
        upvotes: 7,
        downvotes: 15,
        parentId: null,
        evidenceLinks: []
      },
      {
        id: '203',
        text: 'But current market forces don\'t account for the negative externalities of fossil fuels. Government intervention is necessary to correct this market failure.',
        type: 'pro',
        author: 'EconomicsPhD',
        timestamp: '2025-04-13T11:20:00.000Z',
        upvotes: 28,
        downvotes: 2,
        parentId: '202',
        evidenceLinks: [
          {
            id: '601',
            url: 'https://www.nature.com/articles/climate-externalities',
            title: 'Market Failures in Climate Policy',
            description: 'Peer-reviewed analysis of how fossil fuel markets fail to account for climate costs',
            addedAt: '2025-04-13T11:25:00.000Z'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'National Housing Affordability Strategy',
    category: 'economy',
    problemStatement: 'Housing costs are outpacing income growth in many regions, creating financial strain, increased homelessness, and obstacles to economic mobility.',
    proposedSolution: 'Develop a comprehensive approach combining increased housing supply incentives, tenant protections, community land trusts, and targeted subsidies for lower-income households.',
    expectedOutcomes: 'Greater housing affordability across income levels, reduced homelessness, decreased housing insecurity, and more economically integrated communities.',
    potentialChallenges: 'Local zoning restrictions, NIMBY opposition to new development, balancing immediate relief with long-term solutions, and market distortion concerns.',
    upvotes: 54,
    downvotes: 7,
    dateSubmitted: '2025-04-05T09:45:00.000Z',
    author: 'HousingForAll',
    comments: [
      {
        id: '301',
        text: 'The focus on both supply and affordability is crucial. Too many housing policies address only one side of the equation.',
        type: 'pro',
        author: 'UrbanPlanner22',
        timestamp: '2025-04-06T13:40:00.000Z',
        upvotes: 19,
        downvotes: 1,
        parentId: null,
        evidenceLinks: []
      },
      {
        id: '302',
        text: 'We need to specify how local control over zoning would be addressed. Many previous federal housing initiatives have failed because they couldn\'t overcome local resistance.',
        type: 'neutral',
        author: 'ZoningExpert',
        timestamp: '2025-04-07T10:15:00.000Z',
        upvotes: 15,
        downvotes: 2,
        parentId: null,
        evidenceLinks: []
      }
    ]
  },
  {
    id: '4',
    title: 'Universal Early Childhood Education',
    category: 'education',
    problemStatement: 'Access to quality early childhood education remains unequal, creating achievement gaps that persist throughout K-12 education and beyond.',
    proposedSolution: 'Establish a federally-supported, state-administered program providing universal access to quality preschool education for all children ages 3-5.',
    expectedOutcomes: 'Improved kindergarten readiness, narrowed achievement gaps, increased high school graduation rates, and better long-term economic outcomes for participants.',
    potentialChallenges: 'Substantial funding requirements, workforce development needs for quality educators, standardization concerns, and implementation variations across states.',
    upvotes: 62,
    downvotes: 9,
    dateSubmitted: '2025-04-02T08:30:00.000Z',
    author: 'EarlyLearn',
    comments: [
      {
        id: '401',
        text: 'The return on investment for early childhood education is one of the highest of any public policy. This should be a top priority.',
        type: 'pro',
        author: 'EduResearcher',
        timestamp: '2025-04-03T14:10:00.000Z',
        upvotes: 27,
        downvotes: 2,
        parentId: null,
        evidenceLinks: [
          {
            id: '701',
            url: 'https://www.developmentalscience.org/early-education-roi',
            title: 'Economic Returns of Early Childhood Investments',
            description: 'Meta-analysis showing 7-13% annual returns on early childhood education investments',
            addedAt: '2025-04-03T14:15:00.000Z'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Rural Healthcare Access Initiative',
    category: 'healthcare',
    problemStatement: 'Rural communities face significant healthcare disparities with limited access to specialists, hospitals, and even primary care providers.',
    proposedSolution: 'Create a comprehensive program that combines telemedicine infrastructure, provider incentives for rural practice, and mobile health clinics to serve remote areas.',
    expectedOutcomes: 'Improved health outcomes in rural communities, decreased emergency medical transport costs, and reduced health disparities between urban and rural populations.',
    potentialChallenges: 'Broadband infrastructure limitations, difficulty attracting providers to rural areas despite incentives, and sustainability of funding for ongoing operations.',
    upvotes: 35,
    downvotes: 4,
    dateSubmitted: '2025-03-28T11:20:00.000Z',
    author: 'RuralHealth4All',
    comments: []
  },
  {
    id: '6',
    title: 'Data Privacy and Digital Rights Framework',
    category: 'other',
    problemStatement: 'Personal data is collected, used, and shared with limited transparency or control by individuals, creating privacy risks and power imbalances.',
    proposedSolution: 'Establish comprehensive data privacy legislation guaranteeing individual rights to access, delete, and limit use of personal data, with meaningful enforcement mechanisms.',
    expectedOutcomes: 'Enhanced individual privacy, increased consumer trust in digital services, innovation in privacy-enhancing technologies, and reduced data exploitation.',
    potentialChallenges: 'Balancing innovation with protection, international data flow considerations, implementation costs for businesses, and technical complexity in compliance.',
    upvotes: 41,
    downvotes: 11,
    dateSubmitted: '2025-03-25T16:15:00.000Z',
    author: 'DigitalRights',
    comments: []
  },
  {
    id: '7',
    title: 'Carbon Pricing and Dividend Program',
    category: 'environment',
    problemStatement: 'Market forces currently fail to account for the true cost of carbon emissions, leading to continued high greenhouse gas emissions and climate impacts.',
    proposedSolution: 'Implement a steadily increasing fee on carbon-based fuels at the point of extraction or import, with 100% of net revenues returned to households as a dividend.',
    expectedOutcomes: 'Reduced carbon emissions, accelerated clean energy transition, protected household budgets, and market-driven innovation in low-carbon technologies.',
    potentialChallenges: 'Industry opposition, concerns about international competitiveness, equitable distribution of dividends, and accounting for existing regional cap-and-trade programs.',
    upvotes: 28,
    downvotes: 18,
    dateSubmitted: '2025-03-22T09:45:00.000Z',
    author: 'ClimateEcon',
    comments: []
  },
  {
    id: '8',
    title: 'Student Loan Repayment Reform',
    category: 'education',
    problemStatement: 'The current student loan system creates unsustainable debt burdens for many graduates, limiting economic mobility and life choices.',
    proposedSolution: 'Implement an income-based repayment system with loan forgiveness after 20 years of payments, with forgiveness periods shortened for public service careers.',
    expectedOutcomes: 'Reduced default rates, increased economic participation by graduates, greater career flexibility, and more equitable access to higher education.',
    potentialChallenges: 'Federal budget implications, determining appropriate income percentage caps, and addressing existing debt while transitioning to a new system.',
    upvotes: 73,
    downvotes: 22,
    dateSubmitted: '2025-03-18T13:10:00.000Z',
    author: 'DebtFreeFuture',
    comments: []
  },
  {
    id: '9',
    title: 'Small Business Innovation and Growth Fund',
    category: 'economy',
    problemStatement: 'Small businesses often struggle to access capital for growth and innovation, limiting job creation and economic dynamism.',
    proposedSolution: 'Create a federally-backed venture fund specifically targeting small businesses in underserved communities and sectors, with a focus on patient capital and manageable repayment terms.',
    expectedOutcomes: 'Increased small business formation and survival rates, job creation in underserved areas, and greater economic diversity and resilience.',
    potentialChallenges: 'Risk management, ensuring funds reach truly small businesses rather than being captured by larger entities, and measuring long-term impact.',
    upvotes: 47,
    downvotes: 13,
    dateSubmitted: '2025-03-15T10:30:00.000Z',
    author: 'SmallBizGrowth',
    comments: []
  },
  {
    id: '10',
    title: 'Comprehensive Electoral Reform Package',
    category: 'other',
    problemStatement: 'Voter participation is hindered by outdated registration systems, limited voting options, and election day barriers, while gerrymandering distorts representation.',
    proposedSolution: 'Implement automatic voter registration, early voting standards, mail ballot options, independent redistricting commissions, and ranked-choice voting for federal elections.',
    expectedOutcomes: 'Increased voter participation, reduced partisan polarization, more competitive elections, and governing bodies more representative of voter preferences.',
    potentialChallenges: 'Constitutional considerations, implementation costs, partisan resistance, and voter education requirements for new voting methods.',
    upvotes: 56,
    downvotes: 31,
    dateSubmitted: '2025-03-10T14:20:00.000Z',
    author: 'DemocracyRenewal',
    comments: []
  },
  {
    id: '11',
    title: 'Health Data Interoperability Standards',
    category: 'healthcare',
    problemStatement: 'Fragmented health records across different providers lead to duplicate tests, medical errors, and inefficient care coordination.',
    proposedSolution: 'Establish and enforce universal data standards for electronic health records with mandatory participation by all healthcare entities receiving government funding.',
    expectedOutcomes: 'Improved care coordination, reduced medical errors, decreased duplicate testing, and more efficient healthcare delivery with better patient outcomes.',
    potentialChallenges: 'High implementation costs for providers, concerns about patient privacy, technical complexity, and resistance from EHR vendors with proprietary systems.',
    upvotes: 38,
    downvotes: 7,
    dateSubmitted: '2025-03-08T09:15:00.000Z',
    author: 'InteropHealth',
    comments: []
  },
  {
    id: '12',
    title: 'Urban Green Infrastructure Program',
    category: 'environment',
    problemStatement: 'Urban areas face increasing challenges from heat islands, flooding, and air pollution, while often lacking sufficient green space for residents.',
    proposedSolution: 'Establish a national urban green infrastructure initiative providing planning resources and matching funds for green roofs, urban forests, permeable surfaces, and public parks.',
    expectedOutcomes: 'Improved air quality, reduced urban flooding, decreased heat-related illness, enhanced biodiversity, and better quality of life for urban residents.',
    potentialChallenges: 'Competition for urban space, maintenance funding sustainability, and ensuring equitable distribution of green infrastructure across neighborhoods.',
    upvotes: 42,
    downvotes: 6,
    dateSubmitted: '2025-03-05T11:30:00.000Z',
    author: 'GreenCities',
    comments: []
  },
  {
    id: '13',
    title: 'Teacher Compensation and Professional Development Initiative',
    category: 'education',
    problemStatement: 'Teacher shortages affect many districts nationwide, with compensation and professional growth opportunities being key factors in recruitment and retention.',
    proposedSolution: 'Create a federal matching fund for states to increase teacher salaries, paired with expanded professional development opportunities and career advancement pathways.',
    expectedOutcomes: 'Reduced teacher turnover, increased teacher quality, improved student outcomes, and enhanced status of the teaching profession.',
    potentialChallenges: 'Sustainable funding mechanisms, equitable distribution across wealthy and poor districts, and measuring effectiveness of professional development programs.',
    upvotes: 51,
    downvotes: 9,
    dateSubmitted: '2025-03-01T15:45:00.000Z',
    author: 'TeachersFirst',
    comments: []
  },
  {
    id: '14',
    title: 'Progressive Consumption Tax Reform',
    category: 'economy',
    problemStatement: 'The current tax system heavily taxes productive activities like work while undertaxing consumption, particularly luxury consumption, leading to inequality and inefficiency.',
    proposedSolution: 'Shift from income taxation toward a progressive consumption tax with generous exemptions for necessities and increasingly higher rates for luxury consumption.',
    expectedOutcomes: 'Increased savings rates, reduced wealth inequality, simplified tax compliance, and better alignment of tax incentives with sustainable economic growth.',
    potentialChallenges: 'Implementation complexity, transition effects on different economic sectors, and ensuring progressivity to avoid regressive impacts on lower-income households.',
    upvotes: 29,
    downvotes: 21,
    dateSubmitted: '2025-02-25T10:20:00.000Z',
    author: 'TaxReform2025',
    comments: []
  },
  {
    id: '15',
    title: 'Integrated Criminal Justice Reform',
    category: 'other',
    problemStatement: 'The criminal justice system focuses heavily on punishment rather than rehabilitation, leading to high recidivism rates and damaged communities.',
    proposedSolution: 'Restructure sentencing guidelines to emphasize rehabilitation, expand mental health and substance abuse treatment, implement post-release support systems, and invest in community-based alternatives to incarceration.',
    expectedOutcomes: 'Reduced recidivism, decreased incarceration costs, improved public safety outcomes, and more successful reintegration of formerly incarcerated individuals.',
    potentialChallenges: 'Coordination across multiple jurisdictions and agencies, public perception of being \'soft on crime,\' and implementation consistency across different communities.',
    upvotes: 45,
    downvotes: 18,
    dateSubmitted: '2025-02-20T14:10:00.000Z',
    author: 'JusticeReimagined',
    comments: []
  },
  {
    id: '16',
    title: 'Mental Health Parity in Insurance Coverage',
    category: 'healthcare',
    problemStatement: 'Despite existing legislation, mental health services are still not covered at the same level as physical health services by many insurance plans, creating barriers to access.',
    proposedSolution: 'Strengthen enforcement of mental health parity laws and create clear standards for what constitutes equivalent coverage between mental and physical health services.',
    expectedOutcomes: 'Increased access to mental health services, reduced stigma, decreased emergency interventions, and improved overall public health outcomes.',
    potentialChallenges: 'Resistance from insurance providers, difficulty in defining equivalence between physical and mental health treatments, and increased short-term costs.',
    upvotes: 61,
    downvotes: 5,
    dateSubmitted: '2025-02-18T09:30:00.000Z',
    author: 'MindMatters',
    comments: []
  },
  {
    id: '17',
    title: 'Agricultural Climate Adaptation and Mitigation',
    category: 'environment',
    problemStatement: 'Agricultural practices contribute significantly to greenhouse gas emissions while the sector simultaneously faces major disruptions from climate change.',
    proposedSolution: 'Develop a comprehensive program supporting farmers in transitioning to regenerative agriculture practices through financial incentives, technical assistance, and research funding.',
    expectedOutcomes: 'Increased carbon sequestration in soils, improved farm resilience to extreme weather, protected water quality, and maintained food production capacity.',
    potentialChallenges: 'Measuring and verifying carbon sequestration, transition costs for farmers, knowledge gaps, and cultural resistance to changing traditional practices.',
    upvotes: 37,
    downvotes: 12,
    dateSubmitted: '2025-02-15T11:45:00.000Z',
    author: 'RegenerativeFarming',
    comments: []
  },
  {
    id: '18',
    title: 'Digital Literacy Curriculum Integration',
    category: 'education',
    problemStatement: 'Many students graduate without the digital literacy skills needed for success in the modern workforce and informed civic participation.',
    proposedSolution: 'Develop and mandate grade-appropriate digital literacy standards across K-12 education, including critical media evaluation, basic programming concepts, and data literacy.',
    expectedOutcomes: 'Improved workforce readiness, increased resistance to misinformation, enhanced problem-solving skills, and greater equity in access to technology careers.',
    potentialChallenges: 'Technology access disparities between schools, teacher training requirements, rapidly evolving technology landscape, and curriculum integration challenges.',
    upvotes: 39,
    downvotes: 8,
    dateSubmitted: '2025-02-10T13:20:00.000Z',
    author: 'DigitalFutures',
    comments: []
  },
  {
    id: '19',
    title: 'Workforce Development and Transition Program',
    category: 'economy',
    problemStatement: 'Technological change and industry shifts are displacing workers faster than they can adapt, leading to unemployment and economic insecurity.',
    proposedSolution: 'Establish a comprehensive workforce transition program combining income support, targeted retraining, relocation assistance, and employer incentives for hiring transitioning workers.',
    expectedOutcomes: 'Reduced long-term unemployment, successful career transitions, maintained household economic stability, and more nimble adaptation to economic changes.',
    potentialChallenges: 'Anticipating future skill demands, coordination between education providers and employers, and balancing immediate needs with long-term resilience.',
    upvotes: 43,
    downvotes: 11,
    dateSubmitted: '2025-02-08T10:15:00.000Z',
    author: 'FutureWorkforce',
    comments: []
  },
  {
    id: '20',
    title: 'Public Transportation Expansion Initiative',
    category: 'other',
    problemStatement: 'Inadequate public transportation limits economic opportunity, increases traffic congestion, and contributes to air pollution and carbon emissions.',
    proposedSolution: 'Create a major funding program for metropolitan areas to expand public transit networks with dedicated lanes, increased frequency, and improved connectivity between transportation modes.',
    expectedOutcomes: 'Reduced traffic congestion, improved air quality, enhanced economic access for non-drivers, and more equitable urban development patterns.',
    potentialChallenges: 'High infrastructure costs, coordinating across jurisdictional boundaries, overcoming car-centric cultural preferences, and sustainable operational funding.',
    upvotes: 48,
    downvotes: 14,
    dateSubmitted: '2025-02-05T16:30:00.000Z',
    author: 'TransitFuture',
    comments: []
  }
];

const policiesSlice = createSlice({
  name: 'policies',
  initialState: {
    items: initialPolicies,
    isLoading: false,
    error: null,
    currentCategory: 'all'
  },
  reducers: {
    // Add a new policy
    addPolicy: (state, action) => {
      const newPolicy = {
        id: Date.now().toString(),
        ...action.payload,
        upvotes: 0,
        downvotes: 0,
        dateSubmitted: new Date().toISOString(),
        comments: []
      };
      state.items.push(newPolicy);
    },
    
    // Upvote a policy
    upvotePolicy: (state, action) => {
      const policy = state.items.find(p => p.id === action.payload);
      if (policy) {
        policy.upvotes += 1;
      }
    },
    
    // Downvote a policy
    downvotePolicy: (state, action) => {
      const policy = state.items.find(p => p.id === action.payload);
      if (policy) {
        policy.downvotes += 1;
      }
    },
    
    // Filter policies by category
    setCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    
    // Add a comment/argument to a policy
    addComment: (state, action) => {
      const { policyId, comment } = action.payload;
      const policy = state.items.find(p => p.id === policyId);
      if (policy) {
        policy.comments.push({
          id: Date.now().toString(),
          text: comment.text,
          type: comment.type, // 'pro', 'con', or 'neutral'
          author: 'current_user', // Replace with actual user authentication
          timestamp: new Date().toISOString(),
          upvotes: 0,
          downvotes: 0,
          parentId: comment.parentId || null, // For threading
          evidenceLinks: comment.evidenceLinks || [] // For evidence support
        });
      }
    },
    
    // Add evidence link to a comment
    addEvidenceLink: (state, action) => {
      const { policyId, commentId, evidenceLink } = action.payload;
      const policy = state.items.find(p => p.id === policyId);
      if (policy) {
        const comment = policy.comments.find(c => c.id === commentId);
        if (comment) {
          if (!comment.evidenceLinks) {
            comment.evidenceLinks = [];
          }
          comment.evidenceLinks.push({
            id: Date.now().toString(),
            url: evidenceLink.url,
            title: evidenceLink.title,
            description: evidenceLink.description,
            addedAt: new Date().toISOString()
          });
        }
      }
    },
    
    // Remove evidence link from a comment
    removeEvidenceLink: (state, action) => {
      const { policyId, commentId, evidenceLinkId } = action.payload;
      const policy = state.items.find(p => p.id === policyId);
      if (policy) {
        const comment = policy.comments.find(c => c.id === commentId);
        if (comment && comment.evidenceLinks) {
          comment.evidenceLinks = comment.evidenceLinks.filter(
            link => link.id !== evidenceLinkId
          );
        }
      }
    },
    
    // Upvote a comment
    upvoteComment: (state, action) => {
      const { policyId, commentId } = action.payload;
      const policy = state.items.find(p => p.id === policyId);
      if (policy) {
        const comment = policy.comments.find(c => c.id === commentId);
        if (comment) {
          comment.upvotes += 1;
        }
      }
    },
    
    // Downvote a comment
    downvoteComment: (state, action) => {
      const { policyId, commentId } = action.payload;
      const policy = state.items.find(p => p.id === policyId);
      if (policy) {
        const comment = policy.comments.find(c => c.id === commentId);
        if (comment) {
          comment.downvotes += 1;
        }
      }
    }
  }
});

// Export actions
export const { 
  addPolicy, 
  upvotePolicy, 
  downvotePolicy, 
  setCategory, 
  addComment,
  upvoteComment,
  downvoteComment,
  addEvidenceLink,
  removeEvidenceLink
} = policiesSlice.actions;

// Selectors
export const selectAllPolicies = state => state.policies.items;

export const selectFilteredPolicies = state => {
  const { items, currentCategory } = state.policies;
  if (currentCategory === 'all') {
    return items;
  }
  return items.filter(policy => policy.category === currentCategory);
};

export const selectPolicyById = (state, policyId) => 
  state.policies.items.find(policy => policy.id === policyId);

export default policiesSlice.reducer;