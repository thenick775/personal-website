export interface Project {
  name: string;
  labels: [string, string, string];
  logoClass: string;
  logoText?: string;
  textClass?: string;
  href?: string;
  detail?: string;
  personal: boolean;
}

export const projects: Project[] = [
  {
    name: 'Metroidvania Fangame',
    labels: ['Objective-C', 'iOS', 'Native'],
    logoClass: 'metroidvania-logo',
    href: 'https://github.com/thenick775/metroidvaniafangame',
    personal: true,
  },
  {
    name: 'TheList',
    labels: ['Generic List', 'Cross Platform', 'Fyne'],
    logoClass: 'thelist-logo',
    logoText: 'TheList',
    href: 'https://github.com/thenick775/thelist',
    personal: true,
  },
  {
    name: 'Airflow Ingestion Cluster',
    labels: ['Distributed Data Ingestion', 'Celery', 'Python'],
    logoClass: 'airflow-logo',
    logoText: 'Airflow Ingestion Cluster',
    textClass: 'ingcluster',
    detail:
      'This environment consists of a distributed Apache Airflow Cluster, backed by Celery, that utilizes an array of custom docker containers to fetch and process data from public webpages and data buckets, and send this processed data to the Ingestion API.\n\nDocker was used to isolate browser reliant code, and build reusable, language agnostic, one-time use containers. The containers are designed to allow for fast and reliable setup, deployment, testing, tear down, cloning, and failure recovery.',
    personal: false,
  },
  {
    name: 'Real-Time Ingestion API',
    labels: ['Golang', 'REST', 'Horizontally Scalable'],
    logoClass: 'ingestion-api-logo',
    logoText: 'Real-Time Ingestion API',
    textClass: 'ingestionapi',
    detail:
      'The Ingestion API is designed to function as the middle man between independent user programs orchestrated by Apache Airflow that collect data, and multiple postgres database connections.\n\nThis API was built with golang, and utilizes GORM and Gorilla Mux for database operations and routing, and can concurrently process multipart forms in bulk for data ingestion through http requests.',
    personal: false,
  },
  {
    name: 'Quorum iOS Transpilation',
    labels: ['RoboVM', 'iOS', 'Transpilation'],
    logoClass: 'qourum-ios-transpilation',
    logoText: 'Quorum iOS Transpilation',
    textClass: 'quorumlog',
    href: 'https://github.com/thenick775/Quorum_iOS_Transpiliation',
    personal: true,
  },
  {
    name: 'IoT Data Visualizations',
    labels: ['Javascript', 'Python', 'Kepler'],
    logoClass: 'iot-visualization-logo',
    logoText: 'IoT Data Visualizations',
    textClass: 'iotvislogo',
    href: 'https://github.com/thenick775/terbine_visualizations',
    personal: true,
  },
  {
    name: 'Terbine World Map',
    labels: ['Python', 'Selenium', 'R'],
    logoClass: 'terbine-map-logo',
    logoText: 'Terbine World Map',
    textClass: 'globelogo',
    href: 'https://github.com/thenick775/Terbine-Map',
    personal: true,
  },
  {
    name: 'Ingestion Index Crawler',
    labels: ['Automation', 'Selenium', 'Internal Tooling'],
    logoClass: 'ingestion-index-crawler-logo',
    logoText: 'Ingestion Index Crawler',
    textClass: 'crawler',
    detail:
      'This crawler is designed to reduce search times of already ingested data for an in-house manual data ingestion system. It crawls all the pages of existing instances for a specified user, and produces a list with the name, page number, and status of each instance.\n\nThis allows for fast searching and navigation using the built in utility script. The crawler was built using Selenium in python and encapsulated in a docker container for easy deployment.',
    personal: false,
  },
];
