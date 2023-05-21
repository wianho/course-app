import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Replace with your Supabase URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Replace with your Supabase public API key

const supabase = createClient (supabaseUrl, supabaseKey);

//const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Replace with your Supabase public API key

//const supabase = createClient('https://nzbrpsdhqyudkimefgdh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56YnJwc2RocXl1ZGtpbWVmZ2RoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDY3MzMyNywiZXhwIjoyMDAwMjQ5MzI3fQ.BMFg36UdyeqPtLAdrhpZ-j6fxunQjC9eFE9X8fPkpP4');

export default supabase;
