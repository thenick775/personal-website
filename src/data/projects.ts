export interface Project {
  name: string;
  labels: [string, string, string];
  href?: string;
  previewImage: string;
  railImage: string;
  summary: string;
  shortSummary: string;
  personal: boolean;
}

export const projects: Project[] = [
  {
    name: "Gbajs3",
    labels: ["C/C++", "React", "PWA"],
    previewImage: "https://picsum.photos/seed/gbajs3/1440/900",
    railImage: "https://picsum.photos/seed/gbajs3/720/900",
    summary:
      "Gbajs3 is a full Game Boy Advance emulator available online and offline supporting the mGBA WASM core, it is freely licensed and works in any modern browser.\n\nThe wasm contract and glue code were integrated into my custom core by leveraging the Emscripten toolchain, along with building the entire UI from scratch.",
    shortSummary:
      "A browser-based Game Boy Advance emulator powered by a custom mGBA WebAssembly integration.",
    href: "https://github.com/thenick775/gbajs3",
    personal: true,
  },
  {
    name: "Metroidvania Fangame",
    labels: ["Objective-C", "iOS", "Native"],
    previewImage: "https://picsum.photos/seed/metroidvania-fangame/1440/900",
    railImage: "https://picsum.photos/seed/metroidvania-fangame/720/900",
    summary:
      "A native iOS metroidvania-style platformer built entirely from scratch using Objective-C and the MVC architectural pattern.\n\nI implemented the animation system, collision detection, character physics, scene management, and gameplay logic while adapting and integrating custom-edited game assets for modern iPhone devices.",
    shortSummary:
      "A native iOS metroidvania-style platformer featuring a custom engine, physics, and gameplay systems.",
    href: "https://github.com/thenick775/metroidvaniafangame",
    personal: true,
  },
  {
    name: "TheList",
    labels: ["Go", "Cross Platform", "Fyne"],
    previewImage: "https://picsum.photos/seed/thelist/1440/900",
    railImage: "https://picsum.photos/seed/thelist/720/900",
    summary:
      "TheList is a cross-platform desktop application for organizing and searching multiple collections of user-defined lists.\n\nBuilt with the Fyne toolkit, it emphasizes fast in-memory performance and powerful regular-expression based searching to efficiently filter large collections of entries.",
    shortSummary:
      "A cross-platform list management application with fast regex-powered searching.",
    href: "https://github.com/thenick775/thelist",
    personal: true,
  },
  {
    name: "Airflow Ingestion Cluster",
    labels: ["Airflow", "Celery", "Python"],
    previewImage:
      "https://picsum.photos/seed/airflow-ingestion-cluster/1440/900",
    railImage: "https://picsum.photos/seed/airflow-ingestion-cluster/720/900",
    summary:
      "This environment consists of a distributed Apache Airflow Cluster, backed by Celery, that utilizes an array of custom docker containers to fetch and process data from public webpages and data buckets, and send this processed data to the Ingestion API.\n\nDocker was used to isolate browser reliant code, and build reusable, language agnostic, one-time use containers. The containers are designed to allow for fast and reliable setup, deployment, testing, tear down, cloning, and failure recovery.",
    shortSummary:
      "A distributed Apache Airflow platform orchestrating scalable, containerized data ingestion pipelines.",
    personal: false,
  },
  {
    name: "Real-Time Ingestion API",
    labels: ["Golang", "REST", "Horizontally Scalable"],
    previewImage: "https://picsum.photos/seed/real-time-ingestion-api/1440/900",
    railImage: "https://picsum.photos/seed/real-time-ingestion-api/720/900",
    summary:
      "The Ingestion API is designed to function as the middle man between independent user programs orchestrated by Apache Airflow that collect data, and multiple postgres database connections.\n\nThis API was built with golang, and utilizes GORM and Gorilla Mux for database operations and routing, and can concurrently process multipart forms in bulk for data ingestion through http requests.",
    shortSummary:
      "A horizontally scalable Go REST API for high-throughput real-time data ingestion.",
    personal: false,
  },
  {
    name: "Quorum iOS Transpilation",
    labels: ["RoboVM", "iOS", "Transpilation"],
    previewImage:
      "https://picsum.photos/seed/quorum-ios-transpilation/1440/900",
    railImage: "https://picsum.photos/seed/quorum-ios-transpilation/720/900",
    summary:
      "Re-integrated RoboVM into the Quorum programming language toolchain after the original compiler became unavailable.\n\nThe project enables Quorum applications to be transpiled into native iOS binaries using the open-source MobiVM implementation and was ultimately incorporated into official Quorum Studio releases.",
    shortSummary:
      "Reintroduced native iOS compilation to the Quorum programming language toolchain.",
    href: "https://github.com/thenick775/Quorum_iOS_Transpiliation",
    personal: true,
  },
  {
    name: "IoT Data Visualizations",
    labels: ["Javascript", "Python", "Kepler"],
    previewImage: "https://picsum.photos/seed/iot-data-visualizations/1440/900",
    railImage: "https://picsum.photos/seed/iot-data-visualizations/720/900",
    summary:
      "Developed interactive geospatial visualizations for large-scale IoT datasets using Python, JavaScript, and Kepler.gl.\n\nThe project focuses on transforming raw sensor and telemetry data into intuitive, map-based visualizations for exploratory analysis and presentation.",
    shortSummary:
      "Interactive geospatial visualizations for large-scale IoT datasets.",
    href: "https://github.com/thenick775/terbine_visualizations",
    personal: true,
  },
  {
    name: "Terbine World Map",
    labels: ["Python", "Selenium", "R"],
    previewImage: "https://picsum.photos/seed/terbine-world-map/1440/900",
    railImage: "https://picsum.photos/seed/terbine-world-map/720/900",
    summary:
      "Built an automated geospatial mapping pipeline that collected, processed, and visualized publicly available datasets using Python, Selenium, and R.\n\nThe project automated data acquisition and generated interactive world maps for exploring environmental and IoT-related information.",
    shortSummary:
      "An automated pipeline for collecting and visualizing global geospatial datasets.",
    href: "https://github.com/thenick775/Terbine-Map",
    personal: true,
  },
];
