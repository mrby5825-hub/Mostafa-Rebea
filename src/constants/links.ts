/**
 * Central registry for per-project GitHub links.
 *
 * HOW TO USE:
 * Add the repository URL for a project as the value below.
 * The moment a non-empty string is added, the "GitHub" button will
 * automatically appear on that project's card and case study page —
 * no other file needs to change.
 *
 * Leave a value as an empty string '' to keep the button hidden.
 */
export const PROJECT_LINKS: Record<string, string> = {
  olist: 'https://github.com/mrby5825-hub/-Brazilian-E-Commerce-Performance-Analy',
  telcoChurn: 'https://github.com/mrby5825-hub/telco-customer-churn-prediction',
  chinook: 'https://github.com/mrby5825-hub/Chinnok-Analysis',
  retailExploration: 'https://github.com/mrby5825-hub/Retail_Sales',
  // TODO(Mostafa): confirm this one — "Sales-Analysis" is a generic repo name and I matched
  // it to the C-Level dashboard by elimination. Swap it below if it's actually a different project.
  clevelSales: 'https://github.com/mrby5825-hub/Sales-Analysis',
  // Matched by name to the newest project (AdventureWorks-style "Sales Performance" dashboard).
  salesPerformance: 'https://github.com/mrby5825-hub/Sales-Performance',
  // TODO(Mostafa): confirm this one — matched by elimination from your repo list.
  globalSuperStore: 'https://github.com/mrby5825-hub/-global_mega_sales_hell_version',
  // No repo link given yet for this one — add it here when ready.
  studentPerformance: '',

  // These 3 stay without a GitHub link for now, as requested — kept at the end of the Projects list.
  supermarketExcel: '',
  pizzaSales: '',
  hrAnalytics: '',
};

export const SOCIALS = {
  github: 'https://github.com/mrby5825-hub',
  linkedin: 'https://www.linkedin.com/in/mostafa-rebea',
  email: 'mrby5825@gmail.com',
  phone: '+20 111 532 6106',
  // Digits only, international format, no leading +, for wa.me / tel: links.
  whatsappDigits: '201115326106',
};
