
import React from 'react';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
  Box,
  Typography,
  Divider,
  IconButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ReusableTable = ({ columns, rows, actions, minWidth = 600 }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    // Mobile View - Card/List style
    return (
      <Box>
        {rows.map((row, rowIndex) => (
          <Paper key={row.id || rowIndex} elevation={2} sx={{ p: 2, mb: 2 }}>
            {columns.map((col, colIndex) => (
              <Box key={colIndex} sx={{ mb: 1 }}>
                <Typography variant="subtitle2" color="textSecondary">
                  {col.label}
                </Typography>
                <Typography variant="body2">
                  {typeof col.render === 'function'
                    ? col.render(row)
                    : row[col.key]}
                </Typography>
              </Box>
            ))}
            {actions && (
              <>
                <Divider sx={{ my: 1 }} />
                <Box>{actions(row)}</Box>
              </>
            )}
          </Paper>
        ))}
      </Box>
    );
  }

  // Desktop View - Table layout
  return (
    <Paper elevation={3} sx={{ minWidth, width: '100%', mb: 2 }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index} sx={col.sx || {}}>
                {col.label}
              </TableCell>
            ))}
            {actions && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={row.id || rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>
                  {typeof col.render === 'function'
                    ? col.render(row)
                    : row[col.key]}
                </TableCell>
              ))}
              {actions && <TableCell>{actions(row)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ReusableTable;

