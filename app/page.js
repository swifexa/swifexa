const glass = {
  background: 'rgba(255,255,255,0.12)',
  border: '1px solid rgba(255,255,255,0.35)',
  borderRadius: 28,
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
  padding: 28,
};
const pill = {
  display: 'inline-block',
  background: 'rgba(255,255,255,0.18)',
  border: '1px solid rgba(255,255,255,0.4)',
  borderRadius: 999,
  padding: '6px 14px',
  fontSize: 13,
  letterSpacing: 1,
  textTransform: 'uppercase',
};
export default function Home() {
  return (
    <>
      <section style={{ ...glass, textAlign: 'center', padding: '48px 28px' }}>
        <span style={pill}>✦ Dream it · Build it · Book it</span>
        <h1 style={{ fontSize: 48, lineHeight: 1.1, margin: '20px 0 12px' }}>Swifexa Solutions LLC</h1>
        <p style={{ fontSize: 22, fontWeight: 600, margin: '0 0 12px' }}>AI booking agent for dental practices — answers missed calls, books patients, texts them back.</p>
        <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 640, margin: '0 auto' }}>When a call goes to voicemail — in surgery, with a patient, after hours — the agent answers, books the patient, and texts them back, so the patient does not go to another practice.</p>
        <p style={{ marginTop: 24 }}><a href="mailto:w@swifexasolutions.com" style={{ background: '#ffffff', color: '#302b63', fontWeight: 800, padding: '14px 28px', borderRadius: 999, textDecoration: 'none', display: 'inline-block' }}>Book a 10-minute demo →</a></p>
      </section>

      <section style={{ ...glass, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>How it works</h2>
        <ol style={{ paddingLeft: 20 }}>
          <li>A patient calls a practice using Swifexa and the call is missed.</li>
          <li>The agent answers in under 60 seconds, understands the service, urgency, and preferred time window.</li>
          <li>The booking is logged and confirmed, and the patient gets a text back.</li>
          <li>If a price or exact time is not confirmed, the agent says so and checks with the practice — it never invents a price or a guaranteed time, never diagnoses, and never promises candidacy for treatment.</li>
        </ol>
        <p style={{ color: 'rgba(255,255,255,0.85)' }}>The agent does not quote prices, guarantee arrival times, diagnose a problem, decide eligibility, or promise patients or revenue. Complex cases, angry callers, and requests for a human are handed back to the practice owner. Implant bookings are consultation only.</p>
      </section>

      <section style={{ ...glass, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>🦷 Dental booking agent</h2>
        <p>Cleanings, tooth pain, broken tooth, crowns, implant consultations, whitening, braces / Invisalign. Founding $399/month for the first 5 practices, locked 12 months, $0 setup; regular $599/month after.</p>
      </section>

      <section style={{ ...glass, marginTop: 24, textAlign: 'center' }}>
        <h2 style={{ marginTop: 0 }}>Watch how it works</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)' }}>A 36-second demo with real replies from the live demo — cleaning, tooth pain, and the implant price question. Demo only, test data, no real patients.</p>
        <p><a href="/demo" style={{ background: '#ffffff', color: '#302b63', fontWeight: 800, padding: '14px 28px', borderRadius: 999, textDecoration: 'none', display: 'inline-block' }}>Watch the demo →</a></p>
      </section>

      <section style={{ ...glass, marginTop: 24, textAlign: 'center' }}>
        <h2 style={{ marginTop: 0 }}>Contact</h2>
        <p>For questions about Swifexa, contact Swifexa Solutions LLC at <a href="mailto:w@swifexasolutions.com" style={{ color: '#fff', fontWeight: 700 }}>w@swifexasolutions.com</a></p>
        <p><a href="/privacy-policy" style={{ color: '#fff' }}>Privacy Policy</a> · <a href="/terms-and-conditions" style={{ color: '#fff' }}>Terms and Conditions</a></p>
      </section>
    </>
  );
}
