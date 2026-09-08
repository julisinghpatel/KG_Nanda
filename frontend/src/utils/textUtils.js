/**
 * Helper utility to strip Hindi (Devanagari) script and slash suffixes from strings.
 * 
 * Example:
 *   "Gynecology & Obstetrics / स्त्री एवं प्रसूति रोग" -> "Gynecology & Obstetrics"
 *   "General Consultation / सामान्य परामर्श" -> "General Consultation"
 */
export function stripHindiText(str) {
  if (!str || typeof str !== 'string') return str || '';
  
  // 1. If string contains a slash '/', take the primary (English) segment before '/'
  let cleaned = str.split('/')[0].trim();
  
  // 2. Remove any remaining Devanagari Unicode characters (\u0900 to \u097F)
  cleaned = cleaned.replace(/[\u0900-\u097F]+/g, '').trim();
  
  // 3. Clean up trailing punctuation like slashes, dashes, or excess whitespace
  cleaned = cleaned.replace(/[\/\-\:\,]\s*$/, '').trim();
  
  return cleaned || str.trim();
}

/**
 * Normalizes department names to standard frontend UI display names.
 */
export function normalizeDepartmentName(dept) {
  const cleaned = stripHindiText(dept);
  if (!cleaned) return 'General Medicine';

  const lower = cleaned.toLowerCase();
  if (lower.includes('gynecology') || lower.includes('gynaecology') || lower.includes('obstetric')) {
    return 'Obstetrics & Gynaecology';
  }
  if (lower.includes('general consult')) {
    return 'General Consultant';
  }
  if (lower.includes('general medicine')) {
    return 'General Medicine';
  }
  if (lower.includes('critical')) {
    return 'Critical Care';
  }
  if (lower.includes('laparoscopy')) {
    return 'General & Laparoscopy Surgery';
  }
  if (lower.includes('surgery')) {
    return 'General Surgery';
  }
  if (lower.includes('urology')) {
    return 'Urology';
  }
  if (lower.includes('anesthesia')) {
    return 'Anesthesia';
  }
  if (lower.includes('neurology')) {
    return 'Neurology';
  }
  if (lower.includes('cardiology')) {
    return 'Cardiology';
  }
  if (lower.includes('pediatric')) {
    return 'Pediatrics';
  }
  if (lower.includes('oncology')) {
    return 'Oncology';
  }
  return cleaned;
}
