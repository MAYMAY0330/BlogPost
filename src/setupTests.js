import '@testing-library/jest-dom';

// JSDOM environment in Jest doesn't include TextEncoder/TextDecoder by default
// which are required by React Router. Node provides them under 'util'.
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
