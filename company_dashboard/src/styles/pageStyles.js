
export const pageWrapper = {
  px: { xs: 1.5, sm: 4 },              // slightly reduced padding on xs
  py: { xs: 2, sm: 3 },
  backgroundColor: "#fff7e6",          // 🔶 consistent light background
  minHeight: "100vh",
  width: "100%",
  overflowX: "hidden",                 // ✅ prevent horizontal scroll on mobile
  boxSizing: "border-box",
};

export const contentContainer = {
  width: "100%",
  maxWidth: "1200px",
  mx: "auto",
  px: { xs: 1.5, sm: 2 },              // 🧩 horizontal padding for content inside wrapper
  boxSizing: "border-box",
};

export const paperBox = {
  p: { xs: 1.5, sm: 3 },               // responsive padding
  borderRadius: 2,
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "#ffffff",         // ✅ white card
  overflowX: "auto",                  // ✅ for tables inside paper on small devices
};

export const headingMotion = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const tableHeaderCell = {
  fontWeight: "bold",
  whiteSpace: "nowrap",               // ✅ keep headers in a line
};
