import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = 'https://trserver.cloud';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlLWRlbW8iLCJpYXQiOjE2NDE3NjkyMDAsImV4cCI6MTc5OTUzNTYwMH0.Ps0iG3Z8cNooXOGjke3zpSH7RI2C2HecfXejwa5wO1E';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
