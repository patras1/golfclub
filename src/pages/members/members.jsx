import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box } from '@mui/material';

// Sample data
const rows = [
  { id: 1, name: 'Dan Patra', status: 'Pending' },
  { id: 2, name: 'Guy Patitzer', status: 'Approved' },
  { id: 3, name: 'Kobi Maimon', status: 'Rejected' },
  // Add more items as needed
];

// Table header
function ItemTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    </TableHead>
  );
}

// Main component
export default function Members() {
  return (
    <Box>
      <TableContainer>
        <Table>
          <ItemTableHead />
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}