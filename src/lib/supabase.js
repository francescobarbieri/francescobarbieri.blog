import { createClient } from "@supabase/supabase-js";

if (
    process.env.SUPABASE_PROJECT_URL === '' ||
    process.env.SUPABASE_API_KEY_PUBLIC === ''
) {
    throw new Error('Missing env vars SUPABASE_PROJECT_URL or SUPABASE_API_KEY_PUBLIC');
}

const supabase = createClient('https://kkqrqcujuhhtuotxmwfj.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcXJxY3VqdWhodHVvdHhtd2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MzYzMjMsImV4cCI6MjAyMjIxMjMyM30.w5olIUwrM52rXqlRs1zzgkrNjFyacw88wCwS3b6sglY');

export default supabase;