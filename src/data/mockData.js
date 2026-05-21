// Mock Data for the Corporate Intranet

export const currentUser = {
  id: 'u1',
  name: 'Alex Rivera',
  role: 'Product Designer',
  departmentId: 'd1',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  points: 1450,
  bio: 'Designing user-centric experiences. Passionate about design systems and accessibility.',
};

export const departments = [
  { id: 'd1', name: 'Product & Design', description: 'Crafting the future of our products.' },
  { id: 'd2', name: 'Engineering', description: 'Building robust, scalable solutions.' },
  { id: 'd3', name: 'Sales & Marketing', description: 'Driving growth and customer engagement.' },
  { id: 'd4', name: 'Human Resources', description: 'Supporting our people and culture.' },
];

export const users = [
  currentUser,
  { id: 'u2', name: 'Sarah Chen', role: 'Frontend Engineer', departmentId: 'd2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', points: 1200 },
  { id: 'u3', name: 'Marcus Johnson', role: 'Sales Lead', departmentId: 'd3', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', points: 980 },
  { id: 'u4', name: 'Elena Rodriguez', role: 'HR Manager', departmentId: 'd4', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena', points: 2100 },
  { id: 'u5', name: 'David Kim', role: 'Backend Lead', departmentId: 'd2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', points: 1850 },
];

export const announcements = [
  {
    id: 'a1',
    title: 'Q3 Management Vision & Company Goals',
    content: 'As we enter Q3, our focus shifts entirely to scaling our platform while maintaining the stellar performance our clients expect. We aim to increase active user engagement by 25%.',
    authorId: 'u4', // Assume HR/Management posts this
    departmentId: null, // Global
    type: 'Vision',
    timestamp: '2023-10-01T09:00:00Z',
    likes: 42,
    comments: 5,
  },
  {
    id: 'a2',
    title: 'New Design System Launch!',
    content: 'The Product team has successfully rolled out v2.0 of our internal design system. Check out the new documentation in the Knowledge Hub.',
    authorId: 'u1',
    departmentId: 'd1', // Can be filtered by department, or visible to all as a 'Win'
    type: 'Project Win',
    timestamp: '2023-10-02T14:30:00Z',
    likes: 28,
    comments: 12,
  },
  {
    id: 'a3',
    title: 'Welcome to the Team, Sarah!',
    content: 'Please give a warm welcome to Sarah Chen, joining our Engineering team as a Frontend Engineer.',
    authorId: 'u4',
    departmentId: null,
    type: 'Announcement',
    timestamp: '2023-10-05T10:00:00Z',
    likes: 56,
    comments: 18,
  }
];

export const recognitions = [
  {
    id: 'r1',
    giverId: 'u5',
    receiverId: 'u2',
    message: 'Huge thanks to Sarah for jumping in and fixing that critical UI bug right before the demo!',
    timestamp: '2023-10-06T16:45:00Z',
  },
  {
    id: 'r2',
    giverId: 'u1',
    receiverId: 'u3',
    message: 'Marcus completely nailed the client presentation today. Great job communicating the value of our new feature set.',
    timestamp: '2023-10-07T11:20:00Z',
  }
];

export const upcomingEvents = [
  {
    id: 'e1',
    title: 'Monthly Townhall',
    date: '2023-10-15T15:00:00Z',
    type: 'Company-wide',
    attendees: 145,
  },
  {
    id: 'e2',
    title: 'Engineering Sync',
    date: '2023-10-10T10:00:00Z',
    type: 'Department',
    attendees: 32,
  },
  {
    id: 'e3',
    title: 'Diwali Office Celebration',
    date: '2023-10-24T17:00:00Z',
    type: 'Culture',
    attendees: 89,
  }
];

export const notifications = [
  { id: 'n1', text: 'Sarah Chen recognized you!', time: '10m ago', unread: true },
  { id: 'n2', text: 'New company vision posted by Elena Rodriguez.', time: '2h ago', unread: true },
  { id: 'n3', text: 'Reminder: Monthly Townhall tomorrow at 3 PM.', time: '1d ago', unread: false },
];
