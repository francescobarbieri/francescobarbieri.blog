import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://kkqrqcujuhhtuotxmwfj.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcXJxY3VqdWhodHVvdHhtd2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MzYzMjMsImV4cCI6MjAyMjIxMjMyM30.w5olIUwrM52rXqlRs1zzgkrNjFyacw88wCwS3b6sglY');

export default supabase;