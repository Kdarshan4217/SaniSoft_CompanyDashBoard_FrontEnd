export const dashboardCard = {
  p: 2,
  borderRadius: 3,
  background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
  borderLeft: '6px solid #1976d2',
  boxShadow: 3,
  minHeight: 140,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: 6,
    transform: 'translateY(-4px)',
  },
};

export const cardTitle = {
  fontWeight: 'bold',
  mb: 1,
};

export const cardDetail = {
  color: 'gray',
  fontSize: 14,
};

export const cardMetric = {
  mt: 1,
  fontWeight: 500,
};