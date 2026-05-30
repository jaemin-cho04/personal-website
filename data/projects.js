// ============================================================
//  PROJECTS DATA
//  Most impressive / most recent first.
//  To add a new project: prepend a new object to the array.
//  Fields:
//    category    — label shown as the orange pill tag
//    title       — project name
//    date        — date range string
//    description — paragraph shown on the card
//    tech        — badge array
//    links       — array of { label, url } objects
//                  set url to "#" if not yet published
// ============================================================

const PROJECTS = [

  {
    category:    "Embedded Systems / Microprocessors",
    title:       "Smart Focus Dock",
    date:        "Jan 2026 – Apr 2026",
    description: "Built an embedded Smart Focus Dock prototype in C using a DE10-style board with memory-mapped I/O, switch inputs, 7-segment display outputs, software timing, and state-machine logic. Implemented Idle, Active, Complete, and Interrupted states to track focus-session progress and detect early phone removal. Designed a proposed STM32-based final architecture with IR phone detection, timer interrupts, button inputs, OLED feedback, and an expanded state machine.",
    tech:  ["C", "DE10 Board", "Memory-Mapped I/O", "State Machines", "STM32", "IR Sensing"],
    links: [],
  },

  {
    category:    "AI / Reinforcement Learning",
    title:       "Reinforcement Learning HVAC Control System",
    date:        "Jan 2026 – Apr 2026",
    description: "Developed a reinforcement learning environment for HVAC control using indoor temperature, outdoor temperature, occupancy, time of day, and prior action as state inputs. Implemented and evaluated DQN and PPO-based control policies to balance occupant comfort, energy cost, and smooth actuator behaviour. Analyzed reward design, training stability, and policy performance for intelligent building control applications.",
    tech:  ["Python", "DQN", "PPO", "Reinforcement Learning", "NumPy"],
    links: [],
  },

  {
    category:    "Mechatronics / Robotics",
    title:       "Autonomous Gem-Collecting and Sorting Robot",
    date:        "Jan 2025 – Apr 2025",
    description: "Programmed ESP32 C++ firmware for real-time gem detection, servo actuation, sorting-wheel control, and dumping behaviour using TCS34725 colour-sensor feedback. Integrated colour sensing, servo control, and mechanical sorting behaviour to support autonomous object collection and colour-based classification. Improved sorting reliability through sensor calibration, mechanical alignment, lighting control, and position validation.",
    tech:  ["C++", "ESP32", "SolidWorks", "Circuit Design", "Ultrasonic Sensors", "Color Sensors", "Servo Motors"],
    links: [],
  },

  {
    category:    "AI / Computer Vision",
    title:       "Tic-Tac-Toe with Gretchen Robot",
    date:        "Summer 2024",
    description: "Built a vision-based humanoid robot system that played Tic-Tac-Toe using OpenCV, ROS, Python, colour segmentation, and board-state recognition. Implemented camera-based grid detection and move classification to identify user moves and update game state in real time. Integrated image processing, game logic, and robot interaction into a functional human-robot gameplay system.",
    tech:  ["Python", "OpenCV", "ROS", "Computer Vision", "NumPy", "Image Processing"],
    links: [],
  },

  {
    category:    "AI / Data Science",
    title:       "Air Quality Prediction System",
    date:        "Sept 2024 – Dec 2024",
    description: "Developed a Python machine-learning pipeline for time-series air quality prediction using Pandas, NumPy, Scikit-learn, feature engineering, and model evaluation. Processed pollutant, temperature, and humidity data to train and evaluate predictive models for environmental trend forecasting. Evaluated model performance and refined the data-processing workflow to improve prediction reliability.",
    tech:  ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Random Forest"],
    links: [],
  },

  {
    category:    "Software Engineering / API",
    title:       "Movie Rating Comparison Platform",
    date:        "Jan 2024 – Apr 2024",
    description: "Developed a software design project that aggregated IMDb and MovieDB data to compare movie ratings across multiple data sources. Contributed to system design, data handling, and software workflow planning for a team-based engineering application. Applied software design principles, database concepts, and collaborative development practices in a structured team project.",
    tech:  ["Python", "REST API", "Docker", "pytest", "JSON", "HTTP Client", "Data Processing"],
    links: [],
  },

];
