// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  // Languages
  { title: 'Python', competency: 5, category: ['Languages', 'Data Science'] },
  { title: 'C++', competency: 5, category: ['Languages', 'High-Performance Computing'] },
  { title: 'Swift', competency: 5, category: ['Languages', 'iOS Development'] },
  { title: 'Java', competency: 5, category: ['Languages'] },
  { title: 'Kotlin', competency: 4, category: ['Languages', 'Android Development'] },
  { title: 'C', competency: 4, category: ['Languages'] },
  { title: 'Lua', competency: 3, category: ['Languages'] },
  { title: 'MATLAB', competency: 2, category: ['Languages'] },
  { title: 'R (Not a fan)', competency: 1, category: ['Languages'] },
  
  // ML & AI
  { title: 'Deep Learning', competency: 5, category: ['Concepts', 'AI'] },
  { title: 'Computer Vision', competency: 5, category: ['Concepts', 'AI'] },
  { title: 'Reinforcement Learning', competency: 4, category: ['Concepts', 'AI'] },
  { title: 'Generative AI (Diffusion Models, GANs, VAEs)', competency: 5, category: ['AI', 'Generative Models'] },
  { title: 'Scikit-Learn', competency: 5, category: ['Data Science', 'ML Frameworks'] },
  { title: 'PyTorch', competency: 5, category: ['Data Science', 'ML Frameworks'] },
  { title: 'TensorFlow + Keras', competency: 5, category: ['Data Science', 'ML Frameworks'] },
  { title: 'Data Mining', competency: 5, category: ['Data Science'] },
  { title: 'Natural Language Processing', competency: 4, category: ['AI', 'Data Science'] },

  // Perception & Robotics
  { title: 'SLAM', competency: 5, category: ['Self-Driving Cars', 'Perception', 'AI'] },
  { title: 'Sensor Fusion (Lidar, Radar, Cameras)', competency: 5, category: ['Self-Driving Cars', 'Perception'] },
  { title: 'ROS', competency: 4, category: ['Robotics', 'Perception'] },
  { title: 'PyDrake', competency: 3, category: ['Robotics', 'Perception'] },

  // Data Engineering & HPC
  { title: 'PostgreSQL/SQLite3/SQL', competency: 4, category: ['Databases', 'Data Engineering'] },
  { title: 'DynamoDB', competency: 4, category: ['Databases'] },
  { title: 'ElasticSearch', competency: 3, category: ['Databases'] },
  { title: 'GraphQL', competency: 4, category: ['Databases'] },
  { title: 'Spark', competency: 3, category: ['Data Engineering'] },
  { title: 'High-performance Computing (MPI, SIMD, SSE, AVX)', competency: 5, category: ['HPC', 'Parallel Computing'] },

  // System Architecture & Deployment
  { title: 'Amazon Web Services', competency: 4, category: ['Cloud', 'Web Development'] },
  { title: 'Hugging Face', competency: 4, category: ['Cloud', 'Web Development'] },
  { title: 'Vercel', competency: 3, category: ['Cloud', 'Web Development'] },
  { title: 'Supabase', competency: 3, category: ['Cloud', 'Web Development'] },
  { title: 'Serverless', competency: 4, category: ['Cloud', 'Web Development'] },
  { title: 'MLOps (MLflow, Weights & Biases, TFX)', competency: 4, category: ['ML Engineering', 'DevOps'] },

  // WebRTC & Real-Time Systems
  { title: 'WebRTC (SDP, ICE, STUN/TURN)', competency: 5, category: ['Real-Time Systems', 'Networking'] },
  { title: 'Video Processing & Encoding (FFmpeg, H.264, AV1)', competency: 4, category: ['Multimedia Processing', 'Networking'] },

  // iOS & Frontend Development
  { title: 'SwiftUI', competency: 5, category: ['iOS Development'] },
  { title: 'UIKit', competency: 3, category: ['iOS Development'] },
  { title: 'Firebase', competency: 3, category: ['Mobile Development'] },
  { title: 'JavaScript', competency: 3, category: ['Web Development'] },
  { title: 'Node.js', competency: 3, category: ['Web Development'] },
  { title: 'Next.js', competency: 3, category: ['Web Development'] },
  { title: 'React', competency: 3, category: ['Web Development'] },

  // Tools & Misc
  { title: 'Git', competency: 5, category: ['Tools'] },
  { title: 'Bash', competency: 4, category: ['Tools'] },
  { title: 'Jupyter', competency: 5, category: ['Tools'] },
  { title: 'Figma', competency: 3, category: ['Tools'] },
  { title: 'Matplotlib', competency: 5, category: ['Visualization', 'Python'] },
  { title: 'Data Visualization (D3.js, Plotly)', competency: 4, category: ['Visualization', 'Data Science'] },

  // Leadership & Research
  { title: 'Leadership', competency: 5, category: ['Soft Skills'] },
  { title: 'Technical Writing (Research Papers, Patents)', competency: 5, category: ['Soft Skills'] },
  { title: 'Mentorship & Team Building', competency: 5, category: ['Soft Skills'] },
  { title: 'Public Speaking & Technical Presentations', competency: 5, category: ['Soft Skills'] },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
