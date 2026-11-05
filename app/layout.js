export const metadata = {
  title: 'Swifexa Solutions LLC — AI booking agent for dental practices',
  description: 'AI booking agent for dental practices — answers missed calls, books patients, texts them back.',
};
const glass = {
  background: 'rgba(255,255,255,0.12)',
  border: '1px solid rgba(255,255,255,0.35)',
  borderRadius: 24,
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', margin: 0, color: '#ffffff', lineHeight: 1.6, minHeight: '100vh', background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 35%, #24243e 60%, #0f2027 100%)', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 20% 20%, rgba(255,119,198,0.35), transparent 50%), radial-gradient(circle at 80% 30%, rgba(120,119,198,0.45), transparent 50%), radial-gradient(circle at 50% 90%, rgba(0,210,255,0.30), transparent 50%)' }} />
        <div style={{ position: 'relative' }}>
          <header style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <a href="/" style={{ fontWeight: 900, fontSize: 22, letterSpacing: 1, color: '#ffffff', textDecoration: 'none' }}>✦ Swifexa Solutions LLC</a>
            <nav style={{ display: 'flex', gap: 12 }}>
              <a href="/privacy-policy" style={{ ...glass, padding: '8px 16px', color: '#fff', textDecoration: 'none', borderRadius: 999 }}>Privacy</a>
              <a href="/terms-and-conditions" style={{ ...glass, padding: '8px 16px', color: '#fff', textDecoration: 'none', borderRadius: 999 }}>Terms</a>
            </nav>
          </header>
          <main style={{ maxWidth: 980, margin: '0 auto', padding: '24px 24px 64px' }}>{children}</main>
          <footer style={{ borderTop: '1px solid rgba(255,255,255,0.2)', padding: '24px', textAlign: 'center', color: 'rgba(255,255,255,0.75)' }}>
            <p>Copyright © 2026 Swifexa Solutions LLC - All Rights Reserved.</p>
            <p><a href="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</a> · <a href="/terms-and-conditions" style={{ color: '#fff' }}>Terms and Conditions</a> · Contact: w@swifexasolutions.com</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
