import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: "skA3XhmvMRzzbf88EEne3DN6aPkc3GpUpTJOgYfhQwlqILYuTbftDWboRTthIbwZT0gGUp3YhijiufUvTIuz44dm4kCMXRHEbv0GUy1MggjCf3ffaEjWBAfVbutLSYumcQHnsjQ1BGURCTv07RCULnzunxOsgONasHKEL4z36LTOzTOWPkqS", // Securely access token
});

