const positions = [
  {
    company: 'Lucid Motors',
    position: 'Staff Engineer — iOS & ML Perception',
    link: 'https://lucidmotors.com/',
    daterange: 'May 2022 - Present',
    points: [
      'Led rewrite from Flutter to SwiftUI, integrating native features like 3D Models (Scene Kit)'
       + ' Live Activities, Siri, widgets, and Apple Watch support to enable vehicle access,'
       + ' monitoring, and remote control via mobile.',
      'Reported directly to the Senior VP of Digital to align development with strategic initiatives.',
      'Developed a SwiftUI component toolkit and frameworks for testing, localization, persistence, and'
       + ' networking, while authoring an MVVM architecture usage guide to enhance productivity and streamline onboarding.',
      'Led weekly architecture and code reviews, mentoring iOS engineers and guiding Android porting to Kotlin.',
      'Designed a Bluetooth passive entry system, improving reliability to 99%, surpassing the 95% industry standard.',
      'Built an H.264 WebRTC client to stream live video from the car’s cameras to a phone for security monitoring.',
      'Developed a parking slot detection system by fusing four surround-view cameras with a multi-task transformer.',
      'Built and integrated polygon-based object detection and semantic segmentation heads onto the transformer.',
      'Conducted ablation studies to optimize architecture, boosting F1 from 0.89 to 0.96 and speed by 41% (16 FPS).',
      'Curated real and synthetic datasets with Sim2Real techniques to improve generalization across conditions.',
      'Exported and deployed model to production using ONNX and TensorRT on Nvidia Jetson Orin.',
    ],
  },
  {
    company: 'Harvard Medical School',
    position: 'Machine Learning Research Scientist',
    link: 'https://www.rouskinlab.com/',
    daterange: 'May 2023 - Aug 2023',
    points: [
      'Adapted AlphaFold 2, a protein prediction model, for RNA structure prediction, boosting F1-score from 0.47 to 0.52.',
      'Developed synthetic data training algorithms, significantly reducing the generalization gap between RNA types.',
    ],
  },
  {
    company: 'Spur',
    position: 'Founder CEO/CTO',
    link: 'https://spurdating.com/',
    daterange: 'Jan 2019 - Dec 2022',
    points: [
      'Founded and developed a native social media app for iOS and Android that garnered over 350k downloads, blending Instagram and Tinder features with real-time chat, customizable profiles, matches, likes, and IG stories.',
      'Admitted into the Harvard Innovation Labs Venture Program and selected for the semester-long Harvard Business School accelerator course, Field X.',
      'Crafted and executed a comprehensive go-to-market strategy, pitch deck, and business plan, which were presented to angel investors and venture capitalists to secure pre-seed funding.',
      'Engineered a microservice-based backend utilizing AWS technologies including DynamoDB, Elasticsearch, S3, Lambda, EC2, Kinesis, and Rekognition.',
      'Directed a multidisciplinary team of over five professionals, in marketing, competitive analysis, and design.',
    ],
  },
  {
    company: 'Stanford',
    position: 'Research Associate',
    link: 'https://med.stanford.edu/sgtc',
    daterange: 'Sep 2017 - Sep 2021',
    points: [
      'Developed a ML-based diagnostic model for Myalgic Encephalomyelitis (ME) using impedance-over-time data from a novel biosensor; results published in PNAS.',
      'Authored a statistical theory on the origin of ME based on Hardy-Weinberg Equilibrium, published in Diagnostics.',
      'Led a team on cell semantic segmentation, cutting computation time by 94% and boosting accuracy by 4%.',
      'Mentored computer vision and machine learning interns, supported by the Stanford Bio-X program.',
    ],
  },
  {
    company: 'Intel',
    position: 'Software Engineer - R & D',
    link: 'https://www.intel.com/',
    daterange: 'May 2017 - Sep 2017',
    points: [
      'Developed an Android NDK MapReduce framework using pthreads and C++ templates.',
      'Applied it by implementing k-means clustering on location data for network data reduction.',
    ],
  },
  {
    company: 'Early Engineering Experience',
    position: 'Software Engineer Intern',
    link: '',
    daterange: '2014 - 2017',
    points: [
      'Enhanced I2C and UART drivers, extending support to touch screens and cameras (Intel).',
      'Built gaze-tracking system using deep learning and CNNs achieving 93% accuracy (Zspace).',
      'Built an interpreter translating human-readable code to machine instructions (Mux Wiring).',
    ],
  },
];

export default positions;
