interface Props {
	name: string;
}

export default function Icon({ name }: Props) {
	switch (name) {
		case 'name':
			return '<svg viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>';
		case 'email':
			return '<svg viewBox="0 0 24 26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z" /><path d="m20 6-8 7L4 6" /></svg>';
		case 'phone':
			return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">2  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.6a2 2 0 0 1-.45 2.11L9.1 10.57a16 16 0 0 0 4.33 4.33l1.14-1.14a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0 1 22 16.92z"/>3</svg>';
		case 'address':
			return '<svg viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>';
		case 'driverLicense':
			return '<svg viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10v18H7z" /><path d="M9 7h6" /><path d="M9 11h6" /></svg>';
		case 'birthDate':
			return '<svg viewBox="0 0 24 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M4 10h16" /></svg>';
		default:
			return '';
	}
}