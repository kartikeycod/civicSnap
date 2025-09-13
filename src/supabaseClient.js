import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zdtmxoetngldbtwhckym.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdG14b2V0bmdsZGJ0d2hja3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MTk3MjAsImV4cCI6MjA3MzE5NTcyMH0.tlhT6JSi-rv-NZhyCzQCaSgqZjSgOdc07h7E1bwlmMM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
