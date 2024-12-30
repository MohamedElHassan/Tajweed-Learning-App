import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://imbagspbgcieqfplhknn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltYmFnc3BiZ2NpZXFmcGxoa25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1NDkwNjEsImV4cCI6MjA1MTEyNTA2MX0.JtnLyZ6bBQ-kHJ_zKSYW0PWkfKRFumi-qZ9kxIKRNEU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);