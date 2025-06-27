export const companyCardBox = {
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '12px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
};

export const logoAvatar = {
  width: 80,
  height: 80,
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  marginRight: '16px',
};

export const textSection = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

export const companyName = {
  fontWeight: 'bold',
  fontSize: '1.3rem',
  color: '#1e293b',
};

export const detailText = {
  fontSize: '0.95rem',
  color: '#475569',
};
