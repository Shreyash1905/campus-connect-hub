export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  department: string;
  type: 'workshop' | 'seminar' | 'cultural' | 'sports' | 'technical' | 'other';
  image: string;
  capacity: number;
  registered: number;
  organizer: string;
  isFeatured?: boolean;
}

export interface Registration {
  id: string;
  eventId: string;
  userId: string;
  registeredAt: string;
  qrCode: string;
  attended: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'faculty';
  department?: string;
  avatar?: string;
}
