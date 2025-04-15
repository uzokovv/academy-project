// ======= Swagger UI =======
export const baseUrl = 'https://api.milliardev.com/api/';

//  ==== AUTH ====
// Admin Signup URL
export const signinUrl = `${baseUrl}auth/signin`; // <-- login emas, signup

// ==================== Admin ====================
// Admin dashboard URL
export const adminDashboardUrl = `${baseUrl}admin/dashboard`;

// ==================== Addresses ====================
// Viloyatlarni olish URL'si
export const getRegionUrl = `${baseUrl}region`;
// Viloyat qo'shish URL'si
export const addRegionUrl = `${baseUrl}region`;
// Viloyatni o'chirish URL'si
export const deleteRegionUrl = `${baseUrl}region/`;
// Viloyatni yangilash URL'si
export const updateRegionUrl = `${baseUrl}region/`;

// Tumanlarni olish URL'si
export const getDistrictUrl = `${baseUrl}district/`;
// Tuman qo'shish URL'si
export const addDistrictUrl = `${baseUrl}district`;
// Tumanni o'chirish URL'si
export const deleteDistrictUrl = `${baseUrl}district/`;
// Tumanni yangilash URL'si
export const updateDistrictUrl = `${baseUrl}district`;

// ==================== Customers ====================
// Mijozlar ro'yxatini olish URL'si
export const getCustomerListUrl = `${baseUrl}customer`;
// Mijoz qo'shish URL'si
export const addCustomerUrl = `${baseUrl}customer`;
// Mijozni o'chirish URL'si
export const deleteCustomerUrl = `${baseUrl}customer/`;
// Mijozni yangilash URL'si
export const updateCustomerUrl = `${baseUrl}customer/`;

// ==================== Projects ====================
// Loyihalar ro'yxatini olish URL'si
export const getProjectsUrl = `${baseUrl}projects`;
// Yangi loyiha qo'shish URL'si
export const addProjectUrl = `${baseUrl}projects`;
// Loyiha o'chirish URL'si
export const deleteProjectUrl = `${baseUrl}projects/`;
// Loyiha yangilash URL'si
export const updateProjectUrl = `${baseUrl}projects/`;

// ==================== Statistics ====================
// Admin statistikalar URL'si
export const getAdminStatsUrl = `${baseUrl}statistics/admin`;
// Mijoz statistikalari URL'si
export const getCustomerStatsUrl = `${baseUrl}statistics/customer`;

// ==================== Authentication ====================
// Authentication URL'lari
export const authSignupUrl = `${baseUrl}auth/signup`; // <-- login emas, signup
export const authLogoutUrl = `${baseUrl}auth/logout`;

// ==================== Super Admin ====================
// Super Admin dashboard URL'si
export const superAdminDashboardUrl = `${baseUrl}superadmin/dashboard`;

// ==================== General ====================
// API to get general system status
export const getSystemStatusUrl = `${baseUrl}status`;

export default {
  signinUrl,
  adminDashboardUrl,
  getRegionUrl,
  addRegionUrl,
  deleteRegionUrl,
  updateRegionUrl,
  getDistrictUrl,
  addDistrictUrl,
  deleteDistrictUrl,
  updateDistrictUrl,
  getCustomerListUrl,
  addCustomerUrl,
  deleteCustomerUrl,
  updateCustomerUrl,
  getProjectsUrl,
  addProjectUrl,
  deleteProjectUrl,
  updateProjectUrl,
  getAdminStatsUrl,
  getCustomerStatsUrl,
  authSignupUrl,
  authLogoutUrl,
  superAdminDashboardUrl,
  getSystemStatusUrl,
};
