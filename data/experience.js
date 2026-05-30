// ============================================================
//  WORK EXPERIENCE DATA
//  Most recent role first.
//  To add a new role: prepend a new object to the array.
//  Fields:
//    title       — job title
//    company     — employer name
//    date        — date range + location string
//    description — one-sentence summary shown above bullet points
//    highlights  — bullet point array (keep to ~5 strong points)
//    tech        — badge array
// ============================================================

const EXPERIENCE = [

  {
    title:       "Junior Telescope Engineer Co-op",
    company:     "National Research Council Canada – Dominion Radio Astrophysical Observatory",
    date:        "May 2026 – Present · Penticton, BC",
    description: "Developing integration tests and validation tooling for telescope control and monitoring APIs in a production radio astronomy environment.",
    highlights: [
      "Developed pytest-based integration tests for telescope control and monitoring APIs, validating RF receiver, focus-box, and signal-chain telemetry",
      "Wrote automated receiver power-level tests for 2 RF signal paths using typed Pydantic API models, direct field access, and structured logging",
      "Validated receiver and signal-path telemetry by logging measured dBm power levels and comparing live API states against expected hardware operating conditions",
      "Implemented default-mode cleanup logic to return receiver hardware to a known soft-off standby state after hardware-changing tests",
      "Worked across telescope motion control, RF signal flow, receiver monitoring, spectrometer infrastructure, and Tango device servers",
    ],
    tech: ["Python", "pytest", "Pydantic", "GitLab CI", "Docker", "Linux", "RF Instrumentation"],
  },

  {
    title:       "Communications Engineering Co-op Student",
    company:     "NAV CANADA",
    date:        "May 2025 – Aug 2025 · Ottawa, ON",
    description: "Developed radio communication systems and hardware interfacing solutions for aviation infrastructure, working with embedded systems and industrial-grade equipment.",
    highlights: [
      "Designed and built a high-frequency radio transmitter emulator using Raspberry Pi and Python, integrating GPIO relay control for dynamic frequency and AM mode switching",
      "Implemented 3.3 V to 24 V signal-conditioning circuits to interface Raspberry Pi GPIO outputs with industrial MOXA digital inputs",
      "Validated GPIO, relay, and MOXA I/O behaviour using oscilloscope timing captures, multimeter checks, timestamped logs, unit tests, and system-level test cases",
      "Authored a professional test report covering 100+ unit tests, 50+ system tests, integration testing, acceptance testing, oscilloscope timing validation, and deployment readiness",
      "Documented hardware-software traceability between GPIO inputs, relay outputs, LEDs, MOXA digital I/O, timing requirements, and system fault states",
    ],
    tech: ["Python", "Raspberry Pi", "Linux", "GPIO", "Circuit Design", "MOXA I/O", "pytest"],
  },

];
