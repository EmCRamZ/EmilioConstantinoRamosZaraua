import React, { useState } from 'react';
import { TabId } from '../types';

interface BookScreenProps {
  onTabChange: (tab: TabId) => void;
}

export const BookScreen: React.FC<BookScreenProps> = ({ onTabChange }) => {
  const [sessionType, setSessionType] = useState<'discovery' | 'diagnostic' | 'fractional'>('discovery');
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-06');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM PDT');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [role, setRole] = useState<string>('CTO / Head of Engineering');
  const [primaryFocus, setPrimaryFocus] = useState<string>('Cloud Migration & FinOps');
  const [notes, setNotes] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const sessionTypes = [
    {
      id: 'discovery',
      name: '30-min Executive Discovery',
      duration: '30 min',
      cost: 'Complimentary Alignment',
      description: 'Ideal for initial alignment, scoping high-level advisory fit, and reviewing current cloud infrastructure friction.',
    },
    {
      id: 'diagnostic',
      name: '60-min Architecture Diagnostic',
      duration: '60 min',
      cost: 'Executive Working Session',
      description: 'Technical deep-dive reviewing system architecture diagrams, unit cost economics, and legacy modernization hurdles.',
    },
    {
      id: 'fractional',
      name: 'Fractional CIO Scoping',
      duration: '45 min',
      cost: 'Retainer & Board Discussion',
      description: 'Scoping dedicated fractional leadership (1-2 days/week) or M&A technical due diligence for venture portfolios.',
    },
  ];

  const availableDates = [
    { dateStr: '2026-10-06', day: 'Tue', date: 'Oct 6' },
    { dateStr: '2026-10-07', day: 'Wed', date: 'Oct 7' },
    { dateStr: '2026-10-08', day: 'Thu', date: 'Oct 8' },
    { dateStr: '2026-10-12', day: 'Mon', date: 'Oct 12' },
    { dateStr: '2026-10-13', day: 'Tue', date: 'Oct 13' },
    { dateStr: '2026-10-14', day: 'Wed', date: 'Oct 14' },
  ];

  const timeSlots = [
    '09:00 AM PDT',
    '10:30 AM PDT',
    '01:00 PM PDT',
    '02:30 PM PDT',
    '04:00 PM PDT',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `EV-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsBooked(true);
  };

  const handleDownloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Elena Vance Advisory//Executive Session//EN
BEGIN:VEVENT
SUMMARY:Elena Vance // Executive Advisory Call
DESCRIPTION:Strategic IT architecture & FinOps advisory session with Elena Vance.\\nRef: ${bookingRef}
DTSTART:20261006T170000Z
DTEND:20261006T173000Z
LOCATION:Google Meet (Link sent via email)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `advisory-session-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isBooked) {
    return (
      <div className="flex flex-col w-full space-y-6 pb-12">
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e4dec8] shadow-xs text-center space-y-4">
          <div className="w-14 h-14 bg-[#d9ef00] text-black rounded-full flex items-center justify-center mx-auto shadow-sm">
            <span className="material-symbols-outlined text-[32px]">check_circle</span>
          </div>

          <div>
            <span className="font-headline text-xs font-bold text-[#5a6400] uppercase tracking-wider block">
              RESERVATION CONFIRMED
            </span>
            <h1 className="font-headline text-2xl sm:text-3xl font-bold text-black mt-1">
              Advisory Session Scheduled
            </h1>
            <p className="font-body text-xs sm:text-sm text-[#47464b] mt-1 max-w-md mx-auto">
              A calendar invitation with private Google Meet details and the strategic briefing questionnaire has been sent to{' '}
              <strong className="text-black">{email || 'your email'}</strong>.
            </p>
          </div>

          {/* Booking Summary Card */}
          <div className="p-4 bg-[#fdf9f2] rounded-lg border border-[#e4dec8] max-w-md mx-auto text-left space-y-2.5">
            <div className="flex items-center justify-between text-xs font-headline border-b border-[#e4dec8] pb-2">
              <span className="text-[#77767b]">Booking Reference:</span>
              <span className="font-mono font-bold text-black">{bookingRef}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-headline">
              <span className="text-[#77767b]">Session:</span>
              <span className="font-bold text-black">
                {sessionTypes.find((s) => s.id === sessionType)?.name}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-headline">
              <span className="text-[#77767b]">Scheduled Time:</span>
              <span className="font-bold text-black">
                {availableDates.find((d) => d.dateStr === selectedDate)?.date} @ {selectedTime}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs font-headline">
              <span className="text-[#77767b]">Organization:</span>
              <span className="font-bold text-black">{company || 'Executive'}</span>
            </div>
            <div className="flex items-center justify-between text-xs font-headline">
              <span className="text-[#77767b]">Advisory Focus:</span>
              <span className="font-bold text-[#5a6400]">{primaryFocus}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
            <button
              onClick={handleDownloadIcs}
              className="px-5 py-2.5 bg-black hover:bg-[#27272a] text-[#d9ef00] font-headline text-xs font-bold uppercase rounded-lg flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">event</span>
              <span>Add to Calendar (.ics)</span>
            </button>
            <button
              onClick={() => {
                setIsBooked(false);
                onTabChange('overview');
              }}
              className="px-5 py-2.5 bg-[#f1ede6] hover:bg-[#ece8e1] text-black font-headline text-xs font-semibold rounded-lg"
            >
              Return to Overview
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full space-y-7 pb-12">
      {/* Header */}
      <section className="space-y-2">
        <div className="inline-flex items-center gap-2 bg-[#f1ede6] px-3 py-1 rounded-full text-xs font-headline font-semibold text-[#47464b] border border-[#e4dec8]">
          <span className="material-symbols-outlined text-[16px] text-black">calendar_month</span>
          <span>EXECUTIVE ENGAGEMENT // DIRECT ACCESS</span>
        </div>
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">
          Schedule an Advisory Session
        </h1>
        <p className="font-body text-sm sm:text-base text-[#47464b] leading-relaxed max-w-2xl">
          Reserve private advisory time with Elena Vance. All discussions are held under strict confidentiality.
        </p>
      </section>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Session Format */}
        <div className="space-y-2">
          <label className="font-headline text-xs uppercase font-bold text-[#77767b] tracking-wider block">
            Step 1: Select Advisory Format
          </label>
          <div className="grid grid-cols-1 gap-2.5">
            {sessionTypes.map((type) => {
              const isSelected = sessionType === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => setSessionType(type.id as any)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-black shadow-sm ring-2 ring-black'
                      : 'bg-white border-[#e4dec8] hover:bg-[#fdf9f2]'
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          isSelected ? 'border-black bg-black' : 'border-[#77767b]'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#d9ef00]" />}
                      </span>
                      <h3 className="font-headline text-sm sm:text-base font-bold text-black">
                        {type.name}
                      </h3>
                    </div>
                    <span className="text-xs font-headline font-semibold text-[#5a6400] bg-[#f1ede6] px-2 py-0.5 rounded">
                      {type.cost}
                    </span>
                  </div>
                  <p className="font-body text-xs text-[#47464b] mt-2 pl-6">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Date & Time Slot Picker */}
        <div className="bg-white p-5 rounded-xl border border-[#e4dec8] shadow-xs space-y-4">
          <label className="font-headline text-xs uppercase font-bold text-[#77767b] tracking-wider block">
            Step 2: Choose Date &amp; Time (Pacific Time)
          </label>

          {/* Date row */}
          <div>
            <span className="text-xs font-headline font-semibold text-[#47464b] block mb-2">
              Available Dates:
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {availableDates.map((item) => {
                const isSelected = selectedDate === item.dateStr;
                return (
                  <button
                    key={item.dateStr}
                    type="button"
                    onClick={() => setSelectedDate(item.dateStr)}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      isSelected
                        ? 'bg-black text-white border-black font-bold ring-1 ring-[#d9ef00]'
                        : 'bg-[#fdf9f2] text-[#1c1c18] border-[#e4dec8] hover:bg-[#f1ede6]'
                    }`}
                  >
                    <div className="text-[10px] font-headline uppercase">{item.day}</div>
                    <div className="text-xs font-headline font-bold mt-0.5">{item.date}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time slot row */}
          <div>
            <span className="text-xs font-headline font-semibold text-[#47464b] block mb-2">
              Available Executive Slots:
            </span>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`px-3 py-1.5 rounded-md text-xs font-headline font-semibold border transition-all ${
                      isSelected
                        ? 'bg-[#d9ef00] text-black border-black font-bold shadow-xs'
                        : 'bg-[#fdf9f2] text-[#47464b] border-[#e4dec8] hover:text-black hover:bg-[#f1ede6]'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step 3: Executive Contact & Context */}
        <div className="bg-white p-5 rounded-xl border border-[#e4dec8] shadow-xs space-y-4">
          <label className="font-headline text-xs uppercase font-bold text-[#77767b] tracking-wider block">
            Step 3: Executive Context &amp; Details
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-headline font-bold text-[#1c1c18] block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3 py-2 bg-[#fdf9f2] text-xs font-body text-black rounded-lg border border-[#e4dec8] focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-xs font-headline font-bold text-[#1c1c18] block mb-1">
                Executive Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="sjenkins@enterprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-[#fdf9f2] text-xs font-body text-black rounded-lg border border-[#e4dec8] focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-xs font-headline font-bold text-[#1c1c18] block mb-1">
                Enterprise / Firm Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Global Logistics"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2 bg-[#fdf9f2] text-xs font-body text-black rounded-lg border border-[#e4dec8] focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-xs font-headline font-bold text-[#1c1c18] block mb-1">
                Your Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 bg-[#fdf9f2] text-xs font-body text-black rounded-lg border border-[#e4dec8] focus:outline-none focus:border-black"
              >
                <option>Chief Technology Officer (CTO)</option>
                <option>Chief Information Officer (CIO)</option>
                <option>Chief Executive Officer (CEO)</option>
                <option>VP of Infrastructure / Engineering</option>
                <option>Venture Partner / Board Member</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-headline font-bold text-[#1c1c18] block mb-1">
              Primary Advisory Focus
            </label>
            <select
              value={primaryFocus}
              onChange={(e) => setPrimaryFocus(e.target.value)}
              className="w-full px-3 py-2 bg-[#fdf9f2] text-xs font-body text-black rounded-lg border border-[#e4dec8] focus:outline-none focus:border-black"
            >
              <option>Cloud Migration &amp; FinOps Run-Rate Optimization</option>
              <option>Legacy Monolith Decoupling &amp; Event-Driven Mesh</option>
              <option>Zero-Trust Security &amp; Continuous SOC2 Compliance</option>
              <option>Enterprise AI &amp; Private LLM Architecture</option>
              <option>M&amp;A Technical Due Diligence &amp; Board Advisory</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-headline font-bold text-[#1c1c18] block mb-1">
              Key Bottlenecks or Objective (Confidential)
            </label>
            <textarea
              rows={3}
              placeholder="e.g., We are scaling from $150k to $400k/mo AWS spend with 48hr release cycles. Need strategic assessment of our multi-region Kubernetes platform."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-[#fdf9f2] text-xs font-body text-black rounded-lg border border-[#e4dec8] focus:outline-none focus:border-black resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full min-h-[50px] bg-[#d9ef00] hover:bg-[#bed100] text-black font-headline text-sm font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          <span>Confirm &amp; Reserve Advisory Call</span>
        </button>

        <p className="text-center font-headline text-[11px] text-[#77767b]">
          🔒 Strict enterprise NDA &amp; confidentiality automatically applies to all discussions.
        </p>
      </form>
    </div>
  );
};
