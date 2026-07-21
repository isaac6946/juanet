/* ============================================================
   JUANET — shared Backendless setup + helpers
   Edit APP_ID / API_KEY below only if you regenerate your keys
   in the Backendless console (App Settings > App Info).
   ============================================================ */

const JUANET_APP_ID  = '16FFD132-607E-43A7-8EBE-10A4FC1D0A95';
const JUANET_API_KEY = '17F7CF5F-EC5A-41A9-854E-16C03097888A';

Backendless.initApp(JUANET_APP_ID, JUANET_API_KEY);

/* ---------- Table name constants ----------
   These are the Backendless Data tables the frontend expects.
   If your table names differ, either rename them in Backendless
   Database, or change the strings below to match. */
const TABLES = {
  PRODUCTS: 'Products',
  JOBS: 'Jobs',
  JOB_APPLICATIONS: 'JobApplications',
  TECHNICIANS: 'TechnicianApplications',
  DEVICES: 'Devices',
  RECHARGES: 'Recharges'
};

/* ---------- Auth helpers ---------- */
function juanetCurrentUser(){
  return Backendless.UserService.getCurrentUser();
}

// Redirect to login if there's no locally stored user session.
// Call this at the top of every protected page.
function juanetRequireAuth(){
  const localUser = Backendless.LocalCache.get('current-user');
  if(!localUser){
    window.location.href = 'index.html';
  }
}

function juanetLogout(){
  Backendless.UserService.logout()
    .then(() => { window.location.href = 'index.html'; })
    .catch(() => { window.location.href = 'index.html'; });
}

/* ---------- Small UI helpers ---------- */
function showMsg(el, text, type){
  el.textContent = text;
  el.classList.remove('error','ok');
  el.classList.add('show', type);
}
function hideMsg(el){
  el.classList.remove('show','error','ok');
}
function setBtnLoading(btn, loading, loadingText, normalText){
  btn.disabled = loading;
  btn.textContent = loading ? loadingText : normalText;
}
