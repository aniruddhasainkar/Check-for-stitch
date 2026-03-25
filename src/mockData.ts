import { Project, Task, User, Activity } from './types';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Alex Chen',
    email: 'alex.chen@teamtask.com',
    role: 'Product Architect',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAizdO8h5k8IxCsM0v1mjwF2uisw1sf5hpPerpUy-Ash86ywAzvAeB8NAVGzK0sJNUgEoeSvOkY4ntAng0YfV_eUpODaAgWAWzxMoBLIkqcyRGxSPd2unP8_gz7r0Ovu2YKfDRPAEmkJ8seVwBiG-V_LZW7wOjgZD3tRlC7_jdnrONsLuqH_aGldw0Mi8pQU0FICZp7GlwlkWjn1YcwLMKTj32W3xcgH3sBACAX4o43nfwABsBdUyxGVDVwwP3o7XoniBiDv3QHipjZ',
  },
  {
    id: 'u2',
    name: 'Alice Vance',
    email: 'alice.vance@teamtask.com',
    role: 'Lead Designer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6hcLS_e7pxMOZOaOuvTwqt2rhw3I6XUj4BFXBckuTdSeuOUjfg1yI2Hk3ktjpluGXuDSund_LHuUMiuuynYmFDnGNlmjzlxZ_eGqG0UxzzKxel_cVzzUQuRf_MUzBHdUAYCuO2bfkIksN_MnkwRCL3hXAMLQKKSL0sNPiShkGXxKtvHhHvGunmzXBfBQx0NfwYvUXy1xBM0rnKA2WIzfBHXKg24sORvSNupaakgDUOCA3SzzBRK9tE5dGg49P0XnMDMQutx3OySA9',
  },
  {
    id: 'u3',
    name: 'Bob Miller',
    email: 'bob.miller@teamtask.com',
    role: 'Senior Developer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVYgf9-xnx1jZSN98f5C2zoUhsSTuEMPByA2CgF9fm7HIuMUpAZ5irlGPhpBXsmterwkS29gu7nHufX35-rDtlazEAB7v7z_D_98wEUFRbjtKAnWMMhxsvdvQ_za0ajx1qmfnCpBiiHMJc-tbxoIYDh4hBWoof-Rf4q7RKG2n2cKzE52-askXQwkzqxgoDy_XQElSN3Fc9ZgQloz298zw1Am7odfkpfVh6GrEnZzE_sbf1JITVZSrjKF-z1P_86KDqmmRqlxRabkL2',
  },
  {
    id: 'u4',
    name: 'Marcus Chen',
    email: 'marcus.chen@teamtask.com',
    role: 'Lead Structural Engineer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2uZb3sJrPDOShbiHrG1m3Cg-Z-dxZOFA_xWXgPevfMF0MfwDoanwwZEUgZ9fAQJFB2kG0Rg36PN-IdxLh510Dw_MOBQqHFLiBDq947ady9sE9W2tMYaj2eE4PToO4koPplDpcY1ezJDQmv77wj_VzASlMf0KXiQet0hxc5GwSwxV-SHq7n8GFlpjG9nEsa48ccj0XysP1N7aPR6KPjRGtyL340lnz06Fdsn92pNwWx_2ePjNkI9URk6kzRbSkD6Pt-aEj0IUXKH_j',
  },
  {
    id: 'u5',
    name: 'Maya Reed',
    email: 'm.reed@teamtask.com',
    role: 'Member',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8qfvRrsfntRm_CEjm9xD6C3dL639Mw7WN39sHBipBbjLK_UUnzoDNPX8ddMJt8cOWH-_rItBThTnbRk261EvYEww7GBnCLz-AWQ0MIJzlvEZujRdQgfHVtogEACCHvqWaWP7S9uzHCJ8jzbSjOzd2JMaEUzjKdtO39n8LEStXYDOWjdOaFezoPrWulQpBb9FKdF75Jd6BEe-fnydPoW2yUhdHZ5DpyhFQWW-vCnq9ougwTr2CqC7-45rh5qA0Hg8v_zHhUte2YI0k',
  },
  {
    id: 'u6',
    name: 'Liam Foster',
    email: 'liam.f@teamtask.com',
    role: 'Member',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk8-miu02nt6YO4T95aIZjC2GGD5xuo34i-B0A4xYcaAj_ksJh_Dehjk2o2MVjmKED9QwTMxOFM2_V-HlxtkDJbEoVuGJuZ-1wLU6_CMlcSQP8GP7ULN3TZpxoQZtfULSBa4FNGpN5eMihzyPuV9cxQe11O_KhW9f5_s0R0ZHoOEStf8Y8ruUD5NE9TGWTWotRFIOK6emq2fdngFgZdUCezPDHZ47StSnTPo49C9JXToPgvVRUTuK5H8zR7iNcBn_Qjkjbpr_D-0cC',
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Q1 Marketing Campaign',
    description: 'Global rebranding rollout focusing on digital-first touchpoints and architectural precision in UI/UX across all channels.',
    status: 'Active',
    progress: 72,
    members: [MOCK_USERS[0], MOCK_USERS[1], MOCK_USERS[2]],
  },
  {
    id: 'p2',
    name: 'Website Redesign',
    description: 'Structural overhaul of the legacy corporate portal using Next.js and Tailwind CSS.',
    status: 'On Hold',
    progress: 45,
    members: [MOCK_USERS[3], MOCK_USERS[4]],
  },
  {
    id: 'p3',
    name: 'Mobile App Audit',
    description: 'Accessibility and performance benchmarking for the iOS and Android platforms.',
    status: 'Completed',
    progress: 100,
    members: [MOCK_USERS[1]],
  },
  {
    id: 'p4',
    name: 'Internal Dashboard',
    description: 'Building an architectural metrics engine for internal team resource allocation.',
    status: 'Active',
    progress: 12,
    members: [MOCK_USERS[0], MOCK_USERS[2], MOCK_USERS[3]],
  }
];

export const MOCK_TASKS: Task[] = [
  {
    id: 't1',
    projectId: 'p1',
    title: 'Refactor Typography Tokens to use Inter v4 Variable weights',
    priority: 'High',
    status: 'To Do',
    dueDate: 'Oct 24, 2024',
    assignee: MOCK_USERS[3],
  },
  {
    id: 't2',
    projectId: 'p1',
    title: 'Audit accessible color contrast for surface-container tiers',
    priority: 'Medium',
    status: 'To Do',
    dueDate: 'Oct 28, 2024',
    assignee: MOCK_USERS[4],
  },
  {
    id: 't3',
    projectId: 'p1',
    title: 'Finalize Glassmorphism overlay component logic',
    priority: 'High',
    status: 'In Progress',
    dueDate: 'Oct 24, 2024',
    assignee: MOCK_USERS[1],
  },
  {
    id: 't4',
    projectId: 'p1',
    title: 'Documentation for grid-based spacing system',
    priority: 'Low',
    status: 'In Progress',
    dueDate: 'Oct 24, 2024',
    assignee: MOCK_USERS[2],
  },
  {
    id: 't5',
    projectId: 'p1',
    title: 'Review responsive pivot for BottomNavBar on mobile viewports',
    priority: 'High',
    status: 'In Review',
    dueDate: 'Oct 24, 2024',
    assignee: MOCK_USERS[0],
  },
  {
    id: 't6',
    projectId: 'p1',
    title: 'Finalize structural blueprint for main atrium load bearing columns',
    description: 'The current structural model for the central atrium requires a final audit of the load-bearing distribution on the tertiary column rings. Please ensure that seismic vibrations are factored into the concrete tension calculations for the northwest quadrant.\n\nRefer to the DWG files attached in the Projects folder for the latest site survey data.',
    priority: 'High',
    status: 'In Progress',
    dueDate: 'Oct 24, 2024',
    assignee: MOCK_USERS[3],
    subtasks: [
      { id: 's1', title: 'Review initial stress test simulations', completed: true },
      { id: 's2', title: 'Cross-reference with soil stability report', completed: true },
      { id: 's3', title: 'Coordinate with CAD team on column thickness', completed: false },
    ],
    comments: [
      {
        id: 'c1',
        userId: 'u5',
        userName: 'Elena Rodriguez',
        userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf0DN_TtkEKk96zW4uGMpEkoXIbGToRxKAK-xCRtlcioIBdGuq0vSV69axwTR8qU-EEMKg2Bw3SjoVIUKy0K66uAS2A0MK-3u80XzQZCXxK4hG7YoE1UAbydCS8DuaWxaFcCfWitScKiiRa_ODqf1IkRVa9X4a0WNH4T6tC_6pYUw-ZJ7PzwS9GPdxRvJx2hOVu2s82Q3CQurnKwWWpZdIIyFasD6_Zw2X_VKZKmNRqWdSrIx8di-G-vZAM-qSW21sRo3WZ6VvJajd',
        text: 'Just uploaded the revised soil sample analysis. The density in the NW quadrant is 15% higher than previously estimated. We might need deeper foundation piles.',
        timestamp: '2 hours ago',
      },
      {
        id: 'c2',
        userId: 'u4',
        userName: 'Marcus Chen',
        userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2uZb3sJrPDOShbiHrG1m3Cg-Z-dxZOFA_xWXgPevfMF0MfwDoanwwZEUgZ9fAQJFB2kG0Rg36PN-IdxLh510Dw_MOBQqHFLiBDq947ady9sE9W2tMYaj2eE4PToO4koPplDpcY1ezJDQmv77wj_VzASlMf0KXiQet0hxc5GwSwxV-SHq7n8GFlpjG9nEsa48ccj0XysP1N7aPR6KPjRGtyL340lnz06Fdsn92pNwWx_2ePjNkI9URk6kzRbSkD6Pt-aEj0IUXKH_j',
        text: 'Acknowledged, Elena. I\'ll adjust the pile depth parameters in the BIM model by end of day.',
        timestamp: '45 minutes ago',
      }
    ],
    tags: ['Blueprints', 'Infrastructure', 'Audit'],
    attachments: [
      { id: 'a1', name: 'Structural_Model_V4.dwg', size: '4.2 MB', type: 'dwg', url: '#' },
      { id: 'a2', name: 'Site_Survey_NW.pdf', size: '1.8 MB', type: 'pdf', url: '#' }
    ]
  }
];

export const MOCK_ACTIVITIES: Activity[] = [
  {
    id: 'act1',
    userId: 'u2',
    userName: 'Alice Vance',
    userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ_6BZYoTb7NbUmJvE_EWN43LLXL0x9xD8Uzs9Yr4DUQ9QUo-dCHxZt7tw5l-kEmfTKYZo1a3rm-hhw_Fyr0nwyQz29HcCM-expCTF5iAuQrifwyB8TCQs1jGxQRCU-fZCLplABkZG6-oKSwK2g6iU5hH8sCROqTCXdXGlnRc5Qi8n1cIGtNa_anZUoA_533SLK7oVb5jxs6kygdi11_Wy2OkFjMqBlIzC9r6rSOFs3u8yQne8iCvCyRes6L26wEi7L_Mdo67NwHhg',
    action: 'updated the status of',
    target: 'Design System Audit',
    targetType: 'Task',
    timestamp: '24 minutes ago',
    badge: 'Review',
  },
  {
    id: 'act2',
    userId: 'u3',
    userName: 'Bob Miller',
    userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGucWwaL7rSdy0y2fF1v7vWKcNHDOyl8iqRUmxBj5AVYfAd171GlY8UOZtGbLF2jXWa0eI50Zsa9229GYtVyIu-sI1CnYewvPuiymJwI5Q-xJIubmZQwrJEzQwwN0IcZt5d_MG8gWP4AJ5NaZKvIgs58gnqO0DyB6AuQ6oW3h4NgEu-4tZiPjZT9nNwLjRbOwKG_eowqUS5ZG9DG3whEXcPfHulz4kaCIxz60Ffsxp3TVJrzNBy6dUDEvz7GWv_jjbh_iiOAhGho9_',
    action: 'assigned',
    target: 'API Documentation',
    targetType: 'Task',
    timestamp: '1 hour ago',
    details: '"Hey Alex, could you take a look at the endpoints we discussed?"',
  },
  {
    id: 'act3',
    userId: 'system',
    userName: 'System',
    userAvatar: '',
    action: 'archived the project',
    target: 'Q3 Marketing Blitz',
    targetType: 'Project',
    timestamp: '3 hours ago',
  }
];
