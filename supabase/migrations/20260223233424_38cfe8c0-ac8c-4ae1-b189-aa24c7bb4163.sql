
-- Storage bucket for virtual consultation clinical records
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'clinical-records',
  'clinical-records',
  false,
  10485760,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'application/pdf', 'application/dicom']
)
ON CONFLICT (id) DO NOTHING;

-- Only allow uploads via service role (edge function handles uploads)
-- No public access needed - files are emailed as attachments
