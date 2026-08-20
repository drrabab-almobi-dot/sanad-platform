// إعدادات الاتصال بـ Supabase لمنصة سند
// المفتاح هنا هو "anon/publishable key" وهو آمن للاستخدام في المتصفح
// (كل الحماية الفعلية تتم عبر Row Level Security على قاعدة البيانات)
window.SANAD_SUPABASE_URL = "https://fjgkruujhikghaeseotx.supabase.co";
window.SANAD_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqZ2tydXVqaGlrZ2hhZXNlb3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxMTM1MTUsImV4cCI6MjEwMjY4OTUxNX0.ddhQWj9VwXcisvOj8emAQORUBz-HlYCPL3JaPbY_EBw";

window.sanadSupabase = supabase.createClient(
  window.SANAD_SUPABASE_URL,
  window.SANAD_SUPABASE_ANON_KEY
);
