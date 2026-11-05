export const metadata = {
  title: 'Watch how it works — Swifexa Solutions LLC',
  description: 'A 36-second demo of the Swifexa AI booking agent for dental practices — real replies, test data only, no real patients.',
};
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
export default function Demo() {
  return (
    <>
      <section style={{ ...glass, textAlign: 'center', padding: '48px 28px' }}>
        <span style={pill}>Demo — test data only, no real patients</span>
        <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: '20px 0 12px' }}>Watch how it works</h1>
        <p style={{ fontSize: 20, fontWeight: 600, margin: '0 0 12px' }}>A missed call, answered in seconds — booked, not lost.</p>
        <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 640, margin: '0 auto' }}>36 seconds, with real replies from the live Swifexa dental demo. Test data only — no real patients.</p>
      </section>

      <section style={{ ...glass, marginTop: 24 }}>
        <video controls preload="metadata" src="/demo-video.mp4" style={{ width: '100%', borderRadius: 20, display: 'block', background: '#000' }}>
          Your browser does not support the video tag. Watch the demo at swifexasolutions.com/demo.
        </video>
        <p style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginBottom: 0 }}>Demo — test data only, no real patients.</p>
      </section>

      <section style={{ ...glass, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>What happens in the demo</h2>
        <ol style={{ paddingLeft: 20 }}>
          <li>
            <strong>Patient: “I need a cleaning”</strong>
            <br />Agent: “Got it — so that&apos;s cleaning / checkup. Did I get that right?”
          </li>
          <li style={{ marginTop: 12 }}>
            <strong>Patient: “My tooth hurts”</strong>
            <br />Agent: “Got it — so that&apos;s tooth pain. Did I get that right?”
          </li>
          <li style={{ marginTop: 12 }}>
            <strong>Patient: “How much is an implant?”</strong>
            <br />Agent: “I don&apos;t have a confirmed price for that yet, so I won&apos;t guess — I&apos;ll check with the office and let you know as soon as they confirm. Now, are you a new or returning patient, and what do you need help with today?”
          </li>
        </ol>
        <p style={{ color: 'rgba(255,255,255,0.85)' }}>The agent never invents a price or a guaranteed time, never diagnoses, and never promises candidacy for treatment. Implant bookings are consultation only — the office confirms the plan and cost in person.</p>
      </section>

      <section style={{ ...glass, marginTop: 24, textAlign: 'center' }}>
        <h2 style={{ marginTop: 0 }}>Try it for your practice</h2>
        <p style={{ color: 'rgba(255,255,255,0.85)' }}>Founding $399/month for the first 5 practices, locked 12 months, $0 setup; regular $599/month after.</p>
        <p><a href="mailto:w@swifexasolutions.com" style={{ background: '#ffffff', color: '#302b63', fontWeight: 800, padding: '14px 28px', borderRadius: 999, textDecoration: 'none', display: 'inline-block' }}>Book a 10-minute demo →</a></p>
        <p><a href="/" style={{ color: '#fff' }}>← Back to home</a></p>
      </section>
    </>
  );
}
